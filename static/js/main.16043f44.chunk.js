(this.webpackJsonpDnDlist=this.webpackJsonpDnDlist||[]).push([[0],{16:function(e,t,n){e.exports=n(28)},28:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),i=n(3),o=n.n(i),s=n(2),l=n(4),d=n(7),b=n(10),p=n.n(b),u=n(8),m=n(14),O=n(1),j=n(30),g=[{id:Object(j.a)(),content:"First"},{id:Object(j.a)(),content:"Second"},{id:Object(j.a)(),content:"Third"},{id:Object(j.a)(),content:"Fourth"},{id:Object(j.a)(),content:"Fifth"},{id:Object(j.a)(),content:"Sixth"},{id:Object(j.a)(),content:"Seventh"}],f=(a={},Object(O.a)(a,Object(j.a)(),{name:"Cash Offer",items:[]}),Object(O.a)(a,Object(j.a)(),{name:"Finance",items:[]}),Object(O.a)(a,Object(j.a)(),{name:"Lease",items:[]}),Object(O.a)(a,Object(j.a)(),{name:"Other",items:g}),a),h=function(){var e=function(){var e=localStorage.getItem("columns");return JSON.parse(e)}();return e||f},v=function(){var e=Object(m.a)(p.a.mark((function e(t,n,a){var r,c,i,o,d,b,m,j,g,f,h,v,y,x,I;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.destination){e.next=2;break}return e.abrupt("return");case 2:r=t.source,c=t.destination,r.droppableId!==c.droppableId?(o=n[r.droppableId],d=n[c.droppableId],b=Object(u.a)(o.items),m=Object(u.a)(d.items),j=b.splice(r.index,1),g=Object(l.a)(j,1),f=g[0],m.splice(c.index,0,f),a(Object(s.a)({},n,(i={},Object(O.a)(i,r.droppableId,Object(s.a)({},o,{items:b})),Object(O.a)(i,c.droppableId,Object(s.a)({},d,{items:m})),i)))):(h=n[r.droppableId],v=Object(u.a)(h.items),y=v.splice(r.index,1),x=Object(l.a)(y,1),I=x[0],v.splice(c.index,0,I),a(Object(s.a)({},n,Object(O.a)({},r.droppableId,Object(s.a)({},h,{items:v})))));case 4:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}();var y=function(){var e=h(),t=Object(r.useState)(e),n=Object(l.a)(t,2),a=n[0],i=n[1];return Object(r.useEffect)((function(){!function(e){var t=JSON.stringify(e);localStorage.setItem("columns",t)}(a)})),c.a.createElement("div",{style:{display:"flex",justifyContent:"center",height:"100%",flexWrap:"wrap"}},c.a.createElement(d.a,{onDragEnd:function(e){return v(e,a,i)}},Object.entries(a).map((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];return c.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},key:n},c.a.createElement("h2",null,a.name),c.a.createElement("div",{style:{margin:8}},c.a.createElement(d.c,{droppableId:n,key:n,style:{margin:8}},(function(e,t){return c.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef,style:{background:t.isDraggingOver?"lightblue":"lightgrey",padding:4,width:250,minHeight:500}}),a.items.map((function(e,t){return c.a.createElement(d.b,{key:e.id,draggableId:e.id,index:t},(function(t,n){return c.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:Object(s.a)({userSelect:"none",padding:16,margin:"0 0 8px 0",minHeight:"30px",backgroundColor:n.isDragging?"#263B4A":"#456C86",color:"white"},t.draggableProps.style)}),e.content)}))})),e.placeholder)}))))}))))};o.a.render(c.a.createElement(y,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.16043f44.chunk.js.map