"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[164],{8164:function(n,e,t){t.r(e),t.d(e,{Contacts:function(){return O},default:function(){return Q}});var a,r,o,i,c,s,l,d,p,u,x,f=t(9439),h=t(2791),m=t(9434),b=t(5562),g=t.n(b),v=t(6856),w=t(3871),y=t(168),j=t(6444),Z=j.ZP.form(a||(a=(0,y.Z)(["\n  width: 30vw;\n  height: fit-content;\n  min-height: 20vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 32px;\n  border-radius: 12px;\n  background-color: hsla(215, 98%, 79%, 0.2);\n  border: 2px solid blanchedalmond;\n  box-shadow: 10px 12px 12px 0px #cab1b14d;\n  font-size: 24px;\n  color: #010101;\n"]))),C=j.ZP.label(r||(r=(0,y.Z)(["\n  width: 100%;\n  display: flex;\n  font-weight: bold;\n  font-size: 24px;\n  justify-content: space-between;\n  align-items: center;\n"]))),k=t(3337),z=j.ZP.input(o||(o=(0,y.Z)(["\n  min-width: 50%;\n  border-radius: 8px;\n  font-size: 20px;\n  placeholder: grey;\n  padding: 12px 16px;\n  margin-left: 16px;\n  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;\n"]))),P=t(3329),L=function(n){var e=n.type,t=void 0===e?"text":e,a=n.name,r=n.placeholder,o=n.pattern,i=n.title,c=n.onChange,s=n.value;return(0,P.jsx)(z,{onChange:c,value:s,placeholder:r,type:t,name:a,pattern:o,title:i,required:!0})},_=t(2048),A=function(n){return n.contacts.items},N=function(){var n=(0,m.I0)(),e=(0,h.useState)(""),t=(0,f.Z)(e,2),a=t[0],r=t[1],o=(0,h.useState)(""),i=(0,f.Z)(o,2),c=i[0],s=i[1],l=(0,m.v9)(A),d=function(n){switch(n.target.name){case"name":r(n.target.value);break;case"number":s(n.target.value);break;default:return}},p=function(){r(""),s("")};return(0,P.jsxs)(Z,{onSubmit:function(e){if(e.preventDefault(),l.find((function(n){return n.name.toLocaleLowerCase()===a.toLocaleLowerCase()})))return g().Notify.warning("".concat(a," is already in contacts"),_.T);n((0,w.uK)({name:a,number:c})),p()},children:[(0,P.jsxs)(C,{children:["Name",(0,P.jsx)(L,{onChange:d,value:a,name:"name",placeholder:"Enter contact`s name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})]}),(0,P.jsxs)(C,{children:["Number",(0,P.jsx)(L,{onChange:d,value:c,type:"tel",name:"number",placeholder:"Enter contact`s number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"})]}),(0,P.jsx)(k.u,{type:"submit",icon:v.fSq,status:"add",text:"Add contact"})]})},D=j.ZP.ul(i||(i=(0,y.Z)(["\n  list-style: none;\n  padding-left: 0;\n  margin-top: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 16px;\n"]))),E=j.ZP.li(c||(c=(0,y.Z)(["\n  min-width: 50vw;\n  display: flex;\n  font-weight: bold;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 20px;\n  padding: 32px;\n  border-radius: 12px;\n  background-color: hsla(215, 98%, 79%, 0.1);\n  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;\n"]))),I=j.ZP.p(s||(s=(0,y.Z)(["\n  font-size: 24px;\n  margin-right: 36px;\n"]))),S=function(n){var e=n.id,t=n.name,a=n.number,r=n.onDeleteBtnClick;return(0,P.jsxs)(E,{children:[(0,P.jsxs)(I,{children:[t,": ",a]}),(0,P.jsx)(k.u,{icon:v.Vh8,type:"button",status:"delete",text:"Delete contact",onClick:function(){return r(e,t)}})]})},q=function(n){return n.filter},B=function(){var n=(0,m.I0)();(0,h.useEffect)((function(){n((0,w.yF)())}),[n]);var e=(0,m.v9)(A),t=(0,m.v9)(q);return(0,P.jsx)(D,{children:function(){var n=t.toLocaleLowerCase(),a=e.filter((function(e){return e.name.toLocaleLowerCase().includes(n)}));return n&&!a.length?(g().Notify.warning("No contacts matching your request",_.T),[]):a}().map((function(e){return(0,P.jsx)(S,{id:e.id,name:e.name,number:e.number,onDeleteBtnClick:function(){return n((0,w.GK)(e.id))}},e.id)}))})},F=t(6895),T=t(3628),K=j.ZP.div(l||(l=(0,y.Z)(["\n  min-width: 50vw;\n  display: flex;\n  justify-content: stretch;\n  align-items: center;\n  font-size: 40px;\n  color: #010101;\n  padding: 32px;\n  border-radius: 12px;\n  background-color: hsla(215, 98%, 79%, 0.2);\n  border: 2px solid blanchedalmond;\n  box-shadow: 10px 12px 12px 0px #cab1b14d;\n"]))),G=(0,j.ZP)(T.DebounceInput)(d||(d=(0,y.Z)(["\n  min-width: 50%;\n  border-radius: 8px;\n  font-size: 20px;\n  placeholder: grey;\n  padding: 12px 16px;\n  margin-left: 16px;\n  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;\n"]))),J=function(){var n=(0,m.I0)(),e=(0,m.v9)(q);return(0,P.jsx)(K,{children:(0,P.jsxs)(C,{children:["Find contacts by name",(0,P.jsx)(G,{type:"text",name:"filter",placeholder:"Enter contact to search",value:e,onChange:function(e){return n((0,F.W)(e.target.value))},debounceTimeout:500})]})})},M=t(9649),V=t(473),W=j.ZP.div(p||(p=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 40px;\n  color: #010101;\n  padding: 40px;\n"]))),$=j.ZP.h1(u||(u=(0,y.Z)(["\n  font-size: 42px;\n  color: #010101;\n  text-transform: uppercase;\n"]))),H=j.ZP.h2(x||(x=(0,y.Z)(["\n  font-size: 36px;\n  color: #010101;\n  text-transform: uppercase;\n"]))),O=function(){var n=(0,m.v9)(V.vc);return(0,P.jsxs)(W,{children:[n&&(0,P.jsx)(M.a,{}),(0,P.jsx)($,{children:"Phonebook"}),(0,P.jsx)(N,{}),(0,P.jsx)(H,{children:"Contacts"}),(0,P.jsx)(J,{}),(0,P.jsx)(B,{})]})},Q=O}}]);
//# sourceMappingURL=164.4db6f476.chunk.js.map