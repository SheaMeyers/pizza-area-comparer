(this["webpackJsonppizza-area-comparer"]=this["webpackJsonppizza-area-comparer"]||[]).push([[0],{47:function(e,a,t){},48:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),r=t(8),c=t.n(r),d=(t(47),t(36)),s=t(26),l=t(88),u=t(95),j=t(91),o=t(93),b=t(94),m=(t(48),t(6)),h=Object(l.a)({root:{width:"90%",margin:20},addPizza:{width:"90%",margin:20,display:"flex"},addPizzaCardContent:{display:"flex",width:"100%",justifyContent:"space-between"}}),O=/^\d{1,}(\.\d{0,2})?$/,p=/^\d+$/;var z=function(){var e=function(e,a){var t=e.target.value;(t.match(p)||""===t)&&a(parseInt(t))},a=h(),t=Object(i.useState)(0),n=Object(s.a)(t,2),r=n[0],c=n[1],l=Object(i.useState)(0),z=Object(s.a)(l,2),v=z[0],x=z[1],f=Object(i.useState)(""),P=Object(s.a)(f,2),C=P[0],g=P[1],N=Object(i.useState)([]),y=Object(s.a)(N,2),w=y[0],S=y[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(j.a,{className:a.root,children:Object(m.jsxs)(o.a,{children:[Object(m.jsx)("h1",{children:"Pizza Area Comparer"}),Object(m.jsx)("h3",{children:"Find out which pizzas give the best deals"})]})}),w.map((function(e,t){return Object(m.jsx)("div",{children:Object(m.jsx)(j.a,{className:a.addPizza,children:Object(m.jsxs)(o.a,{className:a.addPizzaCardContent,children:[Object(m.jsxs)("p",{children:[t+1,"."]}),Object(m.jsx)(b.a,{disabled:!0,label:"Number:"+e.numPizzas,variant:"outlined"}),Object(m.jsx)(b.a,{disabled:!0,label:"Diameter:"+e.diameter,variant:"outlined"}),Object(m.jsx)(b.a,{disabled:!0,label:"Price:"+e.price,variant:"outlined"}),Object(m.jsx)(b.a,{disabled:!0,label:"Price per 'unit':"+(100*e.pricePerUnit).toFixed(3),variant:"outlined"}),Object(m.jsx)(u.a,{variant:"contained",color:"secondary",type:"submit",onClick:function(){return e=t,void S(w.filter((function(a,t){return t!==e})));var e},children:"Remove"})]})})})})),w.length>1&&Object(m.jsx)(j.a,{className:a.addPizza,children:Object(m.jsx)(o.a,{className:a.addPizzaCardContent,children:Object(m.jsxs)("p",{children:["Option ",Object(m.jsx)("b",{children:function(){var e=0,a=0,t=1;for(var i in w)(!a||w[i].pricePerUnit<a)&&(e=t,a=w[i].pricePerUnit),t++;return e}()})," is the best value"]})})}),Object(m.jsx)(j.a,{className:a.addPizza,children:Object(m.jsx)(o.a,{className:a.addPizzaCardContent,children:Object(m.jsxs)("form",{className:a.addPizzaCardContent,onSubmit:function(e){e.persist(),e.preventDefault();var a=e.target.elements,t=a.numPizzas.value,i=a.diameter.value,n=a.price.value;c(0),x(0),g("");var r=i/2,s={numPizzas:t,diameter:i,price:n,pricePerUnit:n/(3.14*t*r*r)};S([].concat(Object(d.a)(w),[s]))},children:[Object(m.jsx)(b.a,{required:!0,id:"num-pizzas-basic",name:"numPizzas",label:"Number",variant:"outlined",value:r||"",onChange:function(a){return e(a,c)}}),Object(m.jsx)(b.a,{required:!0,id:"diameter-basic",name:"diameter",label:"Diameter",variant:"outlined",value:v||"",onChange:function(a){return e(a,x)}}),Object(m.jsx)(b.a,{required:!0,id:"price-basic",name:"price",label:"Price",variant:"outlined",value:C,onChange:function(e){return function(e){var a=e.target.value;(a.match(O)||""===a)&&g(a)}(e)}}),Object(m.jsx)(u.a,{variant:"contained",color:"primary",type:"submit",children:"Add"})]})})})]})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,97)).then((function(a){var t=a.getCLS,i=a.getFID,n=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),i(e),n(e),r(e),c(e)}))};c.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(z,{})}),document.getElementById("root")),v()}},[[55,1,2]]]);
//# sourceMappingURL=main.13c807ea.chunk.js.map