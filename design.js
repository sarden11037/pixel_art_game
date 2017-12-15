//select color input ;
let colorChoice;
colorChoice = $("#colorPicker").val();
//event listener for color choice 
$("#colorPicker").change(function() {
    colorChoice = $("#colorPicker").val();
});
//sets the new color choice
$("#colorPicker").val("colorChoice");
//event listener for the calculate button
$("#submit-Size").click(function(e) {
    makeGrid(e);
});
//function that gets called when button is clicked
function makeGrid(e) {
    //prevent default called to prevent page
    //from reloading
    e.preventDefault();
    $("#pixel_canvas").empty();
    //assign height and width values
    let height = $("#input_height").val();
    let width = $("#input_width").val();
    //loop called to build the grid
    for (let i = 0; i < height; i++) {
        $("#pixel_canvas").append("<tr></tr>");
        for (let x = 0; x < width; x++) {
            $("tr").last().append("<td></td>");
        }
    }

}
//event listener for the grid to paint the cell
let click = $("#pixel_canvas").on("click", "td", function() {

    $(this).css("background-color", colorChoice);
});
//was thinging about adding an if statement
//for errors on clicking but was uneccsary