$(function () {
	$("#btn-hamburger").on("click", function () {
		$(".menu-aside-page").toggleClass("show");
		$("body").addClass("overflow-hidden");
	});

	$(".backdrop , .menu-aside-close").on("click", function () {
		$(".menu-aside-page").removeClass("show");
		$("body").removeClass("overflow-hidden");
	});

	$(".hl-pr-list").slick({
		mobileFirst: true,
		infinite: false,
		slidesToShow: 1.9,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2.8,
					arrows: false,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4.2,
					arrows: false,
				},
			},
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 5,
					arrows: true,
				},
			},
		],
	});
});

$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	if (scroll >= 10) {
		$(".header-page").removeClass("py-6");
		$(".header-page").addClass("py-4 box-shadow");
	} else {
		$(".header-page").removeClass("py-4 box-shadow");
		$(".header-page").addClass("py-6");
	}
});
$(document).ready(function () {
	$(".result-close").click(function () {
		$("#third").hide();
	});
});
