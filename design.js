//select color input ;
let colorChoice;
colorChoice = $("#colorPicker").val();
//alert(colorChoice);
//event listener for color choice 
$("#colorPicker").change(function() {
  colorChoice = $("#colorPicker").val();
  });
$("#colorPicker").val("colorChoice");
//select size input 
//when size is submitted by the user, call make grid 
/*
$("submit-Size").change(function(e) {
    e.preventDefault();
});*/
$("#submit-Size").click(function(e) { 
                         makeGrid(e);
                         });
function makeGrid(e) {
 
    e.preventDefault();
    alert("first run");
    let height = $("#input_height").val();
    alert(height + "height");
    let width = $("#input_width").val();
    alert("width" + width);
    
    for (let i = 0;i< height;i++)
        {
            $("#pixel_canvas").append("<tr></tr>");
            for(let x = 0; x< width;x++)
                {
                    $("tr").last().append("<td></td>");
                }
        }
    
  }
let click = $("#pixel_canvas").on("click", "td", function() {
  
  $(this).css("background-color", colorChoice);
});
//was thinging about adding an if statement
//for errors on clicking but was uneccsary
    



