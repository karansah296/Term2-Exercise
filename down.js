function moveDown() {
 var element = document.getElementById('circle');
 var positionTop = element.offsetTop;
 element.style.top = positionTop + 1 + 'px';
 }
function myLoadEvent() {
 document.addEventListener('keydown', moveDown);
}
document.addEventListener('DOMContentLoaded', myLoadEvent);