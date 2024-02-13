!function(){var e,t={967:function(e,t){"use strict";t.N=void 0;var n=/^([^\w]*)(javascript|data|vbscript)/im,r=/&#(\w+)(^\w|;)?/g,l=/&(newline|tab);/gi,o=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,a=/^.+(:|&colon;)/gim,i=[".","/"];t.N=function(e){var t,s=(t=e||"",t.replace(r,(function(e,t){return String.fromCharCode(t)}))).replace(l,"").replace(o,"").trim();if(!s)return"about:blank";if(function(e){return i.indexOf(e[0])>-1}(s))return s;var u=s.match(a);if(!u)return s;var c=u[0];return n.test(c)?"about:blank":s}},424:function(e,t,n){"use strict";var r=window.wp.blocks,l=window.wp.i18n;function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var a=window.wp.element,i=window.wp.blockEditor;function s(e){return e.isEditable?(0,a.createElement)(i.RichText,e):(0,a.createElement)(i.RichText.Content,e)}var u=window.wp.escapeHtml,c=e=>{const{attributes:t}=e,n=function(n,l){let o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(0,a.createElement)("li",{key:l,style:{fontSize:t.fontSizeText+"px",lineHeight:t.fontSizeText+14+"px",color:t.colorText}},n.anchor&&(0,a.createElement)("a",{href:e.IsInEditor?"#":`#${(0,u.escapeAttribute)(n.anchor)}`,style:{color:t.colorAnchor}},(0,u.escapeHTML)(n.title)),!n.anchor&&(0,a.createElement)("span",null,(0,u.escapeHTML)(n.title)),r(n,o))},r=(e,t)=>{if(e.children.length>0)return(0,a.createElement)("ol",{style:{listStyleType:t?"lower-roman":"lower-alpha"}},e.children.map(((e,t)=>n(e,t,!0))))};return(0,a.createElement)("ol",{style:{listStyleType:"decimal"}},t.headingBlocks.map(((e,t)=>n(e,t))))},d=e=>{const{attributes:t,setAttributes:n}=e;return(0,a.createElement)(a.Fragment,null,(0,a.createElement)("div",{className:"superbaddons-tableofcontents superbaddons-tableofcontents-alignment-"+t.toolbarAlignment+(t.boxedModeEnabled?" superbaddons-tableofcontents-boxed":""),style:{backgroundColor:t.boxedModeEnabled?t.colorBackground:"unset",borderRadius:t.boxedModeEnabled?t.borderRadiusBoxed+"px":"unset"}},t.labelTitleEnabled&&(0,a.createElement)(s,{isEditable:e.IsInEditor,className:"superbaddons-tableofcontents-title",tagName:"span",onChange:e=>{n({labelTitle:e})},value:t.labelTitle,style:{color:t.colorTitle,fontSize:t.fontSizeTitle+"px",lineHeight:t.fontSizeTitle+8+"px"}}),(0,a.createElement)("div",{className:"superbaddons-tableofcontents-table"},(0,a.createElement)(c,e))))},b=window.wp.components,m=(n(967),n(241)),p=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e=isNaN(e)?0:parseInt(e),t&&e<t&&(e=t),n&&e>n&&(e=n),e},f=e=>1==e,h=function(e,t){return void 0===t?e[0]:e.find((e=>e===t))},g=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n?e.find((e=>e.slug===t))[n]:e.find((e=>e.slug===t))},v=function(e){return void 0!==e&&((0,m.validateHTMLColorHex)(e)||(0,m.validateHTMLColorRgb)(e)||(0,m.validateHTMLColorHsl)(e))?e:"unset"},k=[{name:(0,l.__)("Small","superb-blocks"),slug:"small",size:14},{name:(0,l.__)("Medium","superb-blocks"),slug:"medium",size:16},{name:(0,l.__)("Large","superb-blocks"),slug:"large",size:24},{name:(0,l.__)("Huge","superb-blocks"),slug:"huge",size:32},{name:(0,l.__)("Enormous","superb-blocks"),slug:"enormous",size:40}],y=[{name:(0,l.__)("Superb Black","superb-blocks"),slug:"black",color:"#444444"},{name:(0,l.__)("Superb Gray","superb-blocks"),slug:"default",color:"#7C7C7C"},{name:(0,l.__)("Background Gray","superb-blocks"),slug:"bggray",color:"#F2F2F2"},{name:(0,l.__)("Superb Gold","superb-blocks"),slug:"sorange",color:"#FFCA28"},{name:(0,l.__)("White","superb-blocks"),slug:"white",color:"#fff"}],_=window.wp.data;const E=e=>{const t=[],n={};return e.forEach((e=>{const r=w(e),l=((e,t)=>{const n=Math.max(...Object.keys(t));for(let r=e.level+1;r<=n;r++)t[r]=!1;t[e.level]=e;for(let n=e.level-1;n>0;n--){const e=t[n];if(e)return e}return!1})(r,n);l?l.children.push(r):t.push(r)})),t},w=e=>({id:e.clientId,title:e.attributes.content,level:e.attributes.level,anchor:!!e.attributes.anchor&&e.attributes.anchor,children:[]});var C,S,T=JSON.parse('{"u2":"superb-addons/table-of-contents"}'),x=window.React;function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}const M={labelTitle:{type:"string",default:(0,l.__)("Table of Contents","superb-blocks")}};(0,r.registerBlockType)(T.u2,{attributes:{toolbarAlignment:{type:"string",default:"left"},fontSizeTitle:{type:"number",default:32},fontSizeText:{type:"number",default:14},colorTitle:{type:"string",default:"#444444"},colorText:{type:"string",default:"#7C7C7C"},colorAnchor:{type:"string",default:"#444444"},colorBackground:{type:"string",default:"#F2F2F2"},...M,boxedModeEnabled:{type:"boolean",default:!1},labelTitleEnabled:{type:"boolean",default:!0},borderRadiusBoxed:{type:"number",default:10},headingBlocks:{type:"array",default:[]},IsPreview:{type:"boolean",default:!1}},example:{attributes:{IsPreview:!0,boxedModeEnabled:!1,headingBlocks:[{title:"Edge in the Destiny",anchor:!1,level:1,children:[]},{title:"The Missing Moon",anchor:!1,level:1,children:[{title:"The Lords of the Bridges",anchor:!1,level:2,children:[]},{title:"The Light's Mist",anchor:!1,level:2,children:[]}]},{title:"The Silken Thorns",anchor:!1,level:1,children:[{title:"Stream in the Stream",anchor:!1,level:2,children:[{title:"The Lucky Seven",anchor:!1,level:3,children:[]}]}]}]}},icon:{src:function(e){return x.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 256 256"},e),C||(C=x.createElement("path",{fill:"#6448e7",d:"M216 64v128H44V64Z",opacity:.2})),S||(S=x.createElement("path",{fill:"#6448e7",d:"M80 64a8 8 0 0 1 8-8h128a8 8 0 0 1 0 16H88a8 8 0 0 1-8-8Zm136 56H88a8 8 0 1 0 0 16h128a8 8 0 0 0 0-16Zm0 64H88a8 8 0 1 0 0 16h128a8 8 0 0 0 0-16ZM44 52a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm0 64a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm0 64a12 12 0 1 0 12 12 12 12 0 0 0-12-12Z"})))}},edit:function(e){const{attributes:t,setAttributes:n}=e;(e=>{let{attributes:t,setAttributes:n}=e;t.IsPreview||(0,a.useEffect)((()=>{const{getBlocks:e}=(0,_.select)("core/block-editor"),t=()=>e().filter((e=>"core/heading"===e.name));let r=t();n({headingBlocks:E(r)}),(0,_.subscribe)((()=>{const e=t();((e,t)=>{for(var n in e)if(e[n]!==t[n])return!0;return!1})(r,e)&&(r=e,n({headingBlocks:E(r)}))}))}),[])})(e);const r=(e,t)=>{let r=f(t);n({[e]:r})};return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(i.BlockControls,null,(0,a.createElement)(i.AlignmentToolbar,{value:t.toolbarAlignment,onChange:e=>{let t=h(["left","center","right"],e);n({toolbarAlignment:t})}})),(0,a.createElement)(i.InspectorControls,null,(0,a.createElement)(b.PanelBody,{title:(0,l.__)("General Settings","superb-blocks"),initialOpen:!0},(0,a.createElement)("div",{className:"superbaddons-inspector-wrapper"},(0,a.createElement)(b.CheckboxControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Boxed Mode","superb-blocks"),checked:t.boxedModeEnabled,onChange:e=>r("boxedModeEnabled",e)}),(0,a.createElement)("small",null,(0,l.__)("Enabling boxed mode will add a box, with a background color, around the table of contents block.","superb-blocks")),t.boxedModeEnabled&&(0,a.createElement)(b.RangeControl,{label:(0,l.__)("Boxed Border Radius","superb-blocks"),value:t.borderRadiusBoxed,onChange:e=>{let t=p(e,0,100);n({borderRadiusBoxed:t})},min:0,max:100}),(0,a.createElement)(b.CheckboxControl,{__nextHasNoMarginBottom:!0,label:(0,l.__)("Display Title","superb-blocks"),checked:t.labelTitleEnabled,onChange:e=>r("labelTitleEnabled",e)})))),(0,a.createElement)(i.InspectorControls,{group:"styles"},(0,a.createElement)(b.PanelBody,{title:"Colors",initialOpen:!0},(0,a.createElement)("label",{className:"components-base-control__label"},(0,l.__)("Title Color","superb-blocks")),(0,a.createElement)(b.ColorPalette,{colors:y,defaultValue:t.colorTitle,value:t.colorTitle,onChange:e=>{let t=v(e);n({colorTitle:t})}}),(0,a.createElement)("label",{className:"components-base-control__label"},(0,l.__)("Text Color","superb-blocks")),(0,a.createElement)(b.ColorPalette,{colors:y,defaultValue:t.colorText,value:t.colorText,onChange:e=>{let t=v(e);n({colorText:t})}}),(0,a.createElement)("label",{className:"components-base-control__label"},(0,l.__)("Anchor Link Color","superb-blocks")),(0,a.createElement)(b.ColorPalette,{colors:y,defaultValue:t.colorAnchor,value:t.colorAnchor,onChange:e=>{let t=v(e);n({colorAnchor:t})}}),t.boxedModeEnabled&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)("label",{className:"components-base-control__label"},(0,l.__)("Background Color","superb-blocks")),(0,a.createElement)(b.ColorPalette,{colors:y,defaultValue:t.colorBackground,value:t.colorBackground,onChange:e=>{let t=v(e);n({colorBackground:t})}}))),(0,a.createElement)(b.PanelBody,{title:(0,l.__)("Font Sizes","superb-blocks"),initialOpen:!0},(0,a.createElement)("label",{className:"components-base-control__label"},(0,l.__)("Title","superb-blocks")),(0,a.createElement)(b.FontSizePicker,{__nextHasNoMarginBottom:!0,fontSizes:k,withSlider:!0,withReset:!0,value:t.fontSizeTitle,onChange:e=>{let t=0;t=void 0===e?g(k,"huge","size"):p(e,0,100),n({fontSizeTitle:t})}}),(0,a.createElement)("hr",null),(0,a.createElement)("label",{className:"components-base-control__label"},(0,l.__)("Text","superb-blocks")),(0,a.createElement)(b.FontSizePicker,{__nextHasNoMarginBottom:!0,fontSizes:k,withSlider:!0,withReset:!0,value:t.fontSizeText,onChange:e=>{let t=0;t=void 0===e?g(k,"small","size"):p(e,0,100),n({fontSizeText:t})}}))),(0,a.createElement)("div",(0,i.useBlockProps)(),(0,a.createElement)(d,o({},e,{IsInEditor:!0}))))},save:function(e){return(0,a.createElement)("div",i.useBlockProps.save(),(0,a.createElement)(d,o({},e,{IsInEditor:!1})))}})},241:function(e){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"validateHTMLColorName",(function(){return a})),n.d(t,"validateHTMLColorSpecialName",(function(){return i})),n.d(t,"validateHTMLColorHex",(function(){return s})),n.d(t,"validateHTMLColorRgb",(function(){return f})),n.d(t,"validateHTMLColorHsl",(function(){return h})),n.d(t,"validateHTMLColorHwb",(function(){return g})),n.d(t,"validateHTMLColorLab",(function(){return v})),n.d(t,"validateHTMLColorLch",(function(){return k})),n.d(t,"validateHTMLColor",(function(){return y}));const r=e=>e&&"string"==typeof e,l=["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenrod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","Goldenrod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenrodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquamarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenrod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"],o=["currentColor","inherit","transparent"],a=e=>{let t=!1;return r(e)&&l.map((n=>(e.toLowerCase()===n.toLowerCase()&&(t=!0),null))),t},i=e=>{let t=!1;return r(e)&&o.map((n=>(e.toLowerCase()===n.toLowerCase()&&(t=!0),null))),t},s=e=>!!r(e)&&(e&&/^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$/i.test(e)),u="(([\\d]{0,5})((\\.([\\d]{1,5}))?))",c=`(${u}%)`,d="(([0-9]|[1-9][0-9]|100)%)",b=`(${d}|(0?((\\.([\\d]{1,5}))?))|1)`,m=`([\\s]{0,5})\\)?)(([\\s]{0,5})(\\/?)([\\s]{1,5})(((${d}))|(0?((\\.([\\d]{1,5}))?))|1))?([\\s]{0,5})\\)`,p="(-?(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-5][0-9])((\\.([\\d]{1,5}))?)|360)(deg)?)",f=e=>{if(r(e)){const t="([\\s]{0,5})([\\d]{1,5})%?([\\s]{0,5}),?",n="((([\\s]{0,5}),?([\\s]{0,5}))|(([\\s]{1,5})))",r=new RegExp(`^(rgb)a?\\(${t}${n}${t}${n}${t}${n}((\\/?([\\s]{0,5})(0?\\.?([\\d]{1,5})%?([\\s]{0,5}))?|1|0))?\\)$`);return e&&r.test(e)}return!1},h=e=>{if(r(e)){const t=new RegExp(`^(hsl)a?\\((([\\s]{0,5})(${p}|(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-9][0-9]|400)grad)|((([0-5])?\\.([\\d]{1,5})|6\\.([0-9]|1[0-9]|2[0-8])|[0-6])rad)|((0?((\\.([\\d]{1,5}))?)|1)turn))((([\\s]{0,5}),([\\s]{0,5}))|(([\\s]{1,5}))))(([\\s]{0,5})(0|${d})((([\\s]{0,5}),([\\s]{0,5}))|(([\\s]{1,5}))))(([\\s]{0,5})(0|${d})([\\s]{0,5})\\)?)(([\\s]{0,5})(\\/?|,?)([\\s]{0,5})(((${d}))|(0?((\\.([\\d]{1,5}))?))|1))?\\)$`);return e&&t.test(e)}return!1},g=e=>{if(r(e)){const t=new RegExp(`^(hwb\\(([\\s]{0,5})${p}([\\s]{1,5}))((0|${d})([\\s]{1,5}))((0|${d})${m}$`);return e&&t.test(e)}return!1},v=e=>{if(r(e)){const t="(-?(([0-9]|[1-9][0-9]|1[0-5][0-9])((\\.([\\d]{1,5}))?)?|160))",n=new RegExp(`^(lab\\(([\\s]{0,5})${c}([\\s]{1,5})${t}([\\s]{1,5})${t}${m}$`);return e&&n.test(e)}return!1},k=e=>{if(r(e)){const t=new RegExp(`^lch\\((([\\s]{0,5})((([0-9]|[1-9][0-9])?((\\.([\\d]{1,5}))?)|100)(%)?)([\\s]{1,5})${""+u}([\\s]{1,5})((${p})|(0|${b})|(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-5][0-9])((\\.([\\d]{1,5}))?)|360))([\\s]{0,5})((\\/([\\s]{0,5})${b}))?)\\)$`);return e&&t.test(e)}return!1},y=e=>!!(e&&s(e)||f(e)||h(e)||g(e)||v(e)||k(e));t.default=e=>!!(e&&s(e)||a(e)||i(e)||f(e)||h(e)||g(e)||v(e)||k(e))}])}},n={};function r(e){var l=n[e];if(void 0!==l)return l.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=function(t,n,l,o){if(!n){var a=1/0;for(c=0;c<e.length;c++){n=e[c][0],l=e[c][1],o=e[c][2];for(var i=!0,s=0;s<n.length;s++)(!1&o||a>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[s])}))?n.splice(s--,1):(i=!1,o<a&&(a=o));if(i){e.splice(c--,1);var u=l();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,l,o]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={35:0,678:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,o,a=n[0],i=n[1],s=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(l in i)r.o(i,l)&&(r.m[l]=i[l]);if(s)var c=s(r)}for(t&&t(n);u<a.length;u++)o=a[u],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(c)},n=self.webpackChunksuperb_elementor_and_gutenberg_addons=self.webpackChunksuperb_elementor_and_gutenberg_addons||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var l=r.O(void 0,[678],(function(){return r(424)}));l=r.O(l)}();