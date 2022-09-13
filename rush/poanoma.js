let isChanged = false;
	function changeBg() {
		document.body.style.backgroundColor = isChanged ? '#000000' : '#FFFFFF';
		isChanged = !isChanged;
	}