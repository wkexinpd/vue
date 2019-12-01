// 1rem -- 16px 

// 监听浏览器,针对不同分辨率计算font-size
// 然后根据设计稿比如尺寸是640尺寸 rem = 设计稿的字体大小 / 100 ; 16px —> 0.16rem
// dpr 设备像素比

(function (doc, win) {
    var docEl = doc.documentElement;
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth<=750){
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }else{
                docEl.style.fontSize = "100px";
            }
            
            // console.log(docEl.getElementsByTagName("body")[0].style);
            docEl.getElementsByTagName("body")[0].style.fontSize = "16px";
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


