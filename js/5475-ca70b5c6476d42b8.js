"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5475],{22999:function(e,r){var n=/^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;r.Z=function(e){var r=e.match(n);return r?r[1]+"…"+r[2]:e}},96063:function(e,r,n){n.d(r,{q:function(){return x},O:function(){return g}});var[t,a]=(0,n(55227).k)({name:"AvatarStylesContext",hookName:"useAvatarStyles",providerName:"<Avatar/>"}),l=n(97933),i=n(85893);function s(e){let[r,n]=e.split(" ");return r&&n?`${r.charAt(0)}${n.charAt(0)}`:r.charAt(0)}function o(e){let{name:r,getInitials:n,...t}=e,s=a();return(0,i.jsx)(l.m.div,{role:"img","aria-label":r,...t,__css:s.label,children:r?null==n?void 0:n(r):null})}o.displayName="AvatarName";var d=e=>(0,i.jsxs)(l.m.svg,{viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg",...e,children:[(0,i.jsx)("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),(0,i.jsx)("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]}),u=n(15721),c=n(67294);function m(e){let{src:r,srcSet:n,onError:t,onLoad:a,getInitials:s,name:m,borderRadius:p,loading:f,iconLabel:v,icon:h=(0,i.jsx)(d,{}),ignoreFallback:g,referrerPolicy:x}=e,b=(0,u.d)({src:r,onError:t,ignoreFallback:g});return r&&"loaded"===b?(0,i.jsx)(l.m.img,{src:r,srcSet:n,alt:m,onLoad:a,referrerPolicy:x,className:"chakra-avatar__img",loading:f,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:p}}):m?(0,i.jsx)(o,{className:"chakra-avatar__initials",getInitials:s,name:m}):(0,c.cloneElement)(h,{role:"img","aria-label":v})}m.displayName="AvatarImage";var p=n(35059),f=n(91639),v=n(33179),h=n(25432),g={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},x=(0,p.G)(((e,r)=>{let n=(0,f.jC)("Avatar",e),[a,o]=(0,c.useState)(!1),{src:u,srcSet:p,name:x,showBorder:b,borderRadius:y="full",onError:I,onLoad:_,getInitials:C=s,icon:N=(0,i.jsx)(d,{}),iconLabel:j=" avatar",loading:k,children:S,borderColor:R,ignoreFallback:E,...F}=(0,v.Lr)(e),A={borderRadius:y,borderWidth:b?"2px":void 0,...g,...n.container};return R&&(A.borderColor=R),(0,i.jsx)(l.m.span,{ref:r,...F,className:(0,h.cx)("chakra-avatar",e.className),"data-loaded":(0,h.PB)(a),__css:A,children:(0,i.jsxs)(t,{value:n,children:[(0,i.jsx)(m,{src:u,srcSet:p,loading:k,onLoad:(0,h.v0)(_,(()=>{o(!0)})),onError:I,getInitials:C,name:x,borderRadius:y,icon:N,iconLabel:j,ignoreFallback:E}),S]})})}));x.displayName="Avatar"},72909:function(e,r,n){n.d(r,{H:function(){return m}});var t=n(96063),a=n(35059),l=n(91639),i=n(33179),s=n(97933),o=n(25432),d=n(92495),u=n(67294),c=n(85893),m=(0,a.G)((function(e,r){let n=(0,l.jC)("Avatar",e),{children:a,borderColor:m,max:p,spacing:f="-0.75rem",borderRadius:v="full",...h}=(0,i.Lr)(e),g=(0,d.W)(a),x=p?g.slice(0,p):g,b=null!=p&&g.length-p,y=x.reverse().map(((r,n)=>{var t;let a={marginEnd:0===n?0:f,size:e.size,borderColor:null!=(t=r.props.borderColor)?t:m,showBorder:!0};return(0,u.cloneElement)(r,function(e){let r=Object.assign({},e);for(let e in r)void 0===r[e]&&delete r[e];return r}(a))})),I={display:"flex",alignItems:"center",justifyContent:"flex-end",flexDirection:"row-reverse",...n.group},_={borderRadius:v,marginStart:f,...t.O,...n.excessLabel};return(0,c.jsxs)(s.m.div,{ref:r,role:"group",__css:I,...h,className:(0,o.cx)("chakra-avatar__group",e.className),children:[b>0&&(0,c.jsx)(s.m.span,{className:"chakra-avatar__excess",__css:_,children:`+${b}`}),y]})}));m.displayName="AvatarGroup"},59690:function(e,r,n){n.d(r,{K:function(){return i},Y:function(){return l}});var t=n(38267),a=n(25432);function l(e){let{isDisabled:r,isInvalid:n,isReadOnly:t,isRequired:l,...s}=i(e);return{...s,disabled:r,readOnly:t,required:l,"aria-invalid":(0,a.Qm)(n),"aria-required":(0,a.Qm)(l),"aria-readonly":(0,a.Qm)(t)}}function i(e){var r,n,l;let i=(0,t.NJ)(),{id:s,disabled:o,readOnly:d,required:u,isRequired:c,isInvalid:m,isReadOnly:p,isDisabled:f,onFocus:v,onBlur:h,...g}=e,x=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==i?void 0:i.hasFeedbackText)&&(null==i?void 0:i.isInvalid)&&x.push(i.feedbackId),(null==i?void 0:i.hasHelpText)&&x.push(i.helpTextId),{...g,"aria-describedby":x.join(" ")||void 0,id:null!=s?s:null==i?void 0:i.id,isDisabled:null!=(r=null!=o?o:f)?r:null==i?void 0:i.isDisabled,isReadOnly:null!=(n=null!=d?d:p)?n:null==i?void 0:i.isReadOnly,isRequired:null!=(l=null!=u?u:c)?l:null==i?void 0:i.isRequired,isInvalid:null!=m?m:null==i?void 0:i.isInvalid,onFocus:(0,a.v0)(null==i?void 0:i.onFocus,v),onBlur:(0,a.v0)(null==i?void 0:i.onBlur,h)}}},38267:function(e,r,n){n.d(r,{NJ:function(){return v}});var t=n(55227),a=n(81103),l=n(35059),i=n(91639),s=n(33179),o=n(97933),d=n(25432),u=n(67294),c=n(85893),[m,p]=(0,t.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[f,v]=(0,t.k)({strict:!1,name:"FormControlContext"});(0,l.G)((function(e,r){let n=(0,i.jC)("Form",e),t=(0,s.Lr)(e),{getRootProps:l,htmlProps:p,...v}=function(e){let{id:r,isRequired:n,isInvalid:t,isDisabled:l,isReadOnly:i,...s}=e,o=(0,u.useId)(),c=r||`field-${o}`,m=`${c}-label`,p=`${c}-feedback`,f=`${c}-helptext`,[v,h]=(0,u.useState)(!1),[g,x]=(0,u.useState)(!1),[b,y]=(0,u.useState)(!1),I=(0,u.useCallback)(((e={},r=null)=>({id:f,...e,ref:(0,a.lq)(r,(e=>{e&&x(!0)}))})),[f]),_=(0,u.useCallback)(((e={},r=null)=>{var n,a;return{...e,ref:r,"data-focus":(0,d.PB)(b),"data-disabled":(0,d.PB)(l),"data-invalid":(0,d.PB)(t),"data-readonly":(0,d.PB)(i),id:null!=(n=e.id)?n:m,htmlFor:null!=(a=e.htmlFor)?a:c}}),[c,l,b,t,i,m]),C=(0,u.useCallback)(((e={},r=null)=>({id:p,...e,ref:(0,a.lq)(r,(e=>{e&&h(!0)})),"aria-live":"polite"})),[p]),N=(0,u.useCallback)(((e={},r=null)=>({...e,...s,ref:r,role:"group"})),[s]),j=(0,u.useCallback)(((e={},r=null)=>({...e,ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"})),[]);return{isRequired:!!n,isInvalid:!!t,isReadOnly:!!i,isDisabled:!!l,isFocused:!!b,onFocus:()=>y(!0),onBlur:()=>y(!1),hasFeedbackText:v,setHasFeedbackText:h,hasHelpText:g,setHasHelpText:x,id:c,labelId:m,feedbackId:p,helpTextId:f,htmlProps:s,getHelpTextProps:I,getErrorMessageProps:C,getRootProps:N,getLabelProps:_,getRequiredIndicatorProps:j}}(t),h=(0,d.cx)("chakra-form-control",e.className);return(0,c.jsx)(f,{value:v,children:(0,c.jsx)(m,{value:n,children:(0,c.jsx)(o.m.div,{...l({},r),className:h,__css:n.container})})})})).displayName="FormControl",(0,l.G)((function(e,r){let n=v(),t=p(),a=(0,d.cx)("chakra-form__helper-text",e.className);return(0,c.jsx)(o.m.div,{...null==n?void 0:n.getHelpTextProps(e,r),__css:t.helperText,className:a})})).displayName="FormHelperText"},45591:function(e,r,n){n.d(r,{B:function(){return v},m:function(){return f}});var t=n(55227),a=n(92495),l=n(35059),i=n(91639),s=n(33179),o=n(97933),d=n(25432),u=n(20888),c=n(67294),m=n(85893),[p,f]=(0,t.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),v=(0,l.G)((function(e,r){let n=(0,i.jC)("Input",e),{children:t,className:l,...f}=(0,s.Lr)(e),v=(0,d.cx)("chakra-input__group",l),h={},g=(0,a.W)(t),x=n.field;g.forEach((e=>{var r,t;n&&(x&&"InputLeftElement"===e.type.id&&(h.paddingStart=null!=(r=x.height)?r:x.h),x&&"InputRightElement"===e.type.id&&(h.paddingEnd=null!=(t=x.height)?t:x.h),"InputRightAddon"===e.type.id&&(h.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(h.borderStartRadius=0))}));let b=g.map((r=>{var n,t;let a=(0,u.oA)({size:(null==(n=r.props)?void 0:n.size)||e.size,variant:(null==(t=r.props)?void 0:t.variant)||e.variant});return"Input"!==r.type.id?(0,c.cloneElement)(r,a):(0,c.cloneElement)(r,Object.assign(a,h,r.props))}));return(0,m.jsx)(o.m.div,{className:v,ref:r,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate"},...f,children:(0,m.jsx)(p,{value:n,children:b})})}));v.displayName="InputGroup"},28129:function(e,r,n){n.d(r,{I:function(){return u}});var t=n(59690),a=n(35059),l=n(91639),i=n(33179),s=n(97933),o=n(25432),d=n(85893),u=(0,a.G)((function(e,r){let{htmlSize:n,...a}=e,u=(0,l.jC)("Input",a),c=(0,i.Lr)(a),m=(0,t.Y)(c),p=(0,o.cx)("chakra-input",e.className);return(0,d.jsx)(s.m.input,{size:n,...m,__css:u.field,ref:r,className:p})}));u.displayName="Input",u.id="Input"},98715:function(e,r,n){n.d(r,{Z:function(){return u},x:function(){return c}});var t=n(45591),a=n(97933),l=n(35059),i=n(25432),s=n(85893),o=(0,a.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),d=(0,l.G)((function(e,r){var n,a;let{placement:l="left",...i}=e,d=(0,t.m)(),u=d.field,c={["left"===l?"insetStart":"insetEnd"]:"0",width:null!=(n=null==u?void 0:u.height)?n:null==u?void 0:u.h,height:null!=(a=null==u?void 0:u.height)?a:null==u?void 0:u.h,fontSize:null==u?void 0:u.fontSize,...d.element};return(0,s.jsx)(o,{ref:r,__css:c,...i})}));d.id="InputElement",d.displayName="InputElement";var u=(0,l.G)((function(e,r){let{className:n,...t}=e,a=(0,i.cx)("chakra-input__left-element",n);return(0,s.jsx)(d,{ref:r,placement:"left",className:a,...t})}));u.id="InputLeftElement",u.displayName="InputLeftElement";var c=(0,l.G)((function(e,r){let{className:n,...t}=e,a=(0,i.cx)("chakra-input__right-element",n);return(0,s.jsx)(d,{ref:r,placement:"right",className:a,...t})}));c.id="InputRightElement",c.displayName="InputRightElement"},7754:function(e,r,n){n.d(r,{M:function(){return i}});var t=n(97933),a=n(35059),l=n(85893),i=(0,t.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});i.displayName="Center";var s={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,a.G)((function(e,r){let{axis:n="both",...a}=e;return(0,l.jsx)(t.m.div,{ref:r,__css:s[n],...a,position:"absolute"})}))},776:function(e,r,n){n.d(r,{P:function(){return d}});var t=n(35059),a=n(97933),l=n(20888),i=n(33951),s=n(85893);function o(e){return(0,i.XQ)(e,(e=>"auto"===e?"auto":`span ${e}/span ${e}`))}var d=(0,t.G)((function(e,r){let{area:n,colSpan:t,colStart:i,colEnd:d,rowEnd:u,rowSpan:c,rowStart:m,...p}=e,f=(0,l.oA)({gridArea:n,gridColumn:o(t),gridRow:o(c),gridColumnStart:i,gridColumnEnd:d,gridRowStart:m,gridRowEnd:u});return(0,s.jsx)(a.m.div,{ref:r,__css:f,...p})}));d.displayName="GridItem"}}]);