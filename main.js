$(function(){
var userContainer = $('#userContainer'),
	userName = $('#userName');
$.ajax({
	type : 'GET',
	url : 'https://azadar-hussain.github.io/ajax/usersInfo.json',
	success: function(data){
		console.log("success");
	},
	error : function(){
		console.log("error");
	}
});



	

});