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

    let arr = [
        "./image/logo.png",
        "./image/on.png",
        "./image/icon1.png",
        "./image/download.png",
        "./image/xx.png",
        "./image/erweima.png",
        "./image/appStore.png",
        "./image/anzhuo.png",
        "./image/taptap.png",
        "./image/pc.png",
        "./image/erweima.png",
        "./image/appStore.png",
        "./image/anzhuo.png",
        "./image/taptap.png",
        "./image/pc.png",
        "./image/bofang.png",
        "./image/12+.png",
        "./image/youce.png",
        "./image/weixin2.png",
        "./image/weibo.png",
        "./image/tap.png",
        "./image/mi.png",
        "./image/bilibili.png",
        "./image/qq.png"
    ]

    let img = document.querySelectorAll('.img');
    let fn = () =>{
        for(let i=0;i<img.length;i++){
            img[i].src = arr[i]
        }
    }
}