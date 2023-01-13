"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[172],{3172:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var i,a,o,r,s,l,p,x,c,d,u,f,h,g=t(9439),m=t(9434),b=t(2791),w=t(7689),Z=t(168),j=t(6444),y=j.ZP.main(i||(i=(0,Z.Z)(["\n  padding: 0 42px 64px 42px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),v=j.ZP.h2(a||(a=(0,Z.Z)(["\n  align-self: center;\n  margin-right: 45%;\n  text-transform: uppercase;\n"]))),k=j.ZP.div(o||(o=(0,Z.Z)(["\n  margin-bottom: 36px;\n  width: 100%;\n  align-self: flex-start;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),P=j.ZP.div(r||(r=(0,Z.Z)(["\n  max-width: 50%;\n  gap: 32px;\n  padding: 48px 56px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  border-radius: 24px;\n  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff,\n    10px 12px 12px 0px #cab1b14d;\n"]))),_=j.ZP.form(s||(s=(0,Z.Z)(["\n  padding: 28px 36px;\n  border-radius: 32px;\n  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;\n  display: flex;\n  flex-wrap: wrap;\n  flex-basis: 40%;\n  gap: 16px;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 0 auto;\n"]))),z=j.ZP.div(l||(l=(0,Z.Z)(["\n  margin-top: 20px;\n  margin-bottom: 24px;\n  gap: 8px;\n  align-self: flex-end;\n  flex-direction: column;\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n  /* box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff; */\n"]))),C=j.ZP.p(p||(p=(0,Z.Z)(["\n  z-index: 1000;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(100%, 75%);\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px 15px;\n  min-width: 110px;\n  width: fit-content;\n  min-height: 44px;\n  text-align: center;\n  font-size: 14px;\n  line-height: 1.33;\n  color: black;\n  border: 1px solid yellow;\n  border-radius: 10px;\n  box-shadow: 0 0 10em 1em rgba(255, 139, 72, 0.6);\n"]))),S=j.ZP.div(x||(x=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 24px;\n"]))),L=j.ZP.div(c||(c=(0,Z.Z)(["\n  position: relative;\n\n  &:hover > p,\n  &:focus > p {\n    opacity: 1;\n  }\n"]))),E=(j.ZP.button(d||(d=(0,Z.Z)(["\n  & > svg {\n    width: 36px;\n    height: 36px;\n  }\n"]))),j.ZP.input(u||(u=(0,Z.Z)(["\n  padding: 6px 12px;\n  margin-left: 20px;\n  font-size: 14px;\n  border: none;\n  border-bottom: 1px solid black;\n  color: black;\n  outline-color: yellow;\n  background-color: transparent;\n\n  &:hover {\n    border-bottom: 1px solid yellow;\n  }\n\n  &:focus + .lightbox-modal__auth-label {\n    color: yellow;\n  }\n"])))),q=j.ZP.label(f||(f=(0,Z.Z)(["\n  text-transform: uppercase;\n  font-size: 24px;\n  color: black;\n\n  &:hover,\n  &:focus {\n    color: yellow;\n    font-weight: bold;\n  }\n"]))),F=j.ZP.div(h||(h=(0,Z.Z)([""]))),A=t(5262),B=t(3337),D=t(7061),G=t(5047),H=t(3329),I=function(){var n=(0,m.I0)(),e=(0,w.s0)(-1),t=(0,b.useState)(""),i=(0,g.Z)(t,2),a=i[0],o=i[1],r=(0,b.useState)(""),s=(0,g.Z)(r,2),l=s[0],p=s[1],x=function(n){switch(n.target.name){case"email":o(n.target.value);break;case"password":p(n.target.value);break;default:return}},c=function(){o(""),p("")};return(0,H.jsxs)(y,{children:[(0,H.jsxs)(k,{children:[(0,H.jsx)(B.u,{onClick:function(){return e(-1)},text:"Go back",status:"goBack"}),(0,H.jsx)(v,{children:"Let's log in"})]}),(0,H.jsxs)(P,{children:[(0,H.jsx)(F,{children:(0,H.jsx)("img",{alt:"animation",width:"100%",srcSet:D})}),(0,H.jsxs)(_,{onSubmit:function(e){e.preventDefault(),n((0,G.pH)({email:a,password:l})),c()},children:[(0,H.jsxs)(z,{children:[(0,H.jsx)(E,{type:"email",id:"auth-email",name:"email",value:a,required:!0,pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",placeholder:"Enter your email",onChange:x}),(0,H.jsx)(q,{htmlFor:"auth-email",children:"Email"}),(0,H.jsx)(E,{type:"password",id:"auth-password",name:"password",value:l,required:!0,minLength:"6",placeholder:"Enter your password",onChange:x}),(0,H.jsx)(q,{htmlFor:"auth-password",children:"Password"})]}),(0,H.jsxs)(S,{children:[(0,H.jsxs)(L,{children:[(0,H.jsx)(B.u,{type:"submit",status:"login",text:"Log in"}),(0,H.jsx)(C,{children:"Already registered? Log in!"})]}),(0,H.jsxs)(L,{children:[(0,H.jsx)(A.O,{text:"Sing up",status:"register",to:"/register"}),(0,H.jsx)(C,{children:"Newcomer? Create an account!"})]})]})]})]})]})}},7061:function(n,e,t){n.exports=t.p+"static/media/code.cb3044e92f412d1ef7ec.gif"}}]);
//# sourceMappingURL=172.9d483ff2.chunk.js.map