const u=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}};u();const r=document.getElementsByClassName("image");let i=0,c={x:0,y:0};const f=(e,n,s)=>{e.style.left=`${n}px`,e.style.top=`${s}px`,e.style.zIndex=i,e.dataset.status="active",c={x:n,y:s}},m=(e,n)=>Math.hypot(e-c.x,n-c.y),d=e=>{if(m(e.clientX,e.clientY)>window.innerWidth/15){const n=r[i%r.length],s=r[(i-1)%r.length];f(n,e.clientX,e.clientY),s&&(s.dataset.status="inactive"),i++}};window.onmousemove=e=>d(e);window.ontouchmove=e=>d(e.touches[0]);