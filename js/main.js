$(function () {
  $(".tabmenu li").click(function () {
    let idx = $(this).index();
    console.log(idx);
    $(".tabmenu li").removeClass("on");
    $(this).addClass("on");
    $(".tabitem > div").hide();
    $(".tabitem > div").eq(idx).show();
  });
  $(".tabmenu li").eq(0).trigger("click");

  $(".script button").click(function () {
    $(".ggaggung").addClass("on");
    console.log("移섏뼵諛붾낫");
  });

  $(".unitem-dummy").mouseenter(function () {
    $(this).addClass("on").siblings().removeClass("on");
  });

  $("header ul li a").click(function (e) {
    e.preventDefault();
    const $item = $(this).parent();
    const targetSelector = $(this).attr("href");
    const $target = $(targetSelector);
    let scrollTop = 0;

    if ($target.length === 0) {
      return;
    }

    if (targetSelector === "#about") {
      const $video = $target.find("iframe").first();

      if ($video.length) {
        scrollTop =
          $video.offset().top + $video.outerHeight() - $(window).height();
      } else {
        scrollTop = $target.offset().top - 100;
      }
    } else if (targetSelector === "#script") {
      const $footer = $("footer");

      if ($footer.length) {
        scrollTop =
          $footer.offset().top + $footer.outerHeight() - $(window).height();
      } else {
        scrollTop = $target.offset().top - 100;
      }
    } else {
      scrollTop = $target.offset().top - 100;
    }

    $item.addClass("on").siblings().removeClass("on");
    $("html, body").animate({
      scrollTop: Math.max(scrollTop, 0),
    });
  });
});

$(window).scroll(function () {
  const scrollTop = $(window).scrollTop();
  const headerOffset = 140;
  let activeIndex = -1;

  $("header ul li a").each(function (index) {
    const targetSelector = $(this).attr("href");
    const $target = $(targetSelector);

    if ($target.length && $target.offset().top - headerOffset <= scrollTop) {
      activeIndex = index;
    }
  });

  $("header ul li").removeClass("on");

  if (activeIndex >= 0) {
    $("header ul li").eq(activeIndex).addClass("on");
  }
});
