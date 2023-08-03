import{n as r,r as s,j as e,u as n}from"./index-db4f2311.js";import{U as d,A as l,a as o}from"./UsersDataGrid-1b5148c3.js";import"./index-182d5937.js";const u=r.div``,m=r.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`,h=r.h2``,p=r.button`
  padding: 7px;
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 250ms linear;

  &:hover {
    scale: 1.1;
  }
`,i=[{field:"id",headerName:"ID",width:85},{field:"img",headerName:"Avatar",width:100,filterable:!1,disableColumnMenu:!0,hideSortIcons:!0,renderCell:t=>e.jsx(o,{src:t.row.img||"/noavatar.png",alt:"user avatar"})},{field:"firstName",headerName:"First name",width:150,editable:!0},{field:"lastName",headerName:"Last name",width:150,editable:!0},{field:"email",headerName:"Email",type:"email",width:220,editable:!0},{field:"phone",headerName:"Phone",type:"string",width:110,editable:!0,align:"right"},{field:"createdAt",headerName:"Created At",type:"string",width:160,editable:!0,align:"right"},{field:"verified",headerName:"Verified",type:"boolean",width:130,headerAlign:"center",align:"center",filterable:!1,disableColumnMenu:!0,hideSortIcons:!0}],c=()=>{const[t,a]=s.useState(!1);return e.jsxs(u,{children:[e.jsxs(m,{children:[e.jsx(h,{children:"Users"}),e.jsx(p,{type:"button",onClick:()=>a(!0),children:"Add new user"})]}),e.jsx(d,{slug:"users",columns:i,rows:n}),t&&e.jsx(l,{slug:"user",columns:i,setOpen:a})]})},b=()=>e.jsx(c,{});export{b as default};
