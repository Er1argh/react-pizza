import{q as n,t as z,r as e,j as s,v as l}from"./index-mRL9waDq.js";const p="_pizza_m3iip_1",m={pizza:p},x=()=>{const i=n(),{id:c}=z(),[a,r]=e.useState(),o=async()=>{try{const{data:t}=await l.get(`https://67835ed48b6c7a1316f4316c.mockapi.io/items/${c}`);r(t)}catch(t){console.log(t),alert("Ошибка при получении пиццы!"),i("/")}};return e.useEffect(()=>{o()},[]),a?s.jsxs("div",{className:"container",children:[s.jsx("img",{className:m.pizza,src:a.imageUrl,alt:"Pizza"}),s.jsx("h2",{children:a.title}),s.jsxs("h4",{children:[a.price," ₽"]})]}):s.jsx("h2",{children:"Загрузка..."})};export{x as default};
