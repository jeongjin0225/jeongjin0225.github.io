// 콘텐츠를 추가하거나 수정하려면 이 배열을 편집하세요.
// 사진은 photos 폴더 안에 넣고, image에 파일 경로를 적습니다.
// 예: photos/photo1.jpg  |  영상 썸네일은 인터넷 주소를 사용해도 됩니다.
const items = [
 {type:"video",title:"햄스터축구 꿀팁 영상",image:"/햄스터축구 꿀팁.png",url:"https://youtu.be/JG1p58NcUBI?si=qgq2X0KsxX1kySJa",alt:"햄스터축구 꿀팁 영상"},
 {type:"video",title:"햄스터 로봇 조종 설명",image:"/햄스터축구 꿀팁.png",url:"https://youtu.be/-1oMaRUnjRs?si=4J46LyQNMgAdM8zj",alt:"햄스터축구 꿀팁 영상"},
 {type:"photo",title:"레이저 과녁 소개 1",image:"설명 사진/설명 사진 1.jpeg",url:"",alt:"레이저 과녁 소개 1"},
 {type:"photo",title:"레이저 과녁 소개 2",image:"설명 사진/설명 사진 2.jpeg",url:"",alt:"레이저 과녁 소개 2"},
 {type:"photo",title:"로봇팔 소개 1",image:"설명 사진/로봇팔 소개 사진.png",url:"",alt:"로봇팔 소개 1"},
 {type:"photo",title:"로봇팔 소개 2",image:"설명 사진/로봇팔 소개 사진 2.jpeg",url:"",alt:"로봇팔 소개 2"}
];
let filter="video";
const grid=document.querySelector("#mediaGrid"), searchInput=document.querySelector("#searchInput");
function render(){
 const q=(searchInput?.value||"").trim().toLocaleLowerCase("ko");
 const shown=items.filter(x=>(filter==="all"||x.type===filter)&&x.title.toLocaleLowerCase("ko").includes(q));
 document.querySelector("#itemCount").textContent=shown.length;
 document.querySelector("#sectionTitle").textContent=filter==="video"?"영상":filter==="photo"?"사진":"최신 콘텐츠";
 document.querySelector("#emptyMessage").hidden=shown.length>0;grid.hidden=!shown.length;
 grid.innerHTML=shown.map(x=>`<article class="media-card" tabindex="0" data-title="${x.title}" data-type="${x.type}" data-image="${x.image}" data-url="${x.url||""}"><div class="thumbnail"><img src="${x.image}" alt="${x.alt}" loading="lazy">${x.type==="video"?`<span class="play-icon">▶</span><span class="duration">${x.duration||""}</span>`:`<span class="photo-icon">▧</span>`}</div><div class="card-info"><h2 class="card-title">${x.title}</h2><p class="card-type">${x.type==="video"?"영상":"사진"}</p></div></article>`).join("");
}
function setFilter(value){
 filter=value;
 document.querySelectorAll("[data-filter]").forEach(b=>b.classList.toggle("active",b.dataset.filter===value));
 render();window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll("[data-filter]").forEach(b=>b.addEventListener("click",()=>setFilter(b.dataset.filter)));
document.querySelector("#searchToggle").addEventListener("click",()=>{const box=document.querySelector("#searchBox");box.hidden=!box.hidden;if(!box.hidden)searchInput.focus();else{searchInput.value="";render()}});
document.querySelector("#clearSearch").addEventListener("click",()=>{searchInput.value="";render();searchInput.focus()});
searchInput.addEventListener("input",render);
function openDetails(card){
 const dlg=document.querySelector("#detailDialog"),url=card.dataset.url;
 document.querySelector("#detailImage").src=card.dataset.image;
 document.querySelector("#detailImage").alt=card.dataset.title;
 document.querySelector("#detailTitle").textContent=card.dataset.title;
 document.querySelector("#detailType").textContent=card.dataset.type==="video"?"영상":"사진";
 const link=document.querySelector("#detailLink");
 link.href=url||card.dataset.image;link.textContent=card.dataset.type==="video"?"유튜브에서 보기 ↗":"사진 열기 ↗";link.classList.remove("disabled");
 if(card.dataset.type==="video"&&!url){link.classList.add("disabled");link.removeAttribute("href")}
 if(typeof dlg.showModal==="function")dlg.showModal();
}
grid.addEventListener("click",e=>{const card=e.target.closest(".media-card");if(card)openDetails(card)});
grid.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.matches(".media-card")){e.preventDefault();openDetails(e.target)}});
document.querySelector("#closeDialog").addEventListener("click",()=>document.querySelector("#detailDialog").close());
document.querySelector("#detailDialog").addEventListener("click",e=>{if(e.target===e.currentTarget)e.currentTarget.close()});
render();