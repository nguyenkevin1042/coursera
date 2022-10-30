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

	//url for home page
	var homeHtml = "snippets/home-snippet.html";
	//url for menu page
	var allCategoriesUrl =
  		"https://davids-restaurant.herokuapp.com/categories.json";
	var categoriesTitleHtml = "snippets/categories-title-snippet.html";
	var categoryHtml = "snippets/category-snippet.html";
	//url for single page
	var menuItemsUrl =
	  "https://davids-restaurant.herokuapp.com/menu_items.json?category=";
	var menuItemsTitleHtml = "snippets/menu-items-title.html";
	var menuItemHtml = "snippets/menu-item.html";
	
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

	/*SHOW ACTIVE WHEN BEING IN SPECIFIC PAGE*/
var switchMenuToActive = function (){
	var classes = document.querySelector("#navHomeButton").className;
  classes = classes.replace(new RegExp("active", "g"), "");
  document.querySelector("#navHomeButton").className = classes;

  // Add 'active' to menu button if not already there
  classes = document.querySelector("#navMenuButton").className;
  if (classes.indexOf("active") == -1) {
    classes += " active";
    document.querySelector("#navMenuButton").className = classes;
  } 
};

	/* Show home page*/
	document.addEventListener("DOMContentLoaded", function (event) {
		showLoading("#main-content");
		$ajaxUtils.
		sendGetRequest(
			homeHtml,
			function(responseText){
				insertHtml("#main-content",responseText)
			},
			false);
	});

	/*LOAD MENU CATEGORIES*/
	davidChu.loadMenuCategories = function () {
		showLoading("#main-content");
		$ajaxUtils.sendGetRequest(
			allCategoriesUrl, 
			buildAndshowCategoriesHTML);
	};

	//Build HTML from category snippet file
	//data is based on JSON url
	function buildAndshowCategoriesHTML(categories){
		$ajaxUtils.sendGetRequest(
			categoriesTitleHtml,
			function (categoriesTitleHtml) {
 				$ajaxUtils.sendGetRequest(
        			categoryHtml,
			        function (categoryHtml) {
			        	switchMenuToActive();
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
	    html = insertProperty(html, 
	    			"name", name);
	    html = insertProperty(html, 
	    			"short_name", short_name);
	    finalHtml += html;
	  }

	  finalHtml += "</section>";
	  return finalHtml;
	}
	/*END LOAD MENU CATEGORIES*/


	/*LOAD MENU ITEMS*/
	davidChu.loadMenuItems = function (categoryShort){
		showLoading("#main-content");
		$ajaxUtils.sendGetRequest(
			menuItemsUrl + categoryShort, 
			buildAndShowMenuItemsHTML);
	};

	/*Build HTML from menu item snippet file
	data is based on JSON url*/
	function buildAndShowMenuItemsHTML (categoryMenuItems) {
	  // Load title snippet of menu items page
	  $ajaxUtils.sendGetRequest(
	    menuItemsTitleHtml,
	    function (menuItemsTitleHtml) {
	      $ajaxUtils.sendGetRequest(
	        menuItemHtml,
	        function (menuItemHtml) {
	          var menuItemsViewHtml =
	            buildMenuItemsViewHtml(categoryMenuItems,
	                                   menuItemsTitleHtml,
	                                   menuItemHtml);
	          insertHtml("#main-content", menuItemsViewHtml);
	        },
	        false);
	    },
	    false);
	}


	// Using category and menu items data and snippets html
	// build menu items view HTML to be inserted into page
	function buildMenuItemsViewHtml(categoryMenuItems,
	                                menuItemsTitleHtml,
	                                menuItemHtml) {

	  menuItemsTitleHtml = insertProperty(menuItemsTitleHtml,
	                   "name", 
	                   categoryMenuItems.category.name);
	  menuItemsTitleHtml = insertProperty(menuItemsTitleHtml,
	                   "special_instructions",
	                   categoryMenuItems.category.special_instructions);

	  var finalHtml = menuItemsTitleHtml;
	  finalHtml += "<section class='row'>";

	  // Loop over menu items
	  var menuItems = categoryMenuItems.menu_items;
	  var catShortName = categoryMenuItems.category.short_name;
	  for (var i = 0; i < menuItems.length; i++) {
	    // Insert menu item values
	    var html = menuItemHtml;
	    html = insertProperty(html, "short_name", 
	      		menuItems[i].short_name);
	    html = insertProperty(html, "catShortName",
	            catShortName);
	    html = insertItemPrice(html, "price_small",
	            menuItems[i].price_small);
	    html = insertItemPortionName(html, "small_portion_name",
	            menuItems[i].small_portion_name);
	    html = insertItemPrice(html, "price_large",
	            menuItems[i].price_large);
	    html = insertItemPortionName(html, "large_portion_name",
	                           menuItems[i].large_portion_name);
	    html = insertProperty(html, "name",
	            menuItems[i].name);
	    html = insertProperty(html, "description",
	            menuItems[i].description);

	    // Add clearfix after every second menu item
	    if (i % 2 != 0) {
	      html +=
	        "<div ></div>";
	    }

	    finalHtml += html;
	  }

	  finalHtml += "</section>";
	  return finalHtml;
	}

	// Appends price with '$' if price exists
function insertItemPrice(html,
                         pricePropName,
                         priceValue) {
  // If not specified, replace with empty string
  if (!priceValue) {
    return insertProperty(html, pricePropName, "");;
  }

  priceValue = "$" + priceValue.toFixed(2);
  html = insertProperty(html, pricePropName, priceValue);
  return html;
}


// Appends portion name in parens if it exists
function insertItemPortionName(html,
                               portionPropName,
                               portionValue) {
  // If not specified, return original string
  if (!portionValue) {
    return insertProperty(html, portionPropName, "");
  }

  portionValue = "(" + portionValue + ")";
  html = insertProperty(html, portionPropName, portionValue);
  return html;
}
/*END LOAD MENU ITEMS*/



	global.$davidChu = davidChu;
})(window);