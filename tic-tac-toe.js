"strict";

function check_win(color) {
	for (let i = 1; i <= 3; i++) {
		if (document.querySelectorAll(`.row${i}.${color}`).length === 3) {
			document.querySelector("#windlg").style = "";
		}
	}
	for (let j = 1; j <= 3; j++) {
		if (document.querySelectorAll(`.col${j}.${color}`).length === 3) {
			document.querySelector("#windlg").style = "";
		}
	}
	return false;
}


window.addEventListener("load", function () {
	let isCurrentPlayerRed = true;
	document.addEventListener("click", function(event) {
		let matchInfo = event.target.id.match(/cell-([0-2])-([0-2])/)
		if (!matchInfo) {
			return;
		}
		let i = matchInfo[1], j = matchInfo[2];
		if (event.target.classList.contains("red") ||
				event.target.classList.contains("green")) {
			return;
		}
		let color = isCurrentPlayerRed ? "red" : "green";
		event.target.classList.add(color);
		check_win(color)
		isCurrentPlayerRed = !isCurrentPlayerRed;
	});

	document.querySelector("#reset").addEventListener("click", function() {
		for (let i = 0; i <= 2; i++) {
			for (let j = 0; j <= 2; j++) {
				document.querySelector(`#cell-${i}-${j}`).classList.remove("green", "red");
			}
		}
	});
});

