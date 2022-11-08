$(function() {
    $.scrollify({
        section : ".scrollify",
        interstitialSection : "",
        easing: "easeOutExpo",
        scrollSpeed: 800,
        offset : 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: false,
        overflowScroll: true,
        updateHash: true,
        touchScroll:true,
        before:function() {},
        after:function() {},
        afterResize:function() {},
        afterRender:function() {}
    });
});