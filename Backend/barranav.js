document.addEventListener('scroll', function () {
    const nav = document.getElementById('nav');
    
    /*O número abaixo é a posição em pixels*/
    if (window.scrollY > 500) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
  