import{n as i,j as t}from"./index-687f64d7.js";import{R as n,O as a,X as d,Y as o,P as r,U as c,Q as x}from"./LineChart-0bd21870.js";const l=i.div`
  display: flex;
  justify-content: space-between;
`,h=i.div`
  flex: 1;
  padding: 20px;
`,p=i.div`
  &::after {
    content: '';
    display: block;
    width: 90%;
    height: 0.5px;
    background: #ddd;
    border-radius: 10px;
  }
`,m=i.div`
  margin-top: 50px;
  width: 80%;
  height: 400px;
`,g=i.div`
  display: flex;
  align-items: center;
  gap: 20px;
`,j=i.img`
  display: block;
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 20px;
`,f=i.h2`
  font-weight: 500;
`,b=i.button``,v=i.ul`
  list-style: none;
  font-size: 18px;
`,u=i.li`
  display: flex;

  margin: 30px 0;
`,y=i.p`
  font-weight: 600;
  text-transform: capitalize;
  margin-right: 10px;
`,w=i.p``,I=i.div`
  flex: 1;
  padding: 20px;
`,k=i.h2`
  margin-bottom: 20px;
`,A=i.ul``,W=i.li`
  list-style: none;
  position: relative;
  width: 1px;
  padding-top: 50px;
  background: #f45b69;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #f45b69;
    transform: translate(-50%, 50%);
  }
`,D=i.div`
  min-width: 480px;
  padding: 15px;
  background-color: #f45b6810;
`,L=i.p`
  margin-bottom: 5px;
`,T=i.time`
  font-size: 12px;
  color: #dddddda7;
`,C=s=>t.jsxs(l,{children:[t.jsxs(h,{children:[t.jsxs(p,{children:[t.jsxs(g,{children:[s.img&&t.jsx(j,{src:s.img,alt:"item image"}),t.jsx(f,{children:s.title}),t.jsx(b,{children:"update"})]}),t.jsx(v,{children:Object.entries(s.info).map(e=>t.jsxs(u,{children:[t.jsxs(y,{children:[e[0]," : "]}),t.jsx(w,{children:e[1]})]},e[0]))})]}),t.jsx(m,{children:s.chart&&t.jsx(n,{width:"100%",height:"100%",children:t.jsxs(a,{width:500,height:300,data:s.chart.data,margin:{top:5,right:30,left:20,bottom:5},children:[t.jsx(d,{dataKey:"name"}),t.jsx(o,{}),t.jsx(r,{}),t.jsx(c,{}),s.chart.dataKeys.map(e=>t.jsx(x,{type:"monotone",dataKey:e.name,stroke:e.color}))]})})})]}),t.jsxs(I,{children:[t.jsx(k,{children:" Latest Activities "}),s.activities&&t.jsx(A,{children:s.activities.map(e=>t.jsx(W,{children:t.jsxs(D,{children:[t.jsx(L,{children:e.text}),t.jsx(T,{children:e.time})]})},e.text))})]})]});export{C as S};
