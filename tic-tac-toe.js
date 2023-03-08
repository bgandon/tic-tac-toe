"strict";



window.addEventListener("load", function () {
	let victory = false;

	function check_win(color) {
		for (let i = 1; i <= 3; i++) {
			if (document.querySelectorAll(`.row${i}.${color}`).length === 3) {
				victory = true;
			}
		}
		for (let j = 1; j <= 3; j++) {
			if (document.querySelectorAll(`.col${j}.${color}`).length === 3) {
				victory = true;
			}
		}
		for (let diag of ["fwd", "back"]) {
			if (document.querySelectorAll(`.${diag}-diag.${color}`).length === 3) {
				victory = true;
			}
		}
		if (victory) {
			document.querySelector("#windlg").style = "";
			document.querySelector("#reset").style = "display: none;"
			document.querySelector("#windlg .winner").textContent = color;
			document.querySelector("#windlg .winner").classList.add(color);
		}
	}

	let isCurrentPlayerRed = true;
	document.addEventListener("click", function(event) {
		if (victory) {
			return;
		}
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

	function reset() {
		for (let i = 0; i <= 2; i++) {
			for (let j = 0; j <= 2; j++) {
				document.querySelector(`#cell-${i}-${j}`).classList.remove("green", "red");
			}
		}
		document.querySelector("#windlg").style = "display: none;"
	}

	document.querySelector("#reset").addEventListener("click", reset);
	document.querySelector("#restart").addEventListener("click", reset);
});

