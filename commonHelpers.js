import{i as c,S as i}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const l="u_bgxnj34w7k";async function d(s){const r=`https://pixabay.com/api/?key=${l}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;try{return(await(await fetch(r)).json()).hits}catch{throw new Error("Failed to fetch images from Pixabay API")}}function m(){const s=document.getElementById("gallery");s.innerHTML=""}function u(s){const r=document.getElementById("gallery"),n=document.createDocumentFragment();s.forEach(o=>{const e=document.createElement("img");e.src=o.webformatURL,e.alt=o.tags,e.dataset.source=o.largeImageURL,n.appendChild(e)}),r.appendChild(n)}document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("search-form"),r=document.getElementById("loader");s.addEventListener("submit",async n=>{n.preventDefault();const o=n.target.elements.query.value.trim();if(!o){c.error({title:"Error",message:"Please enter a search query"});return}m(),r.style.display="block";try{const e=await d(o);u(e),new i(".gallery a").refresh()}catch(e){console.error(e.message),c.error({title:"Error",message:"Failed to fetch images. Please try again later."})}finally{r.style.display="none"}})});
//# sourceMappingURL=commonHelpers.js.map