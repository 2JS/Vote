var votes = [0,0,0,0,0,0];

function increment(index) {
	var display = document.getElementById('cand' + index.toString());
	votes[index] += 1;
	display.innerHTML = votes[index];
}

function decrement(index) {
	var display = document.getElementById('cand' + index.toString());
	votes[index] -= 1;
	display.innerHTML = votes[index];
}

