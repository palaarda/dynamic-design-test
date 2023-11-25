if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Mobil cihazdan gelen kullanıcıları mobil tasarıma yönlendir
    document.querySelector('.mobile-design').style.display = 'block';
    document.querySelector('.desktop-design').style.display = 'none';
  }