$(".pepperoni-olives").click(function() {

    $(".topping").hide();
    $(".pepperoni").show();
    $(".olives").show();
});

$(".pepperoni-mushrooms").click(function() {
    $(".topping").hide();
    $(".pepperoni").show();
    $(".mushrooms").show();
});

$(".vegetarian").click(function() {
    $(".topping").hide();
    $(".olives").show();
    $(".mushrooms").show();
});
function hideAllToppings() {
    var toppings = $(".toppings").val();
    $(".toppings").hide();

}
function addPepperoni() {
    var toppings = $(".toppings").val();
    $(".toppings").hide();

}
function addOlives() {
    var toppings = $(".toppings").val();
    $(".toppings").hide();

}
function hideAllToppings() {
    var toppings = $(".toppings").val();
    $(".toppings").hide();

}