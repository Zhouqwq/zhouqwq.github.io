
/*@preserve
***Version 1.102.2***
*/

/*@license
 *                       Copyright 2002 - 2018 Qualtrics, LLC.
 *                                All rights reserved.
 *
 * Notice: All code, text, concepts, and other information herein (collectively, the
 * "Materials") are the sole property of Qualtrics, LLC, except to the extent
 * otherwise indicated. The Materials are proprietary to Qualtrics and are protected
 * under all applicable laws, including copyright, patent (as applicable), trade
 * secret, and contract law. Disclosure or reproduction of any Materials is strictly
 * prohibited without the express prior written consent of an authorized signatory
 * of Qualtrics. For disclosure requests, please contact notice@qualtrics.com.
 */

try {
  !function(t){var i={};function e(o){if(i[o])return i[o].exports;var s=i[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,e),s.l=!0,s.exports}e.m=t,e.c=i,e.d=function(t,i,o){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var s in t)e.d(o,s,function(i){return t[i]}.bind(null,s));return o},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=0)}([function(t,i,e){t.exports=e(1)},function(t,i){(void 0===window.QSI.UserDefinedHTML||window.QTest)&&(QSI.UserDefinedHTML=QSI.util.Creative(QSI.BuildElementModule,{initialize:function(t){this.globalInitialize(t),this.shouldShow()&&this.display()},display:function(){this.resetStyles(),this.options.elements?(this.elements=this.options.elements.Elements||[],this.minTop=this.options.elements.MinTop,this.minLeft=this.options.elements.MinLeft,QSI.util.processLocators(this.elements),this.node=this.build(),this.width&&this.height&&(this.options.size={width:this.width,height:this.height})):this.options.html&&(this.options.locators&&(QSI.PipedText.setLocators(this.options.locators),this.options.html=QSI.PipedText.evaluateLocators(this.options.html)),this.node=QSI.util.build("div",{style:{width:this.options.size.width+"px",height:this.options.size.height+"px",overflow:"hidden"}}),QSI.global.enableJSSanitization&&void 0!==QSI.DOMPurify&&(this.options.html=QSI.DOMPurify.sanitize(this.options.html)),this.node.innerHTML=this.options.html),this.insert()},build:function(){for(var t=[],i=0,e=0,o=0,s=this.elements.length;o<s;o++){var n=this.buildElement(this.elements[o]);n&&(n.bc&&n.bc.x>i&&(i=n.bc.x),n.bc&&n.bc.y>e&&(e=n.bc.y),t.push(n))}return this.width=i,this.height=e,QSI.util.build("div",{className:"QSIUserDefinedHTML "+this.id+"_UserDefinedHTMLContainer",style:{width:i+"px",height:e+"px",overflow:"hidden",position:"relative"}},t)},getYPosition:function(t){return t.top-this.minTop},getXPosition:function(t){return t.left-this.minLeft},getElementStyle:function(t,i){return{top:this.getYPosition(i)+"px",left:this.getXPosition(i)+"px",position:"absolute",zIndex:t.zIndex,width:t.width+"px",height:t.height+"px",backgroundColor:t.backgroundColor,borderWidth:t.borderWidth+"px",borderColor:t.borderColor,borderStyle:"solid",borderRadius:t.borderRadius+"px",display:t.display}},insert:function(){if(this.options.insertionLocation){if(this.container=QSI.util.$(this.options.insertionLocation),!this.container)return;this.impress(),(void 0===this.displayOptions.replaceContents||this.displayOptions.replaceContents)&&(this.container.textContent=""),this.displayOptions.customPosition&&this.position(),this.displayOptions.insertContentsBefore?this.container.parentNode&&this.container.parentNode.insertBefore(this.node,this.container):this.displayOptions.insertContentsAfter?this.container.parentNode&&this.container.parentNode.insertBefore(this.node,this.container.nextSibling):this.container.appendChild(this.node),this.displayOptions.fixToPage&&(""!==this.displayOptions.minFixDist?this.scrollFix():this.fixPosition()),this.initializeIframes(),this.displayed.resolve()}},position:function(){if(!this.displayOptions.insertContentsBefore&&!this.displayOptions.insertContentsAfter){var t,i,e=this.displayOptions.position,o=1*(this.displayOptions.xOffset||0),s=1*(this.displayOptions.yOffset||0),n=QSI.util.getDimensions(this.container),r=this.options.size,h=n.height/2-r.height/2,l=n.width/2-r.width/2,p={},a={};switch(e){default:case"TL":a={top:0+s+"px",left:(t=0+o)+"px"};break;case"ML":a={top:h+s+"px",left:(t=0+o)+"px"};break;case"BL":a={bottom:0-s+"px",left:(t=0+o)+"px"};break;case"TC":a={top:0+s+"px",left:(t=l+o)+"px"};break;case"MC":a={top:h+s+"px",left:(t=l+o)+"px"};break;case"BC":a={bottom:0-s+"px",left:(t=l+o)+"px"};break;case"TR":a={top:0+s+"px",right:(i=0-o)+"px"};break;case"MR":a={top:h+s+"px",right:(i=0-o)+"px"};break;case"BR":a={bottom:0-s+"px",right:(i=0-o)+"px"};break;case"OML":p={overflow:"visible"},a={top:h+s+"px",left:(t=-r.width+o)+"px"};break;case"OTLL":p={overflow:"visible"},a={top:0+s+"px",left:(t=-r.width+o)+"px"};break;case"OTLT":p={overflow:"visible"},t=0+o,a={top:-r.height+s+"px",left:t+"px"};break;case"OBLL":p={overflow:"visible"},a={bottom:0-s+"px",left:(t=-r.width+o)+"px"};break;case"OBLB":p={overflow:"visible"},t=0+o,a={bottom:-r.height-s+"px",left:t+"px"};break;case"OTC":p={overflow:"visible"},t=l+o,a={top:-r.height+s+"px",left:t+"px"};break;case"OTRT":p={overflow:"visible"},i=0-o,a={top:-r.height+s+"px",right:i+"px"};break;case"OTRR":p={overflow:"visible"},a={top:0+s+"px",right:(i=-r.width-o)+"px"};break;case"OMR":p={overflow:"visible"},a={top:h+s+"px",right:(i=-r.width-o)+"px"};break;case"OBRR":p={overflow:"visible"},a={bottom:0-s+"px",right:(i=-r.width-o)+"px"};break;case"OBRB":p={overflow:"visible"},i=0-o,a={bottom:-r.height-s+"px",right:i+"px"};break;case"OBC":p={overflow:"visible"},t=l+o,a={bottom:-r.height-s+"px",left:t+"px"}}a.position="absolute",p.position="relative",QSI.util.setStyle(this.container,p),QSI.util.setStyle(this.node,a)}},scrollFix:function(){var t=this,i=1*this.displayOptions.minFixDist,e=QSI.util.cumulativeOffset(this.node),o=function(){try{var o=QSI.util.getScrollOffsets().top;if(e.top-o<i&&!t.fixed){var s=Math.max(e.top-o,i);t.fixPosition(s)}else e.top-o>i&&t.fixed&&t.unfixPosition()}catch(t){"undefined"!=typeof QSI&&QSI.dbg&&QSI.dbg.e&&QSI.dbg.e(t)}};QSI.util.observe(window,"scroll",o),0!==QSI.util.getScrollOffsets().top&&o()},fixPosition:function(t){var i=QSI.util.cumulativeOffset(this.node),e=i.top;void 0!==t&&(e=t),QSI.util.setStyle(this.node,{top:e+"px",left:i.left+"px",position:"fixed"}),this.fixed=!0;var o=this,s=0,n=function(){try{o.finishResize()}catch(t){"undefined"!=typeof QSI&&QSI.dbg&&QSI.dbg.e&&QSI.dbg.e(t)}};this.resizeW||(this.resizeW=QSI.util.observe(window,"resize",(function(){try{s!==QSI.util.getPageSize().height&&(o.resizing?(clearTimeout(o.resizeW),o.resizeW=setTimeout(n,500)):(o.unfixPosition(),o.resizing=!0,o.resizeW=setTimeout(n,500)),s=QSI.util.getPageSize().height)}catch(t){"undefined"!=typeof QSI&&QSI.dbg&&QSI.dbg.e&&QSI.dbg.e(t)}})))},finishResize:function(){this.resizing=!1,clearTimeout(this.resizeW),this.fixPosition()},unfixPosition:function(){this.resizeW&&clearTimeout(this.resizeW),QSI.util.setStyle(this.node,{top:"auto",left:"auto",position:"fixed"}),this.position(),this.fixed=!1},remove:function(){this.node&&QSI.util.remove(this.node)}}))}]);
} catch(e) {
  if (typeof QSI !== 'undefined' && QSI.dbg && QSI.dbg.e) {
    QSI.dbg.e(e);
  }
}