<?php
/**
 * Product Category Schema.
 *
 * @package WooCommerce/Blocks
 */

namespace Automattic\WooCommerce\Blocks\StoreApi\Schemas;

defined( 'ABSPATH' ) || exit;

/**
 * ProductCategorySchema class.
 */
class ProductCategorySchema extends TermSchema {
	/**
	 * The schema item name.
	 *
	 * @var string
	 */
	protected $title = 'product-category';

	/**
	 * Image attachment schema instance.
	 *
	 * @var ImageAttachmentSchema
	 */
	protected $image_attachment_schema;

	/**
	 * Constructor.
	 *
	 * @param ImageAttachmentSchema $image_attachment_schema Image attachment schema instance.
	 */
	public function __construct( ImageAttachmentSchema $image_attachment_schema ) {
		$this->image_attachment_schema = $image_attachment_schema;
	}

	/**
	 * Term properties.
	 *
	 * @return array
	 */
	public function get_properties() {
		$schema                 = parent::get_properties();
		$schema['image']        = [
			'description' => __( 'Category image.', 'woo-gutenberg-products-block' ),
			'type'        => 'object',
			'context'     => [ 'view', 'edit', 'embed' ],
			'readonly'    => true,
			'properties'  => $this->image_attachment_schema->get_properties(),
		];
		$schema['review_count'] = [
			'description' => __( 'Number of reviews for products in this category.', 'woo-gutenberg-products-block' ),
			'type'        => 'integer',
			'context'     => [ 'view', 'edit' ],
			'readonly'    => true,
		];
		$schema['permalink']    = [
			'description' => __( 'Category URL.', 'woo-gutenberg-products-block' ),
			'type'        => 'string',
			'format'      => 'uri',
			'context'     => [ 'view', 'edit', 'embed' ],
			'readonly'    => true,
		];
		return $schema;
	}

	/**
	 * Convert a term object into an object suitable for the response.
	 *
	 * @param \WP_Term         $term Term object.
	 * @param \WP_REST_Request $request Request object.
	 * @return array
	 */
	public function get_item_response( $term, \WP_REST_Request $request = null ) {
		$response = parent::get_item_response( $term, $request );
		$count    = get_term_meta( $term->term_id, 'product_count_product_cat', true );

		if ( $count ) {
			$response['count'] = (int) $count;
		}

		$response['image']        = $this->image_attachment_schema->get_item_response( get_term_meta( $term->term_id, 'thumbnail_id', true ), $request );
		$response['review_count'] = $this->get_category_review_count( $term );
		$response['permalink']    = get_term_link( $term->term_id, 'product_cat' );

		return $response;
	}

	/**
	 * Get total number of reviews for products in a category.
	 *
	 * @param \WP_Term $term Term object.
	 * @return int
	 */
	protected function get_category_review_count( $term ) {
		global $wpdb;

		$products_of_category_sql = $wpdb->prepare(
			"SELECT SUM( DISTINCT comment_count) as review_count
			FROM {$wpdb->posts} AS posts
			INNER JOIN {$wpdb->term_relationships} AS term_relationships ON posts.ID = term_relationships.object_id
			WHERE term_relationships.term_taxonomy_id=%d",
			$term->term_id
		);

		$review_count = $wpdb->get_var( $products_of_category_sql ); // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared

		return (int) $review_count;
	}
}
