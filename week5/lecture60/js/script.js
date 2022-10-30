// Lecture 59 (Hide menu when clicking outside)
$(function(){
	$("#navbar-btn").blur(function (event){
		var screenWidth = window.innerWidth;
		if(screenWidth < 768){
			$("#navbarSupportedContent").collapse('hide');
		}
	});
});

// Lecture 60
(function (global) {
	var davidChu = {};
	var homeHtml = "snippets/home-snippet.html";

	//shorthand for innerHTML
	var insertHtml = function (selector, html){
		document.querySelector(selector)
		.innerHTML = html;
	};

	// show loading image in a specific selector
	var showLoading = function (selector) {
		var html = "<div class='text-center'>";
		html += "<img src='images/ajax-loader.gif'></div>";
		insertHtml(selector,html);
	};

	document.addEventListener("DOMContentLoaded", function (event) {
		showLoading("#main-content");
		$ajaxUtils.
		sendGetRequest(homeHtml,
			function(responseText){
				insertHtml("#main-content",responseText);
			},false);
	});

$global.davidChu = davidChu;
})(window);