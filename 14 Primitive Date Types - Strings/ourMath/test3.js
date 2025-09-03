let html = `
<!doctype html>
<html lang="en-US" class="no-js" itemtype="https://schema.org/Blog" itemscope>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
	<title>Data Structures Decode &#8211; Cloud Native Base Camp</title>
<meta name='robots' content='max-image-preview:large' />
	<style>img:is([sizes="auto" i], [sizes^="auto," i]) { contain-intrinsic-size: 3000px 1500px }</style>
	
<!-- Google Tag Manager for WordPress by gtm4wp.com -->
<script data-cfasync="false" data-pagespeed-no-defer>
	var gtm4wp_datalayer_name = "dataLayer";
	var dataLayer = dataLayer || [];
	const gtm4wp_use_sku_instead = false;
	const gtm4wp_currency = 'USD';
	const gtm4wp_product_per_impression = 30;
	const gtm4wp_clear_ecommerce = false;
</script>
<!-- End Google Tag Manager for WordPress by gtm4wp.com -->
		<!-- Meta Tag Manager -->
		<meta property="og:title" content="Data Structures Decode" />
		<meta property="og:image" content="https://cloudnativebasecamp.com/wp-content/uploads/2023/11/ds.png" />
		<meta property="og:url" content="https://cloudnativebasecamp.com/courses/ds01/" />
		<meta property="og:description" content="The Most Important Data Structures that you have to know as a Software Engineer." />
		<!-- / Meta Tag Manager -->
<script>window._wca = window._wca || [];</script>
<link rel='dns-prefetch' href='//stats.wp.com' />
<link rel='dns-prefetch' href='//challenges.cloudflare.com' />
<link rel="alternate" type="application/rss+xml" title="Cloud Native Base Camp &raquo; Feed" href="https://cloudnativebasecamp.com/feed/" />
<link rel="alternate" type="application/rss+xml" title="Cloud Native Base Camp &raquo; Comments Feed" href="https://cloudnativebasecamp.com/comments/feed/" />
			<script>document.documentElement.classList.remove( 'no-js' );</script>
			<script>
window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/16.0.1\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/16.0.1\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/cloudnativebasecamp.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.8.2"}};
/*! This file is auto-generated */
!function(s,n){var o,i,e;function c(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function p(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data),a=(e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0),new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data));return t.every(function(e,t){return e===a[t]})}function u(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);for(var n=e.getImageData(16,16,1,1),a=0;a<n.data.length;a++)if(0!==n.data[a])return!1;return!0}function f(e,t,n,a){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\udde8\ud83c\uddf6","\ud83c\udde8\u200b\ud83c\uddf6")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!a(e,"\ud83e\udedf")}return!1}function g(e,t,n,a){var r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):s.createElement("canvas"),o=r.getContext("2d",{willReadFrequently:!0}),i=(o.textBaseline="top",o.font="600 32px Arial",{});return e.forEach(function(e){i[e]=t(o,e,n,a)}),i}function t(e){var t=s.createElement("script");t.src=e,t.defer=!0,s.head.appendChild(t)}"undefined"!=typeof Promise&&(o="wpEmojiSettingsSupports",i=["flag","emoji"],n.supports={everything:!0,everythingExceptFlag:!0},e=new Promise(function(e){s.addEventListener("DOMContentLoaded",e,{once:!0})}),new Promise(function(t){var n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+g.toString()+"("+[JSON.stringify(i),f.toString(),p.toString(),u.toString()].join(",")+"));",a=new Blob([e],{type:"text/javascript"}),r=new Worker(URL.createObjectURL(a),{name:"wpTestEmojiSupports"});return void(r.onmessage=function(e){c(n=e.data),r.terminate(),t(n)})}catch(e){}c(n=g(i,f,p,u))}t(n)}).then(function(e){for(var t in e)n.supports[t]=e[t],n.supports.everything=n.supports.everything&&n.supports[t],"flag"!==t&&(n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&n.supports[t]);n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&!n.supports.flag,n.DOMReady=!1,n.readyCallback=function(){n.DOMReady=!0}}).then(function(){return e}).then(function(){var e;n.supports.everything||(n.readyCallback(),(e=n.source||{}).concatemoji?t(e.concatemoji):e.wpemoji&&e.twemoji&&(t(e.twemoji),t(e.wpemoji)))}))}((window,document),window._wpemojiSettings);
</script>
<style id='wp-emoji-styles-inline-css'>

	img.wp-smiley, img.emoji {
		display: inline !important;
		border: none !important;
		box-shadow: none !important;
		height: 1em !important;
		width: 1em !important;
		margin: 0 0.07em !important;
		vertical-align: -0.1em !important;
		background: none !important;
		padding: 0 !important;
	}
</style>
<link rel='stylesheet' id='wp-block-library-css' href='https://cloudnativebasecamp.com/wp-includes/css/dist/block-library/style.min.css?ver=6.8.2' media='all' />
<style id='classic-theme-styles-inline-css'>
/*! This file is auto-generated */
.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}
</style>
<style id='kevinbatdorf-code-block-pro-style-inline-css'>
.wp-block-kevinbatdorf-code-block-pro{direction:ltr!important;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;-webkit-text-size-adjust:100%!important;box-sizing:border-box!important;position:relative!important}.wp-block-kevinbatdorf-code-block-pro *{box-sizing:border-box!important}.wp-block-kevinbatdorf-code-block-pro pre,.wp-block-kevinbatdorf-code-block-pro pre *{font-size:inherit!important;line-height:inherit!important}.wp-block-kevinbatdorf-code-block-pro:not(.code-block-pro-editor) pre{background-image:none!important;border:0!important;border-radius:0!important;border-style:none!important;border-width:0!important;color:inherit!important;font-family:inherit!important;margin:0!important;overflow:auto!important;overflow-wrap:normal!important;padding:16px 0 16px 16px!important;text-align:left!important;white-space:pre!important;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)!important;outline:2px solid transparent!important;outline-offset:2px!important}.wp-block-kevinbatdorf-code-block-pro:not(.code-block-pro-editor) pre:focus-visible{outline-color:inherit!important}.wp-block-kevinbatdorf-code-block-pro.padding-disabled:not(.code-block-pro-editor) pre{padding:0!important}.wp-block-kevinbatdorf-code-block-pro.padding-bottom-disabled pre{padding-bottom:0!important}.wp-block-kevinbatdorf-code-block-pro:not(.code-block-pro-editor) pre code{background:none!important;background-color:transparent!important;border:0!important;border-radius:0!important;border-style:none!important;border-width:0!important;color:inherit!important;display:block!important;font-family:inherit!important;margin:0!important;overflow-wrap:normal!important;padding:0!important;text-align:left!important;white-space:pre!important;width:100%!important;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)!important}.wp-block-kevinbatdorf-code-block-pro:not(.code-block-pro-editor) pre code .line{display:inline-block!important;min-width:var(--cbp-block-width,100%)!important;vertical-align:top!important}.wp-block-kevinbatdorf-code-block-pro.cbp-has-line-numbers:not(.code-block-pro-editor) pre code .line{padding-left:calc(12px + var(--cbp-line-number-width, auto))!important}.wp-block-kevinbatdorf-code-block-pro.cbp-has-line-numbers:not(.code-block-pro-editor) pre code{counter-increment:step calc(var(--cbp-line-number-start, 1) - 1)!important;counter-reset:step!important}.wp-block-kevinbatdorf-code-block-pro pre code .line{position:relative!important}.wp-block-kevinbatdorf-code-block-pro:not(.code-block-pro-editor) pre code .line:before{content:""!important;display:inline-block!important}.wp-block-kevinbatdorf-code-block-pro.cbp-has-line-numbers:not(.code-block-pro-editor) pre code .line:not(.cbp-line-number-disabled):before{color:var(--cbp-line-number-color,#999)!important;content:counter(step)!important;counter-increment:step!important;left:0!important;opacity:.5!important;position:absolute!important;text-align:right!important;transition-duration:.5s!important;transition-property:opacity!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important;-webkit-user-select:none!important;-moz-user-select:none!important;user-select:none!important;width:var(--cbp-line-number-width,auto)!important}.wp-block-kevinbatdorf-code-block-pro.cbp-highlight-hover .line{min-height:var(--cbp-block-height,100%)!important}.wp-block-kevinbatdorf-code-block-pro .line.cbp-line-highlight .cbp-line-highlighter,.wp-block-kevinbatdorf-code-block-pro .line.cbp-no-blur:hover .cbp-line-highlighter,.wp-block-kevinbatdorf-code-block-pro.cbp-highlight-hover:not(.cbp-blur-enabled:not(.cbp-unblur-on-hover)) .line:hover .cbp-line-highlighter{background:var(--cbp-line-highlight-color,rgb(14 165 233/.2))!important;left:-16px!important;min-height:var(--cbp-block-height,100%)!important;min-width:calc(var(--cbp-block-width, 100%) + 16px)!important;pointer-events:none!important;position:absolute!important;top:0!important;width:100%!important}[data-code-block-pro-font-family="Code-Pro-Comic-Mono.ttf"].wp-block-kevinbatdorf-code-block-pro .line.cbp-line-highlight .cbp-line-highlighter,[data-code-block-pro-font-family="Code-Pro-Comic-Mono.ttf"].wp-block-kevinbatdorf-code-block-pro .line.cbp-no-blur:hover .cbp-line-highlighter,[data-code-block-pro-font-family="Code-Pro-Comic-Mono.ttf"].wp-block-kevinbatdorf-code-block-pro.cbp-highlight-hover:not(.cbp-blur-enabled:not(.cbp-unblur-on-hover)) .line:hover .cbp-line-highlighter{top:-.125rem!important}[data-code-block-pro-font-family=Code-Pro-Fira-Code].wp-block-kevinbatdorf-code-block-pro .line.cbp-line-highlight .cbp-line-highlighter,[data-code-block-pro-font-family=Code-Pro-Fira-Code].wp-block-kevinbatdorf-code-block-pro .line.cbp-no-blur:hover .cbp-line-highlighter,[data-code-block-pro-font-family=Code-Pro-Fira-Code].wp-block-kevinbatdorf-code-block-pro.cbp-highlight-hover:not(.cbp-blur-enabled:not(.cbp-unblur-on-hover)) .line:hover .cbp-line-highlighter{top:-1.5px!important}[data-code-block-pro-font-family="Code-Pro-Deja-Vu-Mono.ttf"].wp-block-kevinbatdorf-code-block-pro .line.cbp-line-highlight .cbp-line-highlighter,[data-code-block-pro-font-family="Code-Pro-Deja-Vu-Mono.ttf"].wp-block-kevinbatdorf-code-block-pro .line.cbp-no-blur:hover .cbp-line-highlighter,[data-code-block-pro-font-family="Code-Pro-Deja-Vu-Mono.ttf"].wp-block-kevinbatdorf-code-block-pro.cbp-highlight-hover:not(.cbp-blur-enabled:not(.cbp-unblur-on-hover)) .line:hover .cbp-line-highlighter,[data-code-block-pro-font-family=Code-Pro-Cozette].wp-block-kevinbatdorf-code-block-pro .line.cbp-line-highlight .cbp-line-highlighter,[data-code-block-pro-font-family=Code-Pro-Cozette].wp-block-kevinbatdorf-code-block-pro .line.cbp-no-blur:hover .cbp-line-highlighter,[data-code-block-pro-font-family=Code-Pro-Cozette].wp-block-kevinbatdorf-code-block-pro.cbp-highlight-hover:not(.cbp-blur-enabled:not(.cbp-unblur-on-hover)) .line:hover .cbp-line-highlighter{top:-1px!important}.wp-block-kevinbatdorf-code-block-pro:not(.code-block-pro-editor).padding-disabled pre .line.cbp-line-highlight:after{left:0!important;width:100%!important}.wp-block-kevinbatdorf-code-block-pro.cbp-blur-enabled pre .line:not(.cbp-no-blur){filter:blur(1.35px)!important;opacity:.8!important;pointer-events:none!important;transition-duration:.2s!important;transition-property:all!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important}.wp-block-kevinbatdorf-code-block-pro.cbp-blur-enabled.cbp-unblur-on-hover:hover pre .line:not(.cbp-no-blur){opacity:1!important;pointer-events:auto!important;--tw-blur: ;filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)!important}.wp-block-kevinbatdorf-code-block-pro:not(.code-block-pro-editor) pre *{font-family:inherit!important}.cbp-see-more-simple-btn-hover{transition-property:none!important}.cbp-see-more-simple-btn-hover:hover{box-shadow:inset 0 0 100px 100px hsla(0,0%,100%,.1)!important}.code-block-pro-copy-button{border:0!important;border-style:none!important;border-width:0!important;cursor:pointer!important;left:auto!important;line-height:1!important;opacity:.1!important;outline:2px solid transparent!important;outline-offset:2px!important;padding:6px!important;position:absolute!important;right:0!important;top:0!important;transition-duration:.2s!important;transition-property:opacity!important;transition-timing-function:cubic-bezier(.4,0,.2,1)!important;z-index:10!important}.code-block-pro-copy-button:focus{opacity:.4!important}.code-block-pro-copy-button:focus-visible{outline-color:inherit!important}.code-block-pro-copy-button:not([data-has-text-button]){background:none!important;background-color:transparent!important}body .wp-block-kevinbatdorf-code-block-pro:not(#x) .code-block-pro-copy-button-pre,body .wp-block-kevinbatdorf-code-block-pro:not(#x) .code-block-pro-copy-button-textarea{clip:rect(0,0,0,0)!important;background-color:transparent!important;border-width:0!important;color:transparent!important;height:1px!important;left:0!important;margin:-.25rem!important;opacity:0!important;overflow:hidden!important;pointer-events:none!important;position:absolute!important;resize:none!important;top:0!important;white-space:nowrap!important;width:1px!important;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)!important}.wp-block-kevinbatdorf-code-block-pro.padding-disabled .code-block-pro-copy-button{padding:0!important}.wp-block-kevinbatdorf-code-block-pro:hover .code-block-pro-copy-button{opacity:.5!important}.wp-block-kevinbatdorf-code-block-pro .code-block-pro-copy-button:hover{opacity:.9!important}.code-block-pro-copy-button[data-has-text-button],.wp-block-kevinbatdorf-code-block-pro:hover .code-block-pro-copy-button[data-has-text-button]{opacity:1!important}.wp-block-kevinbatdorf-code-block-pro .code-block-pro-copy-button[data-has-text-button]:hover{opacity:.8!important}.code-block-pro-copy-button[data-has-text-button]{border-radius:.75rem!important;display:block!important;margin-right:.75rem!important;margin-top:.7rem!important;padding:.125rem .375rem!important}.code-block-pro-copy-button[data-inside-header-type=headlightsMuted],.code-block-pro-copy-button[data-inside-header-type^=headlights]{margin-top:.85rem!important}.code-block-pro-copy-button[data-inside-header-type=headlightsMutedAlt]{margin-top:.65rem!important}.code-block-pro-copy-button[data-inside-header-type=simpleString]{margin-top:.645rem!important}.code-block-pro-copy-button[data-inside-header-type=pillString]{margin-top:1rem!important}.code-block-pro-copy-button[data-inside-header-type=pillString] .cbp-btn-text{position:relative!important;top:1px!important}.cbp-btn-text{font-size:.75rem!important;line-height:1rem!important}.code-block-pro-copy-button .without-check{display:block!important}.code-block-pro-copy-button .with-check{display:none!important}.code-block-pro-copy-button.cbp-copying{opacity:1!important}.code-block-pro-copy-button.cbp-copying .without-check{display:none!important}.code-block-pro-copy-button.cbp-copying .with-check{display:block!important}.cbp-footer-link:hover{text-decoration-line:underline!important}@media print{.wp-block-kevinbatdorf-code-block-pro pre{max-height:none!important}.wp-block-kevinbatdorf-code-block-pro:not(#x) .line:before{background-color:transparent!important;color:inherit!important}.wp-block-kevinbatdorf-code-block-pro:not(#x) .cbp-line-highlighter,.wp-block-kevinbatdorf-code-block-pro:not(#x)>span{display:none!important}}

</style>
<link rel='stylesheet' id='mediaelement-css' href='https://cloudnativebasecamp.com/wp-includes/js/mediaelement/mediaelementplayer-legacy.min.css?ver=4.2.17' media='all' />
<link rel='stylesheet' id='wp-mediaelement-css' href='https://cloudnativebasecamp.com/wp-includes/js/mediaelement/wp-mediaelement.min.css?ver=6.8.2' media='all' />
<style id='jetpack-sharing-buttons-style-inline-css'>
.jetpack-sharing-buttons__services-list{display:flex;flex-direction:row;flex-wrap:wrap;gap:0;list-style-type:none;margin:5px;padding:0}.jetpack-sharing-buttons__services-list.has-small-icon-size{font-size:12px}.jetpack-sharing-buttons__services-list.has-normal-icon-size{font-size:16px}.jetpack-sharing-buttons__services-list.has-large-icon-size{font-size:24px}.jetpack-sharing-buttons__services-list.has-huge-icon-size{font-size:36px}@media print{.jetpack-sharing-buttons__services-list{display:none!important}}.editor-styles-wrapper .wp-block-jetpack-sharing-buttons{gap:0;padding-inline-start:0}ul.jetpack-sharing-buttons__services-list.has-background{padding:1.25em 2.375em}
</style>
<style id='pdfemb-pdf-embedder-viewer-style-inline-css'>
.wp-block-pdfemb-pdf-embedder-viewer{max-width:none}

</style>
<style id='global-styles-inline-css'>
:root{--wp--preset--aspect-ratio--square: 1;--wp--preset--aspect-ratio--4-3: 4/3;--wp--preset--aspect-ratio--3-4: 3/4;--wp--preset--aspect-ratio--3-2: 3/2;--wp--preset--aspect-ratio--2-3: 2/3;--wp--preset--aspect-ratio--16-9: 16/9;--wp--preset--aspect-ratio--9-16: 9/16;--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--color--theme-palette-1: var(--global-palette1);--wp--preset--color--theme-palette-2: var(--global-palette2);--wp--preset--color--theme-palette-3: var(--global-palette3);--wp--preset--color--theme-palette-4: var(--global-palette4);--wp--preset--color--theme-palette-5: var(--global-palette5);--wp--preset--color--theme-palette-6: var(--global-palette6);--wp--preset--color--theme-palette-7: var(--global-palette7);--wp--preset--color--theme-palette-8: var(--global-palette8);--wp--preset--color--theme-palette-9: var(--global-palette9);--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: var(--global-font-size-small);--wp--preset--font-size--medium: var(--global-font-size-medium);--wp--preset--font-size--large: var(--global-font-size-large);--wp--preset--font-size--x-large: 42px;--wp--preset--font-size--larger: var(--global-font-size-larger);--wp--preset--font-size--xxlarge: var(--global-font-size-xxlarge);--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:where(.is-layout-flex){gap: 0.5em;}:where(.is-layout-grid){gap: 0.5em;}body .is-layout-flex{display: flex;}.is-layout-flex{flex-wrap: wrap;align-items: center;}.is-layout-flex > :is(*, div){margin: 0;}body .is-layout-grid{display: grid;}.is-layout-grid > :is(*, div){margin: 0;}:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
:where(.wp-block-post-template.is-layout-flex){gap: 1.25em;}:where(.wp-block-post-template.is-layout-grid){gap: 1.25em;}
:where(.wp-block-columns.is-layout-flex){gap: 2em;}:where(.wp-block-columns.is-layout-grid){gap: 2em;}
:root :where(.wp-block-pullquote){font-size: 1.5em;line-height: 1.6;}
</style>
<link rel='stylesheet' id='learndash_quiz_front_css-css' href='//cloudnativebasecamp.com/wp-content/plugins/sfwd-lms/themes/legacy/templates/learndash_quiz_front.min.css?ver=4.3.1.3' media='all' />
<link rel='stylesheet' id='jquery-dropdown-css-css' href='//cloudnativebasecamp.com/wp-content/plugins/sfwd-lms/assets/css/jquery.dropdown.min.css?ver=4.3.1.3' media='all' />
<link rel='stylesheet' id='learndash_lesson_video-css' href='//cloudnativebasecamp.com/wp-content/plugins/sfwd-lms/themes/legacy/templates/learndash_lesson_video.min.css?ver=4.3.1.3' media='all' />
<style id='woocommerce-inline-inline-css'>
.woocommerce form .form-row .required { visibility: visible; }
</style>
<link rel='stylesheet' id='brands-styles-css' href='https://cloudnativebasecamp.com/wp-content/plugins/woocommerce/assets/css/brands.css?ver=9.9.5' media='all' />
<link rel='stylesheet' id='kadence-global-css' href='https://cloudnativebasecamp.com/wp-content/themes/kadence/assets/css/global.min.css?ver=1.2.7' media='all' />
<style id='kadence-global-inline-css'>
/* Kadence Base CSS */
:root{--global-palette1:#02d05f;--global-palette2:#01c89f;--global-palette3:#eceaea;--global-palette4:#999898;--global-palette5:#deddeb;--global-palette6:#c2d6c2;--global-palette7:#514d7c;--global-palette8:#2d2a30;--global-palette9:#272330;--global-palette9rgb:39, 35, 48;--global-palette-highlight:var(--global-palette1);--global-palette-highlight-alt:var(--global-palette2);--global-palette-highlight-alt2:var(--global-palette9);--global-palette-btn-bg:var(--global-palette1);--global-palette-btn-bg-hover:var(--global-palette2);--global-palette-btn:#ffffff;--global-palette-btn-hover:#ffffff;--global-body-font-family:'Work Sans', var(--global-fallback-font);--global-heading-font-family:'Work Sans', var(--global-fallback-font);--global-primary-nav-font-family:inherit;--global-fallback-font:sans-serif;--global-display-fallback-font:sans-serif;--global-content-width:1200px;--global-content-narrow-width:900px;--global-content-edge-padding:1.5rem;--global-content-boxed-padding:2rem;--global-calc-content-width:calc(1200px - var(--global-content-edge-padding) - var(--global-content-edge-padding) );--wp--style--global--content-size:var(--global-calc-content-width);}.wp-site-blocks{--global-vw:calc( 100vw - ( 0.5 * var(--scrollbar-offset)));}body{background:var(--global-palette8);}body, input, select, optgroup, textarea{font-style:normal;font-weight:normal;font-size:17px;line-height:1.6;font-family:var(--global-body-font-family);color:var(--global-palette4);}.content-bg, body.content-style-unboxed .site{background:var(--global-palette9);}h1,h2,h3,h4,h5,h6{font-family:var(--global-heading-font-family);}h1{font-style:normal;font-weight:700;font-size:40px;line-height:1.5;color:var(--global-palette3);}h2{font-weight:700;font-size:28px;line-height:1.5;color:var(--global-palette3);}h3{font-weight:700;font-size:24px;line-height:1.5;color:var(--global-palette3);}h4{font-style:normal;font-weight:normal;font-size:22px;line-height:1.5;color:var(--global-palette4);}h5{font-style:normal;font-weight:normal;font-size:20px;line-height:1.5;color:var(--global-palette4);}h6{font-style:normal;font-weight:normal;font-size:18px;line-height:1.5;color:var(--global-palette5);}.entry-hero .kadence-breadcrumbs{max-width:1200px;}.site-container, .site-header-row-layout-contained, .site-footer-row-layout-contained, .entry-hero-layout-contained, .comments-area, .alignfull > .wp-block-cover__inner-container, .alignwide > .wp-block-cover__inner-container{max-width:var(--global-content-width);}.content-width-narrow .content-container.site-container, .content-width-narrow .hero-container.site-container{max-width:var(--global-content-narrow-width);}@media all and (min-width: 1430px){.wp-site-blocks .content-container  .alignwide{margin-left:-115px;margin-right:-115px;width:unset;max-width:unset;}}@media all and (min-width: 1160px){.content-width-narrow .wp-site-blocks .content-container .alignwide{margin-left:-130px;margin-right:-130px;width:unset;max-width:unset;}}.content-style-boxed .wp-site-blocks .entry-content .alignwide{margin-left:calc( -1 * var( --global-content-boxed-padding ) );margin-right:calc( -1 * var( --global-content-boxed-padding ) );}.content-area{margin-top:5rem;margin-bottom:5rem;}@media all and (max-width: 1024px){.content-area{margin-top:3rem;margin-bottom:3rem;}}@media all and (max-width: 767px){.content-area{margin-top:2rem;margin-bottom:2rem;}}@media all and (max-width: 1024px){:root{--global-content-boxed-padding:2rem;}}@media all and (max-width: 767px){:root{--global-content-boxed-padding:1.5rem;}}.entry-content-wrap{padding:2rem;}@media all and (max-width: 1024px){.entry-content-wrap{padding:2rem;}}@media all and (max-width: 767px){.entry-content-wrap{padding:1.5rem;}}.entry.single-entry{box-shadow:0px 15px 15px -10px rgba(0,0,0,0.05);}.entry.loop-entry{box-shadow:0px 15px 15px -10px rgba(0,0,0,0.05);}.loop-entry .entry-content-wrap{padding:2rem;}@media all and (max-width: 1024px){.loop-entry .entry-content-wrap{padding:2rem;}}@media all and (max-width: 767px){.loop-entry .entry-content-wrap{padding:1.5rem;}}button, .button, .wp-block-button__link, input[type="button"], input[type="reset"], input[type="submit"], .fl-button, .elementor-button-wrapper .elementor-button{box-shadow:0px 0px 0px -7px rgba(0,0,0,0);}button:hover, button:focus, button:active, .button:hover, .button:focus, .button:active, .wp-block-button__link:hover, .wp-block-button__link:focus, .wp-block-button__link:active, input[type="button"]:hover, input[type="button"]:focus, input[type="button"]:active, input[type="reset"]:hover, input[type="reset"]:focus, input[type="reset"]:active, input[type="submit"]:hover, input[type="submit"]:focus, input[type="submit"]:active, .elementor-button-wrapper .elementor-button:hover, .elementor-button-wrapper .elementor-button:focus, .elementor-button-wrapper .elementor-button:active{box-shadow:0px 15px 25px -7px rgba(0,0,0,0.1);}.kb-button.kb-btn-global-outline.kb-btn-global-inherit{padding-top:calc(px - 2px);padding-right:calc(px - 2px);padding-bottom:calc(px - 2px);padding-left:calc(px - 2px);}@media all and (min-width: 1025px){.transparent-header .entry-hero .entry-hero-container-inner{padding-top:110px;}}@media all and (max-width: 1024px){.mobile-transparent-header .entry-hero .entry-hero-container-inner{padding-top:110px;}}@media all and (max-width: 767px){.mobile-transparent-header .entry-hero .entry-hero-container-inner{padding-top:75px;}}
/* Kadence Header CSS */
@media all and (max-width: 1024px){.mobile-transparent-header #masthead{position:absolute;left:0px;right:0px;z-index:100;}.kadence-scrollbar-fixer.mobile-transparent-header #masthead{right:var(--scrollbar-offset,0);}.mobile-transparent-header #masthead, .mobile-transparent-header .site-top-header-wrap .site-header-row-container-inner, .mobile-transparent-header .site-main-header-wrap .site-header-row-container-inner, .mobile-transparent-header .site-bottom-header-wrap .site-header-row-container-inner{background:transparent;}.site-header-row-tablet-layout-fullwidth, .site-header-row-tablet-layout-standard{padding:0px;}}@media all and (min-width: 1025px){.transparent-header #masthead{position:absolute;left:0px;right:0px;z-index:100;}.transparent-header.kadence-scrollbar-fixer #masthead{right:var(--scrollbar-offset,0);}.transparent-header #masthead, .transparent-header .site-top-header-wrap .site-header-row-container-inner, .transparent-header .site-main-header-wrap .site-header-row-container-inner, .transparent-header .site-bottom-header-wrap .site-header-row-container-inner{background:transparent;}}.site-branding a.brand img{max-width:270px;}.site-branding a.brand img.svg-logo-image{width:270px;}.site-branding{padding:0px 0px 0px 0px;}#masthead, #masthead .kadence-sticky-header.item-is-fixed:not(.item-at-start):not(.site-header-row-container):not(.site-main-header-wrap), #masthead .kadence-sticky-header.item-is-fixed:not(.item-at-start) > .site-header-row-container-inner{background:var(--global-palette9);}.site-main-header-inner-wrap{min-height:110px;}@media all and (max-width: 767px){.site-main-header-inner-wrap{min-height:75px;}}.header-navigation[class*="header-navigation-style-underline"] .header-menu-container.primary-menu-container>ul>li>a:after{width:calc( 100% - 1.45em);}.main-navigation .primary-menu-container > ul > li.menu-item > a{padding-left:calc(1.45em / 2);padding-right:calc(1.45em / 2);padding-top:0.6em;padding-bottom:0.6em;color:var(--global-palette3);}.main-navigation .primary-menu-container > ul > li.menu-item .dropdown-nav-special-toggle{right:calc(1.45em / 2);}.main-navigation .primary-menu-container > ul > li.menu-item > a:hover{color:#ff9616;}.main-navigation .primary-menu-container > ul > li.menu-item.current-menu-item > a{color:var(--global-palette1);}.header-navigation .header-menu-container ul ul.sub-menu, .header-navigation .header-menu-container ul ul.submenu{background:var(--global-palette9);box-shadow:0px 2px 13px 0px rgba(0,0,0,0.1);}.header-navigation .header-menu-container ul ul li.menu-item, .header-menu-container ul.menu > li.kadence-menu-mega-enabled > ul > li.menu-item > a{border-bottom:5px none #ffffff;}.header-navigation .header-menu-container ul ul li.menu-item > a{width:200px;padding-top:1em;padding-bottom:1em;color:var(--global-palette3);font-size:12px;}.header-navigation .header-menu-container ul ul li.menu-item > a:hover{color:var(--global-palette9);background:var(--global-palette4);}.header-navigation .header-menu-container ul ul li.menu-item.current-menu-item > a{color:var(--global-palette9);background:var(--global-palette4);}.mobile-toggle-open-container .menu-toggle-open, .mobile-toggle-open-container .menu-toggle-open:focus{color:var(--global-palette5);padding:0.4em 0.6em 0.4em 0.6em;font-size:14px;}.mobile-toggle-open-container .menu-toggle-open.menu-toggle-style-bordered{border:1px solid currentColor;}.mobile-toggle-open-container .menu-toggle-open .menu-toggle-icon{font-size:20px;}.mobile-toggle-open-container .menu-toggle-open:hover, .mobile-toggle-open-container .menu-toggle-open:focus-visible{color:var(--global-palette-highlight);}.mobile-navigation ul li{font-style:normal;font-size:16px;}.mobile-navigation ul li a{padding-top:1em;padding-bottom:1em;}.mobile-navigation ul li > a, .mobile-navigation ul li.menu-item-has-children > .drawer-nav-drop-wrap{background:var(--global-palette9);color:var(--global-palette3);}.mobile-navigation ul li > a:hover, .mobile-navigation ul li.menu-item-has-children > .drawer-nav-drop-wrap:hover{background:var(--global-palette9);color:#f79d17;}.mobile-navigation ul li.current-menu-item > a, .mobile-navigation ul li.current-menu-item.menu-item-has-children > .drawer-nav-drop-wrap{background:var(--global-palette9);color:var(--global-palette-highlight);}.mobile-navigation ul li.menu-item-has-children .drawer-nav-drop-wrap, .mobile-navigation ul li:not(.menu-item-has-children) a{border-bottom:0px solid rgba(255,255,255,0.1);}.mobile-navigation:not(.drawer-navigation-parent-toggle-true) ul li.menu-item-has-children .drawer-nav-drop-wrap button{border-left:0px solid rgba(255,255,255,0.1);}#mobile-drawer .drawer-inner, #mobile-drawer.popup-drawer-layout-fullwidth.popup-drawer-animation-slice .pop-portion-bg, #mobile-drawer.popup-drawer-layout-fullwidth.popup-drawer-animation-slice.pop-animated.show-drawer .drawer-inner{background:var(--global-palette9);}@media all and (max-width: 1024px){#mobile-drawer .drawer-inner, #mobile-drawer.popup-drawer-layout-fullwidth.popup-drawer-animation-slice .pop-portion-bg, #mobile-drawer.popup-drawer-layout-fullwidth.popup-drawer-animation-slice.pop-animated.show-drawer .drawer-inner{background:var(--global-palette9);}}@media all and (max-width: 767px){#mobile-drawer .drawer-inner, #mobile-drawer.popup-drawer-layout-fullwidth.popup-drawer-animation-slice .pop-portion-bg, #mobile-drawer.popup-drawer-layout-fullwidth.popup-drawer-animation-slice.pop-animated.show-drawer .drawer-inner{background:var(--global-palette9);}}#mobile-drawer .drawer-header .drawer-toggle{padding:0.6em 0.15em 0.6em 0.15em;font-size:24px;}#main-header .header-button{border-radius:6px 6px 6px 6px;background:#d03434;border:2px none transparent;box-shadow:0px 0px 0px -7px rgba(0,0,0,0);}#main-header .header-button.button-size-custom{padding:11px 30px 11px 30px;}#main-header .header-button:hover{box-shadow:0px 15px 25px -7px rgba(0,0,0,0.1);}.mobile-header-button-wrap .mobile-header-button-inner-wrap .mobile-header-button{border:2px none transparent;box-shadow:0px 0px 0px -7px rgba(0,0,0,0);}.mobile-header-button-wrap .mobile-header-button-inner-wrap .mobile-header-button:hover{box-shadow:0px 15px 25px -7px rgba(0,0,0,0.1);}
/* Kadence Footer CSS */
#colophon{background:var(--global-palette5);}.site-top-footer-wrap .site-footer-row-container-inner{font-style:normal;color:var(--global-palette8);}.site-footer .site-top-footer-wrap a:not(.button):not(.wp-block-button__link):not(.wp-element-button){color:var(--global-palette8);}.site-top-footer-inner-wrap{padding-top:30px;padding-bottom:30px;grid-column-gap:60px;grid-row-gap:60px;}.site-top-footer-inner-wrap .widget{margin-bottom:30px;}.site-top-footer-inner-wrap .widget-area .widget-title{font-style:normal;text-transform:capitalize;color:var(--global-palette8);}.site-top-footer-inner-wrap .site-footer-section:not(:last-child):after{border-right:0px none transparent;right:calc(-60px / 2);}.footer-social-wrap .footer-social-inner-wrap{font-size:1em;gap:0.3em;}.site-footer .site-footer-wrap .site-footer-section .footer-social-wrap .footer-social-inner-wrap .social-button{color:var(--global-palette8);background:var(--global-palette3);border:2px none transparent;border-radius:4px;}#colophon .footer-html{font-style:normal;color:var(--global-palette8);}
/* Kadence Woo CSS */
.entry-hero.product-hero-section .entry-header{min-height:200px;}.product-title .single-category{font-weight:700;font-size:32px;line-height:1.5;color:var(--global-palette3);}.wp-site-blocks .product-hero-section .extra-title{font-weight:700;font-size:32px;line-height:1.5;}.woocommerce ul.products.woo-archive-btn-button .product-action-wrap .button:not(.kb-button), .woocommerce ul.products li.woo-archive-btn-button .button:not(.kb-button), .wc-block-grid__product.woo-archive-btn-button .product-details .wc-block-grid__product-add-to-cart .wp-block-button__link{border:2px none transparent;box-shadow:0px 0px 0px 0px rgba(0,0,0,0.0);}.woocommerce ul.products.woo-archive-btn-button .product-action-wrap .button:not(.kb-button):hover, .woocommerce ul.products li.woo-archive-btn-button .button:not(.kb-button):hover, .wc-block-grid__product.woo-archive-btn-button .product-details .wc-block-grid__product-add-to-cart .wp-block-button__link:hover{box-shadow:0px 0px 0px 0px rgba(0,0,0,0);}
/* Kadence LearnDash CSS */
.sfwd-courses-title h1{font-style:normal;font-size:1.5em;color:var(--global-palette9);}.sfwd-courses-hero-section .entry-hero-container-inner{background:var(--global-palette1);}.entry-hero.sfwd-courses-hero-section .entry-header{min-height:68px;}@media all and (max-width: 1024px){.sfwd-courses-hero-section .entry-hero-container-inner{background:var(--global-palette1);}}body.single-sfwd-courses .content-bg, body.content-style-unboxed.single-sfwd-courses .site{background:var(--global-palette8);}@media all and (max-width: 1024px){body.single-sfwd-courses .content-bg, body.content-style-unboxed.single-sfwd-courses .site{background:var(--global-palette8);}}.sfwd-lessons-title h1{font-style:normal;font-size:1.5em;}
</style>
<link rel='stylesheet' id='kadence-header-css' href='https://cloudnativebasecamp.com/wp-content/themes/kadence/assets/css/header.min.css?ver=1.2.7' media='all' />
<link rel='stylesheet' id='kadence-content-css' href='https://cloudnativebasecamp.com/wp-content/themes/kadence/assets/css/content.min.css?ver=1.2.7' media='all' />
<style id='kadence-content-inline-css'>
.posted-on, .category-links, .posted-by, .comments-link { clip: rect(1px, 1px, 1px, 1px); height: 1px; position: absolute; overflow: hidden; width: 1px; }
</style>
<link rel='stylesheet' id='kadence-related-posts-css' href='https://cloudnativebasecamp.com/wp-content/themes/kadence/assets/css/related-posts.min.css?ver=1.2.7' media='all' />
<link rel='stylesheet' id='kad-splide-css' href='https://cloudnativebasecamp.com/wp-content/themes/kadence/assets/css/kadence-splide.min.css?ver=1.2.7' media='all' />
<link rel='stylesheet' id='kadence-woocommerce-css' href='https://cloudnativebasecamp.com/wp-content/themes/kadence/assets/css/woocommerce.min.css?ver=1.2.7' media='all' />
<link rel='stylesheet' id='kadence-footer-css' href='https://cloudnativebasecamp.com/wp-content/themes/kadence/assets/css/footer.min.css?ver=1.2.7' media='all' />
<link rel='stylesheet' id='learndash-front-css' href='//cloudnativebasecamp.com/wp-content/plugins/sfwd-lms/themes/ld30/assets/css/learndash.min.css?ver=4.3.1.3' media='all' />
<link rel='stylesheet' id='kadence-blocks-rowlayout-css' href='https://cloudnativebasecamp.com/wp-content/plugins/kadence-blocks/dist/style-blocks-rowlayout.css?ver=3.4.11' media='all' />
<link rel='stylesheet' id='kadence-blocks-column-css' href='https://cloudnativebasecamp.com/wp-content/plugins/kadence-blocks/dist/style-blocks-column.css?ver=3.4.11' media='all' />
<style id='kadence-blocks-advancedheading-inline-css'>
.wp-block-kadence-advancedheading mark{background:transparent;border-style:solid;border-width:0}.wp-block-kadence-advancedheading mark.kt-highlight{color:#f76a0c;}.kb-adv-heading-icon{display: inline-flex;justify-content: center;align-items: center;} .is-layout-constrained > .kb-advanced-heading-link {display: block;}.single-content .kadence-advanced-heading-wrapper h1, .single-content .kadence-advanced-heading-wrapper h2, .single-content .kadence-advanced-heading-wrapper h3, .single-content .kadence-advanced-heading-wrapper h4, .single-content .kadence-advanced-heading-wrapper h5, .single-content .kadence-advanced-heading-wrapper h6 {margin: 1.5em 0 .5em;}.single-content .kadence-advanced-heading-wrapper+* { margin-top:0;}
</style>
<link rel='stylesheet' id='kadence-learndash-css' href='https://cloudnativebasecamp.com/wp-content/themes/kadence/assets/css/learndash.min.css?ver=1.2.7' media='all' />
<style id='kadence-learndash-inline-css'>
				.ld-course-list-items .ld_course_grid .thumbnail.course .ld_course_grid_price.ribbon-enrolled {
					background: var(--global-palette-btn-bg-hover);
				}
				.ld-course-list-items .ld_course_grid .thumbnail.course .ld_course_grid_price.ribbon-enrolled:before {
					border-top-color:  var(--global-palette-btn-bg);
    				border-right-color:  var(--global-palette-btn-bg);
				}
				.ld-course-list-items .ld_course_grid .btn-primary {
					border-color: var(--global-palette-btn-bg);
					background: var(--global-palette-btn-bg);
					color: var(--global-palette-btn);
					box-shadow: 0px 0px 0px -7px rgba(0,0,0,0.0);
				}
				.ld-course-list-items .ld_course_grid .btn-primary:hover {
					color: var(--global-palette-btn-hover);
					border-color: var(--global-palette-btn-bg-hover);
					background: var(--global-palette-btn-bg-hover);
					box-shadow: 0px 15px 25px -7px rgba(0,0,0,0.1);
				}
				.learndash-wrapper .ld-item-list .ld-item-list-item.ld-is-next,
				.learndash-wrapper .wpProQuiz_content .wpProQuiz_questionListItem label:focus-within {
					border-color: var(--global-palette1);
				}
				/*
				.learndash-wrapper a:not(.ld-button):not(#quiz_continue_link):not(.ld-focus-menu-link):not(.btn-blue):not(#quiz_continue_link):not(.ld-js-register-account):not(#ld-focus-mode-course-heading):not(#btn-join):not(.ld-item-name):not(.ld-table-list-item-preview):not(.ld-lesson-item-preview-heading),
				*/

				.learndash-wrapper .ld-breadcrumbs a,
				.learndash-wrapper .ld-lesson-item.ld-is-current-lesson .ld-lesson-item-preview-heading,
				.learndash-wrapper .ld-lesson-item.ld-is-current-lesson .ld-lesson-title,
				.learndash-wrapper .ld-primary-color-hover:hover,
				.learndash-wrapper .ld-primary-color,
				.learndash-wrapper .ld-primary-color-hover:hover,
				.learndash-wrapper .ld-primary-color,
				.learndash-wrapper .ld-tabs .ld-tabs-navigation .ld-tab.ld-active,
				.learndash-wrapper .ld-button.ld-button-transparent,
				.learndash-wrapper .ld-button.ld-button-reverse,
				.learndash-wrapper .ld-icon-certificate,
				.learndash-wrapper .ld-login-modal .ld-login-modal-login .ld-modal-heading,
				#wpProQuiz_user_content a,
				.learndash-wrapper .ld-item-list .ld-item-list-item a.ld-item-name:hover,
				.learndash-wrapper .ld-focus-comments__heading-actions .ld-expand-button,
				.learndash-wrapper .ld-focus-comments__heading a,
				.learndash-wrapper .ld-focus-comments .comment-respond a,
				.learndash-wrapper .ld-focus-comment .ld-comment-reply a.comment-reply-link:hover,
				.learndash-wrapper .ld-expand-button.ld-button-alternate {
					color: var(--global-palette1) !important;
				}

				.learndash-wrapper .ld-focus-comment.bypostauthor>.ld-comment-wrapper,
				.learndash-wrapper .ld-focus-comment.role-group_leader>.ld-comment-wrapper,
				.learndash-wrapper .ld-focus-comment.role-administrator>.ld-comment-wrapper {
					background-color: rgba(2,208,95,0.03) !important;
				}


				.learndash-wrapper .ld-primary-background,
				.learndash-wrapper .ld-tabs .ld-tabs-navigation .ld-tab.ld-active:after {
					background: var(--global-palette1) !important;
				}



				.learndash-wrapper .ld-course-navigation .ld-lesson-item.ld-is-current-lesson .ld-status-incomplete,
				.learndash-wrapper .ld-focus-comment.bypostauthor:not(.ptype-sfwd-assignment) >.ld-comment-wrapper>.ld-comment-avatar img,
				.learndash-wrapper .ld-focus-comment.role-group_leader>.ld-comment-wrapper>.ld-comment-avatar img,
				.learndash-wrapper .ld-focus-comment.role-administrator>.ld-comment-wrapper>.ld-comment-avatar img {
					border-color: var(--global-palette1) !important;
				}



				.learndash-wrapper .ld-loading::before {
					border-top:3px solid var(--global-palette1) !important;
				}

				.learndash-wrapper .ld-button:hover:not(.learndash-link-previous-incomplete):not(.ld-button-transparent),
				#learndash-tooltips .ld-tooltip:after,
				#learndash-tooltips .ld-tooltip,
				.learndash-wrapper .ld-primary-background,
				.learndash-wrapper .btn-join,
				.learndash-wrapper #btn-join,
				.learndash-wrapper .ld-button:not(.ld-js-register-account):not(.learndash-link-previous-incomplete):not(.ld-button-transparent),
				.learndash-wrapper .ld-expand-button,
				.learndash-wrapper .wpProQuiz_content .wpProQuiz_button:not(.wpProQuiz_button_reShowQuestion):not(.wpProQuiz_button_restartQuiz),
				.learndash-wrapper .wpProQuiz_content .wpProQuiz_button2,
				.learndash-wrapper .ld-focus .ld-focus-sidebar .ld-course-navigation-heading,
				.learndash-wrapper .ld-focus .ld-focus-sidebar .ld-focus-sidebar-trigger,
				.learndash-wrapper .ld-focus-comments .form-submit #submit,
				.learndash-wrapper .ld-login-modal input[type='submit'],
				.learndash-wrapper .ld-login-modal .ld-login-modal-register,
				.learndash-wrapper .wpProQuiz_content .wpProQuiz_certificate a.btn-blue,
				.learndash-wrapper .ld-focus .ld-focus-header .ld-user-menu .ld-user-menu-items a,
				#wpProQuiz_user_content table.wp-list-table thead th,
				#wpProQuiz_overlay_close,
				.learndash-wrapper .ld-expand-button.ld-button-alternate .ld-icon {
					background-color: var(--global-palette1) !important;
				}


				.learndash-wrapper .ld-focus .ld-focus-header .ld-user-menu .ld-user-menu-items:before {
					border-bottom-color: var(--global-palette1) !important;
				}

				.learndash-wrapper .ld-button.ld-button-transparent:hover {
					background: transparent !important;
				}

				.learndash-wrapper .ld-focus .ld-focus-header .sfwd-mark-complete .learndash_mark_complete_button,
				.learndash-wrapper .ld-focus .ld-focus-header #sfwd-mark-complete #learndash_mark_complete_button,
				.learndash-wrapper .ld-button.ld-button-transparent,
				.learndash-wrapper .ld-button.ld-button-alternate,
				.learndash-wrapper .ld-expand-button.ld-button-alternate {
					background-color:transparent !important;
				}

				.learndash-wrapper .ld-focus-header .ld-user-menu .ld-user-menu-items a,
				.learndash-wrapper .ld-button.ld-button-reverse:hover,
				.learndash-wrapper .ld-alert-success .ld-alert-icon.ld-icon-certificate,
				.learndash-wrapper .ld-alert-warning .ld-button:not(.learndash-link-previous-incomplete),
				.learndash-wrapper .ld-primary-background.ld-status {
					color:white !important;
				}

				.learndash-wrapper .ld-status.ld-status-unlocked {
					background-color: rgba(2,208,95,0.2) !important;
					color: var(--global-palette1) !important;
				}

				.learndash-wrapper .wpProQuiz_content .wpProQuiz_addToplist {
					background-color: rgba(2,208,95,0.1) !important;
					border: 1px solid var(--global-palette1) !important;
				}

				.learndash-wrapper .wpProQuiz_content .wpProQuiz_toplistTable th {
					background: var(--global-palette1) !important;
				}

				.learndash-wrapper .wpProQuiz_content .wpProQuiz_toplistTrOdd {
					background-color: rgba(2,208,95,0.1) !important;
				}

				.learndash-wrapper .wpProQuiz_content .wpProQuiz_reviewDiv li.wpProQuiz_reviewQuestionTarget {
					background-color: var(--global-palette1) !important;
				}

				
					.learndash-wrapper #quiz_continue_link,
					.learndash-wrapper .ld-secondary-background,
					.learndash-wrapper .learndash_mark_complete_button,
					.learndash-wrapper #learndash_mark_complete_button,
					.learndash-wrapper .ld-status-complete,
					.learndash-wrapper .ld-alert-success .ld-button,
					.learndash-wrapper .ld-alert-success .ld-alert-icon {
						background-color: var(--global-palette2) !important;
					}
					.learndash-wrapper .learndash_mark_complete_button:hover, .learndash-wrapper #learndash_mark_complete_button:hover {
						background-color: var(--global-palette2) !important;
					}

					.learndash-wrapper .wpProQuiz_content a#quiz_continue_link {
						background-color: var(--global-palette2) !important;
					}

					.learndash-wrapper .course_progress .sending_progress_bar {
						background: var(--global-palette2) !important;
					}

					.learndash-wrapper .wpProQuiz_content .wpProQuiz_button_reShowQuestion:hover, .learndash-wrapper .wpProQuiz_content .wpProQuiz_button_restartQuiz:hover {
						background-color: var(--global-palette2) !important;
						opacity: 0.75;
					}

					.learndash-wrapper .ld-secondary-color-hover:hover,
					.learndash-wrapper .ld-secondary-color,
					.learndash-wrapper .ld-focus .ld-focus-header .sfwd-mark-complete .learndash_mark_complete_button,
					.learndash-wrapper .ld-focus .ld-focus-header #sfwd-mark-complete #learndash_mark_complete_button,
					.learndash-wrapper .ld-focus .ld-focus-header .sfwd-mark-complete:after {
						color: var(--global-palette2) !important;
					}

					.learndash-wrapper .ld-secondary-in-progress-icon {
						border-left-color: var(--global-palette2) !important;
						border-top-color: var(--global-palette2) !important;
					}

					.learndash-wrapper .ld-alert-success {
						border-color: var(--global-palette2);
						background-color: transparent !important;
					}

					.learndash-wrapper .wpProQuiz_content .wpProQuiz_reviewQuestion li.wpProQuiz_reviewQuestionSolved,
					.learndash-wrapper .wpProQuiz_content .wpProQuiz_box li.wpProQuiz_reviewQuestionSolved {
						background-color: var(--global-palette2) !important;
					}

					.learndash-wrapper .wpProQuiz_content  .wpProQuiz_reviewLegend span.wpProQuiz_reviewColor_Answer {
						background-color: var(--global-palette2) !important;
					}

					
</style>
<style id='kadence-blocks-global-variables-inline-css'>
:root {--global-kb-font-size-sm:clamp(0.8rem, 0.73rem + 0.217vw, 0.9rem);--global-kb-font-size-md:clamp(1.1rem, 0.995rem + 0.326vw, 1.25rem);--global-kb-font-size-lg:clamp(1.75rem, 1.576rem + 0.543vw, 2rem);--global-kb-font-size-xl:clamp(2.25rem, 1.728rem + 1.63vw, 3rem);--global-kb-font-size-xxl:clamp(2.5rem, 1.456rem + 3.26vw, 4rem);--global-kb-font-size-xxxl:clamp(2.75rem, 0.489rem + 7.065vw, 6rem);}
</style>
<style id='kadence_blocks_css-inline-css'>
.kb-row-layout-id21_31a1c7-66 > .kt-row-column-wrap{padding-top:var( --global-kb-row-default-top, var(--global-kb-spacing-sm, 1.5rem) );padding-bottom:var( --global-kb-row-default-bottom, var(--global-kb-spacing-sm, 1.5rem) );grid-template-columns:repeat(2, minmax(0, 1fr));}@media all and (max-width: 767px){.kb-row-layout-id21_31a1c7-66 > .kt-row-column-wrap{grid-template-columns:minmax(0, 1fr);}}.kadence-column21_22a1ab-31 > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column21_22a1ab-31 > .kt-inside-inner-col{flex-direction:column;}.kadence-column21_22a1ab-31 > .kt-inside-inner-col > .aligncenter{width:100%;}@media all and (max-width: 1024px){.kadence-column21_22a1ab-31 > .kt-inside-inner-col{flex-direction:column;}}@media all and (max-width: 767px){.kadence-column21_22a1ab-31 > .kt-inside-inner-col{flex-direction:column;}}.kadence-column21_0fb190-c7 > .kt-inside-inner-col{column-gap:var(--global-kb-gap-sm, 1rem);}.kadence-column21_0fb190-c7 > .kt-inside-inner-col{flex-direction:column;}.kadence-column21_0fb190-c7 > .kt-inside-inner-col > .aligncenter{width:100%;}@media all and (max-width: 1024px){.kadence-column21_0fb190-c7 > .kt-inside-inner-col{flex-direction:column;}}@media all and (max-width: 767px){.kadence-column21_0fb190-c7 > .kt-inside-inner-col{flex-direction:column;}}.wp-block-kadence-advancedheading.kt-adv-heading21_a1d666-89, .wp-block-kadence-advancedheading.kt-adv-heading21_a1d666-89[data-kb-block="kb-adv-heading21_a1d666-89"]{text-align:right;}.wp-block-kadence-advancedheading.kt-adv-heading21_a1d666-89 mark.kt-highlight, .wp-block-kadence-advancedheading.kt-adv-heading21_a1d666-89[data-kb-block="kb-adv-heading21_a1d666-89"] mark.kt-highlight{-webkit-box-decoration-break:clone;box-decoration-break:clone;}
</style>
<script src="https://cloudnativebasecamp.com/wp-includes/js/jquery/jquery.min.js?ver=3.7.1" id="jquery-core-js"></script>
<script src="https://cloudnativebasecamp.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1" id="jquery-migrate-js"></script>
<script id="tt4b_ajax_script-js-extra">
var tt4b_script_vars = {"pixel_code":"CTT6ALJC77U4KUTGNJI0","currency":"USD","country":"EG","advanced_matching":"1"};
</script>
<script src="https://cloudnativebasecamp.com/wp-content/plugins/tiktok-for-business/admin/js/ajaxSnippet.js?ver=v1" id="tt4b_ajax_script-js"></script>
<script src="https://cloudnativebasecamp.com/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js?ver=2.7.0-wc.9.9.5" id="jquery-blockui-js" defer data-wp-strategy="defer"></script>
<script id="wc-add-to-cart-js-extra">
var wc_add_to_cart_params = {"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/?wc-ajax=%%endpoint%%","i18n_view_cart":"View cart","cart_url":"https:\/\/cloudnativebasecamp.com\/cart\/","is_cart":"","cart_redirect_after_add":"no"};
</script>
<script src="https://cloudnativebasecamp.com/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js?ver=9.9.5" id="wc-add-to-cart-js" defer data-wp-strategy="defer"></script>
<script src="https://cloudnativebasecamp.com/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js?ver=2.1.4-wc.9.9.5" id="js-cookie-js" defer data-wp-strategy="defer"></script>
<script id="woocommerce-js-extra">
var woocommerce_params = {"ajax_url":"\/wp-admin\/admin-ajax.php","wc_ajax_url":"\/?wc-ajax=%%endpoint%%","i18n_password_show":"Show password","i18n_password_hide":"Hide password"};
</script>
<script src="https://cloudnativebasecamp.com/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js?ver=9.9.5" id="woocommerce-js" defer data-wp-strategy="defer"></script>
<script src="https://stats.wp.com/s-202536.js" id="woocommerce-analytics-js" defer data-wp-strategy="defer"></script>
<link rel="https://api.w.org/" href="https://cloudnativebasecamp.com/wp-json/" /><link rel="alternate" title="JSON" type="application/json" href="https://cloudnativebasecamp.com/wp-json/wp/v2/sfwd-courses/21" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://cloudnativebasecamp.com/xmlrpc.php?rsd" />
<meta name="generator" content="WordPress 6.8.2" />
<meta name="generator" content="WooCommerce 9.9.5" />
<link rel="canonical" href="https://cloudnativebasecamp.com/courses/ds01/" />
<link rel='shortlink' href='https://cloudnativebasecamp.com/?p=21' />
<link rel="alternate" title="oEmbed (JSON)" type="application/json+oembed" href="https://cloudnativebasecamp.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fcloudnativebasecamp.com%2Fcourses%2Fds01%2F" />
<link rel="alternate" title="oEmbed (XML)" type="text/xml+oembed" href="https://cloudnativebasecamp.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fcloudnativebasecamp.com%2Fcourses%2Fds01%2F&#038;format=xml" />
		<script type="text/javascript">
				(function(c,l,a,r,i,t,y){
					c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;
					t.src="https://www.clarity.ms/tag/"+i+"?ref=wordpress";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
				})(window, document, "clarity", "script", "nk5hk727ou");
		</script>
		
<!-- Google Tag Manager for WordPress by gtm4wp.com -->
<!-- GTM Container placement set to automatic -->
<script data-cfasync="false" data-pagespeed-no-defer>
	var dataLayer_content = {"pagePostType":"sfwd-courses","pagePostType2":"single-sfwd-courses","pagePostAuthor":"Metwally","customerTotalOrders":1,"customerTotalOrderValue":39,"customerFirstName":"Ibrahim","customerLastName":"Fakhrhy","customerBillingFirstName":"Ibrahim","customerBillingLastName":"Fakhrhy","customerBillingCompany":"","customerBillingAddress1":18,"customerBillingAddress2":"Tharwat","customerBillingCity":"Alexandria","customerBillingState":"EGALX","customerBillingPostcode":"","customerBillingCountry":"EG","customerBillingEmail":"ibrahim.fakhry93@yahoo.com","customerBillingEmailHash":"e4e6b63d501288e7b7310a9bc24744c0d556c8170691cbba6bda169351597ff0","customerBillingPhone":201028788429,"customerShippingFirstName":"","customerShippingLastName":"","customerShippingCompany":"","customerShippingAddress1":"","customerShippingAddress2":"","customerShippingCity":"","customerShippingState":"","customerShippingPostcode":"","customerShippingCountry":""};
	dataLayer.push( dataLayer_content );
</script>
<script data-cfasync="false" data-pagespeed-no-defer>
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5V46HLNP');
</script>
<!-- End Google Tag Manager for WordPress by gtm4wp.com --><script type="text/javascript">
           var ajaxurl = "https://cloudnativebasecamp.com/wp-admin/admin-ajax.php";
         </script>	<noscript><style>.woocommerce-product-gallery{ opacity: 1 !important; }</style></noscript>
	<style>.recentcomments a{display:inline !important;padding:0 !important;margin:0 !important;}</style>			<script  type="text/javascript">
				!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
					n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
					n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
					t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
					document,'script','https://connect.facebook.net/en_US/fbevents.js');
			</script>
			<!-- WooCommerce Facebook Integration Begin -->
			<script  type="text/javascript">

				fbq('init', '2516399868556194', {}, {
    "agent": "woocommerce-9.9.5-3.5.3"
});

				document.addEventListener( 'DOMContentLoaded', function() {
					// Insert placeholder for events injected when a product is added to the cart through AJAX.
					document.body.insertAdjacentHTML( 'beforeend', '<div class=\"wc-facebook-pixel-event-placeholder\"></div>' );
				}, false );

			</script>
			<!-- WooCommerce Facebook Integration End -->
			<link rel='stylesheet' id='kadence-fonts-css' href='https://fonts.googleapis.com/css?family=Work%20Sans:regular,700&#038;display=swap' media='all' />
<link rel="icon" href="https://cloudnativebasecamp.com/wp-content/uploads/2024/04/cropped-logo-32x32.png" sizes="32x32" />
<link rel="icon" href="https://cloudnativebasecamp.com/wp-content/uploads/2024/04/cropped-logo-192x192.png" sizes="192x192" />
<link rel="apple-touch-icon" href="https://cloudnativebasecamp.com/wp-content/uploads/2024/04/cropped-logo-180x180.png" />
<meta name="msapplication-TileImage" content="https://cloudnativebasecamp.com/wp-content/uploads/2024/04/cropped-logo-270x270.png" />
<style type="text/css" id="wp-custom-css">.rtl {
	direction: rtl;
}

.rimg {
	border-radius: 10px;
}

.woocommerce-notices-wrapper
{
	display: none;
}

.ld-course-status-not-enrolled
{
	display: none !important;
}

.order-overview
{
	display: none !important;
}

.logged-in .button-class
display: none;
}

.met-link {
	background-color: #FFEB00;
}

.bg-y {
	background-color: #FFEB00;
	color: black;
	padding: 5px;
}

.met_user_info {
	background-color: #FFEB00;
	font-weight: bold;
	padding: 0px 10px;
	color: #222222
}
#kadence-breadcrumbs,
.wc-tabs{
    display: none !important;
}
.woocommerce-Tabs-panel h2, 
.woocommerce-Tabs-panel#tab-additional_information h2 {
    font-size: 14pt !important;
    margin-bottom: 15px;
    text-transform: none;
font-weight: normal;
}
.woocommerce span.onsale {
    display: none !important;
}

/* تصغير صورة المنتج على الشاشات الكبيرة فقط */
@media (min-width: 1024px) {
  .woocommerce div.product div.images {
    max-width: 400px;
    margin: 0 auto;
  }

  .woocommerce div.product div.summary {
    flex: 1;
  }
}

.woocommerce-checkout-review-order-table .cart-subtotal {
    display: none !important;
}</style><script data-ampdevmode type="text/javascript">
/* <![CDATA[ */
	var wpNotesIsJetpackClient = true;
	var wpNotesIsJetpackClientV2 = true;
			var wpNotesLinkAccountsURL = 'https://cloudnativebasecamp.com/wp-admin/admin.php?page=jetpack';
/* ]]> */
	window.addEventListener('message', function ( event ) {
		// Confirm that the message is from the right origin.
		if ('https://widgets.wp.com' !== event.origin) {
			return;
		}
		// Check whether 3rd Party Cookies are blocked
		var has3PCBlocked = 'WPCOM:3PC:blocked' === event.data;

		var tagerElement = document.getElementById('wp-admin-bar-notes');

		if ( has3PCBlocked && tagerElement ) {
			// Hide the notification button/icon
			tagerElement.style.display = 'none';
		}
	}, false );
</script>
			<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-PFMX1JR4R9">
	</script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'G-PFMX1JR4R9');
	</script>
</head>

<body class="wp-singular sfwd-courses-template-default single single-sfwd-courses postid-21 logged-in wp-custom-logo wp-embed-responsive wp-theme-kadence theme-kadence woocommerce-no-js footer-on-bottom hide-focus-outline link-style-standard content-title-style-hide content-width-normal content-style-boxed content-vertical-padding-show non-transparent-header mobile-non-transparent-header date-hidden categories-hidden author-hidden comment-hidden modula-best-grid-gallery learndash-cpt learndash-cpt-sfwd-courses learndash-template-ld30 learndash-embed-responsive">

<!-- GTM Container placement set to automatic -->
<!-- Google Tag Manager (noscript) -->
				<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5V46HLNP" height="0" width="0" style="display:none;visibility:hidden" aria-hidden="true"></iframe></noscript>
<!-- End Google Tag Manager (noscript) --><div id="wrapper" class="site wp-site-blocks">
			<a class="skip-link screen-reader-text scroll-ignore" href="#main">Skip to content</a>
		<header id="masthead" class="site-header" role="banner" itemtype="https://schema.org/WPHeader" itemscope>
	<div id="main-header" class="site-header-wrap">
		<div class="site-header-inner-wrap">
			<div class="site-header-upper-wrap">
				<div class="site-header-upper-inner-wrap">
					<div class="site-main-header-wrap site-header-row-container site-header-focus-item site-header-row-layout-standard" data-section="kadence_customizer_header_main">
	<div class="site-header-row-container-inner">
				<div class="site-container">
			<div class="site-main-header-inner-wrap site-header-row site-header-row-has-sides site-header-row-no-center">
									<div class="site-header-main-section-left site-header-section site-header-section-left">
						<div class="site-header-item site-header-focus-item" data-section="title_tagline">
	<div class="site-branding branding-layout-standard site-brand-logo-only"><a class="brand has-logo-image" href="https://cloudnativebasecamp.com/" rel="home"><img width="1630" height="500" src="https://cloudnativebasecamp.com/wp-content/uploads/2024/04/logo-fullname.png" class="custom-logo" alt="Cloud Native Base Camp" decoding="async" fetchpriority="high" srcset="https://cloudnativebasecamp.com/wp-content/uploads/2024/04/logo-fullname.png 1630w, https://cloudnativebasecamp.com/wp-content/uploads/2024/04/logo-fullname-300x92.png 300w, https://cloudnativebasecamp.com/wp-content/uploads/2024/04/logo-fullname-1024x314.png 1024w, https://cloudnativebasecamp.com/wp-content/uploads/2024/04/logo-fullname-768x236.png 768w, https://cloudnativebasecamp.com/wp-content/uploads/2024/04/logo-fullname-1536x471.png 1536w, https://cloudnativebasecamp.com/wp-content/uploads/2024/04/logo-fullname-600x184.png 600w" sizes="(max-width: 1630px) 100vw, 1630px" /></a></div></div><!-- data-section="title_tagline" -->
<div class="site-header-item site-header-focus-item site-header-item-main-navigation header-navigation-layout-stretch-false header-navigation-layout-fill-stretch-false" data-section="kadence_customizer_primary_navigation">
		<nav id="site-navigation" class="main-navigation header-navigation nav--toggle-sub header-navigation-style-standard header-navigation-dropdown-animation-none" role="navigation" aria-label="Primary Navigation">
				<div class="primary-menu-container header-menu-container">
			<ul id="primary-menu" class="menu"><li id="menu-item-8461" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-8461"><a href="https://cloudnativebasecamp.com/">الرئيسية</a></li>
<li id="menu-item-8625" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8625"><a href="https://cloudnativebasecamp.com/plans/">خطط الأشتراك</a></li>
<li id="menu-item-629" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-629"><a href="https://cloudnativebasecamp.com/courseslist/">الكورسات</a></li>
<li id="menu-item-8345" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8345"><a href="https://cloudnativebasecamp.com/blog/">Blog</a></li>
<li id="menu-item-898" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-898"><a href="https://cloudnativebasecamp.com/contact/">التواصل والمساعدة</a></li>
<li id="menu-item-10507" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-10507"><a href="#"><span class="nav-drop-title-wrap">المسارات التعليمية<span class="dropdown-nav-toggle"><span class="kadence-svg-iconset svg-baseline"><svg aria-hidden="true" class="kadence-svg-icon kadence-arrow-down-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Expand</title><path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
				</svg></span></span></span></a>
<ul class="sub-menu">
	<li id="menu-item-10506" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10506"><a href="https://cloudnativebasecamp.com/software-engineering-learning-path/">Software Engineering</a></li>
	<li id="menu-item-10505" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10505"><a href="https://cloudnativebasecamp.com/devops-learning-path/">DevOps</a></li>
</ul>
</li>
<li id="menu-item-634" class="ld-button met-link menu-item menu-item-type-custom menu-item-object-custom menu-item-634"><a href="https://cloudnativebasecamp.com/bab/?action=logout&#038;redirect_to=https%3A%2F%2Fcloudnativebasecamp.com%2Fcourses%2Fds01%2F&#038;_wpnonce=d851e92252">خروج</a></li>
</ul>		</div>
	</nav><!-- #site-navigation -->
	</div><!-- data-section="primary_navigation" -->
<div class="site-header-item site-header-focus-item" data-section="kadence_customizer_header_html">
	<div class="header-html inner-link-style-normal"><div class="header-html-inner"><div class="met_user_info">Ibrahim Fakhrhy</div>
</div></div></div><!-- data-section="header_html" -->
					</div>
																	<div class="site-header-main-section-right site-header-section site-header-section-right">
						<div class="site-header-item site-header-focus-item" data-section="kadence_customizer_header_button">
	</div><!-- data-section="header_button" -->
					</div>
							</div>
		</div>
	</div>
</div>
				</div>
			</div>
					</div>
	</div>
	
<div id="mobile-header" class="site-mobile-header-wrap">
	<div class="site-header-inner-wrap">
		<div class="site-header-upper-wrap">
			<div class="site-header-upper-inner-wrap">
			<div class="site-main-header-wrap site-header-focus-item site-header-row-layout-standard site-header-row-tablet-layout-default site-header-row-mobile-layout-default ">
	<div class="site-header-row-container-inner">
		<div class="site-container">
			<div class="site-main-header-inner-wrap site-header-row site-header-row-has-sides site-header-row-no-center">
									<div class="site-header-main-section-left site-header-section site-header-section-left">
						<div class="site-header-item site-header-focus-item" data-section="title_tagline">
	<div class="site-branding mobile-site-branding branding-layout-standard branding-tablet-layout-inherit site-brand-logo-only branding-mobile-layout-inherit"><a class="brand has-logo-image" href="https://cloudnativebasecamp.com/" rel="home"><img width="1630" height="500" src="https://cloudnativebasecamp.com/wp-content/uploads/2024/04/logo-fullname.png" class="custom-logo" alt="Cloud Native Base Camp" decoding="async" srcset="https://cloudnativebasecamp.com/wp-content/uploads/2024/04/logo-fullname.png 1630w, https://cloudnativebasecamp.com/wp-content/uploads/2024/04/logo-fullname-300x92.png 300w, https://cloudnativebasecamp.com/wp-content/uploads/2024/04/logo-fullname-1024x314.png 1024w, https://cloudnativebasecamp.com/wp-content/uploads/2024/04/logo-fullname-768x236.png 768w, https://cloudnativebasecamp.com/wp-content/uploads/2024/04/logo-fullname-1536x471.png 1536w, https://cloudnativebasecamp.com/wp-content/uploads/2024/04/logo-fullname-600x184.png 600w" sizes="(max-width: 1630px) 100vw, 1630px" /></a></div></div><!-- data-section="title_tagline" -->
					</div>
																	<div class="site-header-main-section-right site-header-section site-header-section-right">
						<div class="site-header-item site-header-focus-item site-header-item-navgation-popup-toggle" data-section="kadence_customizer_mobile_trigger">
		<div class="mobile-toggle-open-container">
						<button id="mobile-toggle" class="menu-toggle-open drawer-toggle menu-toggle-style-default" aria-label="Open menu" data-toggle-target="#mobile-drawer" data-toggle-body-class="showing-popup-drawer-from-right" aria-expanded="false" data-set-focus=".menu-toggle-close"
					>
						<span class="menu-toggle-icon"><span class="kadence-svg-iconset"><svg class="kadence-svg-icon kadence-menu2-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28"><title>Toggle Menu</title><path d="M24 21v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 13v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 5v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1z"></path>
				</svg></span></span>
		</button>
	</div>
	</div><!-- data-section="mobile_trigger" -->
					</div>
							</div>
		</div>
	</div>
</div>
			</div>
		</div>
			</div>
</div>
</header><!-- #masthead -->

	<div id="inner-wrap" class="wrap hfeed kt-clear">
		<div id="primary" class="content-area">
	<div class="content-container site-container">
		<main id="main" class="site-main" role="main">
			<div class="woocommerce kadence-woo-messages-none-woo-pages woocommerce-notices-wrapper"></div>			<div class="content-wrap">
					<div class="post-thumbnail article-post-thumbnail kadence-thumbnail-position-above kadence-thumbnail-ratio-inherit">
		<div class="post-thumbnail-inner">
			<img width="960" height="540" src="https://cloudnativebasecamp.com/wp-content/uploads/2022/10/ds-all-sessions-cover.jpg" class="post-top-featured wp-post-image" alt="" decoding="async" srcset="https://cloudnativebasecamp.com/wp-content/uploads/2022/10/ds-all-sessions-cover.jpg 960w, https://cloudnativebasecamp.com/wp-content/uploads/2022/10/ds-all-sessions-cover-300x169.jpg 300w, https://cloudnativebasecamp.com/wp-content/uploads/2022/10/ds-all-sessions-cover-768x432.jpg 768w, https://cloudnativebasecamp.com/wp-content/uploads/2022/10/ds-all-sessions-cover-200x113.jpg 200w, https://cloudnativebasecamp.com/wp-content/uploads/2022/10/ds-all-sessions-cover-600x338.jpg 600w" sizes="(max-width: 960px) 100vw, 960px" />		</div>
	</div><!-- .post-thumbnail -->
			<article id="post-21" class="entry content-bg single-entry post-21 sfwd-courses type-sfwd-courses status-publish has-post-thumbnail hentry">
	<div class="entry-content-wrap">
		
<div class="entry-content single-content">
	<div class="learndash learndash_post_sfwd-courses user_has_access"  id="learndash_post_21">
<div class="learndash-wrapper">

	<div class="learndash-wrapper learndash-wrap learndash-shortcode-wrap learndash-shortcode-wrap-ld_infobar-21_21_6696">

	<div class="ld-course-status ld-course-status-enrolled">

			<div class="ld-progress
			ld-progress-inline">
					<div class="ld-progress-heading">
								<div class="ld-progress-stats">
					<div class="ld-progress-percentage ld-secondary-color">
					95% انت خلصت					</div>
					<div class="ld-progress-steps rtl">
						اخر مرة درست الكورس ده  2025-07-19 13:11 pm					</div>
				</div> <!--/.ld-progress-stats-->
			</div>

			<div class="ld-progress-bar">
				<div class="ld-progress-bar-percentage ld-secondary-background" style="width:95%"></div>
			</div>
				</div> <!--/.ld-progress-->
	<div class="ld-status ld-status-progress ld-primary-background">In Progress</div>
	</div> <!--/.ld-course-status-->


</div>
	
<div class="ld-tabs ld-tab-count-1">
	
	<div class="ld-tabs-content">
		
			<div role="tabpanel" tabindex="0" aria-labelledby="content" class="ld-tab-content ld-visible" id="ld-tab-content-21">
								
<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
<iframe title="الفيديو التعريفي لكورس فك شفرة هياكل البيانات Data Structures Decode" width="720" height="405" src="https://www.youtube.com/embed/eu1hE6gLn6E?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div></figure>





<style>
    .dashcardscontainer {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }
    
    .main__content {
        padding: 20px;
    }
    
    .dashcards {
        display: flex;
        flex-wrap: wrap;
        margin-left: -10px;
        margin-right: -10px;
        padding: 0 10px;
    }
    
    .dashcardsrow {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: 100%;
    }
    
    .dashcardscol {
        flex: 1 1 calc(33.333% - 20px);
        padding: 0 10px;
        margin-bottom: 20px;
        min-width: 250px;
    }
    
    .dashcardscard {
        background: #4ca760;
        padding: 20px;
        color: white;
        border-radius: 10px;
        height: 100%;
        box-sizing: border-box;
        transition: transform 0.3s ease;
    }
    
    .dashcardscard:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    
    .card__subtitle {
        color: white;
        margin: 0 0 1em 0;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.875rem;
    }
    
    .card__title {
        color: white;
        margin: 0;
        font-size: 2.5em;
    }
    
    .card__extra {
        color: white;
        margin: 0.5em 0 0;
        font-size: 0.9rem;
    }
    
    .table-card {
        background: white;
        padding: 20px;
        border-radius: 5px;
    }
    
    .fas {
        margin-bottom: 10px;
        font-size: 1.5rem;
    }
    
    /* Media Queries */
    @media (max-width: 992px) {
        .dashcardscol {
            flex: 1 1 calc(50% - 20px);
        }
    }
    
    @media (max-width: 768px) {
        .dashcardscontainer {
            max-width: 100%;
        }
        
        .card__title {
            font-size: 2.2em;
        }
    }
    
    @media (max-width: 576px) {
        .dashcardscol {
            flex: 1 1 100%;
        }
        
        .main__content {
            padding: 15px 10px;
        }
        
        .dashcards {
            padding: 0;
            margin-left: 0;
            margin-right: 0;
        }
        
        .dashcardscard {
            padding: 15px;
        }
        
        .card__title {
            font-size: 2em;
        }
    }
</style>

<div class='dashcardscontainer'>
    <div class='main__content'>
        <div class='dashcards'>
            <div class='dashcardscol'>
                <div class='dashcardscard'>
                    <i class='fas fa-home'></i>
                    <h5 class='card__subtitle'>Lessons</h5>
                    <h2 class='card__title'>23</h2>
                    <p class='card__extra'>video lessons</p>
                </div>
            </div>
            <div class='dashcardscol'>
                <div class='dashcardscard'>
                    <i class='fas fa-home'></i>
                    <h5 class='card__subtitle'>Hours</h5>
                    <h2 class='card__title'>11</h2>
                    <p class='card__extra'>almost</p>
                </div>
            </div>
            <div class='dashcardscol'>
                <div class='dashcardscard' id='tour-card'>
                    <i class='fas fa-home'></i>
                    <h5 class='card__subtitle'>Required Study Hours</h5>
                    <h2 class='card__title'>20-40</h2>
                    <p class='card__extra'>Just estimation. the real study hours is up to you.</p>
                </div>
            </div>
        </div>
    </div>
</div>
			</div>

			
	</div> <!--/.ld-tabs-content-->

</div> <!--/.ld-tabs-->
<div class="learndash-wrapper learndash-wrap learndash-shortcode-wrap learndash-shortcode-wrap-course_content-21_21_6696"><div class="learndash user_has_access" id="learndash_post_21">		<div class="learndash-wrapper">
						<div class="ld-item-list ld-lesson-list ld-course-content-21" data-shortcode_instance="{&quot;course_id&quot;:21,&quot;post_id&quot;:21,&quot;group_id&quot;:0,&quot;paged&quot;:1,&quot;num&quot;:100,&quot;wrapper&quot;:true,&quot;user_id&quot;:6696}">
			<div class="ld-section-heading">

				
				<h2>
				محتويات الكورس				</h2>

				
				<div class="ld-item-list-actions" data-ld-expand-list="true">

					
					
				</div> <!--/.ld-item-list-actions-->
			</div> <!--/.ld-section-heading-->

			
	<div class="ld-item-list-items  ld-item-list-21" id="ld-item-list-21" data-ld-expand-id="ld-item-list-21" data-ld-expand-list="true">
		
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-2163 is_not_sample learndash-complete" id="ld-expand-2163" data-ld-expand-id="ld-expand-2163" >
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/01-data-memory/">
			<div class="ld-status-icon ld-status-complete ld-secondary-background"><span class="ld-icon-checkmark ld-icon"></span></div>			<div class="ld-item-title">
				01 &#8211; Data &#038; Memory
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-2165 is_not_sample learndash-complete" id="ld-expand-2165" data-ld-expand-id="ld-expand-2165" >
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/02-datatypes-memory/">
			<div class="ld-status-icon ld-status-complete ld-secondary-background"><span class="ld-icon-checkmark ld-icon"></span></div>			<div class="ld-item-title">
				02 &#8211; DataTypes &#038; Memory
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-2167 is_not_sample learndash-complete" id="ld-expand-2167" data-ld-expand-id="ld-expand-2167" >
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/03-array-introduction/">
			<div class="ld-status-icon ld-status-complete ld-secondary-background"><span class="ld-icon-checkmark ld-icon"></span></div>			<div class="ld-item-title">
				03 &#8211; Array &#8211; Introduction
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-2169 is_not_sample learndash-complete" id="ld-expand-2169" data-ld-expand-id="ld-expand-2169" >
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/04-array-operations-implementation/">
			<div class="ld-status-icon ld-status-complete ld-secondary-background"><span class="ld-icon-checkmark ld-icon"></span></div>			<div class="ld-item-title">
				04 &#8211; Array &#8211; Operations Implementation
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-2172 is_not_sample learndash-complete" id="ld-expand-2172" data-ld-expand-id="ld-expand-2172" >
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/05-linked-list-introduction-singly-list-implementation/">
			<div class="ld-status-icon ld-status-complete ld-secondary-background"><span class="ld-icon-checkmark ld-icon"></span></div>			<div class="ld-item-title">
				05 &#8211; Linked List &#8211; Introduction &#8211; Singly list implementation
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-2174 is_not_sample learndash-complete" id="ld-expand-2174" data-ld-expand-id="ld-expand-2174" >
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/06-linked-list-singly-list-implementation-2/">
			<div class="ld-status-icon ld-status-complete ld-secondary-background"><span class="ld-icon-checkmark ld-icon"></span></div>			<div class="ld-item-title">
				06 &#8211; Linked List &#8211; Singly list implementation 2
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-2176 is_not_sample learndash-complete" id="ld-expand-2176" data-ld-expand-id="ld-expand-2176" >
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/07-linked-list-doubly-list-implementation/">
			<div class="ld-status-icon ld-status-complete ld-secondary-background"><span class="ld-icon-checkmark ld-icon"></span></div>			<div class="ld-item-title">
				07 &#8211; Linked List &#8211; Doubly list implementation
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-2178 is_not_sample learndash-complete" id="ld-expand-2178" data-ld-expand-id="ld-expand-2178" >
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/08-linked-list-vs-array-time-complexity/">
			<div class="ld-status-icon ld-status-complete ld-secondary-background"><span class="ld-icon-checkmark ld-icon"></span></div>			<div class="ld-item-title">
				08 &#8211; Linked List VS Array Time Complexity
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-2682 is_not_sample learndash-complete" id="ld-expand-2682" data-ld-expand-id="ld-expand-2682" >
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/09-linked-list-implementation-javascript/">
			<div class="ld-status-icon ld-status-complete ld-secondary-background"><span class="ld-icon-checkmark ld-icon"></span></div>			<div class="ld-item-title">
				09 &#8211; Linked List implementation &#8211; JavaScript
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-2684 is_not_sample learndash-complete" id="ld-expand-2684" data-ld-expand-id="ld-expand-2684" >
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/10-stack-linked-list-based-implementation/">
			<div class="ld-status-icon ld-status-complete ld-secondary-background"><span class="ld-icon-checkmark ld-icon"></span></div>			<div class="ld-item-title">
				10 &#8211; Stack &#8211; Linked List based &#8211; implementation
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-2688 is_not_sample learndash-complete" id="ld-expand-2688" data-ld-expand-id="ld-expand-2688" >
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/11-stack-array-based-implementation-2/">
			<div class="ld-status-icon ld-status-complete ld-secondary-background"><span class="ld-icon-checkmark ld-icon"></span></div>			<div class="ld-item-title">
				11 &#8211; Stack &#8211; Array based &#8211; Implementation
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-2730 is_not_sample learndash-complete" id="ld-expand-2730" data-ld-expand-id="ld-expand-2730" >
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/12-queue-linked-list-based-implementation/">
			<div class="ld-status-icon ld-status-complete ld-secondary-background"><span class="ld-icon-checkmark ld-icon"></span></div>			<div class="ld-item-title">
				12 &#8211; Queue &#8211; Linked List Based &#8211; Implementation
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-2880 is_not_sample learndash-complete" id="ld-expand-2880" data-ld-expand-id="ld-expand-2880" >
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/13-keyvaluepair-dictionary-implementation/">
			<div class="ld-status-icon ld-status-complete ld-secondary-background"><span class="ld-icon-checkmark ld-icon"></span></div>			<div class="ld-item-title">
				13 &#8211; KeyValuePair &#8211; Dictionary &#8211; Implementation
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-2882 is_not_sample learndash-complete" id="ld-expand-2882" data-ld-expand-id="ld-expand-2882" >
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/14-hashing-introduction-fnv-1a-implementation/">
			<div class="ld-status-icon ld-status-complete ld-secondary-background"><span class="ld-icon-checkmark ld-icon"></span></div>			<div class="ld-item-title">
				14 &#8211; Hashing &#8211; Introduction &#8211; FNV-1a Implementation
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-2884 is_not_sample learndash-complete" id="ld-expand-2884" data-ld-expand-id="ld-expand-2884" >
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/15-hash-table-introduction/">
			<div class="ld-status-icon ld-status-complete ld-secondary-background"><span class="ld-icon-checkmark ld-icon"></span></div>			<div class="ld-item-title">
				15 &#8211; Hash Table &#8211; Introduction
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-2886 is_not_sample learndash-incomplete" id="ld-expand-2886" data-ld-expand-id="ld-expand-2886" >
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/16-hash-table-implementation/">
			<div class="ld-status-icon ld-status-incomplete"></div>			<div class="ld-item-title">
				16 &#8211; Hash Table &#8211; Implementation
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-2941 is_not_sample learndash-complete" id="ld-expand-2941" data-ld-expand-id="ld-expand-2941" >
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/17-introduction-to-trees-binary-tree-implementation-01/">
			<div class="ld-status-icon ld-status-complete ld-secondary-background"><span class="ld-icon-checkmark ld-icon"></span></div>			<div class="ld-item-title">
				17 &#8211; Introduction to Trees &#8211; Binary Tree &#8211; Implementation 01
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-2943 is_not_sample learndash-complete" id="ld-expand-2943" data-ld-expand-id="ld-expand-2943" >
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/18-binary-tree-implementation-02/">
			<div class="ld-status-icon ld-status-complete ld-secondary-background"><span class="ld-icon-checkmark ld-icon"></span></div>			<div class="ld-item-title">
				18 &#8211; Binary Tree &#8211; Implementation 02
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-3026 is_not_sample learndash-complete" id="ld-expand-3026" data-ld-expand-id="ld-expand-3026" >
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/19-binary-search-tree-introduction-inset-find/">
			<div class="ld-status-icon ld-status-complete ld-secondary-background"><span class="ld-icon-checkmark ld-icon"></span></div>			<div class="ld-item-title">
				19 &#8211; Binary Search Tree &#8211; Introduction &#8211; Insert &#8211; Find
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-3031 is_not_sample learndash-complete" id="ld-expand-3031" data-ld-expand-id="ld-expand-3031" >
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/20-binary-search-tree-delete/">
			<div class="ld-status-icon ld-status-complete ld-secondary-background"><span class="ld-icon-checkmark ld-icon"></span></div>			<div class="ld-item-title">
				20 &#8211; Binary Search Tree &#8211; Delete
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-3034 is_not_sample learndash-complete" id="ld-expand-3034" data-ld-expand-id="ld-expand-3034" >
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/21-binary-search-tree-balance/">
			<div class="ld-status-icon ld-status-complete ld-secondary-background"><span class="ld-icon-checkmark ld-icon"></span></div>			<div class="ld-item-title">
				21 &#8211; Binary Search Tree &#8211; Balance
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-3137 is_not_sample learndash-complete" id="ld-expand-3137" data-ld-expand-id="ld-expand-3137" >
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/22-heap-implementation/">
			<div class="ld-status-icon ld-status-complete ld-secondary-background"><span class="ld-icon-checkmark ld-icon"></span></div>			<div class="ld-item-title">
				22 – Heap – Implementation
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
	
<div class="ld-item-list-item ld-item-lesson-item ld-lesson-item-3139 is_not_sample learndash-complete" id="ld-expand-3139" data-ld-expand-id="ld-expand-3139" >
	<div class="ld-item-list-item-preview">
		
		<a class="ld-item-name ld-primary-color-hover" href="https://cloudnativebasecamp.com/lessons/23-priorityqueue/">
			<div class="ld-status-icon ld-status-complete ld-secondary-background"><span class="ld-icon-checkmark ld-icon"></span></div>			<div class="ld-item-title">
				23 – PriorityQueue
			</div> <!--/.ld-item-title-->
		</a>

		
		<div class="ld-item-details">
					</div> <!--/.ld-item-details-->

		
	</div> <!--/.ld-item-list-item-preview-->
	</div> <!--/.ld-item-list-item-->
		</div> <!--/.ld-item-list-items-->

		</div> <!--/.ld-item-list-->

			</div> <!--/.learndash-wrapper-->
		</div></div></div>
</div></div><!-- .entry-content -->
	</div>
</article><!-- #post-21 -->

			</div>
					</main><!-- #main -->
			</div>
</div><!-- #primary -->
	</div><!-- #inner-wrap -->
	<footer id="colophon" class="site-footer" role="contentinfo">
	<div class="site-footer-wrap">
		<div class="site-top-footer-wrap site-footer-row-container site-footer-focus-item site-footer-row-layout-standard site-footer-row-tablet-layout-default site-footer-row-mobile-layout-default" data-section="kadence_customizer_footer_top">
	<div class="site-footer-row-container-inner">
				<div class="site-container">
			<div class="site-top-footer-inner-wrap site-footer-row site-footer-row-columns-2 site-footer-row-column-layout-right-golden site-footer-row-tablet-column-layout-default site-footer-row-mobile-column-layout-row ft-ro-dir-column ft-ro-collapse-normal ft-ro-t-dir-default ft-ro-m-dir-default ft-ro-lstyle-plain">
									<div class="site-footer-top-section-1 site-footer-section footer-section-inner-items-2">
						<div class="footer-widget-area widget-area site-footer-focus-item footer-widget4 content-align-default content-tablet-align-default content-mobile-align-default content-valign-default content-tablet-valign-default content-mobile-valign-default" data-section="sidebar-widgets-footer4">
	<div class="footer-widget-area-inner site-info-inner">
		<section id="custom_html-1" class="widget_text widget widget_custom_html"><h2 class="widget-title">Cloud Native Base Camp</h2><div class="textwidget custom-html-widget">the missing courses for developers and devops heros. Provided by Metwally Labs, LLC.</div></section>	</div>
</div><!-- .footer-widget4 -->
<div class="footer-widget-area widget-area site-footer-focus-item footer-social content-align-default content-tablet-align-default content-mobile-align-default content-valign-default content-tablet-valign-default content-mobile-valign-default" data-section="kadence_customizer_footer_social">
	<div class="footer-widget-area-inner footer-social-inner">
		<div class="footer-social-wrap"><div class="footer-social-inner-wrap element-social-inner-wrap social-show-label-false social-style-filled"><a href="https://www.facebook.com/metwallylabs/" aria-label="Facebook" target="_blank" rel="noopener noreferrer"  class="social-button footer-social-item social-link-facebook"><span class="kadence-svg-iconset"><svg class="kadence-svg-icon kadence-facebook-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>Facebook</title><path d="M31.997 15.999c0-8.836-7.163-15.999-15.999-15.999s-15.999 7.163-15.999 15.999c0 7.985 5.851 14.604 13.499 15.804v-11.18h-4.062v-4.625h4.062v-3.525c0-4.010 2.389-6.225 6.043-6.225 1.75 0 3.581 0.313 3.581 0.313v3.937h-2.017c-1.987 0-2.607 1.233-2.607 2.498v3.001h4.437l-0.709 4.625h-3.728v11.18c7.649-1.2 13.499-7.819 13.499-15.804z"></path>
				</svg></span></a><a href="https://twitter.com/metwallylabs" aria-label="Twitter" target="_blank" rel="noopener noreferrer"  class="social-button footer-social-item social-link-twitter"><span class="kadence-svg-iconset"><svg class="kadence-svg-icon kadence-twitter-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28"><title>Twitter</title><path d="M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z"></path>
				</svg></span></a><a href="https://www.facebook.com/groups/aws.egypt.club" aria-label="Facebook Group" target="_blank" rel="noopener noreferrer"  class="social-button footer-social-item social-link-facebook_group"><span class="kadence-svg-iconset"><svg class="kadence-svg-icon kadence-facebook-group-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 30 28"><title>Facebook Group</title><path d="M9.266 14c-1.625 0.047-3.094 0.75-4.141 2h-2.094c-1.563 0-3.031-0.75-3.031-2.484 0-1.266-0.047-5.516 1.937-5.516 0.328 0 1.953 1.328 4.062 1.328 0.719 0 1.406-0.125 2.078-0.359-0.047 0.344-0.078 0.688-0.078 1.031 0 1.422 0.453 2.828 1.266 4zM26 23.953c0 2.531-1.672 4.047-4.172 4.047h-13.656c-2.5 0-4.172-1.516-4.172-4.047 0-3.531 0.828-8.953 5.406-8.953 0.531 0 2.469 2.172 5.594 2.172s5.063-2.172 5.594-2.172c4.578 0 5.406 5.422 5.406 8.953zM10 4c0 2.203-1.797 4-4 4s-4-1.797-4-4 1.797-4 4-4 4 1.797 4 4zM21 10c0 3.313-2.688 6-6 6s-6-2.688-6-6 2.688-6 6-6 6 2.688 6 6zM30 13.516c0 1.734-1.469 2.484-3.031 2.484h-2.094c-1.047-1.25-2.516-1.953-4.141-2 0.812-1.172 1.266-2.578 1.266-4 0-0.344-0.031-0.688-0.078-1.031 0.672 0.234 1.359 0.359 2.078 0.359 2.109 0 3.734-1.328 4.062-1.328 1.984 0 1.937 4.25 1.937 5.516zM28 4c0 2.203-1.797 4-4 4s-4-1.797-4-4 1.797-4 4-4 4 1.797 4 4z"></path>
				</svg></span></a></div></div>	</div>
</div><!-- data-section="footer_social" -->
					</div>
										<div class="site-footer-top-section-2 site-footer-section footer-section-inner-items-1">
						
<div class="footer-widget-area site-info site-footer-focus-item content-align-default content-tablet-align-default content-mobile-align-default content-valign-default content-tablet-valign-default content-mobile-valign-default" data-section="kadence_customizer_footer_html">
	<div class="footer-widget-area-inner site-info-inner">
		<div class="footer-html inner-link-style-normal"><div class="footer-html-inner"><p>المحتوى محمي بقوانين حماية الملكية الفكرية واى تحميل او مشاركة للمحتوى تعتبر سرقة بموجب القانون</p>
</div></div>	</div>
</div><!-- .site-info -->
					</div>
								</div>
		</div>
	</div>
</div>
	</div>
</footer><!-- #colophon -->

</div><!-- #wrapper -->

			<script>document.documentElement.style.setProperty('--scrollbar-offset', window.innerWidth - document.documentElement.clientWidth + 'px' );</script>
						<!-- Facebook Pixel Code -->
			<noscript>
				<img
					height="1"
					width="1"
					style="display:none"
					alt="fbpx"
					src="https://www.facebook.com/tr?id=2516399868556194&ev=PageView&noscript=1"
				/>
			</noscript>
			<!-- End Facebook Pixel Code -->
				<script>
		(function () {
			var c = document.body.className;
			c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
			document.body.className = c;
		})();
	</script>
		<div id="mobile-drawer" class="popup-drawer popup-drawer-layout-sidepanel popup-drawer-animation-fade popup-drawer-side-right" data-drawer-target-string="#mobile-drawer"
			>
		<div class="drawer-overlay" data-drawer-target-string="#mobile-drawer"></div>
		<div class="drawer-inner">
						<div class="drawer-header">
				<button class="menu-toggle-close drawer-toggle" aria-label="Close menu"  data-toggle-target="#mobile-drawer" data-toggle-body-class="showing-popup-drawer-from-right" aria-expanded="false" data-set-focus=".menu-toggle-open"
							>
					<span class="toggle-close-bar"></span>
					<span class="toggle-close-bar"></span>
				</button>
			</div>
			<div class="drawer-content mobile-drawer-content content-align-right content-valign-top">
								<div class="site-header-item site-header-focus-item" data-section="kadence_customizer_mobile_html">
	<div class="mobile-html inner-link-style-normal"><div class="mobile-html-inner"><div class="met_user_info">Ibrahim Fakhrhy</div>
</div></div></div><!-- data-section="mobile_html" -->
<div class="site-header-item site-header-focus-item site-header-item-mobile-navigation mobile-navigation-layout-stretch-false" data-section="kadence_customizer_mobile_navigation">
		<nav id="mobile-site-navigation" class="mobile-navigation drawer-navigation drawer-navigation-parent-toggle-false" role="navigation" aria-label="Primary Mobile Navigation">
				<div class="mobile-menu-container drawer-menu-container">
			<ul id="mobile-menu" class="menu has-collapse-sub-nav"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-8461"><a href="https://cloudnativebasecamp.com/">الرئيسية</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8625"><a href="https://cloudnativebasecamp.com/plans/">خطط الأشتراك</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-629"><a href="https://cloudnativebasecamp.com/courseslist/">الكورسات</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8345"><a href="https://cloudnativebasecamp.com/blog/">Blog</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-898"><a href="https://cloudnativebasecamp.com/contact/">التواصل والمساعدة</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-10507"><div class="drawer-nav-drop-wrap"><a href="#">المسارات التعليمية</a><button class="drawer-sub-toggle" data-toggle-duration="10" data-toggle-target="#mobile-menu .menu-item-10507 &gt; .sub-menu" aria-expanded="false"><span class="screen-reader-text">Toggle child menu</span><span class="kadence-svg-iconset"><svg aria-hidden="true" class="kadence-svg-icon kadence-arrow-down-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Expand</title><path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
				</svg></span></button></div>
<ul class="sub-menu">
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10506"><a href="https://cloudnativebasecamp.com/software-engineering-learning-path/">Software Engineering</a></li>
	<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10505"><a href="https://cloudnativebasecamp.com/devops-learning-path/">DevOps</a></li>
</ul>
</li>
<li class="ld-button met-link menu-item menu-item-type-custom menu-item-object-custom menu-item-634"><a href="https://cloudnativebasecamp.com/bab/?action=logout&#038;redirect_to=https%3A%2F%2Fcloudnativebasecamp.com%2Fcourses%2Fds01%2F&#038;_wpnonce=d851e92252">خروج</a></li>
</ul>		</div>
	</nav><!-- #site-navigation -->
	</div><!-- data-section="mobile_navigation" -->
<div class="site-header-item site-header-focus-item" data-section="kadence_customizer_mobile_button">
	</div><!-- data-section="mobile_button" -->
							</div>
		</div>
	</div>
	<link rel='stylesheet' id='wc-stripe-blocks-checkout-style-css' href='https://cloudnativebasecamp.com/wp-content/plugins/woocommerce-gateway-stripe/build/upe-blocks.css?ver=37f68a8beb4edffe75197731eda158fd' media='all' />
<link rel='stylesheet' id='wc-blocks-style-css' href='https://cloudnativebasecamp.com/wp-content/plugins/woocommerce/assets/client/blocks/wc-blocks.css?ver=wc-9.9.5' media='all' />
<link rel='stylesheet' id='dashicons-css' href='https://cloudnativebasecamp.com/wp-includes/css/dashicons.min.css?ver=6.8.2' media='all' />
<link rel='stylesheet' id='admin-bar-css' href='https://cloudnativebasecamp.com/wp-includes/css/admin-bar.min.css?ver=6.8.2' media='all' />
<link rel='stylesheet' id='wpcom-notes-admin-bar-css' href='https://s0.wp.com/wp-content/mu-plugins/notes/admin-bar-v2.css?ver=13.6.1-202536-lite' media='all' />
<link rel='stylesheet' id='noticons-css' href='https://s0.wp.com/i/noticons/noticons.css?ver=13.6.1-202536-lite' media='all' />
<link rel='stylesheet' id='jetpack-responsive-videos-css' href='https://cloudnativebasecamp.com/wp-content/plugins/jetpack/_inc/build/theme-tools/responsive-videos/responsive-videos.css?minify=false&#038;ver=68f96734b25612a82f88' media='all' />
<script src="//cloudnativebasecamp.com/wp-content/plugins/sfwd-lms/themes/legacy/templates/learndash_pager.min.js?ver=4.3.1.3" id="learndash_pager_js-js"></script>
<script id="learndash_template_script_js-js-extra">
var sfwd_data = {"json":"{\"ajaxurl\":\"https:\\\/\\\/cloudnativebasecamp.com\\\/wp-admin\\\/admin-ajax.php\"}"};
</script>
<script src="//cloudnativebasecamp.com/wp-content/plugins/sfwd-lms/themes/legacy/templates/learndash_template_script.min.js?ver=4.3.1.3" id="learndash_template_script_js-js"></script>
<script src="https://cloudnativebasecamp.com/wp-content/plugins/duracelltomi-google-tag-manager/dist/js/gtm4wp-ecommerce-generic.js?ver=1.21.1" id="gtm4wp-ecommerce-generic-js"></script>
<script src="https://cloudnativebasecamp.com/wp-content/plugins/duracelltomi-google-tag-manager/dist/js/gtm4wp-woocommerce.js?ver=1.21.1" id="gtm4wp-woocommerce-js"></script>
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" id="cf-turnstile-js"></script>
<script id="kadence-navigation-js-extra">
var kadenceConfig = {"screenReader":{"expand":"Child menu","expandOf":"Child menu of","collapse":"Child menu","collapseOf":"Child menu of"},"breakPoints":{"desktop":"1024","tablet":768},"scrollOffset":"0"};
</script>
<script src="https://cloudnativebasecamp.com/wp-content/themes/kadence/assets/js/navigation.min.js?ver=1.2.7" id="kadence-navigation-js" async></script>
<script id="learndash-front-js-extra">
var ldVars = {"postID":"21","videoReqMsg":"You must watch the video before accessing this content","ajaxurl":"https:\/\/cloudnativebasecamp.com\/wp-admin\/admin-ajax.php"};
</script>
<script src="//cloudnativebasecamp.com/wp-content/plugins/sfwd-lms/themes/ld30/assets/js/learndash.js?ver=4.3.1.3" id="learndash-front-js"></script>
<script src="https://cloudnativebasecamp.com/wp-content/plugins/woocommerce/assets/js/sourcebuster/sourcebuster.min.js?ver=9.9.5" id="sourcebuster-js-js"></script>
<script id="wc-order-attribution-js-extra">
var wc_order_attribution = {"params":{"lifetime":1.0e-5,"session":30,"base64":false,"ajaxurl":"https:\/\/cloudnativebasecamp.com\/wp-admin\/admin-ajax.php","prefix":"wc_order_attribution_","allowTracking":true},"fields":{"source_type":"current.typ","referrer":"current_add.rf","utm_campaign":"current.cmp","utm_source":"current.src","utm_medium":"current.mdm","utm_content":"current.cnt","utm_id":"current.id","utm_term":"current.trm","utm_source_platform":"current.plt","utm_creative_format":"current.fmt","utm_marketing_tactic":"current.tct","session_entry":"current_add.ep","session_start_time":"current_add.fd","session_pages":"session.pgs","session_count":"udata.vst","user_agent":"udata.uag"}};
</script>
<script src="https://cloudnativebasecamp.com/wp-content/plugins/woocommerce/assets/js/frontend/order-attribution.min.js?ver=9.9.5" id="wc-order-attribution-js"></script>
<script id="tiktok-pixel-tracking-handle-header-js-after">
!function (w, d, t) {
		 w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{},ttq._partner=ttq._partner||"WooCommerce";var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
		 ttq.load('CTT6ALJC77U4KUTGNJI0');
		 }(window, document, 'ttq');
</script>
<script id="tiktok-tracking-handle-header-js-after">
ttq.instance('CTT6ALJC77U4KUTGNJI0').track('Pageview', {'event_id': '68b8248ee8e76_tt4b_woocommerce_677a65036736b'})
ttq.instance('CTT6ALJC77U4KUTGNJI0').identify({
            email: 'e4e6b63d501288e7b7310a9bc24744c0d556c8170691cbba6bda169351597ff0',
            phone_number: '1b519ef3baec0abf4c0797d8d21128854b90619139b033206dbb384db9d8c88a',
            first_name: '9711bcc773b67df9d02c1adc26240b1332048ab8ec17a23732ace9e0c030e0bd',
            last_name: '8bf90861a4a43a518fec03583f7723450055c652dc37d2534f464062b63e9e5e',
            city: 'alexandria',
            state: 'egalx',
            country: 'eg'
            })
</script>
<script src="https://s0.wp.com/wp-content/mu-plugins/notes/notes-common-lite.min.js?ver=13.6.1-202536-lite" id="wpcom-notes-common-js"></script>
<script id="wpcom-notes-admin-bar-js-before">
var wpNotesArgs = {"cacheBuster":"13.6.1-202536-lite"};
</script>
<script src="https://s0.wp.com/wp-content/mu-plugins/notes/admin-bar-v2.js?ver=13.6.1-202536-lite" id="wpcom-notes-admin-bar-js"></script>
<script src="https://cloudnativebasecamp.com/wp-includes/js/dist/hooks.min.js?ver=4d63a3d491d11ffd8ac6" id="wp-hooks-js"></script>
<script src="https://cloudnativebasecamp.com/wp-includes/js/dist/i18n.min.js?ver=5e580eb46a90c2b997e6" id="wp-i18n-js"></script>
<script id="wp-i18n-js-after">
wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
</script>
<script src="https://cloudnativebasecamp.com/wp-content/plugins/jetpack/_inc/build/theme-tools/responsive-videos/responsive-videos.min.js?minify=false&amp;ver=68f96734b25612a82f88" id="jetpack-responsive-videos-js"></script>
<!-- WooCommerce JavaScript -->
<script type="text/javascript">
jQuery(function($) { 
/* WooCommerce Facebook Integration Event Tracking */
fbq('set', 'agent', 'woocommerce-9.9.5-3.5.3', '2516399868556194');
fbq('track', 'PageView', {
    "source": "woocommerce",
    "version": "9.9.5",
    "pluginVersion": "3.5.3",
    "user_data": {}
}, {
    "eventID": "d418980c-7e88-4e52-9e30-1d64bde61b29"
});
 });
</script>
</body>
</html>
`;

