$(function(){
    $(".top").load("top.html"); 
  });

  $(function(){
    $(".bottom").load("bottom.html"); 
  });

  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }