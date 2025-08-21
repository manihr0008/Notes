// Page Loader
window.addEventListener('load',()=>{
    const loader=document.getElementById('loader');
    loader.style.display='none';
});

// Initialize AOS
AOS.init({duration:1000,once:true});
