function drag(id){
    var el = document.getElementById(id)
    var disX = 0;
    var disY = 0;
    el.onmousedown = function(ev){
        var ev = ev || window.event;
        disX = ev.pageX - el.offsetLeft;
        disY = ev.pageY - el.offsetTop;
    }
}