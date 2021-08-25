const btn = document.getElementById('btnButton');

const input = document.getElementById('input');

btn.onclick = function(){
    input.select()
    document.execCommand('copy')
    alert('copped')
}
