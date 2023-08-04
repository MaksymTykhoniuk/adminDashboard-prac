import{n as t,r as s,j as e,u as n}from"./index-687f64d7.js";import{I as d,A as l,a as o}from"./ItemsDataGrid-9333ba46.js";import"./index-e5ce7e0a.js";const u=t.div``,m=t.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`,h=t.h2``,p=t.button`
  padding: 7px;
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 250ms linear;

  &:hover {
    scale: 1.1;
  }
`,i=[{field:"id",headerName:"ID",width:85},{field:"img",headerName:"Avatar",width:100,filterable:!1,disableColumnMenu:!0,hideSortIcons:!0,renderCell:r=>e.jsx(o,{src:r.row.img||"/noavatar.png",alt:"user avatar"})},{field:"firstName",headerName:"First name",width:150,editable:!0},{field:"lastName",headerName:"Last name",width:150,editable:!0},{field:"email",headerName:"Email",type:"email",width:220,editable:!0},{field:"phone",headerName:"Phone",type:"string",width:110,editable:!0,align:"right"},{field:"createdAt",headerName:"Created At",type:"string",width:160,editable:!0,align:"right"},{field:"verified",headerName:"Verified",type:"boolean",width:130,headerAlign:"center",align:"center",filterable:!1,disableColumnMenu:!0,hideSortIcons:!0}],c=()=>{const[r,a]=s.useState(!1);return e.jsxs(u,{children:[e.jsxs(m,{children:[e.jsx(h,{children:"Users"}),e.jsx(p,{type:"button",onClick:()=>a(!0),children:"Add new user"})]}),e.jsx(d,{slug:"users",columns:i,rows:n}),r&&e.jsx(l,{slug:"user",columns:i,setOpen:a})]})},b=()=>e.jsx(c,{});export{b as default};
