//In JS file
function form_validate()
{
	var form = document.getElementById("form1");

	if(form.pass1.value != form.pass2.value)
	{
		alert("Passwords do not match!");
		return false;
	}
	else if(form.pass1.value.length < 8)
	{
		alert("Passwords must be at least 8 characters long!");
		return false;
	}
	
	alert("Password Validated.");
	return true;
}
