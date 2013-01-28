


$(document).ready(function () {
	 $('#words').val(localStorage["words"]);
	$('#save').click(save);
});

function save()
{
	localStorage["words"] = $('#words').val();
	window.close();
}

