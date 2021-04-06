$(function () {

    /* gnb 서브메뉴 애니메이션 */
    $("#gnb a").mouseover(function () {
        $("#gnb ul.subMenu").stop().fadeIn(1000);
        $("#subMenuBG").stop().fadeIn(1000);
    });

    $("#gnb a").mouseout(function () {
        $("#gnb ul.subMenu").stop().fadeOut(600);
        $("#subMenuBG").stop().fadeOut(600);
    });
    /* gnb 서브메뉴 애니메이션 */

    /* 슬라이드 쇼 */

    setInterval(fnSlide, 3000);

    function fnSlide() {
        $("#shuttleFrame").animate({
                "margin-top": "-350px"
            },
            1000,
            function () {
                $("#shuttleFrame> a:first-child").insertAfter("#shuttleFrame> a:last-child");
                $("#shuttleFrame").css({
                    "margin-top": "0"
                });
            }
        );
    }

    /* 슬라이드 쇼 */

    /* 레이어 팝업 */
    $("#contents span.layerPopupPoint").click(function () {
        $("#layerPopupBG").css({
            "display": "block"
        });
    });
    $("#layerPopupBG button#closeBtn").click(function () {
        $("#layerPopupBG").css({
            "display": "none"
        });
    });
    /* 레이어 팝업 */

});
