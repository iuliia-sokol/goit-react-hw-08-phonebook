"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[172],{3172:function(n,e,i){i.r(e),i.d(e,{default:function(){return H}});var t,a,r,p,d,o,s,x,l,c,m,h,f=i(9439),u=i(9434),g=i(2791),w=i(7689),b=i(168),y=i(6444),j=y.ZP.main(t||(t=(0,b.Z)(["\n  padding: 0 16px 32px 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  /* width: 100%; */\n\n  @media screen and (min-width: 320px) {\n    padding: 0 16px 32px 16px;\n  }\n  @media screen and (min-width: 768px) {\n    padding: 0 42px 64px 42px;\n    /* width: 768px; */\n  }\n\n  @media screen and (min-width: 1280px) {\n    /* width: 1280px; */\n  }\n"]))),Z=y.ZP.h2(a||(a=(0,b.Z)(["\n  align-self: center;\n  text-transform: uppercase;\n\n  @media screen and (min-width: 768px) {\n    margin-right: 45%;\n  }\n"]))),v=y.ZP.div(r||(r=(0,b.Z)(["\n  margin-bottom: 16px;\n  width: 100%;\n  align-self: flex-start;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 36px;\n  }\n"]))),k=y.ZP.div(p||(p=(0,b.Z)(["\n  width: 100%;\n  padding: 18px 16px;\n  display: flex;\n  justify-content: space-between;\n  border-radius: 24px;\n  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff,\n    10px 12px 12px 0px #cab1b14d;\n\n  @media screen and (min-width: 768px) {\n    gap: 32px;\n    padding: 48px 56px;\n    margin-bottom: 20px;\n    max-width: 60%;\n  }\n\n  @media screen and (min-width: 1280px) {\n  }\n"]))),P=y.ZP.form(d||(d=(0,b.Z)(["\n  width: 75%;\n  padding: 18px 16px;\n  border-radius: 32px;\n  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 0 auto;\n\n  @media screen and (min-width: 768px) {\n    /* flex-basis: 40%; */\n    width: 40%;\n    padding: 28px 36px;\n  }\n"]))),_=y.ZP.div(o||(o=(0,b.Z)(["\n  margin-top: 20px;\n  margin-bottom: 24px;\n  gap: 8px;\n  align-self: flex-end;\n  flex-direction: column;\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n  /* box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff; */\n"]))),z=y.ZP.p(s||(s=(0,b.Z)(["\n  display: none;\n\n  @media screen and (min-width: 1280px) {\n    z-index: 1000;\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(100%, 75%);\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    padding: 5px 15px;\n    min-width: 110px;\n    width: fit-content;\n    min-height: 44px;\n    text-align: center;\n    font-size: 14px;\n    line-height: 1.33;\n    color: black;\n    border: 1px solid yellow;\n    border-radius: 10px;\n    box-shadow: 0 0 10em 1em rgba(255, 139, 72, 0.6);\n  }\n"]))),C=y.ZP.div(x||(x=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n\n  @media screen and (min-width: 1280px) {\n    gap: 24px;\n  }\n"]))),S=y.ZP.div(l||(l=(0,b.Z)(["\n  position: relative;\n\n  &:hover > p,\n  &:focus > p {\n    opacity: 1;\n  }\n"]))),L=y.ZP.input(c||(c=(0,b.Z)(["\n  padding: 6px;\n  font-size: 14px;\n  border: none;\n  border-bottom: 1px solid black;\n  color: black;\n  outline-color: yellow;\n  background-color: transparent;\n\n  &:hover {\n    border-bottom: 1px solid yellow;\n  }\n\n  &:focus + .lightbox-modal__auth-label {\n    color: yellow;\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-left: 20px;\n    padding: 6px 12px;\n  }\n"]))),E=y.ZP.label(m||(m=(0,b.Z)(["\n  text-transform: uppercase;\n  font-size: 16px;\n  color: black;\n\n  &:hover,\n  &:focus {\n    color: yellow;\n    font-weight: bold;\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 24px;\n  }\n"]))),q=y.ZP.div(h||(h=(0,b.Z)(["\n  min-width: 25%;\n"]))),F=i(5262),A=i(3337),B=i(7061),D=i(5047),G=i(3329),H=function(){var n=(0,u.I0)(),e=(0,w.s0)(-1),i=(0,g.useState)(""),t=(0,f.Z)(i,2),a=t[0],r=t[1],p=(0,g.useState)(""),d=(0,f.Z)(p,2),o=d[0],s=d[1],x=function(n){switch(n.target.name){case"email":r(n.target.value);break;case"password":s(n.target.value);break;default:return}},l=function(){r(""),s("")};return(0,G.jsxs)(j,{children:[(0,G.jsxs)(v,{children:[(0,G.jsx)(A.u,{onClick:function(){return e(-1)},text:"Go back",status:"goBack"}),(0,G.jsx)(Z,{children:"Let's log in"})]}),(0,G.jsxs)(k,{children:[(0,G.jsx)(q,{children:(0,G.jsx)("img",{alt:"animation",width:"100%",srcSet:B})}),(0,G.jsxs)(P,{onSubmit:function(e){e.preventDefault(),n((0,D.pH)({email:a,password:o})),l()},children:[(0,G.jsxs)(_,{children:[(0,G.jsx)(L,{type:"email",id:"auth-email",name:"email",value:a,required:!0,pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",placeholder:"Enter your email",onChange:x}),(0,G.jsx)(E,{htmlFor:"auth-email",children:"Email"}),(0,G.jsx)(L,{type:"password",id:"auth-password",name:"password",value:o,required:!0,minLength:"6",placeholder:"Enter your password",onChange:x}),(0,G.jsx)(E,{htmlFor:"auth-password",children:"Password"})]}),(0,G.jsxs)(C,{children:[(0,G.jsxs)(S,{children:[(0,G.jsx)(A.u,{type:"submit",status:"login",text:"Log in"}),(0,G.jsx)(z,{children:"Already registered? Log in!"})]}),(0,G.jsxs)(S,{children:[(0,G.jsx)(F.O,{text:"Sing up",status:"register",to:"/register"}),(0,G.jsx)(z,{children:"Newcomer? Create an account!"})]})]})]})]})]})}},7061:function(n,e,i){n.exports=i.p+"static/media/code.cb3044e92f412d1ef7ec.gif"}}]);
//# sourceMappingURL=172.d6e6da98.chunk.js.map