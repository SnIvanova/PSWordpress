<?php
/**
 * Title: Latest Posts
 * Slug: kortez-preschool/latest-posts
 * Categories: latest-posts
 */
?>

<!-- wp:group {"align":"full","style":{"spacing":{"margin":{"top":"0","bottom":"0"},"padding":{"bottom":"var:preset|spacing|x-large","left":"0","right":"0","top":"var:preset|spacing|xx-large"},"blockGap":"0"}},"backgroundColor":"surface","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull has-surface-background-color has-background" style="margin-top:0;margin-bottom:0;padding-top:var(--wp--preset--spacing--xx-large);padding-right:0;padding-bottom:var(--wp--preset--spacing--x-large);padding-left:0"><!-- wp:columns {"style":{"spacing":{"margin":{"bottom":"var:preset|spacing|large"},"padding":{"right":"var:preset|spacing|x-small","left":"var:preset|spacing|x-small"}}}} -->
<div class="wp-block-columns" style="margin-bottom:var(--wp--preset--spacing--large);padding-right:var(--wp--preset--spacing--x-small);padding-left:var(--wp--preset--spacing--x-small)"><!-- wp:column {"width":"86%","style":{"spacing":{"blockGap":"var:preset|spacing|xx-small"}}} -->
<div class="wp-block-column" style="flex-basis:86%"><!-- wp:heading {"level":6,"style":{"elements":{"link":{"color":{"text":"var:preset|color|primary"}}}},"textColor":"primary","fontSize":"small"} -->
<h6 class="wp-block-heading has-primary-color has-text-color has-link-color has-small-font-size"><?php echo esc_html__( 'RECENT BLOGS', 'kortez-preschool' ); ?></h6>
<!-- /wp:heading -->

<!-- wp:heading {"textAlign":"left"} -->
<h2 class="wp-block-heading has-text-align-left"><?php echo esc_html__( 'Our News &#39; Insights', 'kortez-preschool' ); ?></h2>
<!-- /wp:heading --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"bottom","width":"14%","style":{"spacing":{"blockGap":"0"}}} -->
<div class="wp-block-column is-vertically-aligned-bottom" style="flex-basis:14%"><!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"}} -->
<div class="wp-block-buttons"><!-- wp:button {"style":{"border":{"radius":"30px"},"spacing":{"padding":{"left":"25px","right":"25px","top":"15px","bottom":"15px"}}}} -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" style="border-radius:30px;padding-top:15px;padding-right:25px;padding-bottom:15px;padding-left:25px">More Articles</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:query {"queryId":31,"query":{"perPage":10,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"exclude","inherit":true}} -->
<div class="wp-block-query"><!-- wp:post-template {"style":{"spacing":{"blockGap":"0"}},"layout":{"type":"grid","columnCount":3}} -->
<!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|xx-small"}},"layout":{"inherit":false}} -->
<div class="wp-block-group"><!-- wp:post-featured-image {"style":{"spacing":{"margin":{"bottom":"var:preset|spacing|small","right":"var:preset|spacing|x-small","left":"var:preset|spacing|x-small"}},"border":{"radius":"100px"}}} /-->

<!-- wp:group {"style":{"spacing":{"padding":{"right":"var:preset|spacing|small","left":"var:preset|spacing|small"}}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group" style="padding-right:var(--wp--preset--spacing--small);padding-left:var(--wp--preset--spacing--small)"><!-- wp:post-terms {"term":"category","style":{"elements":{"link":{"color":{"text":"var:preset|color|primary"}}}}} /-->

<!-- wp:separator {"style":{"layout":{"selfStretch":"fixed","flexSize":"3px"}},"backgroundColor":"highlight","className":"is-style-default"} -->
<hr class="wp-block-separator has-text-color has-highlight-color has-alpha-channel-opacity has-highlight-background-color has-background is-style-default"/>
<!-- /wp:separator -->

<!-- wp:post-author-name {"fontSize":"x-small"} /--></div>
<!-- /wp:group -->

<!-- wp:post-title {"level":4,"isLink":true,"style":{"spacing":{"margin":{"bottom":"var:preset|spacing|x-small"},"padding":{"right":"var:preset|spacing|small","left":"var:preset|spacing|small"}}},"fontSize":"large"} /--></div>
<!-- /wp:group -->
<!-- /wp:post-template --></div>
<!-- /wp:query --></div>
<!-- /wp:group -->