/**
 * External dependencies
 */
import { sprintf, __ } from '@wordpress/i18n';
import { Component, createRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import './style.scss';

const get = ( obj, path, defaultValue ) => {
	const result = String.prototype.split.call( path, /[,[\].]+?/ )
		.filter( Boolean )
		.reduce( ( res, key ) => ( res !== null && res !== undefined ) ? res[ key ] : res, obj );
	return ( result === undefined || result === obj ) ? defaultValue : result;
};

class PriceSlider extends Component {
	constructor( props ) {
		const { min, max } = props;
		super( ...arguments );
		this.state = {
			currentMin: min,
			currentMax: max,
			inputMin: this.formatCurrencyForInput( min ),
			inputMax: this.formatCurrencyForInput( max ),
		};
		this.minInput = createRef();
		this.maxInput = createRef();
		this.minRange = createRef();
		this.maxRange = createRef();
		this.onDrag = this.onDrag.bind( this );
		this.onInputChange = this.onInputChange.bind( this );
		this.onInputBlur = this.onInputBlur.bind( this );
		this.findClosestRange = this.findClosestRange.bind( this );
		this.validateValues = this.validateValues.bind( this );
		this.getProgressStyle = this.getProgressStyle.bind( this );
		this.formatCurrencyForInput = this.formatCurrencyForInput.bind( this );
	}

	componentDidUpdate( prevProps, prevState ) {
		const { currentMin, currentMax } = this.state;

		if ( prevState.currentMin !== currentMin || prevState.currentMax !== currentMax ) {
			const { onChange } = this.props;

			onChange( {
				min: currentMin,
				max: currentMax,
			} );
		}
	}

	formatCurrencyForInput( value ) {
		if ( '' === value ) {
			return '';
		}
		const formattedNumber = parseInt( value, 10 );
		const currencySymbol = get( wcSettings, [ 'currency', 'symbol' ], '$' );
		const priceFormat = get( wcSettings, [ 'currency', 'price_format' ], '%1$s%2$s' );

		// This uses a textarea to magically decode HTML currency symbols.
		const formattedValue = sprintf( priceFormat, currencySymbol, formattedNumber );
		const txt = document.createElement( 'textarea' );
		txt.innerHTML = formattedValue;
		return txt.value;
	}

	validateValues( values, isMin ) {
		const { min, max, step } = this.props;

		let minValue = parseInt( values[ 0 ], 10 ) || min;
		let maxValue = parseInt( values[ 1 ], 10 ) || step;

		if ( min > minValue ) {
			minValue = min;
		}

		if ( max <= minValue ) {
			minValue = max - step;
		}

		if ( min >= maxValue ) {
			maxValue = min + step;
		}

		if ( max < maxValue ) {
			maxValue = max;
		}

		if ( ! isMin && minValue >= maxValue ) {
			minValue = maxValue - step;
		}

		if ( isMin && maxValue <= minValue ) {
			maxValue = minValue + step;
		}

		return [ minValue, maxValue ];
	}

	onInputChange( event ) {
		const newValue = event.target.value.replace( /[^0-9.-]+/g, '' );
		const isMin = event.target.classList.contains( 'wc-block-price-filter__amount--min' );
		const editing = isMin ? 'inputMin' : 'inputMax';

		this.setState( {
			[ editing ]: newValue,
		} );
	}

	onInputBlur( event ) {
		const isMin = event.target.classList.contains( 'wc-block-price-filter__amount--min' );
		const values = this.validateValues(
			[
				this.minInput.current.value.replace( /[^0-9.-]+/g, '' ),
				this.maxInput.current.value.replace( /[^0-9.-]+/g, '' ),
			],
			isMin
		);

		this.setState( {
			currentMin: values[ 0 ],
			currentMax: values[ 1 ],
			inputMin: this.formatCurrencyForInput( values[ 0 ] ),
			inputMax: this.formatCurrencyForInput( values[ 1 ] ),
		} );
	}

	onDrag( event ) {
		const isMin = event.target.classList.contains( 'wc-block-price-filter__range-input--min' );
		const values = this.validateValues(
			[
				this.minRange.current.value,
				this.maxRange.current.value,
			],
			isMin
		);

		this.setState( {
			currentMin: values[ 0 ],
			currentMax: values[ 1 ],
			inputMin: this.formatCurrencyForInput( values[ 0 ] ),
			inputMax: this.formatCurrencyForInput( values[ 1 ] ),
		} );
	}

	/**
	 * Works around an IE issue where only one range selector is visible by changing the display order
	 * based on the mouse position.
	 *
	 * @param {obj} event event data.
	 */
	findClosestRange( event ) {
		const { max } = this.props;
		const bounds = event.target.getBoundingClientRect();
		const x = event.clientX - bounds.left;
		const minWidth = this.minRange.current.offsetWidth;
		const minValue = this.minRange.current.value;
		const maxWidth = this.maxRange.current.offsetWidth;
		const maxValue = this.maxRange.current.value;

		const minX = minWidth * ( minValue / max );
		const maxX = maxWidth * ( maxValue / max );

		const minXDiff = Math.abs( x - minX );
		const maxXDiff = Math.abs( x - maxX );

		/**
		 * The default z-index in the stylesheet as 20. 20 vs 21 is just for determining which range
		 * slider should be at the front and has no meaning beyond this.
		 */
		if ( minXDiff > maxXDiff ) {
			this.minRange.current.style.zIndex = 20;
			this.maxRange.current.style.zIndex = 21;
		} else {
			this.minRange.current.style.zIndex = 21;
			this.maxRange.current.style.zIndex = 20;
		}
	}

	getProgressStyle() {
		const { min, max } = this.props;
		const { currentMin, currentMax } = this.state;

		const low = Math.round( 100 * ( ( currentMin - min ) / ( max - min ) ) ) - 0.5;
		const high = Math.round( 100 * ( ( currentMax - min ) / ( max - min ) ) ) + 0.5;

		return {
			'--low': low + '%',
			'--high': high + '%',
		};
	}

	render() {
		const { min, max, step } = this.props;
		const { inputMin, inputMax, currentMin, currentMax } = this.state;
		return (
			<div className="wc-block-price-filter">
				<input
					type="text"
					className="wc-block-price-filter__amount wc-block-price-filter__amount--min"
					aria-label={ __( 'Filter products by minimum price', 'woo-gutenberg-products-block' ) }
					size="5"
					ref={ this.minInput }
					value={ inputMin }
					onChange={ this.onInputChange }
					onBlur={ this.onInputBlur }
				/>
				<input
					type="text"
					className="wc-block-price-filter__amount wc-block-price-filter__amount--max"
					aria-label={ __( 'Filter products by maximum price', 'woo-gutenberg-products-block' ) }
					size="5"
					ref={ this.maxInput }
					value={ inputMax }
					onChange={ this.onInputChange }
					onBlur={ this.onInputBlur }
				/>
				<div
					className="wc-block-price-filter__range-input-wrapper"
					onMouseMove={ this.findClosestRange }
					onFocus={ this.findClosestRange }
				>
					<div className="wc-block-price-filter__range-input-progress" style={ this.getProgressStyle() } />
					<input
						type="range"
						className="wc-block-price-filter__range-input wc-block-price-filter__range-input--min"
						aria-label={ __( 'Filter products by minimum price', 'woo-gutenberg-products-block' ) }
						ref={ this.minRange }
						onChange={ this.onDrag }
						value={ currentMin ? currentMin : 0 }
						step={ step }
						min={ min }
						max={ max }
					/>
					<input
						type="range"
						className="wc-block-price-filter__range-input wc-block-price-filter__range-input--max"
						aria-label={ __( 'Filter products by maximum price', 'woo-gutenberg-products-block' ) }
						ref={ this.maxRange }
						onChange={ this.onDrag }
						value={ currentMax ? currentMax : max }
						step={ step }
						min={ min }
						max={ max }
					/>
				</div>
			</div>
		);
	}
}

PriceSlider.propTypes = {
	/**
	 * Callback fired when prices changes.
	 */
	onChange: PropTypes.func.isRequired,
	/**
	 * Minimum allowed price.
	 */
	min: PropTypes.number,
	/**
	 * Maximum allowed price.
	 */
	max: PropTypes.number.isRequired,
	/**
	 * Step for slider inputs.
	 */
	step: PropTypes.number,
};

PriceSlider.defaultProps = {
	min: 0,
	step: 1,
};

export default PriceSlider;
