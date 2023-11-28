# Dynamic Design
## Girilen cihazı telefon mu yoksa bilgisayar mı diye tanıyıp ona göre index sayfasına yönlendirme yapan kod bloğu.
## Code block that recognizes whether the entered device is a phone or a computer and redirects to the corresponding index page.
```bash
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  window.location.href = 'mobile.html';
}else{
  window.location.href = 'index.html';
}
```
 ### Aynı pages linkine masaüstünden ve telefondan girdiğinizde farklı sayfalara yönleneceksiniz.
 Live: https://palaarda.github.io/dynamic-design-test/index.html
