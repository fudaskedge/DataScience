(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"./node_modules/lodash/isNumber.js":function(e,t,n){var r=n("./node_modules/lodash/_baseGetTag.js"),o=n("./node_modules/lodash/isObjectLike.js");e.exports=function(e){return"number"==typeof e||o(e)&&"[object Number]"==r(e)}},"./src/apollo/error.ts":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var r=function(e){if(!e)return!1;var t=e.graphQLErrors;return!!t&&!!t.find((function(e){return 2===e.type&&1===e.path.length}))},o=function(e){if(!e)return!1;var t=e.graphQLErrors;return!!t&&!!t.find((function(e){var t;return"RESPONSE_LOCKED"===(null===(t=e.extensions)||void 0===t?void 0:t.code)}))},s=function(e){return!(!e||0===e.length)&&!!e.find((function(e){var t;return"TOO_MANY_REQUESTS"===(null===(t=e.extensions)||void 0===t?void 0:t.code)}))}},"./src/components/responses/editor/InlineResponseEditor.tsx":function(e,t,n){"use strict";n.r(t),n.d(t,"InlineResponseEditor",(function(){return ze}));var r,o=n("./node_modules/@babel/runtime/helpers/typeof.js"),s=n.n(o),a=n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),i=n.n(a),c=n("./node_modules/react/index.js"),l=n.n(c),u=n("./src/components/editor/EditorActions.tsx"),p=n("./src/components/editor/editorHelpers.tsx"),d=n("./src/components/responses/ResponsesContext.tsx"),m=n("./node_modules/@babel/runtime/regenerator/index.js"),f=n.n(m),b=n("./node_modules/react-redux/es/index.js"),v=n("./src/apollo/error.ts");!function(e){e.FULL="web-full",e.INLINE_HOMEPAGE_TOP="web-inline-homepage-top",e.INLINE_POST_RESPONSE="web-inline-post-response",e.INLINE_NEWSLETTER="web-inline-newsletter",e.INLINE_QUOTE_RESPONSES="web-inline-quote-responses"}(r||(r={}));var g=n("./src/framework/design-system/components/index.ts"),h=n("./src/framework/design-system/type/index.ts"),E=n("./src/util/routes.ts"),x=function(e){var t=e.message||"The author has closed discussion for this story.";return c.createElement(g.b,{backgroundColor:"BASE_NORMAL",display:"flex",flexDirection:"row",alignItems:"center",padding:"16px"},c.createElement(h.b,{scale:"M",tag:"span",color:"DARKER"},t," ",c.createElement(g.t,{href:Object(E.fb)(),target:"_blank",inline:!0,linkStyle:"OBVIOUS"},"Learn more.")))},y=n("./node_modules/@babel/runtime/helpers/toConsumableArray.js"),O=n.n(y),R=n("./node_modules/@babel/runtime/helpers/defineProperty.js"),j=n.n(R),I=n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),P=n.n(I),S=n("./node_modules/@apollo/react-components/lib/react-components.esm.js"),w=n("./node_modules/graphql-tag/src/index.js"),T=n.n(w),C=n("./src/components/responses/ResponsesSidebar_PostResponsesQuery.tsx"),_=n("./src/components/responses/SimpleResponse_simpleResponse.tsx");function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){j()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(){var e=P()(["\n  mutation publishPostResponse(\n    $inResponseToPostId: ID!\n    $deltas: [Delta!]!\n    $inResponseToQuoteId: ID\n  ) {\n    publishPostResponse(\n      inResponseToPostId: $inResponseToPostId\n      deltas: $deltas\n      inResponseToQuoteId: $inResponseToQuoteId\n    ) {\n      itemType {\n        __typename\n        ... on StreamItemPostSimpleResponse {\n          ...SimpleResponse_simpleResponse\n        }\n      }\n    }\n  }\n  ","\n"]);return N=function(){return e},e}var L=T()(N(),_.a),A=function(e){var t=e.children,n=e.postId;return c.createElement(S.a,{mutation:L,update:function(e,t){var r=function(e,t){var n,r=null==t||null===(n=t.post)||void 0===n?void 0:n.postResponses;if(!(null==r?void 0:r.responsesConnection)||null===(null==r?void 0:r.count)||!e.data)return null;var o=e.data.publishPostResponse,s=r.responsesConnection.stream;return{post:D({},t.post,{postResponses:D({},r,{count:r.count+1,responsesConnection:D({},r.responsesConnection,{stream:[o].concat(O()(s))})})})}}(t,e.readQuery({query:C.a,variables:{postId:n,postResponsesPaging:{limit:10}}}));null!==r&&e.writeQuery({query:C.a,data:r,variables:{postId:n,postResponsesPaging:{limit:10}}})}},(function(e,n){return t({publishResponse:e,loading:n.loading,error:n.error})}))};function Q(){var e=P()(["\n  mutation savePostResponse(\n    $inResponseToPostId: ID!\n    $deltas: [Delta!]!\n    $inResponseToQuoteId: ID\n  ) {\n    savePostResponse(\n      inResponseToPostId: $inResponseToPostId\n      deltas: $deltas\n      inResponseToQuoteId: $inResponseToQuoteId\n    ) {\n      ... on Post {\n        id\n      }\n    }\n  }\n"]);return Q=function(){return e},e}var M=T()(Q()),$=function(e){var t=e.children;return c.createElement(S.a,{mutation:M},(function(e){return t({saveResponse:e})}))},B=n("./src/components/responses/editor/SimpleEditorType.tsx"),H=n("./node_modules/slate/dist/index.es.js"),V=n("./node_modules/slate-react/dist/index.es.js"),z=n("./src/components/editor/EditorBody.tsx"),U=n("./src/components/editor/EditorWrapper.tsx"),q=n("./src/components/editor/useMediumEditor.tsx"),W=n("./src/components/format/TimeAgo.tsx"),F=n("./src/components/navigation/Redirect.tsx"),G=n("./src/framework/style/index.ts");function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var J=l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.99 5.04c.26-.21.64-.22.91-.01.97.72 1.77 1.21 2.6 1.54.83.32 1.72.48 2.89.5.41.01.74.35.74.76-.02 3.62-.43 6.26-1.45 8.21-1.03 1.98-2.66 3.21-4.97 4.08a.75.75 0 0 1-.53 0c-2.25-.87-3.86-2.1-4.9-4.07-1.02-1.95-1.46-4.59-1.48-8.22 0-.41.33-.75.75-.76 1.19-.02 2.1-.18 2.92-.5.82-.32 1.6-.81 2.52-1.53zm.46.9c-.9.69-1.71 1.21-2.62 1.56a8.9 8.9 0 0 1-3.02.57c.03 3.45.46 5.82 1.36 7.51.88 1.69 2.25 2.77 4.28 3.57 2.1-.8 3.47-1.89 4.34-3.57.89-1.7 1.3-4.07 1.34-7.51a8.8 8.8 0 0 1-3-.57 11.8 11.8 0 0 1-2.68-1.56zm0 9.15a2.67 2.67 0 1 0 0-5.34 2.67 2.67 0 0 0 0 5.34zm0 1a3.67 3.67 0 1 0 0-7.34 3.67 3.67 0 0 0 0 7.34zm-1.82-3.77l.53-.53.91.92 1.63-1.63.52.53-2.15 2.15-1.44-1.44z"}),Y=function(e){return l.a.createElement("svg",K({width:25,height:25,viewBox:"0 0 25 25"},e),J)},X=function(){var e=Object(G.useCx)();return c.createElement(g.H,{isVisible:!0,darkTheme:!0,placement:"top",mouseLeaveDelay:0,targetDistance:10,popoverRenderFn:function(){return c.createElement(g.b,{padding:"8px"},"View community guidelines")}},c.createElement(g.t,{href:"https://policy.medium.com/medium-rules-30e5502c4eb4",target:"_blank",className:e((function(e){return{fill:e.baseColor.fill.light,":hover":{fill:e.baseColor.fill.dark}}}))},c.createElement(Y,null)))},Z=n("./src/components/ui/PopoverMenu.tsx"),ee=n("./src/styles/zIndex.ts"),te=n("./src/svg/overflow-dots-filled-25px.svg"),ne=function(e){return{cursor:"pointer",border:0,fill:e.baseColor.fill.light,":hover":{fill:e.baseColor.fill.dark}}},re=function(e){var t=e.isEdit,n=e.saveResponse,r=e.setDraftResponseId,o=Object(G.useCx)();return c.createElement(g.I,null,(function(e){var s=e.isVisible,a=e.toggle,i=e.hide;return c.createElement(g.w,{isVisible:s,hide:i,customZIndex:ee.a.responseSidebarPopover,noArrow:!0,placement:"bottom-end",popoverRenderFn:function(){return c.createElement(Z.a,null,c.createElement(Z.b,null,c.createElement(g.t,{onClick:t&&r?r:n,"data-testid":"saveResponseMenuItem"},"Make this response a story")))}},c.createElement(g.t,{onClick:a,className:o(ne),"data-testid":"editorMenu"},c.createElement(te.a,null)))}))},oe=n("./src/components/post/paragraph/TextParagraph.tsx"),se=n("./src/schema-types/globalTypes.ts"),ae=n("./src/util/quote.ts"),ie=function(e){var t=e.quote,n=Object(G.useCx)();if(!t)return null;var r=Object(ae.a)(t);return r?c.createElement("div",{className:n({boxShadow:"0px 1px 4px rgba(0,0,0,0.04)",border:"1px solid rgba(0,0,0,0.1)",borderRadius:"3px",padding:"20px 16px",margin:"10px 14px 0 14px","& mark":{cursor:"text"}})},c.createElement(oe.g,{paragraph:r,paragraphStyle:se.l.P,spaceTop:4,richTextStyle:"STREAM"})):null},ce=function(e){var t=e.responseContent,n=e.setResponseContent,r=e.setIsEmpty,o=e.isEditorOpen,s=Object(G.useCx)();return c.createElement("textarea",{placeholder:"What are your thoughts?",value:t,onChange:function(e){var t=e.target.value;r(!t),n(t)},className:s({width:"100%",padding:"14px",resize:"none",minHeight:o?"100px":"0",height:o?"auto":"47px",fontFamily:"inherit",fontSize:"inherit",lineHeight:"inherit",outline:"0",border:"0"})})},le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{includeInitialDeltas:!0},n=t.includeInitialDeltas,r=[],o=e.split("\n");return n&&(r=[{type:8,index:0,section:{name:ue(),startIndex:0}}]),o.forEach((function(e,t){r.push({type:1,paragraph:{markups:[],name:ue(),text:e,type:1},verifySameName:!1,index:t})})),r},ue=function(){return Math.round(65535*Math.random()).toString(16).padStart(4,"0")},pe=n("./src/components/session/useViewer.tsx"),de=n("./src/components/susi/SusiClickable.tsx"),me=n("./src/components/user/UserAvatar.tsx"),fe=n("./src/framework/design-system/components/Box.tsx"),be=n("./src/framework/reporter/index.ts"),ve=n("./src/framework/source/index.ts"),ge=n("./src/util/useragent.ts");function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(Object(n),!0).forEach((function(t){j()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var xe="The author has closed discussion for this story. We are unable to save changes to your response.",ye=function(){return{"& button":{border:"none"}}},Oe=function(e){var t={display:"flex",alignSelf:"flex-end",padding:"0 14px"};return Ee({},t,e?{transition:"opacity ".concat("400ms",", max-height ").concat("400ms"),opacity:1,maxHeight:"100px"}:{transition:"opacity ".concat("400ms",", max-height ").concat("400ms"),opacity:0,maxHeight:0})},Re=function(e){return e?{transition:"min-height ".concat("400ms"),minHeight:"100px"}:{transition:"min-height ".concat("400ms"),minHeight:"15px"}},je=function(e){var t,n,o,s=e.postId,a=e.responseId,l=e.createdAt,d=e.isPublishingResponse,m=e.publishResponse,v=e.saveResponse,x=void 0===v?function(){return Promise.resolve()}:v,y=e.type,O=void 0===y?B.a.create:y,R=e.onClose,j=void 0===R?function(){return f.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}))}:R,I=e.inResponseToQuote,P=e.initialValue,S=O===B.a.edit,w=Object(G.useCx)(),T=Object(be.c)(),C=Object(ve.d)(),_=Object(ge.b)(navigator.userAgent),k=Object(u.b)().value,D=Object(q.d)([q.e]),N=D.editor,L=D.renderLeaf,A=D.renderElement,Q=c.useState(S),M=i()(Q,2),$=M[0],K=M[1],J=c.useState(!0),Y=i()(J,2),Z=Y[0],ee=Y[1],te=c.useState((t=P)?t.paragraphs.map((function(e){return e.text})).join("\n"):""),ne=i()(te,2),oe=ne[0],se=ne[1],ae=c.useState(void 0),ue=i()(ae,2),he=ue[0],xe=ue[1],je=Object(b.f)((function(e){return e.config.authDomain})),Ie=Object(pe.b)(),Pe=c.useCallback((function(){j().then((function(e){e.preventStateUpdate||(K(!1),_?se(""):Object(p.b)(N))}))}),[K]);return c.useEffect((function(){I&&K(!0)}),[I]),c.useEffect((function(){ee(H.c.string(N).toString().trim().length<=0)}),[k]),c.useEffect((function(){$&&!_&&V.b.focus(N)}),[$]),he?(T.event("inlineEditor.expand",{postId:s,context:r.INLINE_POST_RESPONSE,source:C}),c.createElement(F.a,{to:Object(E.vb)(je,he)})):c.createElement(fe.a,{marginBottom:"20px",padding:S?"0":"0 24px"},c.createElement("div",{className:w({backgroundColor:"white",boxShadow:"0px 2px 8px rgba(0,0,0,0.12)",borderRadius:"4px",display:"flex",flexDirection:"column",paddingTop:$?"14px":"0",paddingBottom:$?"14px":"0",transition:"padding-top ".concat("400ms",", padding-bottom ").concat("400ms")})},Ie&&c.createElement("div",{className:w((n=$,o={display:"flex",alignItems:"center",justifyContent:"space-between",position:"relative",padding:"0 14px"},Ee({},o,n?{transition:"opacity ".concat("400ms",", max-height ").concat("400ms",", margin-bottom ").concat("400ms"),opacity:1,maxHeight:"100px",marginBottom:"6px"}:{transition:"opacity ".concat("300ms",", max-height ").concat("300ms",", margin-bottom ").concat("300ms"),opacity:0,maxHeight:0,marginBottom:"0"})))},c.createElement(fe.a,{display:"flex",alignItems:"center"},c.createElement(me.d,{scale:"XS",user:Ie}),c.createElement(fe.a,{marginLeft:"12px",display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column"},c.createElement(h.b,{scale:"M",color:"DARKER"},Ie.name),S&&l&&c.createElement(h.b,{scale:"M",color:"LIGHTER"},c.createElement(W.a,{timestamp:l})))),$&&c.createElement(fe.a,{display:"flex",justifyContent:"flex-end"},c.createElement(fe.a,{display:"inline-block",margin:"0 -2px 0 0"},c.createElement(X,null)),c.createElement(re,{isEdit:S,setDraftResponseId:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return xe(a)})),saveResponse:function(){var e=_?le(oe):Object(p.c)(N);return x(e,xe)}}))),$&&c.createElement(ie,{quote:I}),c.createElement(fe.a,{display:"flex",flexDirection:"column"},Ie?c.createElement("div",{className:w(Re($)),onClick:function(){return K(!0)},role:"button"},_?c.createElement(ce,{responseContent:oe,setIsEmpty:ee,setResponseContent:se,isEditorOpen:$}):c.createElement(fe.a,{padding:"14px"},c.createElement(U.a,{editor:N},c.createElement(z.a,{renderLeaf:L,renderElement:A,placeholder:"What are your thoughts?"})))):c.createElement(ve.b,{source:{susiEntry:"respond_sidebar"}},c.createElement(de.a,{operation:"register"},c.createElement(fe.a,{padding:"14px"},c.createElement(h.b,{scale:"M",color:"LIGHTER"},"What are your thoughts?")))),c.createElement("div",{className:w(Oe($))},c.createElement("div",{className:w(ye)},c.createElement(g.c,{buttonStyle:"SUBTLE",size:"SMALL",onClick:function(){return Pe()}},"Cancel")),c.createElement(g.c,{buttonStyle:"STRONG",size:"SMALL",disabled:Z||d,onClick:function(){var e=_?le(oe,S?{includeInitialDeltas:!1}:void 0):Object(p.c)(N,S?{includeInitialDeltas:!1}:void 0);m(e,Pe)}},S?"Update":"Respond")))))},Ie=n("./src/store/actions/navigation.ts"),Pe=function(e){var t=e.parentPostId,n=c.useContext(d.a),o=n.setIsSavingResponse,s=n.responsesLocked,a=n.inResponseToQuote,i=n.setInResponseToQuote,l=Object(ve.d)(),u=Object(be.c)(),p=Object(b.e)(),m=function(e){return function(n,r){var o;return f.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,f.a.awrap(e({variables:{inResponseToPostId:t,deltas:n,inResponseToQuoteId:null==a?void 0:a.id}}));case 2:o=s.sent,r(o.data.savePostResponse.id);case 4:case"end":return s.stop()}}))}};return c.createElement(A,{postId:t},(function(e){var n=e.publishResponse,d=e.loading,b=e.error;return Object(v.a)(b)||s?(o(!1),c.createElement(x,{message:xe})):c.createElement($,null,(function(e){var s,b=e.saveResponse;return c.createElement(je,{postId:t,isPublishingResponse:d,publishResponse:(s=n,function(e,n){return o(!0),s({variables:{inResponseToPostId:t,deltas:e,inResponseToQuoteId:null==a?void 0:a.id}}).then((function(e){var s=e.data&&e.data.publishPostResponse,a=Object(v.b)(e.errors);if(s)return u.event("inlineEditor.publish",{postId:t,context:r.INLINE_POST_RESPONSE,source:l}),o(!1),n();a&&(o(!1),p(Object(Ie.m)({message:"You’ve reached the limit for stories that can be published in one day. Please try again tomorrow.",toastStyle:"ERROR"})))}))}),saveResponse:m(b),type:B.a.create,inResponseToQuote:a,onClose:function(){return f.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return i(void 0),e.abrupt("return",{});case 2:case"end":return e.stop()}}))}})}))}))},Se=n("./src/components/responses/ReadOrEditSimpleResponseContext.tsx");function we(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var Te,Ce=function(e){var t,n=e.originalParagraphs,r=void 0===n?[]:n,o=e.newDeltas,s=void 0===o?[]:o,a=O()(s),i=r.map((function(e,t){return{name:e.name,markups:e.markups,index:t}})),c=s.map((function(e){var t;return null==e||null===(t=e.paragraph)||void 0===t?void 0:t.name})),l=null==i?void 0:i.filter((function(e){return!c.includes(e.name)})),u=0,p=!0,d=!1,m=void 0;try{for(var f,b=l[Symbol.iterator]();!(p=(f=b.next()).done);p=!0){var v=f.value;(!t||v.index<t)&&(t=v.index),a.splice(v.index,0,{index:v.index-u,type:2,paragraph:{name:v.name,markups:v.markups},verifySameName:!1}),u+=1}}catch(e){d=!0,m=e}finally{try{p||null==b.return||b.return()}finally{if(d)throw m}}return i.forEach((function(e){var t=e.name,n=e.index,r=a.findIndex((function(e){var n;return(null==e||null===(n=e.paragraph)||void 0===n?void 0:n.name)===t}));void 0!==r&&void 0!==a[r]&&a[r].index!==n&&2!==a[r].type&&(a[r]=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?we(Object(n),!0).forEach((function(t){j()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a[r],{verifySameName:!1}))})),a},_e=n("./node_modules/lodash/isNumber.js"),ke=n.n(_e),De=n("./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");function Ne(){var e=P()(["\n  mutation updatePostResponse($responseId: ID!, $latestRev: Int!, $deltas: [Delta!]!) {\n    updatePostResponse(responseId: $responseId, latestRev: $latestRev, deltas: $deltas) {\n      itemType {\n        __typename\n        ... on StreamItemPostSimpleResponse {\n          ...SimpleResponse_simpleResponse\n        }\n      }\n    }\n  }\n  ","\n"]);return Ne=function(){return e},e}!function(e){e.success="SUCCESS",e.error="ERROR"}(Te||(Te={}));var Le=function(e){var t;return(t={},j()(t,Te.success,"inlineEditor.publish"),j()(t,Te.error,"inlineEditor.publishError"),t)[e]},Ae=T()(Ne(),_.a);function Qe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Qe(Object(n),!0).forEach((function(t){j()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $e=function(e){var t=e.responseId,n=e.parentPostId,r=e.initialValue,o=c.useContext(Se.a),s=o.setIsEditing,a=o.createdAt,l=o.editingQuote,u=o.setEditingQuote,p=c.useContext(d.a).setIsSavingResponse,m=function(e){var t=e.responseId,n=Object(be.c)(),r=Object(ve.d)(),o=c.useContext(Se.a).latestRev,s=Object(De.d)(Ae,{variables:{responseId:t,latestRev:-1,deltas:[]},onError:function(){n.event(Le(Te.error),{responseId:t,source:r})},update:function(){n.event(Le(Te.success),{responseId:t,source:r})}}),a=i()(s,2),l=a[0],u=a[1];return{updateResponse:c.useCallback((function(e){return l({variables:{latestRev:ke()(o)?o:-1,deltas:e,responseId:t}})}),[l,t,o]),error:null==u?void 0:u.error,loading:null==u?void 0:u.loading}}({responseId:t,parentPostId:n}),b=m.updateResponse,g=m.error,h=m.loading,E=c.useCallback((function(e,t){var n=e.map((function(e){return e.paragraph&&!e.paragraph.markups?Me({},e,{paragraph:Me({},e.paragraph,{markups:[]})}):e})),o=Ce({originalParagraphs:null==r?void 0:r.paragraphs,newDeltas:n});p(!0),b(o).then((function(){s(!1),p(!1),t()})).catch((function(){p(!1)}))}),[b]);return Object(v.a)(g)?c.createElement(x,{message:xe}):c.createElement(je,{postId:n,responseId:t,isPublishingResponse:h,publishResponse:E,type:B.a.edit,createdAt:a,onClose:function(){return f.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!1),s(!1),u(null),e.abrupt("return",{preventStateUpdate:!0});case 4:case"end":return e.stop()}}))},inResponseToQuote:l,initialValue:r})},Be=n("./src/components/metabar/OpenInApp.tsx"),He=function(e){var t=e.postId;return c.createElement(g.b,{backgroundColor:"BASE_NORMAL",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"24px"},c.createElement(h.b,{scale:"S",color:"DARKER"},"To respond to this story,",c.createElement("br",null),"get the free Medium app."),c.createElement(g.b,null,c.createElement(Be.a,{isButton:!0,appEntry:"responsesSidebar",postId:t})))},Ve=n("./src/components/session/useFlag.tsx"),ze=function(e){var t,n=e.parentPostId,r=e.responseId,o=e.type,a=e.initialValue,l=c.useContext(d.a),m=l.responsesLocked,f=l.isLockedResponse,b=Boolean(Object(Ve.a)("enable_lock_responses")),v=c.useState(!1),g=i()(v,2),h=g[0],E=g[1];if(a&&(t=Object(p.e)(a)),c.useEffect((function(){void 0!==("undefined"==typeof document?"undefined":s()(document))&&E(!0)}),[]),!h)return null;if(b&&m){var y=f?"This response belongs to a story with a closed discussion. Responding is not supported at this time.":void 0;return c.createElement(x,{message:y})}if(Object(ge.d)(navigator.userAgent))return c.createElement(He,{postId:n});var O=o===B.a.edit;return c.createElement(ve.b,{source:{susiEntry:"respond_sidebar"},extendSource:!0},c.createElement(u.a,{initialValue:O?t:void 0},O&&r?c.createElement($e,{responseId:r,parentPostId:n,initialValue:a}):c.createElement(Pe,{parentPostId:n})))}}}]);
//# sourceMappingURL=responses.editor.c484d0e6.chunk.js.map