//*===============================================

let s = 0;
let e = 0;
let pattern = '"ld-item-title">';
for (let i = 0; i < html.length; i++) {
  s = html.indexOf(pattern, i);
  if (s == -1) break;
  e = html.indexOf("<", s);
  if (e == -1) break;
  // const listName = html.substring(s + pattern.length + 1, e).trim();
  //? or
  let listName = html.substring(s, e).replace(pattern, "").trim();

  //   console.log(listName.replace(/&#8211;/g, "-"));
  //   console.log(listName);
  listName = replaceHTMLSymbol(listName);
  console.log(listName);
  //   break;
  i = s;
}

function replaceHTMLSymbol(str) {
  for (let i = 0; i < str.length; i++) {
    const s = str.indexOf("&", i);
    if (s == -1) break;
    const e = str.indexOf(";", s);
    if (e == -1) break;
    const code = str.substring(s + 2, e);
    //console.log(code); //8211  (but as a string)
    i = s;
    //* convert this string code (8211) into utf so it needs "0x" at first (one of utf forms)
    //* and this code which is normal decimal number should be converted to hexadecimal by (toString(16))
    //* so this string code at first needs to be converted into number before conversion
    //* then get
    const uCode = "0x" + Number(code).toString(16);
    // console.log(uCode); // 0x2013
    const char = String.fromCodePoint(uCode);
    // console.log(char);

    str = str.replaceAll("&#" + code + ";", char);
  }

  return str;
}

//! result
//* 01 – Data & Memory
//* 02 – DataTypes & Memory
//* 03 – Array – Introduction
//* 04 – Array – Operations Implementation
//* 05 – Linked List – Introduction – Singly list implementation
//* 06 – Linked List – Singly list implementation 2
//* 07 – Linked List – Doubly list implementation
//* 08 – Linked List VS Array Time Complexity
//* 09 – Linked List implementation – JavaScript
//* 10 – Stack – Linked List based – implementation
//* 11 – Stack – Array based – Implementation
//* 12 – Queue – Linked List Based – Implementation
//* 13 – KeyValuePair – Dictionary – Implementation
//* 14 – Hashing – Introduction – FNV-1a Implementation
//* 15 – Hash Table – Introduction
//* 16 – Hash Table – Implementation
//* 17 – Introduction to Trees – Binary Tree – Implementation 01
//* 18 – Binary Tree – Implementation 02
//* 19 – Binary Search Tree – Introduction – Insert – Find
//* 20 – Binary Search Tree – Delete
//* 21 – Binary Search Tree – Balance
//* 22 – Heap – Implementation
//* 23 – PriorityQueue
