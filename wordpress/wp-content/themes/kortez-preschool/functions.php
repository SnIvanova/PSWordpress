<?php
/**
 * Kortez Preschool functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Kortez Preschool
 */

if ( ! defined( 'KORTEZ_PRESCHOOL_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( 'KORTEZ_PRESCHOOL_VERSION', wp_get_theme()->get( 'Version' ) );
}

define( 'KORTEZ_PRESCHOOL_URL', trailingslashit( get_template_directory_uri() ) );

if ( ! function_exists( 'kortez_preschool_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function kortez_preschool_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Kortez Preschool, use a find and replace
		 * to change 'kortez-preschool' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'kortez-preschool', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		add_theme_support( 'align-wide' );

		// Add support for block styles.
		add_theme_support( 'wp-block-styles' );
	}
endif;
add_action( 'after_setup_theme', 'kortez_preschool_setup' );

/**
 * Enqueue scripts and styles.
 */
function kortez_preschool_scripts() {
	$theme_version = wp_get_theme()->get( 'Version' );

	// Register theme stylesheet.
	wp_enqueue_style( 'kortez-preschool-styles', get_theme_file_uri( '/style.css' ), array(), $theme_version );
}
add_action( 'wp_enqueue_scripts', 'kortez_preschool_scripts' );

/**
 * Info
 */
require get_theme_file_path( '/inc/admin/info.php' );

