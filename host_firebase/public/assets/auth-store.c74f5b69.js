import{N as t,g as a}from"./index.76e27e00.js";import{r as c,a as u,b as l}from"./plugin-vue_export-helper.efb7bcfe.js";const f={error(e){t.create({position:"top-right",message:e,color:"red-5",icon:"error",timeout:2e3,actions:[{icon:"close",color:"white"}]})},success(e){t.create({position:"top-right",message:e,color:"green-5",icon:"check",timeout:2e3,actions:[{icon:"close",color:"white"}]})}},m=a("userStore",{state:()=>({user:null,isAuth:!1}),actions:{setUserID(e){let s=this,r=c(u,"/users_bases/geral/users/"+e);l(r,i=>{let o=i.val();o?s.user=o:s.user=null})},setAuth(e){this.isAuth=e}}});export{f as n,m as u};