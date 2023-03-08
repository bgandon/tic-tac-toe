"strict";

function check_win(color) {
	/* TODO */
	return false;
}


window.addEventListener("load", function () {
	let isCurrentPlayerRed = true;
	document.addEventListener("click", function(event) {
		let matchInfo = event.target.id.match(/cell-([0-2])-([0-2])/)
		if (matchInfo) {
			let i = matchInfo[1], j = matchInfo[2];
			let color = isCurrentPlayerRed ? "red" : "green";
			event.target.classList.add(color);
			isCurrentPlayerRed = !isCurrentPlayerRed;
		}
	});
});

