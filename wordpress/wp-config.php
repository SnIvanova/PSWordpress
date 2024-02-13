<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wpprogset' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '_,S2+,7Ve162ZI!,{Mij-]e7N7I$($ND`D$O6(RB^7S6[@GU3Qi<L6FE_|BOx(M)' );
define( 'SECURE_AUTH_KEY',  'QoyL&.?#xtPvYlP)rUf<sTq-Zr?i9wu;$5yW9dZ^c#sWH!^V%{* i/Z@Z` B27wa' );
define( 'LOGGED_IN_KEY',    '}Xwh(7(_5QRV$WGwL!T6u-I0A w/n>E>;e]2vLBjJLrgoB#CSA*M-(j{|yhKEQ9$' );
define( 'NONCE_KEY',        'tMGt2ruBjm,9(Wq,R-$uv4kO+n_pvffP@~/!s0>SY]6s)#:Y)5J<USEGNH1(k8VG' );
define( 'AUTH_SALT',        'b{ajeg` !Z.#F]d ==EO_G_Q]p/xzKn55%2/ Npg)C2|ZXlNj9T@(h_Br?W ]=W,' );
define( 'SECURE_AUTH_SALT', 'Ai7rM+]VKB`^AwUeN)^WqXFK.Rx?Uho}fS)`$m2EW;h*MG7;Jdwh;Waj;0Lsq1]W' );
define( 'LOGGED_IN_SALT',   'rF0OYj*x%A*hU#;5t%U;.]&5XW}`v&qTG$.fo$K8hS2o%-Xe#o/|7@U^9uVjV|v*' );
define( 'NONCE_SALT',       'BuK}|7|/NjWsc2rS5kGR9vSKJ;3C/^pK:EPHK-j&^y&~d8@yM>u~<r4*Ppm4Gf?f' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
