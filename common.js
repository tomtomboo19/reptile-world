// REPTILE WORLD - Common JS

// Hamburger menu
function toggleDrawer(){
  const h=document.getElementById('hamburger');
  const d=document.getElementById('navDrawer');
  h.classList.toggle('open');
  d.classList.toggle('open');
  document.body.style.overflow=d.classList.contains('open')?'hidden':'';
}
function closeDrawer(){
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('navDrawer').classList.remove('open');
  document.body.style.overflow='';
}

// Fade in on scroll
function initFadeIn(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach((e,i)=>{
      if(e.isIntersecting){
        setTimeout(()=>e.target.classList.add('visible'),i*60);
        obs.unobserve(e.target);
      }
    });
  },{threshold:0.07});
  document.querySelectorAll('.fade-in').forEach(el=>obs.observe(el));
}

// Scroll to top button
function initScrollTop(){
  const btn=document.createElement('button');
  btn.className='scroll-top';
  btn.innerHTML='↑';
  btn.title='トップへ戻る';
  btn.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});
  document.body.appendChild(btn);
  window.addEventListener('scroll',()=>{
    btn.classList.toggle('show',window.scrollY>400);
  });
}

// Smooth scroll for anchor links
function initSmoothScroll(){
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const t=document.querySelector(a.getAttribute('href'));
      if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});}
    });
  });
}

document.addEventListener('DOMContentLoaded',()=>{
  initFadeIn();
  initScrollTop();
  initSmoothScroll();
});
