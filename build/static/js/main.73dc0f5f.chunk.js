(this["webpackJsonpfood-order-app"]=this["webpackJsonpfood-order-app"]||[]).push([[0],[,,,,function(e,t,n){e.exports={form:"Checkout_form__taUB8",control:"Checkout_control__3oiP5",actions:"Checkout_actions__2vQuX",submit:"Checkout_submit__2kPGs",invalid:"Checkout_invalid__2C1gK"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__o7AOk",summary:"CartItem_summary__I9DmK",price:"CartItem_price__rz8g7",amount:"CartItem_amount__1F0nf",actions:"CartItem_actions__1JCfP"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3X9Fy",total:"Cart_total__3q0VG",actions:"Cart_actions__2kaH0","button--alt":"Cart_button--alt__1LSyV",button:"Cart_button__1qRmo"}},,,,function(e,t,n){e.exports={button:"HeaderCartButton_button__1lFt5",icon:"HeaderCartButton_icon__3TLhE",badge:"HeaderCartButton_badge__3GLf7",bump:"HeaderCartButton_bump__3_622"}},,function(e,t,n){e.exports={meal:"MealItem_meal__10v3n",description:"MealItem_description__2ojJG",price:"MealItem_price__224Pk"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2JIX5","meals-appear":"AvailableMeals_meals-appear__3jX5S",mealsLoading:"AvailableMeals_mealsLoading__3Mn8z",mealsError:"AvailableMeals_mealsError__1AnAh"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__3O1-o",modal:"Modal_modal__V7sV5","slide-down":"Modal_slide-down__8-6Vt"}},,function(e,t,n){e.exports={header:"Header_header__1nxc3","main-image":"Header_main-image__uqmwQ"}},,,function(e,t,n){e.exports={card:"Card_card__e9Evs"}},function(e,t,n){e.exports={input:"Input_input__3__3F"}},function(e,t,n){e.exports={form:"MealItemForm_form__1ULe4"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__27VZh"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),r=(n(28),n(2)),i=n(1),s=n.n(i),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),j=n(11),m=n.n(j),d=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useContext)(u).items,j=s.reduce((function(e,t){return e+t.amount}),0),d="".concat(m.a.button," ").concat(a?m.a.bump:"");return Object(i.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){return clearTimeout(e)}}}),[s]),Object(o.jsxs)("button",{className:d,onClick:e.onClick,children:[Object(o.jsx)("span",{className:m.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:m.a.badge,children:j})]})},b=n.p+"static/media/meals.2971f633.jpg",O=n(17),x=n.n(O),h=function(e){var t=e.onShowCart;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("header",{className:x.a.header,children:[Object(o.jsx)("h1",{children:"Meals"}),Object(o.jsx)(d,{onClick:t})]}),Object(o.jsx)("div",{className:x.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"meals-img"})})]})},p=n(18),f=n(10),_=n(19),v=n(20),C=n.n(v),N=function(e){return Object(o.jsx)("div",{className:C.a.card,children:e.children})},g=n(3),y=n(21),A=n.n(y),k=s.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:A.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(g.a)({ref:t,id:e.input.id},e.input))]})})),I=n(22),w=n.n(I),M=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useRef)();return Object(o.jsxs)("form",{className:w.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(o.jsx)(k,{ref:s,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!a&&Object(o.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},F=n(13),S=n.n(F),E=function(e){var t=Object(i.useContext)(u);"$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:S.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:S.a.description,children:e.description}),Object(o.jsx)("div",{className:S.a.price,children:e.price})]}),Object(o.jsx)("div",{children:Object(o.jsx)(M,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},H=n(14),D=n.n(H),P=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(!1),s=Object(r.a)(c,2),l=s[0],u=s[1],j=Object(i.useState)(),m=Object(r.a)(j,2),d=m[0],b=m[1];if(Object(i.useEffect)((function(){u(!0);var e=function(){var e=Object(_.a)(Object(p.a)().mark((function e(){var t,n,c,r;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://meals-e2f6c-default-rtdb.europe-west1.firebasedatabase.app/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,c=[],n)c=[].concat(Object(f.a)(c),[{id:r,name:n[r].name,description:n[r].description,price:n[r].price}]);a(c),u(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){u(!1),b(e.message)}))}),[]),l)return Object(o.jsx)("section",{className:D.a.mealsLoading,children:Object(o.jsx)("p",{children:"Loading..."})});if(d)return Object(o.jsx)("section",{className:D.a.mealsError,children:Object(o.jsx)("p",{children:d})});var O=n.map((function(e){return Object(o.jsx)(E,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:D.a.meals,children:Object(o.jsx)(N,{children:Object(o.jsx)("ul",{children:O})})})},V=n(23),B=n.n(V),L=function(){return Object(o.jsxs)("section",{className:B.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To you"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},R=function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(L,{}),Object(o.jsx)(P,{})]})},T=n(15),z=n.n(T),J=function(e){return Object(o.jsx)("div",{className:z.a.backdrop,onClick:e.onClose})},q=function(e){return Object(o.jsx)("div",{className:z.a.modal,children:Object(o.jsx)("div",{className:z.a.content,children:e.children})})},G=document.getElementById("overlays"),X=function(e){return Object(o.jsxs)(o.Fragment,{children:[c.a.createPortal(Object(o.jsx)(J,{onClose:e.onClose}),G),c.a.createPortal(Object(o.jsx)(q,{children:e.children}),G)]})},$=n(6),K=n.n($),Q=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:K.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:K.a.summary,children:[Object(o.jsx)("span",{className:K.a.price,children:t}),Object(o.jsxs)("span",{className:K.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:K.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"-"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},U=n(7),Y=n.n(U),Z=n(4),W=n.n(Z),ee=function(e){return Object(o.jsxs)("form",{className:W.a.form,onSubmit:function(e){e.preventDefault()},children:[Object(o.jsxs)("div",{className:W.a.control,children:[Object(o.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(o.jsx)("input",{type:"text",id:"name"})]}),Object(o.jsxs)("div",{className:W.a.control,children:[Object(o.jsx)("label",{htmlFor:"street",children:"Street"}),Object(o.jsx)("input",{type:"text",id:"street"})]}),Object(o.jsxs)("div",{className:W.a.control,children:[Object(o.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(o.jsx)("input",{type:"text",id:"postal"})]}),Object(o.jsxs)("div",{className:W.a.control,children:[Object(o.jsx)("label",{htmlFor:"city",children:"City"}),Object(o.jsx)("input",{type:"text",id:"city"})]}),Object(o.jsxs)("div",{className:W.a.actions,children:[Object(o.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(o.jsx)("button",{className:W.a.submit,children:"Confirm"})]})]})},te=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useContext)(u),l="$".concat(s.totalAmount.toFixed(2)),j=s.items.length>0,m=function(e){s.removeItem(e)},d=function(e){s.addItem(Object(g.a)(Object(g.a)({},e),{},{amount:1}))},b=Object(o.jsx)("ul",{className:Y.a["cart-items"],children:s.items.map((function(e){return Object(o.jsx)(Q,{name:e.name,amount:e.amount,price:e.price,onRemove:m.bind(null,e.id),onAdd:d.bind(null,e)},e.id)}))}),O=Object(o.jsxs)("div",{className:Y.a.actions,children:[Object(o.jsx)("button",{className:Y.a["button--alt"],onClick:e.onClose,children:"Close"}),j&&Object(o.jsx)("button",{className:Y.a.button,onClick:function(){c(!0)},children:"Order"})]});return Object(o.jsxs)(X,{onClose:e.onClose,children:[b,Object(o.jsxs)("div",{className:Y.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:l})]}),a&&Object(o.jsx)(ee,{onCancel:e.onClose}),!a&&O]})},ne={items:[],totalAmount:0},ae=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var i=Object(g.a)(Object(g.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(f.a)(e.items))[c]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var j=Object(g.a)(Object(g.a)({},l),{},{amount:l.amount-1});(s=Object(f.a)(e.items))[o]=j}return{items:s,totalAmount:u}}return ne},ce=function(e){var t=Object(i.useReducer)(ae,ne),n=Object(r.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(o.jsx)(u.Provider,{value:s,children:e.children})};var re=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(ce,{children:[n&&Object(o.jsx)(te,{onClose:function(){a(!1)}}),Object(o.jsx)(h,{onShowCart:function(){a(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(R,{})})]})};c.a.render(Object(o.jsx)(re,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.73dc0f5f.chunk.js.map