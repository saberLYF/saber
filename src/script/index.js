window.onload = function(){
    const myvideo = document.querySelector('video');
    const myvideoWrap = document.getElementById('video-wrap');
    
    console.log(myvideoWrap.offsetWidth);
    window.addEventListener('resize',function(){
        myvideo.width = myvideoWrap.offsetWidth + 'px';
        myvideo.height = myvideoWrap.offsetHeight + 'px';
    })

    const xx = document.querySelector("#xx");
    const xiazai = document.querySelector("#xiazai")
    xx.addEventListener('click',()=>{
        document.querySelector(".dowload_mengban").style.opacity = 0;
        document.querySelector(".dowload_mengban").addEventListener("animationend",()=>{
            this.style.display = "none"
        })
    })
    xiazai.addEventListener('click',()=>{
        document.querySelector(".dowload_mengban").style.opacity = 1;
        document.querySelector(".dowload_mengban").style.display = "block";
    })
}