import{a as r,u as h,r as f,o as x,d as w,e,w as l,v as n,i,f as _,g,h as b,F as y}from"./index.f4f0e22e.js";import{r as v}from"./index.705f3c9c.js";const V=e("h1",null,"Ventana de Registro de cuentas",-1),k=["onSubmit"],P={class:"min-h-screen bg-blue-100 py-6 flex flex-col justify-center sm:py-12"},F={class:"relative py-3 sm:max-w-xl sm:mx-auto"},L=e("div",{class:"absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"},null,-1),S={class:"relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"},U={class:"max-w-md mx-auto"},B=e("div",null,[e("h1",{class:"text-2xl font-semibold"},"Login Form with Floating Labels")],-1),C={class:"divide-y divide-gray-200"},E={class:"py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"},N={class:"relative"},R=e("label",{for:"email",class:"absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"},"Email Address",-1),A={class:"relative"},I=e("label",{for:"password",class:"absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"},"Password",-1),M={class:"relative"},T=e("label",{for:"password",class:"absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"},"Confirm Password",-1),j=e("div",{class:"relative"},[e("button",{class:"bg-blue-500 text-white rounded-md px-2 py-1"},"Acceso")],-1),G={__name:"SingUp",setup(D){const o=r(""),a=r(""),d=r(""),p=h(),c=async()=>{await v(o.value,a.value)&&p.push({name:"Login"}),console.log()};return(u,s)=>{const m=f("router-link");return x(),w(y,null,[V,e("form",{onSubmit:b(c,["prevent"])},[e("div",P,[e("div",F,[L,e("div",S,[e("div",U,[B,e("div",C,[e("div",E,[e("div",N,[l(e("input",{autocomplete:"off","onUpdate:modelValue":s[0]||(s[0]=t=>o.value=t),id:"email",name:"email",type:"text",class:"peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600",placeholder:"Email address"},null,512),[[n,o.value]]),R]),e("div",A,[l(e("input",{autocomplete:"off","onUpdate:modelValue":s[1]||(s[1]=t=>a.value=t),id:"password",name:"password",type:"password",class:"peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600",placeholder:"Password"},null,512),[[n,a.value]]),I]),e("div",M,[l(e("input",{autocomplete:"off","onUpdate:modelValue":s[2]||(s[2]=t=>d.value=t),id:"password",name:"password",type:"password",class:"peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600",placeholder:"Password"},null,512),[[n,d.value]]),T]),j,i(),_(m,{to:{name:"Login"},class:"bg-blue-500 text-white rounded-md px-2 py-1"},{default:g(()=>[i("Inicia sesi\xF3n")]),_:1})])])])])])])],40,k)],64)}}};export{G as default};