import{S as h,i as a}from"./assets/vendor-7659544d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function m(){d.innerHTML="";const s=c.map(t=>`<li class="img-blok">
        <a href="${t.largeImageURL}">     
    <img  src="${t.webformatURL}"
    data-source="${t.largeImageURL}"
    alt="${t.tags}">
     <ul class="image-descript">
      <li><h3>likes</h3><p>${t.likes}</p></li>
      <li><h3>views</h3><p>${t.views}</p></li>
      <li><h3>comments</h3><p>${t.comments}</p></li>
      <li><h3>downloads</h3><p>${t.downloads}</p></li>
     </ul>
   </a>
   </li>`).join("");d.insertAdjacentHTML("beforeend",s),new h(".gallery a",{captionsData:"alt"}).refresh()}function p(){const s="https://pixabay.com/api/",o=new URLSearchParams({key:"42985969-a702e02b9d921ed7e13374797",q:l,image_type:"photo",orientation:"horizontal",safesearch:"true"}),t=`${s}?${o}`;return fetch(t).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}let l,c;const d=document.querySelector(".gallery"),y=document.querySelector("input"),g=document.querySelector("button"),f=document.querySelector(".loader"),L=()=>{f.style.display="flex"},w=()=>{f.style.display="none"},u=()=>{document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")};window.onload=u;g.addEventListener("click",async s=>{s.preventDefault(),l=y.value.trim(),l.length||(a.error({color:"#fff021",message:" Please fill in the field for search query.",position:"topRight"}),d.innerHTML=""),L();try{const o=await p();c=o.hits,c.length||a.error({color:"#EF4040",messageColor:"#ffffff",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m(o)}catch{a.error({color:"#EF4040",messageColor:"#ffffff",message:"❌ Sorry, there was a mistake. Please try again!",position:"topRight"})}finally{w(),u()}});
//# sourceMappingURL=commonHelpers.js.map
