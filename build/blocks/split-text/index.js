!function(){"use strict";var e,t={341:function(){var e=window.wp.blocks,t=window.wp.element,r=(window.wp.i18n,window.wp.blockEditor),n=JSON.parse('{"u2":"bouquet-of-roses/split-text"}');(0,e.registerBlockType)(n.u2,{edit:function(e){const n=(0,r.useBlockProps)();return(0,t.createElement)("div",n,(0,t.createElement)("div",{className:"split-text-container"},(0,t.createElement)(r.InnerBlocks,{allowedBlocks:["core/columns","core/column"]})))},save:function(e){r.useBlockProps.save();const{leftTitle:n,rightTitle:o,leftParagraph:i,rightParagraph:c}=e.attributes;return(0,t.createElement)("div",r.useBlockProps.save(),(0,t.createElement)("div",{className:"split-text-container"},(0,t.createElement)(r.InnerBlocks.Content,null)))}})}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=function(t,r,o,i){if(!r){var c=1/0;for(a=0;a<e.length;a++){r=e[a][0],o=e[a][1],i=e[a][2];for(var s=!0,u=0;u<r.length;u++)(!1&i||c>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,i<c&&(c=i));if(s){e.splice(a--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var a=e.length;a>0&&e[a-1][2]>i;a--)e[a]=e[a-1];e[a]=[r,o,i]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={863:0,119:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,c=r[0],s=r[1],u=r[2],l=0;if(c.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var a=u(n)}for(t&&t(r);l<c.length;l++)i=c[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(a)},r=self.webpackChunkbouquet_of_roses=self.webpackChunkbouquet_of_roses||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var o=n.O(void 0,[119],(function(){return n(341)}));o=n.O(o)}();