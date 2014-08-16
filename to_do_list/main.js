addItem=function () {
  alert($("#input_box").val())
}


$(function() {
  $("#add_button").on("click",addItem)
})
