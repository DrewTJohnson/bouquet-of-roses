!function(){"use strict";var e,t={961:function(){var e=window.wp.blocks;function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},t.apply(this,arguments)}var a=window.wp.element,r=window.wp.i18n,n=window.wp.blockEditor,l=JSON.parse('{"u2":"bouquet-of-roses/split-text"}');(0,e.registerBlockType)(l.u2,{edit:function(e){const l=(0,n.useBlockProps)(),{leftTitle:o,rightTitle:c,leftParagraph:i,rightParagraph:s}=e.attributes;return(0,a.createElement)("div",l,(0,a.createElement)("div",{className:"split-text-container"},(0,a.createElement)("div",{class:"text-container"},(0,a.createElement)(n.RichText,t({},l,{className:"title",tagName:"h2",value:o,allowedFormats:["core/bold","core/italic"],onChange:t=>{e.setAttributes({leftTitle:t})},placeholder:(0,r.__)("Title..."),keepPlaceholderOnFocus:!0})),(0,a.createElement)(n.RichText,t({},l,{className:"paragraph",tagName:"p",value:i,allowedFormats:["core/bold","core/italic"],onChange:t=>{e.setAttributes({leftParagraph:t})},placeholder:(0,r.__)("Lorem Ipsum..."),keepPlaceholderOnFocus:!0}))),(0,a.createElement)("div",{className:"text-container"},(0,a.createElement)(n.RichText,t({},l,{className:"title",tagName:"h2",value:c,allowedFormats:["core/bold","core/italic"],onChange:t=>{e.setAttributes({rightTitle:t})},placeholder:(0,r.__)("Title..."),keepPlaceholderOnFocus:!0})),(0,a.createElement)(n.RichText,t({},l,{className:"paragraph",tagName:"p",value:s,allowedFormats:["core/bold","core/italic"],onChange:t=>{e.setAttributes({rightParagraph:t})},placeholder:(0,r.__)("Lorem Ipsum..."),keepPlaceholderOnFocus:!0})))))},save:function(e){const r=n.useBlockProps.save(),{leftTitle:l,rightTitle:o,leftParagraph:c,rightParagraph:i}=e.attributes;return(0,a.createElement)("div",n.useBlockProps.save(),(0,a.createElement)("div",{className:"split-text-container"},(0,a.createElement)("div",{className:"text-container"},(0,a.createElement)(n.RichText.Content,t({},r,{className:"title",tagName:"h2",value:l})),(0,a.createElement)(n.RichText.Content,t({},r,{className:"paragraph",tagName:"p",value:c}))),(0,a.createElement)("div",{className:"text-container"},(0,a.createElement)(n.RichText.Content,t({},r,{className:"title",tagName:"h2",value:o})),(0,a.createElement)(n.RichText.Content,t({},r,{className:"paragraph",tagName:"p",value:i})))))}})}},a={};function r(e){var n=a[e];if(void 0!==n)return n.exports;var l=a[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=function(t,a,n,l){if(!a){var o=1/0;for(u=0;u<e.length;u++){a=e[u][0],n=e[u][1],l=e[u][2];for(var c=!0,i=0;i<a.length;i++)(!1&l||o>=l)&&Object.keys(r.O).every((function(e){return r.O[e](a[i])}))?a.splice(i--,1):(c=!1,l<o&&(o=l));if(c){e.splice(u--,1);var s=n();void 0!==s&&(t=s)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[a,n,l]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={863:0,119:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,l,o=a[0],c=a[1],i=a[2],s=0;if(o.some((function(t){return 0!==e[t]}))){for(n in c)r.o(c,n)&&(r.m[n]=c[n]);if(i)var u=i(r)}for(t&&t(a);s<o.length;s++)l=o[s],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(u)},a=self.webpackChunkbouquet_of_roses=self.webpackChunkbouquet_of_roses||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var n=r.O(void 0,[119],(function(){return r(961)}));n=r.O(n)}();