//In JS file

var i = 1;

function next()
{
	var image = document.getElementById('main_img');

	if(i == 5)
	{
		i = 0;
	}

	++i;
	var img_name = "img" + i + ".jpg";

	image.src = img_name;

}

function previous()
{
	var image = document.getElementById('main_img');

	if(i == 1)
	{
		i = 6;
	}

	--i;
	var img_name = "img" + i + ".jpg";

	image.src = img_name;
}
