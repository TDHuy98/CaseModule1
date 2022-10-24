var fileContent;
$.ajax({
    url : "text.txt",
    dataType: "text",
    success : function (data) {
        fileContent = data;
    }
});
var rows = fileContent.split("\n");
var id = "";
var number = "";
var hour = "";
var name = "";
var mood = "";
var seconds = "";
var hour2 = "";

var array = [id,number,hour,name,mood,seconds,hour2];
for(var j = 0; j < rows.length; j++){
    var columns = rows[j].split(" ");
    for(var i = 0; i < columns.length; i++) {
        if(i == 5){
            $array[i]= columns[i]+" "+columns[i+1];
            break;
        }

        array[i]= columns[i];
    }
}
console.log(array);