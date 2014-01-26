var imageList=new Array();

$(
function(){

	Parse.initialize("5vA1TW6f7Ecr1yadxNU0eWKuBXbgZxeyLO6asFCW", "zh6k5tP7JJJ5RbsBlxFVdlMA6l43oGyCOvyJSwtW");
	var images = Parse.Object.extend("images");
	var query = new Parse.Query(images);
	query.find({
	    success: function(results) {
		// Do something with the returned Parse.Object values
		    for (var i = 0; i < results.length; i++) { 
		        var object = results[i];
		        var obj= new Object();
		        obj.title= object.get('title');
		        obj.description= object.get('description');
		        obj.url= object.get('imgFile').url();
		        imageList.push(obj);
		    }
		    showList();
		},
		error: function(error) {
		    alert("Error: " + error.code + " " + error.message);
		}
     });
});

function showList(){
    $("#selection").html("<ul id='picList'></ul>");
    for (var cnt = 0; cnt < imageList.length; cnt++) {
        $("#picList").append("<li><span onclick='showPic("+cnt+")'>"+imageList[cnt].title +"</span></li>");
    }    
}
function showPic(n){
	$("#picture_div").html("<p>"+imageList[n].description+"</p><img src='"+imageList[n].url+"'>");
}
/*

function(){
    console.log(dataJson);
    $("#selection").append("<ul id='picList'></ul>");
    for (var cnt = 0; cnt < dataJson.length; cnt++) {
          $("#picList").append("<li><span onclick='showPic("+cnt+")'>"+dataJson[cnt].title +"</span></li>");
    }

}


*/
