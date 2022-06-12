(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1iZ6M",total:"Cart_total__ejiT5",scrollable:"Cart_scrollable__1ndJ-",p:"Cart_p__PAqpF",actions:"Cart_actions__2SYTR","button--alt":"Cart_button--alt__1j3vz",button:"Cart_button__3Zjde"}},function(e,t,n){e.exports={group:"FormInput_group__5A_Uk",input:"FormInput_input__p8HwA",label:"FormInput_label__2WPnk",invalid:"FormInput_invalid__2yxA2",bar:"FormInput_bar__IdPhk",highlight:"FormInput_highlight__DCp6i",inputHighlighter:"FormInput_inputHighlighter__Q_qIP"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__23SY7",summary:"CartItem_summary__36GuY",price:"CartItem_price__2EKVe",amount:"CartItem_amount__2HA22",actions:"CartItem_actions__LWZrc"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__17rBX",icon:"HeaderCartButton_icon__1iRAL",badge:"HeaderCartButton_badge__2VWA1",bump:"HeaderCartButton_bump__3Vnlc"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__1XZ6E",description:"MealItem_description__2k7wB",price:"MealItem_price__bWcUY"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__3j21I",modal:"Modal_modal__m3HMs","slide-down":"Modal_slide-down__vVua8"}},function(e,t,n){e.exports={container:"CheckoutForm_container__26B2N",actions:"CheckoutForm_actions__3gIgl","button--alt":"CheckoutForm_button--alt__1ANh7",button:"CheckoutForm_button__2kol3",fixed:"CheckoutForm_fixed__1G1jx","flex-item":"CheckoutForm_flex-item__Il06O"}},,function(e,t,n){e.exports={header:"Header_header__2Sfj7","main-image":"Header_main-image__1c_9u"}},,,,function(e,t,n){e.exports={summary:"MealsSummary_summary__1nYZC"}},function(e,t,n){e.exports={card:"Card_card__2COne"}},function(e,t,n){e.exports={input:"Input_input__1kPJ5"}},function(e,t,n){e.exports={form:"MealItemForm_form___4GZg"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__3QA2I","meals-appear":"AvailableMeals_meals-appear__3Gn6x"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(19),c=n.n(a),r=(n(32),n(2)),i=n(1),s=n.n(i),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){},onClick:function(){},onDismiss:function(){}}),d=n(9),m=n.n(d),j=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useContext)(u),d=s.items,j=d.reduce((function(e,t){return e+t.amount}),0),b="".concat(m.a.button," ").concat(a?m.a.bump:"");return Object(i.useEffect)((function(){0!==d.length&&(c(!0),setTimeout((function(){c(!1)}),300))}),[d]),Object(o.jsxs)("button",{onClick:s.onClick,className:b,children:[Object(o.jsx)("span",{className:m.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:e.children}),Object(o.jsx)("span",{className:m.a.badge,children:j})]})},b=n.p+"static/media/meals.2debd765.jpg",h=n(16),p=n.n(h),O=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("header",{className:p.a.header,children:[Object(o.jsx)("h1",{children:"ReactMeals"}),Object(o.jsx)(j,{children:"Your Cart"})]}),Object(o.jsx)("div",{className:p.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"A table full of delicious food!"})})]})},x=n(20),_=n.n(x),f=function(){return Object(o.jsxs)("section",{className:_.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(21),C=n.n(v),g=function(e){return Object(o.jsx)("div",{className:"".concat(C.a.card," ").concat(e.className),children:e.children})},N=n(8),k=n(22),y=n.n(k),A=s.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:y.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(N.a)({ref:t},e.input))]})})),I=n(23),E=n.n(I),F=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useRef)();return Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},className:E.a.form,children:[Object(o.jsx)(A,{ref:s,label:"Amount",input:{id:Math.random().toString(),type:"number",pattern:"[0-9]*",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!a&&Object(o.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},w=n(12),M=n.n(w),S=function(e){var t=Object(i.useContext)(u),n="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:M.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.children}),Object(o.jsx)("div",{className:M.a.description,children:e.description}),Object(o.jsx)("div",{className:M.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(F,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},B=n(5),D=n(11),H=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(null),s=Object(r.a)(c,2),o=s[0],l=s[1],u=Object(i.useCallback)(function(){var e=Object(D.a)(Object(B.a)().mark((function e(t,n){var c,r;return Object(B.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),l(null),e.prev=2,e.next=5,fetch(n.url,{method:n.method?n.method:"GET",headers:n.headers?n.headers:{},body:n.body?JSON.stringify(n.body):null});case 5:if((c=e.sent).ok){e.next=8;break}throw new Error("Request failed!");case 8:return e.next=10,c.json();case 10:r=e.sent,t&&t(r),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),l(e.t0.message||"Something went wrong!");case 17:a(!1);case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,n){return e.apply(this,arguments)}}(),[]);return[n,o,u]},R=n(24),T=n.n(R),P=function(){var e=H(),t=Object(r.a)(e,3),n=t[0],a=t[1],c=t[2],s=Object(i.useState)([]),l=Object(r.a)(s,2),u=l[0],d=l[1],m=function(e){var t=[];for(var n in e)t.push({id:n,name:e[n].name,description:e[n].description,price:e[n].price||0});d(t)};return Object(i.useEffect)((function(){c(m,{url:"https://react-http-975e6-default-rtdb.europe-west1.firebasedatabase.app/meals.json"})}),[c]),Object(o.jsxs)(g,{className:T.a.meals,children:[Object(o.jsx)("ul",{children:u.map((function(e){return Object(o.jsx)(S,{id:e.id,name:e.name,description:e.description,price:e.price,children:e.name},e.id)}))}),n&&Object(o.jsx)("p",{children:"Loading! Please wait..."}),a&&Object(o.jsx)("p",{children:a.message})]})},z=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(f,{}),Object(o.jsx)(P,{})]})},$=n(15),V=n.n($),Y=n(13),L=n.n(Y),Z=function(e){return V.a.createPortal(Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{onClick:e.onBackdropClicked,className:L.a.backdrop}),Object(o.jsx)("div",{className:L.a.modal,children:Object(o.jsx)("div",{className:L.a.content,children:e.children})})]}),document.getElementById("overlays"))},q=n(6),G=n.n(q),J=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:G.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:G.a.summary,children:[Object(o.jsx)("span",{className:G.a.price,children:t}),Object(o.jsxs)("span",{className:G.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:G.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},W=n(3),Q=n.n(W),U=n(14),X=n.n(U),K=n(4),ee=n.n(K),te=function(e){return Object(o.jsxs)("div",{className:ee.a.group,children:[Object(o.jsx)("input",{className:ee.a.input,id:e.id,type:e.type,value:e.value,onChange:e.onChange,onBlur:e.onBlur,required:!0}),Object(o.jsx)("span",{className:ee.a.highlight}),Object(o.jsx)("span",{className:"".concat(ee.a.bar," ").concat(e.hasError&&ee.a.invalid)}),Object(o.jsx)("label",{className:"".concat(ee.a.label," ").concat(e.hasError&&ee.a.invalid),htmlFor:e.id,children:e.children}),e.hasError&&Object(o.jsx)("p",{children:"Invalid input!"})]})},ne=function(e){var t=Object(i.useState)(""),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useState)(!1),o=Object(r.a)(s,2),l=o[0],u=o[1],d=e.test(a);return[a,d,!d&&l,function(e){c(e.target.value)},function(){""!==a?u(!0):d||u(!1)},function(){c(""),u(!1)}]},ae=function(e){var t=ne(/^[a-zA-z ]+$/),n=Object(r.a)(t,6),a=n[0],c=n[1],i=n[2],s=n[3],l=n[4],u=n[5],d=ne(/^.+@.+\..+$/),m=Object(r.a)(d,6),j=m[0],b=m[1],h=m[2],p=m[3],O=m[4],x=m[5],_=ne(/^[a-zA-z]+$/),f=Object(r.a)(_,6),v=f[0],C=f[1],g=f[2],N=f[3],k=f[4],y=f[5],A=ne(/^.+$/),I=Object(r.a)(A,6),E=I[0],F=I[1],w=I[2],M=I[3],S=I[4],B=I[5],D=ne(/^[0-9]+$/),H=Object(r.a)(D,6),R=H[0],T=H[1],P=H[2],z=H[3],$=H[4],V=H[5];return Object(o.jsxs)("form",{id:"checkout-form",className:X.a.container,onSubmit:function(t){t.preventDefault(),c&&b&&C&&F&&T&&(u(),x(),y(),B(),V(),e.submitOrder({name:a.trim(),email:j,city:v,street:E,postalCode:R}))},children:[Object(o.jsxs)("div",{className:X.a.fixed,children:[Object(o.jsx)(te,{id:"name",type:"text",value:a,onChange:s,onBlur:l,hasError:i,children:"Name"}),Object(o.jsx)(te,{id:"email",type:"text",value:j,onChange:p,onBlur:O,hasError:h,children:"Email"})]}),Object(o.jsxs)("div",{className:X.a["flex-item"],children:[Object(o.jsx)(te,{id:"city",type:"text",value:v,onChange:N,onBlur:k,hasError:g,children:"City"}),Object(o.jsx)(te,{id:"street",type:"text",value:E,onChange:M,onBlur:S,hasError:w,children:"Street"}),Object(o.jsx)(te,{id:"postal",type:"number",value:R,onChange:z,onBlur:$,hasError:P,children:"Postal Code"})]})]})},ce=function(e){var t=Object(i.useContext)(u),n=Object(i.useState)(!1),a=Object(r.a)(n,2),c=a[0],s=a[1],l="$".concat(t.totalAmount.toFixed(2)),d=t.items.length>0,m=function(e){t.removeItem(e)},j=function(e){t.addItem(Object(N.a)(Object(N.a)({},e),{},{amount:1}))},b=H(),h=Object(r.a)(b,3),p=h[0],O=h[1],x=h[2],_=function(){var e=Object(D.a)(Object(B.a)().mark((function e(n){return Object(B.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(null,{url:"https://react-http-975e6-default-rtdb.europe-west1.firebasedatabase.app/orders.json",method:"POST",headers:{"Content-Type":"appliction/json"},body:{user:n,orderetItems:t.items}});case 2:s(!0),t.clearCart();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=Object(o.jsx)("ul",{className:Q.a["cart-items"],children:t.items.map((function(e){return Object(o.jsx)(J,{name:e.name,amount:e.amount,price:e.price,onRemove:m.bind(null,e.id),onAdd:j.bind(null,e)},e.id)}))}),v=Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:Q.a.scrollable,children:[f,Object(o.jsxs)("div",{className:Q.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:l})]}),d&&Object(o.jsx)(ae,{submitOrder:_}),Object(o.jsxs)("div",{id:"cart-actions",className:Q.a.actions,children:[Object(o.jsx)("button",{className:Q.a["button--alt"],onClick:t.onDismiss,children:"Close"}),d&&Object(o.jsx)("button",{onClick:t.clearCart,className:Q.a.button,children:"Clear Cart"}),d&&Object(o.jsx)("button",{type:"submit",form:"checkout-form",className:Q.a.button,children:"Order"})]})]})});return p&&(v=Object(o.jsx)("p",{className:Q.a.p,children:"Loading! Please wait..."})),c&&(v=Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:Q.a.p,children:"Order successfully sent!"}),Object(o.jsx)("div",{id:"cart-actions",className:Q.a.actions,children:Object(o.jsx)("button",{className:Q.a.button,onClick:t.onDismiss,children:"Close"})})]})),O&&(v=Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:Q.a.p,children:O}),Object(o.jsx)("div",{id:"cart-actions",className:Q.a.actions,children:Object(o.jsx)("button",{className:Q.a.button,onClick:t.onDismiss,children:"Close"})})]})),Object(o.jsx)(Z,{onBackdropClicked:t.onDismiss,children:v})},re=n(17),ie={items:[],totalAmount:0},se=function(e,t){if("ADD_ITEM"===t.type){var n=Object(re.a)(e.items),a=e.items.find((function(e){return e.id===t.item.id})),c=e.totalAmount+t.item.price*t.item.amount;return a?a.amount+=1:n=e.items.concat(t.item),{items:n,totalAmount:c}}if("REMOVE_ITEM"===t.type){var r=Object(re.a)(e.items),i=e.items.findIndex((function(e){return e.id===t.id})),s=e.items[i],o=e.totalAmount-s.price;return s?(s.amount>1?s.amount-=1:r=e.items.filter((function(e){return e.id!==t.id})),{items:r,totalAmount:o}):ie}if("CLEAR_CART"===t.type)return ie},oe=function(e){var t=Object(i.useReducer)(se,ie),n=Object(r.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD_ITEM",item:e})},removeItem:function(e){c({type:"REMOVE_ITEM",id:e})},clearCart:function(){c({type:"CLEAR_CART"})},onClick:e.onClick,onDismiss:e.onDismiss};return Object(o.jsx)(u.Provider,{value:s,children:e.children})},le=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(oe,{onClick:function(){a(!0)},onDismiss:function(){a(!1)},children:[n&&Object(o.jsx)(ce,{}),Object(o.jsx)(O,{}),Object(o.jsx)("main",{children:Object(o.jsx)(z,{})})]})};c.a.createRoot(document.getElementById("root")).render(Object(o.jsx)(le,{}))}],[[34,1,2]]]);
//# sourceMappingURL=main.8c69f0db.chunk.js.map