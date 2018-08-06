(function()
{
	var preloader = document.getElementById("wrapper");
	var loading = 0;
	var id = setInterval(frame, 64);

	function frame()
	{
		if (loading == 50)
		{
			clearInterval(id);
			window.open("welcome.html", "_self");
		}
		else
		{
			loading += 1;

			if (loading == 25)
			{
				preloader.style.animation = "fadeout 2s ease";
			}
		}
	}
}
)();