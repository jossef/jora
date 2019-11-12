jQuery(function () {

	setInterval(function(){ 
		jQuery('a[href^="/browse/"]:has(>span>span[class="css-eaycls"])').replaceWith(function(){return $("<span>" + $(this).html() + "</span>");});
	}, 1000);

});
