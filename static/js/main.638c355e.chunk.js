(this.webpackJsonpPinAuthenticator=this.webpackJsonpPinAuthenticator||[]).push([[0],{56:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(9),i=r.n(o),c=r(18),s=r(88),l=r(90),d=r(91),p=r(57),u=r(92),g=r(93),b=r(94),j=r(98),h=r(95),m=r(100),x=r(96),O=r(97),f=r(99),k=Object(f.a)({container:{},appBar:{background:"primary",minHeight:"20px",marginBottom:"20px"},redBar:{background:"red",minHeight:"5px",marginBottom:"5px",marginTop:"5px",width:"50%",borderRadius:"50px"},yellowBar:{background:"yellow",minHeight:"5px",marginBottom:"5px",marginTop:"5px",width:"50%",borderRadius:"50px"},greenBar:{background:"lightgreen",minHeight:"5px",marginBottom:"5px",marginTop:"5px",width:"50%",borderRadius:"50px"},msgRed:{color:"red"},msgYellow:{color:"orange"},msgGreen:{color:"green"},card:{marginTop:"125px",marginBottom:"75px"},inputText:{width:"50%","& label.Mui-focused":{color:"grey"},"& .MuiInput-underline:after":{borderBottomColor:"grey"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"lightgrey",borderRadius:"5px"},"&:hover fieldset":{borderColor:"Primary"},"&.Mui-focused fieldset":{borderColor:"Primary"}}}}),y=r(8);function v(e){return e.toString().length}var B=function(){var e=k(),t=n.a.useState(!1),r=Object(c.a)(t,2),a=r[0],o=r[1],i=n.a.useState(""),f=Object(c.a)(i,2),B=f[0],N=f[1],w=n.a.useState(""),P=Object(c.a)(w,2),I=P[0],T=P[1],S=n.a.useState(!1),M=Object(c.a)(S,2),C=M[0],R=M[1],W=n.a.useState(!1),H=Object(c.a)(W,2),A=H[0],D=H[1],E=n.a.useState(!1),G=Object(c.a)(E,2),J=G[0],Y=G[1],F=n.a.useState(""),K=Object(c.a)(F,2),V=K[0],q=K[1];function z(e){if(v(+e)<4)return R(!0),D(!1),Y(!1),N("Weak"),void q("Tip: PIN length should be 4-digits");if(1949<+e&&+e<2020)return R(!0),D(!1),Y(!1),N("Weak"),void q("Tip: PIN shouldn't be a common year");for(var t=[1234,1111,0,1212,7777,1004,2e3,4444,2222,6969,9999,3333,5555,6666,1122,1313,8888,4321,2001,1010],r=0;r<t.length;r++)if(+e===t[r])return R(!0),D(!1),Y(!1),N("Weak"),void q("Tip: PIN shouldn't be a common pattern");!function(e){for(var t=e.toString().split(""),r=0;r<t.length;r++)t[r]=0|+t[r];if(console.log(t),+t[0]===+t[1]+1&&+t[1]===+t[2]+1&&+t[2]===+t[3]+1||+t[1]===+t[0]+1&&+t[2]===+t[1]+1&&+t[3]===+t[2]+1)return R(!1),D(!0),Y(!1),N("Moderate"),void q("Tip: PIN shouldn't be an increasing or decreasing pattern");for(var a=0,n=0;n<4;n++){for(var o=0,i=n+1;i<4;i++)n!==i&&t[n]===t[i]&&o++;a+=o}console.log(a),a>=2?(R(!0),D(!1),Y(!1),N("Weak"),q("Tip: PIN should not contain repeating digits")):a>=1?(R(!1),D(!0),Y(!1),N("Moderate"),q("Tip: PIN should not contain repeating digits")):(R(!1),D(!1),Y(!0),N("Strong"),q(""))}(+e)}return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(s.a,{}),Object(y.jsx)(l.a,{className:e.appBar,position:"relative",children:Object(y.jsx)(d.a,{children:Object(y.jsx)(p.a,{variant:"h6",children:"PIN Strength Meter"})})}),Object(y.jsx)(u.a,{className:e.card,maxWidth:"sm",children:Object(y.jsxs)(g.a,{children:[Object(y.jsx)(l.a,{className:e.appBar,position:"relative"}),Object(y.jsx)(b.a,{align:"center",children:Object(y.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(y.jsx)(j.a,{className:e.inputText,id:"pin",label:"Enter PIN",value:I,variant:"outlined",onKeyDown:function(e){"Backspace"===e.key?(T(I.slice(0,I.length-1)),e.preventDefault()):"Enter"===e.key&&z(+I),"0"===e.key||"1"===e.key||"2"===e.key||"3"===e.key||"4"===e.key||"5"===e.key||"6"===e.key||"7"===e.key||"8"===e.key||"9"===e.key||e.preventDefault()},onChange:function(e){v(I)<4&&T(e.target.value)},type:a?"text":"password",InputProps:{endAdornment:Object(y.jsx)(h.a,{position:"end",children:Object(y.jsx)(m.a,{onClick:function(){o(!a),console.log(a)},children:a?Object(y.jsx)(x.a,{}):Object(y.jsx)(O.a,{})})})}}),Object(y.jsx)(l.a,{className:C?e.redBar:A?e.yellowBar:J?e.greenBar:void 0,position:"relative"}),Object(y.jsx)(p.a,{className:"Weak"===B?e.msgRed:"Moderate"===B?e.msgYellow:e.msgGreen,variant:"h5",children:B})]})}),Object(y.jsx)(b.a,{children:Object(y.jsx)(p.a,{variant:"h6",align:"center",children:V})})]})})]})};i.a.render(Object(y.jsx)(B,{}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.638c355e.chunk.js.map