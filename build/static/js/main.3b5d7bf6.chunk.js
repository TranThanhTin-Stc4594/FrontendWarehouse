(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){"use strict";n.r(e);var r=n(1),s=n.n(r),c=n(3),a=n.n(c),o=(n(8),n(0));var l=t=>{let{onSearch:e}=t;const[n,s]=Object(r.useState)(""),[c,a]=Object(r.useState)("");return Object(o.jsxs)("form",{onSubmit:t=>{t.preventDefault(),e(n,c)},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Keyword:"}),Object(o.jsx)("input",{type:"text",value:n,onChange:t=>s(t.target.value)})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Parameter:"}),Object(o.jsx)("input",{type:"text",value:c,onChange:t=>a(t.target.value)})]}),Object(o.jsx)("button",{type:"submit",children:"Search"})]})};var i=t=>{let{onUpload:e}=t;const[n,s]=Object(r.useState)(null);return Object(o.jsxs)("form",{onSubmit:t=>{t.preventDefault(),n&&e(n)},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Upload Excel file:"}),Object(o.jsx)("input",{type:"file",onChange:t=>s(t.target.files[0])})]}),Object(o.jsx)("button",{type:"submit",children:"Upload"})]})};n(10);var h=function(){const[t,e]=Object(r.useState)([]),n=async(t,n)=>{console.log("Searching with keyword:",t),console.log("Searching with parameter:",n);try{const r=await fetch("http://localhost:3333/api/search?keyword=".concat(t,"&parameter=").concat(n));if(!r.ok)throw new Error("HTTP error! status: ".concat(r.status));const s=await r.json();e(s.filteredData||[])}catch(r){console.error("Error fetching search results:",r),alert("Kh\xf4ng th\u1ec3 t\xecm ki\u1ebfm. Vui l\xf2ng th\u1eed l\u1ea1i sau.")}};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Qu\u1ea3n l\xfd Kho"}),Object(o.jsx)(l,{onSearch:n}),Object(o.jsx)(i,{onUpload:async t=>{const e=new FormData;e.append("file",t);try{const t=await fetch("http://localhost:3333/api/upload",{method:"POST",body:e});if(!t.ok)throw new Error("HTTP error! status: ".concat(t.status));const n=await t.json();alert(n.message)}catch(n){console.error("Error uploading file:",n),alert("Kh\xf4ng th\u1ec3 t\u1ea3i t\u1ec7p l\xean. Vui l\xf2ng th\u1eed l\u1ea1i sau.")}}}),Object(o.jsxs)("div",{className:"results",children:[Object(o.jsx)("h2",{children:"K\u1ebft qu\u1ea3 T\xecm ki\u1ebfm"}),Object(o.jsx)("ul",{children:t.map((t=>Object(o.jsxs)("li",{children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"T\xean s\u1ea3n ph\u1ea9m:"})," ",t["T\xean s\u1ea3n ph\u1ea9m"]]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"M\xe3 s\u1ea3n ph\u1ea9m:"})," ",t["M\xe3 s\u1ea3n ph\u1ea9m "]]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Th\xf4ng s\u1ed1 s\u1ea3n ph\u1ea9m:"})," ",t["Th\xf4ng s\u1ed1 s\u1ea3n ph\u1ea9m"]]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"V\u1ecb tr\xed:"})," ",t["V\u1ecb tr\xed"]]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"S\u1ed1 l\u01b0\u1ee3ng s\u1ea3n ph\u1ea9m:"})," ",t["S\u1ed1 l\u01b0\u1ee3ng s\u1ea3n ph\u1ea9m"]]}),Object(o.jsx)("button",{onClick:()=>(async(t,e)=>{try{const r=await fetch("http://localhost:3333/api/update-quantity",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({maSanPham:t,quantity:e})});if(!r.ok)throw new Error("HTTP error! status: ".concat(r.status));const s=await r.json();s.error?alert(s.error):(alert("C\u1eadp nh\u1eadt s\u1ed1 l\u01b0\u1ee3ng th\xe0nh c\xf4ng"),n())}catch(r){console.error("Error updating quantity:",r),alert("Kh\xf4ng th\u1ec3 c\u1eadp nh\u1eadt s\u1ed1 l\u01b0\u1ee3ng. Vui l\xf2ng th\u1eed l\u1ea1i sau.")}})(t["M\xe3 s\u1ea3n ph\u1ea9m "],-1),children:"Gi\u1ea3m 1"})]},t["M\xe3 s\u1ea3n ph\u1ea9m "])))})]})]})};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root"))},8:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.3b5d7bf6.chunk.js.map