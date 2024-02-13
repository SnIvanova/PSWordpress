<?php
/**
 * Title: Hero Banner
 * Slug: kortez-preschool/hero-banner
 * Categories: banner
 */
$kortez_preschool_img = array(
    KORTEZ_PRESCHOOL_URL . 'assets/images/hero-banner-img1.png',
    KORTEZ_PRESCHOOL_URL . 'assets/images/hero-banner-img2.png',
    KORTEZ_PRESCHOOL_URL . 'assets/images/hero-banner-img3.png',
    KORTEZ_PRESCHOOL_URL . 'assets/images/hero-banner-img4.png',
);
?>

<!-- wp:cover {"url":"<?php echo esc_url($kortez_preschool_img[0]); ?>","id":259,"dimRatio":0,"minHeight":50,"minHeightUnit":"px","contentPosition":"center center","align":"full","style":{"spacing":{"padding":{"top":"0","right":"var:preset|spacing|x-small","bottom":"0","left":"var:preset|spacing|x-small"},"margin":{"top":"0","bottom":"0"}}}} -->
<div class="wp-block-cover alignfull" style="margin-top:0;margin-bottom:0;padding-top:0;padding-right:var(--wp--preset--spacing--x-small);padding-bottom:0;padding-left:var(--wp--preset--spacing--x-small);min-height:50px"><span aria-hidden="true" class="wp-block-cover__background has-background-dim-0 has-background-dim"></span><img class="wp-block-cover__image-background wp-image-259" alt="" src="<?php echo esc_url($kortez_preschool_img[0]); ?>" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|x-large","bottom":"0","right":"0","left":"0"},"margin":{"top":"0","bottom":"0"}},"background":{"backgroundImage":{"url":"<?php echo esc_url($kortez_preschool_img[1]); ?>","id":260,"source":"file","title":"hero-banner-img2"}}},"className":"is-style-default","layout":{"type":"constrained"}} -->
<div class="wp-block-group is-style-default" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--x-large);padding-right:0;padding-bottom:0;padding-left:0"><!-- wp:columns {"style":{"spacing":{"blockGap":{"top":"0","left":"var:preset|spacing|large"},"padding":{"top":"0"}}},"className":"animated animated-fadeInUp"} -->
<div class="wp-block-columns animated animated-fadeInUp" style="padding-top:0"><!-- wp:column {"verticalAlignment":"bottom","width":"45%"} -->
<div class="wp-block-column is-vertically-aligned-bottom" style="flex-basis:45%"><!-- wp:group {"style":{"background":{"backgroundImage":{"url":"<?php echo esc_url($kortez_preschool_img[2]); ?>","id":271,"source":"file","title":"hero-banner-img3"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:image {"align":"center","id":287,"scale":"cover","sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image aligncenter size-full"><img src="<?php echo esc_url($kortez_preschool_img[3]); ?>" alt="" class="wp-image-287" style="object-fit:cover"/></figure>
<!-- /wp:image --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"55%","style":{"spacing":{"padding":{"bottom":"var:preset|spacing|xx-large","top":"var:preset|spacing|large"}}}} -->
<div class="wp-block-column is-vertically-aligned-center" style="padding-top:var(--wp--preset--spacing--large);padding-bottom:var(--wp--preset--spacing--xx-large);flex-basis:55%"><!-- wp:heading {"textAlign":"left","level":6,"style":{"elements":{"link":{"color":{"text":"var:preset|color|primary"}}}},"textColor":"primary","fontSize":"small"} -->
<h6 class="wp-block-heading has-text-align-left has-primary-color has-text-color has-link-color has-small-font-size"><?php echo esc_html__( 'LEARNING, LAUGHTER AND LOVE', 'kortez-preschool' ); ?></h6>
<!-- /wp:heading -->

<!-- wp:heading {"textAlign":"left","level":1,"style":{"typography":{"letterSpacing":"-0.03em","lineHeight":1.1,"fontStyle":"normal","fontWeight":"900"},"spacing":{"padding":{"right":"0","bottom":"0","top":"0"}},"elements":{"link":{"color":{"text":"var:preset|color|heading"}}}},"textColor":"heading","className":"wp-block-heading"} -->
<h1 class="wp-block-heading has-text-align-left has-heading-color has-text-color has-link-color" style="padding-top:0;padding-right:0;padding-bottom:0;font-style:normal;font-weight:900;letter-spacing:-0.03em;line-height:1.1"><?php echo esc_html__( 'Where Little Minds Blossom', 'kortez-preschool' ); ?></h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"left","style":{"elements":{"link":{"color":{"text":"var:preset|color|body"}}}},"textColor":"body"} -->
<p class="has-text-align-left has-body-color has-text-color has-link-color"><?php echo esc_html__( 'Assumenda convallis explicabo ipsa tortor congue etiam, minim! Amet inceptos dictum sapiente, qui, Minus. Esse quos fermentum harum quasi. Cupiditate habitant mollit hic earum fermentum.', 'kortez-preschool' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|x-small"}}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group" style="padding-top:var(--wp--preset--spacing--x-small)"><!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"}} -->
<div class="wp-block-buttons"><!-- wp:button {"style":{"border":{"radius":"30px"},"spacing":{"padding":{"left":"25px","right":"25px","top":"15px","bottom":"15px"}}},"className":"is-style-fill"} -->
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link wp-element-button" style="border-radius:30px;padding-top:15px;padding-right:25px;padding-bottom:15px;padding-left:25px"><?php echo esc_html__( 'Book A Visit', 'kortez-preschool' ); ?></a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"}} -->
<div class="wp-block-buttons"><!-- wp:button {"textColor":"primary","style":{"border":{"radius":"30px"},"elements":{"link":{"color":{"text":"var:preset|color|primary"}}},"spacing":{"padding":{"left":"25px","right":"25px","top":"13px","bottom":"13px"}}},"className":"is-style-outline"} -->
<div class="wp-block-button is-style-outline"><a class="wp-block-button__link has-primary-color has-text-color has-link-color wp-element-button" style="border-radius:30px;padding-top:13px;padding-right:25px;padding-bottom:13px;padding-left:25px"><?php echo esc_html__( 'Learn More', 'kortez-preschool' ); ?></a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->