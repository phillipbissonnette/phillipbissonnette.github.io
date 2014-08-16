addItem=function () {
  createItem($("#input_box").val())
}
createItem=function (value) {
  newItem=$("<li>")
  newItem.html(value)
  $("#ptdl").append(newItem)
}

$("li")
$(function() {
  $("#add_button").on("click",addItem)
})
