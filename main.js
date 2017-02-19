$(function(){
var userContainer = $('#userContainer'),
	userName = $('#userName');
$.ajax({
	type : 'GET',
	url : 'usersInfo.json',
	success: function(data){
		console.log("success");
	},
	error : function(){
		console.log("error");
	}
});



	

});