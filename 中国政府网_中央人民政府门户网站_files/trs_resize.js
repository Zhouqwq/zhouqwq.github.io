$(function () {
    //判断是否是pc
    var userAgentInfo = navigator.userAgent;
    var Agents = [
        "Android",
        "iPhone",
        "SymbianOS",
        "Windows Phone",
        "iPad",
        "iPod",
    ];

    //判断是否是ie8 Begin
    var isIE =
        userAgentInfo.indexOf("compatible") > -1 &&
        userAgentInfo.indexOf("MSIE") > -1;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgentInfo);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion <= 8) {
            return;
        }
    }
    //判断是否是ie8 End

    function IsPC() {
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }

    var flag_pad = false;
    if (
        userAgentInfo.indexOf("iPad") > 0 ||
        userAgentInfo.indexOf("iPod") > 0
    ) {
        flag_pad = true;
    }

    function showApp() {
        var winWidth = $(window).width();
        if (winWidth < 750) {
            $("html").css({
                zoom: "+winWidth/774+",
                transform: "scale(" + winWidth / 750 + ")",
                "transform-origin": "top left",
            });
        } else {
            $("html").css({ zoom: "", transform: "" });
        }
    }

    var isPC = IsPC();

    if (isPC) {
        showApp();
        window.onresize = function () {
            showApp();
        };
    }

    if (flag_pad) {
        showPC();
    }

    //判断ipad请求桌面站点（显示pc版）
    var userAgentInfo = navigator.userAgent;
    if (userAgentInfo.indexOf("Macintosh") > 0) {
        showPC();
        orient();
    }

    //判断横屏或者竖屏
    window.addEventListener(
        "onorientationchange" in window ? "orientationchange" : "resize",
        orient,
        false
    );
    function orient() {
        if (window.orientation == 0 || window.orientation == 180) {
            if (window.localStorage.getItem("name") == "a") {
                window.location.reload();
                window.localStorage.setItem("name", "b");
            }
            orientation = "portrait";
            return false;
        }
        if (window.orientation == 90 || window.orientation == -90) {
            window.localStorage.setItem("name", "a");

            showPC();

            orientation = "landscape";
            return false;
        }
    }

    //手机端横屏显示pc版
    function removejscssfile(filename, filetype) {
        var targetelement =
            filetype == "js" ? "script" : filetype == "css" ? "link" : "none";
        var targetattr =
            filetype == "js" ? "src" : filetype == "css" ? "href" : "none";
        var allsuspects = document.getElementsByTagName(targetelement);
        for (var i = allsuspects.length; i >= 0; i--) {
            if (
                allsuspects[i] &&
                allsuspects[i].getAttribute(targetattr) != null &&
                allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1
            )
                allsuspects[i].parentNode.removeChild(allsuspects[i]);
        }
    }
    function showPC() {
        removejscssfile("mobile.css", "css");
        removejscssfile("mobile_index.css", "css");
        var viewportmeta = document.querySelector('meta[name="viewport"]');
        if (viewportmeta) {
            viewportmeta.content = "width=1280,target-densitydpi=device-dpi";
        }
        $("html").css({ zoom: "", transform: "", height: "100%" });
    }

    orient();
});
