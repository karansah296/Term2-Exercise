function moveUp() {
 var element = document.getElementById('circle');
 var positionTop = element.offsetTop;
 element.style.top = positionTop - 1 + 'px';
 }
function myLoadEvent() {
 document.addEventListener('keydown', moveUp);
}
document.addEventListener('DOMContentLoaded', myLoadEvent);