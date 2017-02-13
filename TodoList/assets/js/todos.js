const ENTER_KEY = 13;

$("#todoItems").on("click", ".todoText", function() {
    $(this).toggleClass("completed");
});

$("#todoItems").on("click", ".deleteButton", function() {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
});

$("#newTodoInput").keypress(function(event) {
    if (event.which === ENTER_KEY) {
        var newTodoText = $(this).val();
        var deleteButton = "<span class=\"deleteButton\"><i class=\"fa fa-trash\"></i></span>";
        var newTodoItem = "<span class=\"todoText\">" + newTodoText + "</span>";
        $("#todoItems").append("<li class=\"todoItem\">" + deleteButton + newTodoItem + "</li>");

        $(this).val("");
    }
})

$("#toggleNewTodoInput").click(function() {
	$("#newTodoInput").fadeToggle();
});