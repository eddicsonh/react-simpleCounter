//import react into the bundle
import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

const Home = props => {
	return (
		<div className="container justify-content-center">
			<div className="row">
				<div className="col timer">
					<i className="fas fa-stopwatch"></i>
				</div>
				<div className="col timer">
					<p>{props.seconds}</p>
				</div>
			</div>
			<SecondsCounter intervalTime={props.seconds} />
		</div>
	);
};

const SecondsCounter = props => {
	const newTimer = () => {
		const ul = document.querySelector("#regTimer");
		let li = document.createElement("li");
		li.innerHTML = props.intervalTime;
		ul.appendChild(li);
	};

	const resetTime = () => {
		setTimer = 0;
	};

	const pausetimer = () => {
		clearInterval(setTimer);
	};

	return (
		<div className="container justify-content-center">
			<div className="row">
				<div className="col">
					<input
						type="button"
						className="btn btn-success"
						value="Guardar tiempo"
						onClick={newTimer}
					/>
				</div>
				<div className="col">
					<input
						className="btn btn-warning"
						type="button"
						value="Reiniciar reloj"
						onClick={resetTime}
					/>
				</div>
				<div className="col">
					<input
						className="btn btn-danger"
						type="button"
						value="Pausar reloj"
						onClick={pausetimer}
					/>
				</div>
			</div>
			<h2>Registro de tiempos</h2>
			<ul id="regTimer"></ul>
		</div>
	);
};

let setTimer = 0;

function timer() {
	setTimer += 1;
	ReactDOM.render(
		<Home seconds={setTimer} />,
		document.querySelector("#app")
	);
}

setInterval(() => {
	window.onload = timer();
}, 1000);

Home.propTypes = {
	seconds: PropTypes.number
};

SecondsCounter.propTypes = {
	intervalTime: PropTypes.number
};
