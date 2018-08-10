(function()
{
	var loaderContainer = document.getElementById("wrapper");

	resize();
	function resize()
	{
		loaderContainer.width = window.innerWidth;
		loaderContainer.height = window.innerHeight;
	}
})();