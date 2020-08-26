function drag(id){
    var el = document.getElementById(id)
    var disX = 0;
    var disY = 0;
    el.onmousedown = function(ev){
        var ev = ev || window.event;
        disX = ev.pageX - el.offsetLeft;
        disY = ev.pageY - el.offsetTop;
        el.onmousemove = function(ev){
            var ev = ev || window.event;
            el.style.left = ev.clientX - disX + 'px';
            el.style.top = ev.clientY - disY + 'px';
        }
    }
}