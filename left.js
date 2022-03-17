function moveLeft() {
 var element = document.getElementById('circle');
 var positionLeft = element.offsetLeft;
 element.style.left = positionLeft - 1 + 'px';
 }
function myLoadEvent() {
 document.addEventListener('keydown', moveLeft);
}
document.addEventListener('DOMContentLoaded', myLoadEvent);