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
            el.style.left = ev.pageX - disX + 'px';
            el.style.top = ev.pageY - disY + 'px';
        }
        el.onmouseup = function(){
            el.onmousemove = null;
            el.onmouseup = null;
        }
        return false;
    }
}