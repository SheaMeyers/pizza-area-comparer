(this["webpackJsonppizza-area-comparer"]=this["webpackJsonppizza-area-comparer"]||[]).push([[0],{47:function(e,a,t){},48:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(8),c=t.n(r),d=(t(47),t(36)),s=t(26),l=t(88),u=t(95),o=t(91),j=t(93),b=t(94),m=(t(48),t(6)),h=Object(l.a)({root:{width:"90%",margin:20},addPizza:{width:"90%",margin:20,display:"flex"},addPizzaCardContent:{width:"100%",display:"flex",justifyContent:"space-between"},addPizzaForm:{display:"flex",width:"100%",justifyContent:"space-between"}}),p=/^\d{1,}(\.\d{0,2})?$/,z=/^\d+$/;var O=function(){var e=h(),a=Object(n.useState)(),t=Object(s.a)(a,2),i=t[0],r=t[1],c=Object(n.useState)(),l=Object(s.a)(c,2),O=l[0],v=l[1],x=Object(n.useState)(""),f=Object(s.a)(x,2),P=f[0],C=f[1],g=Object(n.useState)([]),N=Object(s.a)(g,2),y=N[0],w=N[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(o.a,{className:e.root,children:Object(m.jsxs)(j.a,{children:[Object(m.jsx)("h1",{children:"Pizza Area Comparer"}),Object(m.jsx)("h3",{children:"Find out which pizzas give the best deals"})]})}),y.map((function(a,t){return Object(m.jsx)("div",{children:Object(m.jsx)(o.a,{className:e.addPizza,children:Object(m.jsxs)(j.a,{className:e.addPizzaCardContent,children:[Object(m.jsxs)("p",{children:[t+1,"."]}),Object(m.jsx)(b.a,{disabled:!0,label:"Number:"+a.numPizzas,variant:"outlined"}),Object(m.jsx)(b.a,{disabled:!0,label:"Diameter:"+a.diameter,variant:"outlined"}),Object(m.jsx)(b.a,{disabled:!0,label:"Price:"+a.price,variant:"outlined"}),Object(m.jsx)(b.a,{disabled:!0,label:"Price per 'unit':"+(100*a.pricePerUnit).toFixed(3),variant:"outlined"}),Object(m.jsx)(u.a,{variant:"contained",color:"secondary",type:"submit",onClick:function(){return e=t,void w(y.filter((function(a,t){return t!==e})));var e},children:"Remove"})]})})})})),y.length>1&&Object(m.jsx)(o.a,{className:e.addPizza,children:Object(m.jsx)(j.a,{className:e.addPizzaCardContent,children:Object(m.jsxs)("p",{children:["Option ",Object(m.jsx)("b",{children:function(){var e=0,a=null,t=1;for(var n in y)(!a||y[n].pricePerUnit<a)&&(e=t,a=y[n].pricePerUnit),t++;return e}()})," is the best value"]})})}),Object(m.jsx)(o.a,{className:e.addPizza,children:Object(m.jsx)(j.a,{className:e.addPizzaCardContent,children:Object(m.jsxs)("form",{className:e.addPizzaForm,onSubmit:function(e){e.persist(),e.preventDefault();var a=e.target.elements,t=a.numPizzas.value,n=a.diameter.value,i=a.price.value;r(null),v(null),C("");var c=n/2,s={numPizzas:t,diameter:n,price:i,pricePerUnit:i/(3.14*t*c*c)};w([].concat(Object(d.a)(y),[s]))},children:[Object(m.jsx)(b.a,{required:!0,id:"num-pizzas-basic",name:"numPizzas",label:"Number",variant:"outlined",value:i||"",onChange:function(e){return function(e){var a=e.target.value;(a.match(z)||""===a)&&r(parseInt(a))}(e)}}),Object(m.jsx)(b.a,{required:!0,id:"diameter-basic",name:"diameter",label:"Diameter",variant:"outlined",value:O||"",onChange:function(e){return function(e){var a=e.target.value;(a.match(z)||""===a)&&v(parseInt(a))}(e)}}),Object(m.jsx)(b.a,{required:!0,id:"price-basic",name:"price",label:"Price",variant:"outlined",value:P,onChange:function(e){return function(e){var a=e.target.value;(a.match(p)||""===a)&&C(a)}(e)}}),Object(m.jsx)(u.a,{variant:"contained",color:"primary",type:"submit",children:"Add"})]})})})]})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,97)).then((function(a){var t=a.getCLS,n=a.getFID,i=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),i(e),r(e),c(e)}))};c.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root")),v()}},[[55,1,2]]]);
//# sourceMappingURL=main.59a4cc91.chunk.js.map