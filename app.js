var main = function () {
	"use strict";
	
	$(".rekenmachine").on("click", ".getal", function() {
		$("input").val($("input").val() + $(this).data("no"));
	});

	$(".rekenmachine").on("click", ".cancel", function() {
		$("input").val("");
	});

	$(".rekenmachine").on("click", ".totaal", function() {
		$("input").val(eval($("input").val()));
	});
};

$(document).ready(main);