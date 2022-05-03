$(function () {
 
  $(".like i").on("click", function () {
   
    if ($(this).attr("class") === "far fa-heart") {
     
      $(this).attr("class", "fas fa-heart");
  
      $(this).attr("style", "color: #ff20ae;");
    
      let likesNumber = $(this).siblings().html();
      let likesINT = parseInt(likesNumber);
     
      $(this)
        .siblings()
        .html(++likesINT);
    } else {
    
      $(this).attr("class", "far fa-heart");
      
      $(this).attr("style", "color: #fff;");
     
      let likesNumber = $(this).siblings().html();
      let likesINT = parseInt(likesNumber);
     
      $(this)
        .siblings()
        .html(--likesINT);
    }
  });
});
