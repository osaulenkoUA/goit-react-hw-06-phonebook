(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={footer:"Button_footer__52V5W",footer__btn:"Button_footer__btn__3aWvC",light:"Button_light__2Legd",dark:"Button_dark__2SJGz"}},19:function(e,t,n){e.exports={container:"Section_container__2BLnu"}},22:function(e,t,n){e.exports={list:"ContactList_list__3oHNV"}},26:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a,o=n(0),c=n.n(o),r=n(8),l=n.n(r),i=n(3),m=n(4),u=n(23),s=n(2),h=n(17),_={addContact:Object(i.b)("phoneBook/addContact",(function(e){var t=e.name,n=e.phone;return{payload:{contact:{id:Object(h.v4)(),name:t,phone:n}}}})),removeContact:Object(i.b)("phoneBook/removeContact"),changeFilter:Object(i.b)("phoneBook/changeFilter"),changeTheme:Object(i.b)("phoneBook/changeTheme")},f=Object(i.c)([],(a={},Object(m.a)(a,_.addContact,(function(e,t){var n=t.payload;return[].concat(Object(u.a)(e),[n.contact])})),Object(m.a)(a,_.removeContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),a)),b=Object(i.c)("",Object(m.a)({},_.changeFilter,(function(e,t){return t.payload}))),d=Object(s.c)({items:f,filter:b}),p=Object(i.c)("light",Object(m.a)({},_.changeTheme,(function(e,t){return t.payload}))),g=Object(s.c)({theme:p}),C=Object(i.a)({reducer:{contacts:d,PhBookTheme:g}}),v=n(1),E=n(7),j={light:{color:"#000000",backgroundColor:"#ffffff"},dark:{color:"#ffffff",backgroundColor:"#000000"}},k=n(19),O=n.n(k),N=Object(v.b)((function(e){return{theme:e.PhBookTheme.theme}}))((function(e){var t=e.theme,n=e.title,a=e.children;return c.a.createElement("section",{className:O.a.container,style:j[t]},c.a.createElement("h2",null,n),a)})),y=n(20),T=n(21),L=n(25),F=n(24),B={name:"",phone:""},x=n(5),w=n.n(x),I=function(e){Object(L.a)(n,e);var t=Object(F.a)(n);function n(){var e;Object(y.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state=B,e.handleChange=function(t){var n=t.target,a=n.name,o=n.value;e.setState(Object(m.a)({},a,o))},e.handleSubmit=function(t){t.preventDefault(),(0,e.props.onAddContact)(e.state),e.setState(B)},e}return Object(T.a)(n,[{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.handleSubmit,className:w.a.form},c.a.createElement("label",{className:w.a.form__label},"Name:",c.a.createElement("input",{className:w.a.form__input,type:"text",value:this.state.name,onChange:this.handleChange,name:"name"})),c.a.createElement("label",{className:w.a.form__label},"Number:",c.a.createElement("input",{className:w.a.form__input,type:"number",value:this.state.phone,onChange:this.handleChange,name:"phone",placeholder:"in format: 0XXXXXXXXX"})),c.a.createElement("button",{type:"submit",className:w.a.form__btn},"Add Contact"))}}]),n}(o.Component),S={onAddContact:_.addContact},X=Object(v.b)(null,S)(I),D=n(6),A=n.n(D),P=Object(v.b)((function(e,t){var n=e.contacts.items.find((function(e){return e.id===t.id}));return Object(E.a)(Object(E.a)({},n),{},{theme:e.PhBookTheme.theme})}),(function(e,t){return{removeContact:function(){return e(_.removeContact(t.id))}}}))((function(e){var t=e.phone,n=e.name,a=e.id,o=e.theme,r=e.removeContact,l="tel:+38".concat(t);return c.a.createElement("li",{key:a,className:A.a.list__item},c.a.createElement("span",null,n,":"),c.a.createElement("a",{href:l,className:"light"===o?A.a.dark:A.a.light},t),c.a.createElement("button",{className:A.a.btn_delete,type:"button",onClick:r},c.a.createElement("svg",{className:"light"===o?A.a.svgLightTheme:A.a.svgDarkTheme,width:"25",height:"25",viewBox:"0 0 32 32"},c.a.createElement("title",null,"delete-contact"),c.a.createElement("path",{d:"M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"}),c.a.createElement("path",{d:"M21 8l-5 5-5-5-3 3 5 5-5 5 3 3 5-5 5 5 3-3-5-5 5-5z"}))))})),q=n(22),z=n.n(q),J=Object(v.b)((function(e){var t=e.contacts,n=t.items,a=t.filter;return{list:n.filter((function(e){return e.name.toLocaleLowerCase().includes(a.toLocaleLowerCase())}))}}))((function(e){var t=e.list;return c.a.createElement("ul",{className:z.a.list},t.map((function(e){return c.a.createElement(P,{key:e.id,id:e.id})})))})),M=n(9),H=n.n(M);var G={onChangeFilter:_.changeFilter},V=Object(v.b)((function(e){return{value:e.contacts.filter}}),G)((function(e){var t=e.value,n=e.onChangeFilter;return c.a.createElement("div",{className:H.a.findContact},c.a.createElement("p",{className:H.a.filterTitle},"Find contacts by name"),c.a.createElement("input",{type:"text",value:t,onChange:function(e){var t=e.target;return n(t.value)},className:H.a.filterInput,placeholder:"Search..."}))})),W=n(10),K=n.n(W),R={changeTheme:_.changeTheme},Y=Object(v.b)(null,R)((function(e){var t=e.changeTheme;return c.a.createElement("div",{className:K.a.footer},c.a.createElement("button",{className:K.a.footer__btn,onClick:function(){return t("light")},type:"button"},"Light"),c.a.createElement("button",{className:K.a.footer__btn,onClick:function(){return t("dark")},type:"button"},"Dark"))})),Z=Object(v.b)((function(e){return Object(E.a)({},e)}))((function(e){var t=e.contacts.items.length,n=t>=2,a=0!==t;return c.a.createElement(c.a.Fragment,null,c.a.createElement(Y,null),c.a.createElement(N,{title:"Phonebook"},c.a.createElement(X,null),n&&c.a.createElement(V,null),0!==a&&c.a.createElement(J,null)))}));l.a.render(c.a.createElement(v.a,{store:C},c.a.createElement(Z,null)),document.querySelector("#root"))},5:function(e,t,n){e.exports={form:"ContactForm_form__2Zyri",form__input:"ContactForm_form__input__2bKTD",form__label:"ContactForm_form__label__3RNoP",form__btn:"ContactForm_form__btn__2wAO_"}},6:function(e,t,n){e.exports={list__item:"ContactListItem_list__item__1CDHx",btn_delete:"ContactListItem_btn_delete__86w1n",light:"ContactListItem_light__jobq4",dark:"ContactListItem_dark__10GJl",svgLightTheme:"ContactListItem_svgLightTheme__1vxkE",svgDarkTheme:"ContactListItem_svgDarkTheme__1bqMs"}},9:function(e,t,n){e.exports={filterInput:"FilterContacts_filterInput__3cpYq",filterTitle:"FilterContacts_filterTitle__3nA6t",findContact:"FilterContacts_findContact__2f1H_"}}},[[26,1,2]]]);
//# sourceMappingURL=main.33dd040a.chunk.js.map