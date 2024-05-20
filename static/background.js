const response = await fetch('http://192.168.1.236:8999');
const fpath = await response.text();

function filter(x) {
    const a = x.slice(x.indexOf('-') + 1, x.lastIndexOf('_'));
    const clean = a.replace(/\u0000/g, '')
    return [clean.slice(0,2), clean]
}

const v = filter(fpath)

const bg = document.querySelector("#bg");

bg.style.backgroundImage = `url(https://w.wallhaven.cc/full/${v[0]}/wallhaven-${v[1]}.jpg)`

function snap(num){
    return Math.round(num/devicePixelRatio)*devicePixelRatio
}

function updatePos() {
    bg.style.height = window.screen.height + "px";
    bg.style.width = window.screen.width + "px";
    bg.style.transform = `translate(${snap(0 - window.screenLeft - 
        ((window.outerWidth - window.innerWidth) / 2))}px, ${snap(0 -
        window.screenTop - (window.outerHeight - window.innerHeight) + 
        20)}px)`;
    requestAnimationFrame(updatePos);
}

updatePos()
