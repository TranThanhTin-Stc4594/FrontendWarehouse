(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(3),r=n.n(a),l=(n(8),n(9),n(0));const o="https://back-end-warehouse.vercel.app";var i=function(){const[e,t]=Object(s.useState)(""),[n,c]=Object(s.useState)(""),[a,r]=Object(s.useState)(""),[i,h]=Object(s.useState)([]),[j,u]=Object(s.useState)([]),[d,b]=Object(s.useState)(null),[p,g]=Object(s.useState)(""),O=async()=>{h([]);const t="".concat(o,"/api/search?keyword=").concat(e,"&parameter=").concat(n);console.log("Fetching from: ".concat(t));const s=await fetch(t);if(s.ok){const e=await s.json();h(e.filteredData||[]),console.log("Search results:",e.filteredData)}else console.error("Error fetching search results:",s.statusText),alert("Kh\xf4ng th\u1ec3 t\xecm ki\u1ebfm. Vui l\xf2ng th\u1eed l\u1ea1i sau.")},x=e=>{"Enter"===e.key&&O()};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Qu\u1ea3n l\xfd Kho"}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("label",{children:["Username:",Object(l.jsx)("input",{type:"text",value:a,onChange:e=>r(e.target.value)})]}),Object(l.jsxs)("label",{children:["Keyword:",Object(l.jsx)("input",{type:"text",value:e,onChange:e=>{const n=e.target.value;t(n),(async e=>{const t="".concat(o,"/api/suggestions?keyword=").concat(e),n=await fetch(t);if(n.ok){const e=await n.json();u(e.suggestions||[])}else console.error("Error fetching suggestions:",n.statusText)})(n)},onKeyPress:x}),j.length>0&&Object(l.jsx)("ul",{className:"suggestions",children:j.map(((e,n)=>Object(l.jsx)("li",{onClick:()=>(e=>{t(e),u([]),O()})(e),children:e},n)))})]}),Object(l.jsxs)("label",{children:["Parameter:",Object(l.jsx)("input",{type:"text",value:n,onChange:e=>c(e.target.value),onKeyPress:x})]}),Object(l.jsx)("button",{onClick:O,children:"Search"})]}),Object(l.jsxs)("div",{className:"results",children:[Object(l.jsx)("h2",{children:"K\u1ebft qu\u1ea3 T\xecm ki\u1ebfm"}),Object(l.jsx)("ul",{children:i.length>0?i.map((e=>Object(l.jsxs)("li",{className:d===e.ID?"selected":"",onClick:()=>b(e.ID),children:[Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"T\xean s\u1ea3n ph\u1ea9m:"})," ",e.TenSanPham]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"M\xe3 s\u1ea3n ph\u1ea9m:"})," ",e.MaSanPham]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"Th\xf4ng s\u1ed1 s\u1ea3n ph\u1ea9m:"})," ",e.ThongSoSanPham]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"V\u1ecb tr\xed:"})," ",e.ViTri]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"S\u1ed1 l\u01b0\u1ee3ng s\u1ea3n ph\u1ea9m:"})," ",e.SoLuongSanPham]})]},e.ID))):Object(l.jsx)("p",{children:"No results found."})})]}),d&&Object(l.jsxs)("div",{className:"update-quantity",children:[Object(l.jsxs)("h2",{children:["Update Quantity for ",d]}),Object(l.jsx)("input",{type:"number",placeholder:"Enter quantity",value:p,onChange:e=>g(e.target.value)}),Object(l.jsx)("button",{onClick:async()=>{if(d&&p)try{const e=await fetch("".concat(o,"/api/update-quantity"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({maSanPham:d,quantity:parseInt(p,10)})});if(e.ok)alert("Quantity updated successfully."),O();else{const t=await e.json();console.error("Error updating quantity:",t),alert("Kh\xf4ng th\u1ec3 c\u1eadp nh\u1eadt s\u1ed1 l\u01b0\u1ee3ng: ".concat(t.error))}}catch(e){console.error("Error updating quantity:",e),alert("Kh\xf4ng th\u1ec3 c\u1eadp nh\u1eadt s\u1ed1 l\u01b0\u1ee3ng. Vui l\xf2ng th\u1eed l\u1ea1i sau.")}else alert("Please select a product and enter a quantity.")},children:"Update Quantity"})]})]})};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(i,{})}),document.getElementById("root"))},8:function(e,t,n){},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.69369262.chunk.js.map