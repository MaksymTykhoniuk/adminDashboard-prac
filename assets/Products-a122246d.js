import{n as r,r as o,j as e,p as s}from"./index-db4f2311.js";import{U as a,A as l}from"./UsersDataGrid-1b5148c3.js";import"./index-182d5937.js";const c=r.div``,p=r.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`,u=r.h2``,h=r.button`
  padding: 7px;
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 250ms linear;

  &:hover {
    scale: 1.1;
  }
`,m=r.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`,g=()=>{const[i,t]=o.useState(!1),n=[{field:"id",headerName:"ID",width:80},{field:"img",headerName:"Image",width:100,headerAlign:"center",align:"center",filterable:!1,disableColumnMenu:!0,hideSortIcons:!0,renderCell:d=>e.jsx(m,{src:d.row.img||"/noavatar.png",alt:""})},{field:"title",type:"string",headerName:"Title",width:240},{field:"color",type:"string",headerName:"Color",width:150,headerAlign:"center",align:"center",filterable:!1,disableColumnMenu:!0,hideSortIcons:!0},{field:"price",type:"string",headerName:"Price",width:120},{field:"producer",headerName:"Producer",type:"string",width:160},{field:"createdAt",headerName:"Created At",width:150,type:"string"},{field:"inStock",headerName:"In Stock",width:100,type:"boolean",headerAlign:"center",align:"center",filterable:!1,disableColumnMenu:!0,hideSortIcons:!0}];return e.jsxs(c,{children:[e.jsxs(p,{children:[e.jsx(u,{children:"Products"}),e.jsx(h,{type:"button",onClick:()=>t(!0),children:"Add new producrs"})]}),e.jsx(a,{slug:"products",columns:n,rows:s}),i&&e.jsx(l,{slug:"productas",columns:n,setOpen:t})]})},w=()=>e.jsx(g,{});export{w as default};
