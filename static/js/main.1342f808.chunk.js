(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{21:function(e,t,a){},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(4),i=a.n(s),c=(a(21),a(6)),u=(a(22),a(1));function l(e){return e.isDisabled?Object(u.jsx)("div",{className:"attentionMessage",children:"Enter values and press 'set'"}):Object(u.jsx)("div",{className:e.counter===e.maxValue?"counterEqualMaxValue":"defaultDisplay",children:e.counter})}var o=a(42);function d(e){return Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("span",{className:"button",children:Object(u.jsx)(o.a,{disabled:e.errorCondition||e.counter===e.maxValue||e.isDisabled,onClick:e.enlargeCounter,color:"primary",variant:"contained",size:"small",disableElevation:!0,children:"inc"})}),Object(u.jsx)("span",{className:"button",children:Object(u.jsx)(o.a,{disabled:e.errorCondition||e.isDisabled,onClick:function(){e.resetCounter(e.startValue)},color:"primary",variant:"contained",size:"small",disableElevation:!0,children:"reset"})})]})}function j(){return Object(u.jsx)("div",{className:"errorDisplay",children:"Incorrect value"})}function b(e){return Object(u.jsxs)("div",{className:"Wrapper",children:[Object(u.jsx)("div",{className:"header",children:e.errorCondition?Object(u.jsx)(j,{}):Object(u.jsx)(l,{counter:e.counter,isDisabled:e.isDisabled,maxValue:e.maxValue})}),Object(u.jsx)("div",{children:Object(u.jsx)(d,{enlargeCounter:e.enlargeCounter,resetCounter:e.resetCounter,maxValue:e.maxValue,counter:e.counter,errorCondition:e.errorCondition,startValue:e.startValue,isDisabled:e.isDisabled})})]})}function x(e){var t=e.maxValue<0||e.maxValue===e.startValue||e.startValue>e.maxValue,a=e.startValue<0||e.maxValue===e.startValue||e.startValue>e.maxValue;return Object(u.jsxs)("div",{className:"Wrapper",children:[Object(u.jsxs)("div",{className:"settings",children:[Object(u.jsxs)("div",{className:"values",children:[Object(u.jsx)("div",{children:"max value:"}),Object(u.jsx)("div",{children:"start value:"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{value:e.maxValue,onChange:function(t){e.setMaxCounterValue(+t.currentTarget.value),e.disableButton()},className:t?"inputError":"input",type:"number"}),Object(u.jsx)("input",{value:e.startValue,onChange:function(t){e.setStartCounterValue(+t.currentTarget.value),e.disableButton()},className:a?"inputError":"input",type:"number"})]})]}),Object(u.jsx)("div",{className:"setButton",children:Object(u.jsx)(o.a,{disabled:!e.isDisabled||e.errorCondition,onClick:function(){e.setStartCounterValue(e.startValue),e.equalizeCounter(e.startValue)},color:"primary",className:"button",size:"small",variant:"contained",children:"set"})})]})}var m=function(){var e=Object(n.useState)(0),t=Object(c.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(5),i=Object(c.a)(s,2),l=i[0],o=i[1],d=Object(n.useState)(a),j=Object(c.a)(d,2),m=j[0],O=j[1],v=Object(n.useState)(!1),V=Object(c.a)(v,2),C=V[0],f=V[1];Object(n.useEffect)((function(){var e=localStorage.getItem("startCounterValue");if(e){var t=JSON.parse(e);r(t)}var a=localStorage.getItem("maxCounterValue");if(a){var n=JSON.parse(a);o(n)}}),[]),Object(n.useEffect)((function(){localStorage.setItem("startCounterValue",JSON.stringify(a)),localStorage.setItem("maxCounterValue",JSON.stringify(l))}),[a,l,m]);var h=a<0||l<0||a>l||a===l;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(b,{enlargeCounter:function(){O((function(e){return e+1}))},resetCounter:function(e){O(e),localStorage.clear()},counter:m,maxValue:l,startValue:a,errorCondition:h,isDisabled:C}),Object(u.jsx)(x,{setStartCounterValue:function(e){r(e),f(!1)},maxValue:l,setMaxCounterValue:function(e){o(e),f(!1)},startValue:a,errorCondition:h,equalizeCounter:function(e){O(e)},disableButton:function(){f(!0)},isDisabled:C})]})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),O()}},[[28,1,2]]]);
//# sourceMappingURL=main.1342f808.chunk.js.map