//select color input ;
let colorChoice;
colorChoice = $("#colorPicker").val();
alert(colorChoice);
//event listener for color choice 
$("#colorPicker").change(function() {
  colorChoice = $("#colorPicker").val();
  });
$("#colorPicker").val("colorChoice");                                       
//select size input 

//when size is submitted by the user, call make grid 
/*function makeGrid() {
 
   
    
}

makeGrid();
*/