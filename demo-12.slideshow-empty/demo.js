function showSlides(k){
    slides[k].style.display = "block";
}
function hiddenSlides(k) {
    slides[k].style.display = "none";
}
function hienThiSlideKeTiep() {
    hiddenSlides(index);
    index++;
    if (index > 2)
        index = 0;
    showSlides(index);
}
function hienThiSlideTruocDo() {
    hiddenSlides(index);
    if (index == 0)
        index = 2;
    else
        index--;
    showSlides(index);
}
let slides = document.getElementsByClassName('slides');
let index = 0;
showSlides(index);
// goi lai ham sau 1 khoang thoi gian ml giay
setInterval(hienThiSlideKeTiep,2000);
console.log(slides);