# dynamic-design-test
## Girilen cihazı telefon mu yoksa bilgisayar mı diye tanıyıp ona göre index sayfasına yönlendirme yapan kod bloğu.
```bash
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  window.location.href = 'mobile.html';
}else{
  window.location.href = 'index.html';
}
```
