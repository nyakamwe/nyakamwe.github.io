import{g as m,v as d,i as o,o as f,c as x,q as S,l as c,e as z}from"./entry.5617676e.js";import{u as I}from"./config.c25d9086.js";const y=m({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(l){var a;const s=l;d(n=>({"71ded496":c(p)}));const e=I();(a=e==null?void 0:e.nuxtIcon)!=null&&a.aliases;const _=o(()=>{var n;return(((n=e==null?void 0:e.nuxtIcon)==null?void 0:n.aliases)||{})[s.name]||s.name}),p=o(()=>`url('https://api.iconify.design/${_.value.replace(":","/")}.svg')`),r=o(()=>{var t,i,u;if(!s.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const n=s.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(n))===n?`${n}px`:n});return(n,t)=>(f(),x("span",{style:S({width:c(r),height:c(r)})},null,4))}});const h=z(y,[["__scopeId","data-v-11604bcf"]]);export{h as default};