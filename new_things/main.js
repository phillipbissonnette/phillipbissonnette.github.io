// variables
var normal = "http://upload.wikimedia.org/wikipedia/en/6/67/TigerCatHead.jpg"
var clicked = "http://3.bp.blogspot.com/_8GwTaJPsQ_c/SGs8v7hyacI/AAAAAAAAAM8/KHb5iJgQ5H8/s400/cat_head-001.jpg"
//functions
var catFaceShow = function () {
  $("#cat_face").html("this is a cat face")
}

var catFaceButtonRender = function (catFaceButton) {
  var pageMiddle = $(window).height() / 2;
  var buttonMiddle = $("#cat_face_button").height() / 2
  var margin = pageMiddle - buttonMiddle
  catFaceButton.css("margin-top", margin)
}

var catFaceSwitch = function (catFaceButton) {
  catFaceButton.attr("src",clicked)
}

var catFaceSwitchBack = function (catFaceButton) {
  catFaceButton.attr("src",normal)
}

// function packs
attachCatFaceButtonListeners = function (catFaceButton) {
  catFaceButton.on("mousedown", function () {
    catFaceSwitch(catFaceButton)
  })
  catFaceButton.on("mouseup",function () {
    catFaceSwitchBack(catFaceButton)
  }) 
  catFaceButton.on("click",catFaceShow)
 }

// kicker
initialize = function () {
   var catFaceButton =  $("#cat_face_button")
   window.addEventListener("resize",function () {
    catFaceButtonRender(catFaceButton)
  })
 
  catFaceButtonRender(catFaceButton)
  attachCatFaceButtonListeners(catFaceButton)
}

// wait until page is loaded to run
window.addEventListener("load", initialize)
