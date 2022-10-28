<?php
/**
 * Plugin Name:       Bouquet Of Roses
 * Description:       A grouping of blocks that are easy to manage
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Drew T. Johnson
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       bouquet-of-roses
 *
 * @package           bouquet-of-roses
 */

define( 'WHITE_ROSES_PLUGINS_PATH', plugin_dir_path( __FILE__) );

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

add_action( 'init', 'bouquet_init_blocks' );
function bouquet_init_blocks() {
	register_block_type( WHITE_ROSES_PLUGINS_PATH . 'build/blocks/split-feature' );
	register_block_type( WHITE_ROSES_PLUGINS_PATH . 'build/blocks/split-text' );
}