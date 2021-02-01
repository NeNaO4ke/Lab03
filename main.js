$(".bl-addButton").click(function() {
	var inputVal = document.getElementById("inpId").value;
	if (inputVal !== "") {
		var sdf = '_' + Math.random().toString(36).substr(2, 9);
		var boughtDiv = $("#notB").html();
		var txt2 = $("#inpStat").html();
		$(".bl-left").append(boughtDiv);
		$(".bl-row").append(txt2);
		$("#inpBought").text(inputVal);
		$("#inpTo").val(inputVal);
		$("#inpBought").parent().attr("id", sdf);
		$("#inpBought").removeAttr("id");
		$("#inpTo").parent().attr("id", sdf);
		$("#inpTo").removeAttr("id");
		$("#inpId").focus();
		$("#inpId").val("");
	} else $("#inpId").focus();;
	return;
});
$(".bl-count").each(function() {
	if ($(this).find(".bl-label").text() == "1") {
		$(this).find(".bl-minus").fadeTo("slow", 0.5, function() {});
	}
});
$(document).on('keyup', '.bl-productName', function() {
	var ourId = $(this).parent().attr("id");
	var inputValProd = this.value;
	$(".bl-leftProduct#" + ourId).find(".bl-nameOfProduct").text(inputValProd);
});
$(document).on('click', '.bl-plus', function() {
	var plusId = $(this).parent().parent().attr("id");
	//console.log("default plus");
    $(this).blur();
    $(this).parent().find(".bl-label").fadeTo("fast", 0, function() {});
    $(this).parent().find(".bl-label").fadeTo("fast", 1, function() {});
	var addVar = parseInt(($(this).parent(".bl-count")).find(".bl-label").text()) + 1;
	($(this).parent(".bl-count")).find(".bl-label").text(addVar);
	($(this).parent(".bl-count")).find(".bl-minus").fadeTo("slow", 1, function() {});
	$(".bl-leftProduct#" + plusId).find(".bl-productsNumber").text(addVar);
});
$(document).on('click', '.bl-minus', function() {
	if ($(this).parent(".bl-count").find(".bl-label").text() !== "1") {
        $(this).blur();
		var minusId = $(this).parent().parent().attr("id");
		var addVar = parseInt(($(this).parent(".bl-count")).find(".bl-label").text()) - 1;
		($(this).parent(".bl-count")).find(".bl-label").text(addVar);
		$(".bl-leftProduct#" + minusId).find(".bl-productsNumber").text(addVar);
		if ($(this).parent(".bl-count").find(".bl-label").text() == "1") {
			($(this).fadeTo("slow", 0.5, function() {}));
		};
	}
});
$(document).on('mouseenter', '.bl-plus', function() {
    $(this).css("background","darkgreen");
});
$(document).on('mouseleave', '.bl-plus', function() {
    $(this).css("background","forestgreen");
});
$(document).on('mouseenter', '.bl-minus', function() {
    $(this).css("background","darkred");
});
$(document).on('mouseleave', '.bl-minus', function() {
    $(this).css("background","indianred");
});
$(document).on('click', '.bl-buy', function() {
	var buyID = $(this).parent().parent().attr("id");
	$(".bl-alreadyBought").append($(".bl-leftProduct#" + buyID));
    $(this).parent().parent().fadeTo("fast", 0, function() {}); 
    $(this).parent().parent().fadeTo("fast", 1, function() {});
	$(this).parent().find(".bl-nobuy").removeClass("non-disp");
	$(this).parent().find(".bl-delete").addClass("non-disp");
	$(this).parent().parent().find(".bl-count").find(".bl-plus").addClass("non-disp");
	$(this).parent().parent().find(".bl-count").find(".bl-minus").addClass("non-disp");
	$(this).parent().parent().find(".bl-productName").css("text-decoration", "line-through");
	$(this).parent().parent().find(".bl-productName").attr("disabled", "disabled");
	$(this).parent().parent().find(".bl-productName").css("background", "none");
	$(".bl-leftProduct#" + buyID).find(".bl-nameOfProduct").css("text-decoration", "line-through");
	$(this).addClass("non-disp");
});
$(document).on('click', '.bl-nobuy', function() {
	var boughtID = $(this).parent().parent().attr("id");
	$(".bl-left").prepend($(".bl-leftProduct#" + boughtID));
    $(this).parent().parent().fadeTo("fast", 0, function() {});
    $(this).parent().parent().fadeTo("fast", 1, function() {});
	$(this).parent().find(".bl-buy").removeClass("non-disp");
	$(this).parent().find(".bl-delete").removeClass("non-disp");
	$(this).parent().parent().find(".bl-count").find(".bl-plus").removeClass("non-disp");
	$(this).parent().parent().find(".bl-count").find(".bl-minus").removeClass("non-disp");
	$(this).parent().parent().find(".bl-productName").removeAttr("disabled");
	$(this).parent().parent().find(".bl-productName").css("text-decoration", "none");
	$(".bl-leftProduct#" + boughtID).find(".bl-nameOfProduct").css("text-decoration", "none");
	$(this).addClass("non-disp");
});
$(document).on('click', '.bl-delete', function() {
	$(this).parent().parent().animate({
		height: 'toggle'
	});
	setTimeout(function() {}, 2000);
	var deleteId = $(this).parent().parent().attr("id");
	$(".bl-leftProduct#" + deleteId).remove();
	$(this).parent().parent().remove();
});
document.addEventListener("keyup", function(event) {
	var inputVal = document.getElementById("inpId").value;
	if (event.code === 'Enter' && $("#inpId").is(":focus") && inputVal !== "") {
		var sdf = '_' + Math.random().toString(36).substr(2, 9);
		var boughtDiv = $("#notB").html();
		var txt2 = $("#inpStat").html();
		$(".bl-left").append(boughtDiv);
		$(".bl-row").append(txt2);
		$("#inpBought").text(inputVal);
		$("#inpTo").val(inputVal);
		$("#inpBought").parent().attr("id", sdf);
		$("#inpBought").removeAttr("id");
		$("#inpTo").parent().attr("id", sdf);
		$("#inpTo").removeAttr("id");
		$("#inpId").focus();
		$("#inpId").val("");
	}
});