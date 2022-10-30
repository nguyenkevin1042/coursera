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
	var allCategoriesUrl =
  		"https://davids-restaurant.herokuapp.com/categories.json";
	var categoriesTitleHtml = "snippets/categories-title-snippet.html";
	var categoryHtml = "snippets/category-snippet.html";
	
	/*shorthand for innerHTML*/
	var insertHtml = function (selector, html){
		document.querySelector(selector)
		.innerHTML = html;
	};

	/* show loading image in a specific selector*/
	var showLoading = function (selector) {
		var html = "<div class='text-center'>";
		html += "<img src='images/ajax-loader.gif'></div>";
		insertHtml(selector,html);
	};

	/*Insert properties from json url*/
	var insertProperty = function (string, propName,propValue){
		var propToReplace = "{{"+propName+"}}";
		string = string.replace(
			new RegExp(propToReplace, "g"), propValue);
		return string;
	}

	/* Show home page*/
	document.addEventListener("DOMContentLoaded", function (event) {
		showLoading("#main-content");
		$ajaxUtils.
		sendGetRequest(homeHtml,
			function(responseText){
				insertHtml("#main-content",responseText)
			},false);

	});

	/*Load the menu categories*/
	davidChu.loadMenuCategories = function () {
		showLoading("#main-content");
		$ajaxUtils.sendGetRequest(
			allCategoriesUrl, 
			buildAndshowCategoriesHTML,true);
	};

	/*Build HTML from category snippet file
	data is based on JSON url*/
	function buildAndshowCategoriesHTML(categories){
		$ajaxUtils.sendGetRequest(
			categoriesTitleHtml,
			function (categoriesTitleHtml) {
 				$ajaxUtils.sendGetRequest(
        			categoryHtml,
		        function (categoryHtml) {
		          var categoriesViewHtml =
		            buildCategoriesViewHtml(categories,
		                                    categoriesTitleHtml,
		                                    categoryHtml);
		          insertHtml("#main-content", categoriesViewHtml);
		        },
		        false);
			},
			false);
	}


	function buildCategoriesViewHtml(categories,
                                 categoriesTitleHtml,
                                 categoryHtml) {

	  var finalHtml = categoriesTitleHtml;
	  finalHtml += "<section class='row'>";

	  // Loop over categories
	  for (var i = 0; i < categories.length; i++) {
	    // Insert category values
	    var html = categoryHtml;
	    var name = "" + categories[i].name;
	    var short_name = categories[i].short_name;
	    html =
	      insertProperty(html, "name", name);
	    html =
	      insertProperty(html,
	                     "short_name",
	                     short_name);
	    finalHtml += html;
	  }

	  finalHtml += "</section>";
	  return finalHtml;
	}

	global.$davidChu = davidChu;
})(window);