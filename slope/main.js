var x1, x2, y1, y2, cal, eq, error;

function calculate() {
  x1 = document.getElementById("x1").value;
  x2 = document.getElementById("x2").value;
  y1 = document.getElementById("y1").value;
  y2 = document.getElementById("y2").value;
  error = "Please enter some values";
  c_in_y = y1 - y2;
  c_in_x = x1 - x2;
  cal = Math.round(c_in_y / c_in_x);
  eq = Math.round(cal * x1 - y1);
  //cal = cal.toFixed(1);

  result =
    "Slope(m) = " + cal + " Equation of the line: y = " + cal + "x + " + eq;

  document.getElementById("results").innerHTML = result;
}

// function clear() {
// 	 document.getElementById('data-table').value = '';

// }

// const day = 'Monday';

// switch (day) {

// 	case 'Monday' :
// 		console.log("Aj Bhaiphota");

// 		break;

// 		case 'Tuesday':
// 		console.log('Boaring Class');

// 		break;

// 		default:
// 			console.log('Not a valid day');
// }