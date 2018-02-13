//In JS file

function rgb(r, g, b){
  return "#"+(r).toString(16)+(g).toString(16)+(b).toString(16);
}

function change()
{
	var border_input = document.getElementById("border_form");
	var back_input = document.getElementById("back_form");
	var body = document.getElementById("my_body");
	

	var boWidth = border_input.width_bo.value;
	var boColor = rgb(border_input.red_bo.value, border_input.green_bo.value, border_input.blue_bo.value);
	var baColor = rgb(back_input.red_ba.value, back_input.green_ba.value, back_input.blue_ba.value);

	body.style.backgroundColor = baColor;
	body.style.borderColor = boColor;
	body.style.borderWidth = boWidth + "px";
}

