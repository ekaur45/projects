var removedPrice = 0;
function item_deal_hover(id) {
    removedPrice = "";
    $("#"+id).addClass("btn-success");
    $("#"+id).removeClass("info");
    removedPrice = $("#"+id).children()[0].innerHTML;
    $("#"+id).children()[0].innerHTML = "BUY NOW"

    $("#"+id).children()[0].classList.remove("item-offer");
}
function item_deal_mouseleave(id) {
    $("#"+id).addClass("info");
    $("#"+id).removeClass("btn-success");
    $("#"+id).children()[0].innerHTML = "PKR 1990";
    $("#"+id).children()[0].classList.add("item-offer");
}