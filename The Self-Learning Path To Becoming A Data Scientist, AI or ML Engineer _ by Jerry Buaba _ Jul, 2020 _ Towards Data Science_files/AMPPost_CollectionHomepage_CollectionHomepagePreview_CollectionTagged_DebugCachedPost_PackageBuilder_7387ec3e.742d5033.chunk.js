(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/components/post/PostBodySection.tsx":function(e,t,n){"use strict";n.d(t,"b",(function(){return M})),n.d(t,"c",(function(){return A})),n.d(t,"a",(function(){return z}));var r=n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),o=n.n(r),a=n("./node_modules/@babel/runtime/helpers/classCallCheck.js"),s=n.n(a),i=n("./node_modules/@babel/runtime/helpers/createClass.js"),c=n.n(i),u=n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),l=n.n(u),d=n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),p=n.n(d),f=n("./node_modules/@babel/runtime/helpers/inherits.js"),g=n.n(f),m=n("./node_modules/@babel/runtime/helpers/defineProperty.js"),h=n.n(m),b=n("./node_modules/graphql-tag/src/index.js"),y=n.n(b),v=n("./node_modules/react/index.js"),x=n("./src/WatchBounds.tsx"),E=n("./src/components/post/EmbeddedPostContext.tsx"),O=n("./src/components/post/PostBodyParagraph.tsx"),S=n("./src/components/post/grouping/ParagraphLayoutGrouping.tsx"),_=n("./src/framework/design-system/components/index.ts"),w=n("./src/framework/style/index.ts"),P={":after":{display:"block",content:'""',clear:"both"}},j=n("./src/util/miroImage.ts"),k=n("./src/util/theme.ts");function N(){var e=o()(["\n      fragment PostBodySection_paragraphs on Paragraph {\n        name\n        ...PostBodyParagraph_paragraph\n      }\n      ","\n    "]);return N=function(){return e},e}function T(){var e=o()(["\n  fragment PostBodySection_customStyleSheet on CustomStyleSheet {\n    id\n    ...ParagraphLayoutGrouping_customStyleSheet\n  }\n  ","\n"]);return T=function(){return e},e}function B(){var e=o()(["\n  fragment PostBodySection_privateNote on Note {\n    ...ParagraphLayoutGrouping_privateNote\n  }\n  ","\n"]);return B=function(){return e},e}function I(){var e=o()(["\n  fragment PostBodySection_highlight on Quote {\n    ...ParagraphLayoutGrouping_highlight\n  }\n  ","\n"]);return I=function(){return e},e}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G=function(){return{display:"table-cell",paddingBottom:"32px",verticalAlign:"bottom"}};function R(e){var t,n,r,o,a=e.bgImage,s=e.children,i=e.isFullPage,c=e.paragraphName,u=Object(w.useCx)();return a&&a.id&&i?v.createElement(x.a,{name:c,type:"bgimage"},v.createElement("div",{className:u((t=a,n=t.id,r=t.originalWidth,o=t.originalHeight,function(){var e=[400,600,800,1e3,1200,1400,1600,1800,2e3],t={miroId:n,strategy:"RESAMPLE",verticalGradient:{start:29,end:81,opacity:40}},a=e.reduce((function(n,a,s){var i=Object(j.d)(C({},t,{width:a,height:a/r*o}));return s===e.length-1?(n.backgroundImage="url(".concat(i,")"),n):(n["@media (min-width: ".concat(a,"px)")]={backgroundImage:"url(".concat(i,")")},n)}),{});return C({backgroundColor:"rgba(0, 0, 0, 0.9)",backgroundPosition:"50% 50%",backgroundSize:"cover",display:"table",minHeight:"100vh",width:"100%"},a)}))},v.createElement("div",{className:u(G)},v.createElement(_.L,null,(function(e){return v.createElement(_.F,{theme:Object(k.s)(e)},s)}))))):s}var F=function(e){function t(){return s()(this,t),l()(this,p()(t).apply(this,arguments))}return g()(t,e),c()(t,[{key:"render",value:function(){var e=this.props,t=e.paragraphViewModels,n=e.postBodyInserts,r=e.section,o=e.customStyleSheet;if(0===t.length)return null;var a=function(e){switch(e){case"SERIES":return{paddingTop:"32px",paddingBottom:"32px",margin:"auto 0",width:"100%"};case"STREAM":case"CARD":case"FULL_PAGE":return{wordBreak:"break-word",wordWrap:"break-word"};default:return{}}}(t[0].richTextStyle),s=Object(S.e)(t);return v.createElement(E.a.Consumer,null,(function(e){return v.createElement(_.J,null,(function(i){return v.createElement("section",{className:i([a,P])},v.createElement(R,{bgImage:r.backgroundImage,isFullPage:"FULL_PAGE"===t[0].richTextStyle,paragraphName:t[0].paragraph.name},s.map((function(t,r){return v.createElement(S.a,{key:r,layoutGroup:t,postBodyInserts:n,customStyleSheet:o,isEmbedded:e})}))))}))}))}}]),t}(v.Component);h()(F,"fragments",{paragraphs:y()(N(),O.d.fragments.paragraph)});t.d=F;var M=y()(I(),S.c),A=y()(B(),S.d),z=y()(T(),S.b)},"./src/components/post/body/PostBody.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return le})),n.d(t,"d",(function(){return de})),n.d(t,"b",(function(){return pe})),n.d(t,"e",(function(){return fe})),n.d(t,"c",(function(){return ge}));var r=n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),o=n.n(r),a=n("./node_modules/@babel/runtime/helpers/extends.js"),s=n.n(a),i=n("./node_modules/@babel/runtime/helpers/toConsumableArray.js"),c=n.n(i),u=n("./node_modules/graphql-tag/src/index.js"),l=n.n(u),d=n("./node_modules/react/index.js"),p=n("./src/WatchBounds.tsx"),f=n("./src/framework/style/index.ts"),g=n("./src/styles/font.ts"),m=function(e){return{color:e.baseColor.text.darker,border:"none",marginTop:"30px",textAlign:"center",":before":{content:'"..."',letterSpacing:"0.6em",textIndent:"0.6em",fontStyle:"italic",lineHeight:"1.4"}}};function h(){var e=Object(f.useCx)();return d.createElement("hr",{className:e([Object(g.b)({fontSize:28}),m])})}var b=n("./src/components/post/PostBodySection.tsx"),y=n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),v=n.n(y),x=n("./node_modules/@babel/runtime/helpers/typeof.js"),E=n.n(x),O=n("./node_modules/pluralize/pluralize.js"),S=n.n(O),_=n("./src/components/user/UserAvatar.tsx"),w=n("./src/framework/design-system/components/index.ts"),P=n("./src/framework/design-system/type/Overline.tsx"),j=n("./src/framework/track/index.ts");function k(){var e=o()(["\n  fragment PostNotesDetails_user on User {\n    id\n    imageId\n    name\n    username\n    ...UserAvatar_user\n  }\n  ","\n"]);return k=function(){return e},e}function N(e){var t=e.grid.xStep;return{padding:"".concat(3*t,"px ").concat(4*t,"px ").concat(3*t,"px"),width:"400px"}}var T=d.memo((function(e){var t=e.close,n=e.users,r=Object(f.useCx)(),o=d.useRef(null),a=Object(f.useTheme)(),s=a.grid.xStep;return d.useEffect((function(){function e(){var e=o.current;if(e&&e.getBoundingClientRect){var n=e.getBoundingClientRect(),r=n.bottom,s=n.top<0||r>window.innerHeight,i=window.innerWidth<a.breakpoints.xl;(s||i)&&t()}}return j.a.on("scroll_end",e),j.a.on("resize_throttled",e),function(){j.a.off("scroll_end",e),j.a.off("resize_throttled",e)}}),[]),d.createElement("section",{ref:o,className:r(N)},d.createElement(w.b,{borderBottom:"BASE_LIGHTER",marginBottom:"-".concat(s,"px"),paddingBottom:"".concat(2*s,"px")},d.createElement(P.a,null,"Highlights (".concat(n.length,")"))),d.createElement(w.b,{marginLeft:"3px"},n.length&&n.map((function(e){return d.createElement(w.b,{display:"inline-block",key:e.id,marginTop:"".concat(5*s,"px"),marginRight:"".concat(5*s,"px"),width:"".concat(8*s,"px")},d.createElement(_.d,{hasPopover:!0,link:!0,user:e,scale:"XS"}))}))))})),B=l()(k(),_.b),I=n("./src/components/post/markups/HighlightSegmentsContext.tsx"),L=n("./src/components/post/notes/PostAnnotationsPopover.tsx"),C=n("./src/components/post/paragraph/IframeParagraph/iframePostMessageNormalizer.ts"),G=n("./src/components/session/WithViewer.tsx"),R=n("./src/framework/design-system/type/Detail.tsx"),F=n("./src/framework/design-system/util/style/converters.ts"),M=n("./src/util/typeGuards.ts");function A(){var e=o()(["\n  fragment PostNotesMarkers_creator on User {\n    id\n    name\n    isFollowing\n  }\n"]);return A=function(){return e},e}function z(){var e=o()(["\n  fragment PostNotesMarkers_highlight on Quote {\n    id\n    endOffset\n    paragraphs {\n      id\n      name\n    }\n    startOffset\n    userId\n    user {\n      id\n      name\n      ...PostNotesDetails_user\n    }\n  }\n  ","\n"]);return z=function(){return e},e}function U(){return{border:"none",cursor:"pointer",display:"block",padding:"0px",textAlign:"left",width:"100%"}}function W(){return{left:"100%",position:"absolute",top:0}}function D(e,t){return{marginTop:"6px",maxWidth:"100%",position:"absolute",top:"".concat(e-(t||0),"px"),whiteSpace:"nowrap",width:"100%"}}function H(e){return{marginLeft:"auto",marginRight:"auto",maxWidth:"".concat(Object(F.a)(e,8,!0),"px"),position:"relative"}}function Y(){return{display:"inline-block",maxWidth:"100%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}function V(e,t){return"number"==typeof e.startOffset&&"number"==typeof t.startOffset?e.startOffset<t.startOffset?-1:1:-1}function Q(e,t){var n=t.startOffset,r=t.endOffset,o=t.paragraphs[0].name;if(!o||"number"!=typeof n||"number"!=typeof r)return e;var a=!1,s=e[o]||[];return s.length&&(s=s.map((function(e){var o=n<=e.endOffset+1,s=e.startOffset,i=e.endOffset;return o&&(a=!0,e.highlights.push(t),i=Math.max(r,e.endOffset),s=Math.min(n,e.startOffset)),{highlights:e.highlights,endOffset:i,startOffset:s}}))),a||s.push({highlights:[t],endOffset:r,startOffset:n}),e[o]=s,e}function q(e,t,n){var r=new Map;if(e.size&&t.length){var o=function(e){var t=c()(e).sort(V).reduce(Q,{});return Object.values(t).reduce((function(e,t){return t&&"object"===E()(t)&&t.length?(e.push.apply(e,c()(t)),e):e}),[])}(t),a=[];o.forEach((function(t){var o=t.highlights[0],s=o.paragraphs[0].name;if(o&&"number"==typeof o.startOffset&&s){var i=e.get("".concat(s,"_").concat(o.startOffset));if(i&&i.ref&&i.ref.current){var c,u=i.ref.current.getBoundingClientRect().top+window.pageYOffset;a.length&&(c=a.find((function(e){return u<e+n.newFonts.body.lineHeight.M&&u>e||u>e-n.newFonts.body.lineHeight.M&&u<e})));var l=c||u,d=r.get(l)||[];d.length||a.push(l);var p=d.concat(t.highlights);p.length&&r.set(l,p)}}}))}return r}function J(e){var t=e.children,n=e.highlightString,r=e.toggle,o=Object(f.useCx)();return"Top highlight"===n?d.createElement(d.Fragment,null,t):d.createElement("button",{className:o(U),onClick:function(){return r()},onMouseDown:function(e){return e.preventDefault()}},t)}function X(e){var t=e.creator,n=e.positionMap,r=e.yPosOffset,o=Object(f.useCx)();if("number"!=typeof r)return null;var a=Array.from(n.entries());return d.createElement(G.b,{nonBlocking:!0},(function(e){return d.createElement(d.Fragment,null,a.map((function(n,a){var s=v()(n,2),i=s[0],c=s[1],u=function(e,t,n){if(1===e.length){if("anon"===e[0].userId)return"Top highlight";if(!t)return null;if(n&&n.id===e[0].userId&&t.id!==n.id&&!n.isFollowing)return null;if(t&&t.id===e[0].userId)return"You highlighted";if(e[0].user&&e[0].user.name)return e[0].user.name}var r=[];if(e.forEach((function(e){if(e.user){var o=t&&t.id===e.userId,a=e.user.name,s=n&&n.id===e.userId&&(!t||t.id!==n.id&&!n.isFollowing);o?r.length&&"You"===r[0]||r.unshift("You"):s||!a||r.includes(a)||r.push(a)}})),!r.length)return"Top highlight";if(1===r.length)return"You"===r[0]?"You highlighted":r[0];if(2===r.length)return"".concat(r[0]," and ").concat(r[1]);var o=r.slice(0,2),a=r.length-o.length;return"".concat(o[0],", ").concat(o[1],", and ").concat(a," ").concat(S()("other",a))}(c,e,t);return u?d.createElement("div",{className:o(D(i,r)),key:a},d.createElement(w.I,null,(function(e){var t=e.isVisible,n=e.hide,r=e.toggle;return d.createElement(d.Fragment,null,d.createElement(J,{toggle:r,highlightString:u},d.createElement(R.a,{scale:"S"},d.createElement("span",{className:o(Y)},u))),t&&d.createElement(L.a,{boundariesElement:"window",isVisible:!0,hide:n,placement:"right",popoverRenderFn:function(){var e=new Set,t=c.map((function(t){var n=t.user;return n&&n.id&&!e.has(n.id)?(e.add(n.id),n):null})).filter(M.b);return d.createElement(T,{close:n,users:t})}},d.createElement(d.Fragment,null)))}))):null})))}))}var K=d.forwardRef((function(e,t){var n=e.creator,r=e.highlights,o=d.useContext(I.c).highlightSegments,a=d.useRef(null),s=d.useState(null),i=v()(s,2),c=i[0],u=i[1],l=Object(f.useCx)(),p=Object(f.useTheme)(),g=d.useState(null),m=v()(g,2),h=m[0],b=m[1],y=d.useState(null),x=v()(y,2),E=x[0],O=x[1];return d.useEffect((function(){var e=function(){var e=q(o,r,p);if(u(e),"function"!=typeof t&&(null==t?void 0:t.current)&&O(t.current.offsetTop),null==a?void 0:a.current){var n=a.current.getBoundingClientRect().left,s=window.innerWidth-n-8*p.grid.xStep;b(s)}};j.a.on("resize_throttled",e);var n=Object(C.a)((function(t){"iframe.resize"!==t.context&&"player.js"!==t.context||e()})).destructor;return e(),function(){j.a.off("resize_throttled",e),n()}}),[r,o]),d.createElement("div",{className:l(H)},d.createElement(w.b,{display:"block",xs:{display:"none"},sm:{display:"none"},md:{display:"none"},lg:{display:"none"}},d.createElement("aside",{className:l(W),ref:a,style:{width:h?"".concat(h,"px"):void 0}},c&&d.createElement(X,{creator:n,highlights:r,positionMap:c,yPosOffset:E,width:h}))))})),Z=d.memo(K),$=l()(z(),B),ee=l()(A()),te=n("./src/components/post/body/ActivePrivateNoteContext.tsx");var ne=n("./src/components/session/useFlag.tsx"),re=n("./src/util/richText.ts");function oe(){var e=o()(["\n  fragment PostBody_customStyleSheet on CustomStyleSheet {\n    id\n    ...PostBodySection_customStyleSheet\n  }\n  ","\n"]);return oe=function(){return e},e}function ae(){var e=o()(["\n  fragment PostBody_privateNote on Note {\n    ...normalizedBodyModel_privateNote\n    ...PostBodySection_privateNote\n  }\n  ","\n  ","\n"]);return ae=function(){return e},e}function se(){var e=o()(["\n  fragment PostBody_creator on User {\n    ...PostNotesMarkers_creator\n  }\n  ","\n"]);return se=function(){return e},e}function ie(){var e=o()(["\n  fragment PostBody_highlight on Quote {\n    paragraphs {\n      id\n    }\n    ...normalizedBodyModel_highlight\n    ...PostBodySection_highlight\n    ...PostNotesMarkers_highlight\n  }\n  ","\n  ","\n  ","\n"]);return ie=function(){return e},e}function ce(){var e=o()(["\n  fragment PostBody_bodyModel on RichText {\n    sections {\n      name\n      startIndex\n      textLayout\n      imageLayout\n      backgroundImage {\n        id\n        originalHeight\n        originalWidth\n      }\n      videoLayout\n      backgroundVideo {\n        videoId\n        originalHeight\n        originalWidth\n        previewImageId\n      }\n    }\n    paragraphs {\n      id\n      ...PostBodySection_paragraphs\n    }\n    ...normalizedBodyModel_richText\n  }\n  ","\n  ","\n"]);return ce=function(){return e},e}var ue=d.forwardRef((function(e,t){var n,r,o=e.bodyModel,a=e.creator,i=e.customStyleSheet,u=e.highlights,l=e.isAuroraPostPageEnabled,g=e.privateNotes,m=e.postBodyInserts,y=e.richTextStyle,v=void 0===y?"FULL_PAGE":y,x=Object(f.useCx)(),E=null===(n=d.useContext(p.b).watchedBounds.get("byline"))||void 0===n||null===(r=n.ref)||void 0===r?void 0:r.current,O=E?E.offsetTop-48:100,S={position:"absolute",left:0,top:"calc(100vh + ".concat(O,"px)"),bottom:"calc(100vh + ".concat(100,"px)"),width:"10px",pointerEvents:"none"},_=!!Object(ne.a)("enable_icelandic_truncated_posts"),w=Object(te.b)().privateNoteSelection,P=d.useMemo((function(){return u&&w?[].concat(c()(u),[w]):u}),[u,w]),j=m?function(e){var t;return Object.keys(e).some((function(n){return!!e[n].find((function(e){return"BYLINE"===e.insertType}))&&(t=n,!0)})),t}(m):void 0,k=d.useMemo((function(){return Object(re.f)(o,{bylineParagraphName:j,highlights:P,isAuroraPostPageEnabled:l,isLightweight:_,privateNotes:g,richTextStyle:v})}),[o,P,g,v,_]),N=m&&m.first;return d.createElement("div",{ref:t},d.createElement(d.Fragment,null,d.createElement(p.a,{name:"ghost-track",type:"ghost",className:x(S)}),"FULL_PAGE"===v&&u&&u.length>0&&d.createElement(Z,{creator:a,highlights:c()(u),ref:t}),!!N&&N.map((function(e,t){return d.createElement("section",{className:x({marginBottom:"20px"}),key:"postBodyInsertFirst_".concat(t)},e.component)}))),k.map((function(e,t){if("HR"===e){var n,r,o=k[t-1],a=k[t+1],c="HR"!==o&&(null==o||null===(n=o.section)||void 0===n?void 0:n.backgroundImage),u="HR"!==a&&(null==a||null===(r=a.section)||void 0===r?void 0:r.backgroundImage);return c||u?null:d.createElement(h,{key:t})}return d.createElement(b.d,s()({key:e.section.name||t,customStyleSheet:i,postBodyInserts:m},e))})))})),le=(t.f=ue,l()(ce(),re.i,b.d.fragments.paragraphs)),de=l()(ie(),re.g,b.b,$),pe=l()(se(),ee),fe=l()(ae(),re.h,b.c),ge=l()(oe(),b.a)},"./src/components/post/grouping/ParagraphLayoutGrouping.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return _})),n.d(t,"c",(function(){return w})),n.d(t,"d",(function(){return P})),n.d(t,"b",(function(){return j})),n.d(t,"e",(function(){return k}));var r=n("./node_modules/@babel/runtime/helpers/toConsumableArray.js"),o=n.n(r),a=n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),s=n.n(a),i=n("./node_modules/@babel/runtime/helpers/defineProperty.js"),c=n.n(i),u=n("./node_modules/graphql-tag/src/index.js"),l=n.n(u),d=n("./node_modules/react/index.js"),p=n("./src/components/post/grouping/ParagraphStyleGrouping.tsx"),f=n("./src/framework/design-system/index.ts"),g=n("./src/framework/style/index.ts"),m=n("./src/schema-types/globalTypes.ts"),h=n("./src/util/richText.ts");function b(){var e=s()(["\n  fragment ParagraphLayoutGrouping_customStyleSheet on CustomStyleSheet {\n    id\n    ...ParagraphStyleGrouping_customStyleSheet\n  }\n  ","\n"]);return b=function(){return e},e}function y(){var e=s()(["\n  fragment ParagraphLayoutGrouping_privateNote on Note {\n    ...ParagraphStyleGrouping_privateNote\n  }\n  ","\n"]);return y=function(){return e},e}function v(){var e=s()(["\n  fragment ParagraphLayoutGrouping_highlight on Quote {\n    ...ParagraphStyleGrouping_highlight\n  }\n  ","\n"]);return v=function(){return e},e}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var E={clear:"both"},O={clear:"both",width:"100%"},S=function(e){var t={boxSizing:"border-box",margin:"0 auto",width:"100%"};return"INSET_CENTER"===e?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{maxWidth:"700px",padding:"0 1.25em"}):t},_=d.memo((function(e){var t=e.layoutGroup,n=e.postBodyInserts,r=e.customStyleSheet,o=e.isEmbedded,a=Object(g.useCx)(),s=t.styleGroups[0].paragraphViewModels[0].richTextStyle,i=t.styleGroups.map((function(e,t){return d.createElement(p.a,{key:t,styleGroup:e,postBodyInserts:n,customStyleSheet:r})}));if(Object(h.j)(s)||o)return d.createElement(d.Fragment,null,i);switch(t.effectiveLayout){case"OUTSET_CENTER":case"OUTSET_ROW":return d.createElement("div",{className:a(E)},d.createElement(f.b,{size:{xs:"full",sm:"full",md:"full",lg:"outset",xl:"outset"}},i));case"FULL_WIDTH":return d.createElement("div",{className:a(O)},i);default:return"FULL_PAGE"===s?d.createElement(f.b,{size:"inset"},i):d.createElement("div",{className:a(S(t.effectiveLayout))},i)}})),w=l()(v(),p.c),P=l()(y(),p.d),j=l()(b(),p.b),k=function(e){var t=[],n=[];e.forEach((function(e){var r=N(e.paragraphStyle,e.paragraph.layout),a=t[t.length-1];if(a&&a.effectiveLayout===r)n.push(e);else{if(a){var s,i=Object(p.e)(n);(s=a.styleGroups).push.apply(s,o()(i))}n.length=0,n.push(e),t.push({styleGroups:[],effectiveLayout:r})}}));var r=t[t.length-1];if(r){var a,s=Object(p.e)(n);(a=r.styleGroups).push.apply(a,o()(s))}return t},N=function(e,t){switch(t){case m.g.INSET_LEFT:case m.g.OUTSET_LEFT:return"IMG"===e||"IFRAME"===e?m.g.INSET_CENTER:t;case m.g.OUTSET_ROW_CONTINUE:return m.g.OUTSET_ROW;default:return t||m.g.INSET_CENTER}}},"./src/framework/design-system/index.ts":function(e,t,n){"use strict";var r=n("./src/framework/design-system/components/index.ts");n.d(t,"a",(function(){return r.b})),n.d(t,"b",(function(){return r.v}))}}]);
//# sourceMappingURL=AMPPost~CollectionHomepage~CollectionHomepagePreview~CollectionTagged~DebugCachedPost~PackageBuilder~7387ec3e.742d5033.chunk.js.map