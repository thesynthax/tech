(function()
{
	var preloader = document.getElementById("wrapper");
	var loading = 0;
	var id = setInterval(frame, 60);

	function frame()
	{
		if (loading == 70)
		{
			clearInterval(id);
			window.open("welcome.html", "_self");
		}
		else
		{
			loading += 1;
		}
	}
}
)();