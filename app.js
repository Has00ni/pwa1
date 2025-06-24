/* Put in app.js */
let deferredPrompt;const installBtn=document.getElementById('installBtn');if(installBtn){window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;installBtn.style.display='inline-block';});installBtn.addEventListener('click',()=>{installBtn.style.display='none';deferredPrompt.prompt();});}
// highlight active nav link
const links=document.querySelectorAll('nav a');links.forEach(l=>{if(l.getAttribute('href')===window.location.pathname.split('/').pop()){l.classList.add('active');}});
