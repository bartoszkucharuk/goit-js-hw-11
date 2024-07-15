import{S as f,i as m}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",y="44872402-0762bbf0a5ccd686fb6258473",g="photo",b="horizontal",$=!0;function L(i){return fetch(`${h}?key=${y}&q=${i}&image_type=${g}&orientation=${b}&safesearch=${$}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function v({hits:i},r){if(i.length===0){n();return}const s=i.map(({webformatURL:e,largeImageURL:t,tags:c,likes:l,views:d,comments:u,downloads:p})=>`
            <li class="list-item">
                <a href="${t}">
                    <img class="card-image"
                    src="${e}"
                    alt="${c}"
                    width="360">
                </a>
                <ul class="card-description-list">
                    <li class="card-description-item">
                        <h3 class="card-description-title">Likes</h3>
                        <p class="card-description-value">${l}</p>
                    </li>
                    <li class="card-description-item">
                        <h3 class="card-description-title">Views</h3>
                        <p class="card-description-value">${d}</p>
                    </li>
                    <li class="card-description-item">
                        <h3 class="card-description-title">Comments</h3>
                        <p class="card-description-value">${u}</p>
                    </li>
                    <li class="card-description-item">
                        <h3 class="card-description-title">Downloads</h3>
                        <p class="card-description-value">${p}</p>
                    </li>
                </ul>
            </li>
        `).join("");r.innerHTML=s,new f(".card-container a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}function n(){m.error({message:"Sorry, there are no images matching your search query. Please try again!"})}const w=document.querySelector(".search-form"),P=document.querySelector(".card-container"),a=document.querySelector(".loader");w.addEventListener("submit",S);function S(i){i.preventDefault();const r=i.currentTarget,s=r.elements.search.value.toLowerCase();a.style.display="flex",L(s).then(o=>v(o,P)).catch(n).finally(()=>{r.reset(),a.style.display="none"})}
//# sourceMappingURL=commonHelpers.js.map
