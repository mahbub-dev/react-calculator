/* eslint-disable no-eval */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import clickSound from "./sound.mp3";
import { BsBackspaceFill, BsX } from "react-icons/bs";
import "./calculator.css";

function Calculator() {
	const [oprationCount, setOparationCount] = useState(0);
	const [result, setResult] = useState([]);
	const [oparator, setOparator] = useState("");
	const [prevOparend, setPrevOparend] = useState("");
	const [currentOparend, setCurrentOparend] = useState("");
	const [resultIndex, setResultIndex] = useState(result.length);
	const [render, setRender] = useState(false);
	useEffect(() => {
		setResult([...result, prevOparend.toString().split("/")]);
	}, [oprationCount]);
	useEffect(() => {
		const audio = new Audio(clickSound);
		audio.play();
	}, [result]);
	const typeHandler = (num) => {
		oparator
			? setCurrentOparend((p) => p.toString().concat(num))
			: setPrevOparend((p) => p.toString().concat(num));
		setRender(false);
	};
	const opartorHandler = (optr) => {
		setOparator(optr);

		if (currentOparend) {
			setPrevOparend(eval(`${prevOparend}${oparator}${currentOparend}`));
			setCurrentOparend("");
			setResultIndex(result.length);
			setOparationCount((prev) => prev + 1);
		}
		setRender(false);
	};
	const storedResult = (direction) => {
		if (direction === "l") {
			if (resultIndex > 1) {
				setResultIndex((prev) => prev - 1);
			}
		}
		if (direction === "r") {
			if (resultIndex < result.length - 1) {
				setResultIndex((prev) => prev + 1);
			}
		}
		setRender(true);
	};
	const handleSubmit = () => {
		setOparationCount((prev) => prev + 1);
		setResultIndex(result.length);
		setOparator("");

		try {
			setPrevOparend(eval(`${prevOparend}${oparator}${currentOparend}`));
			setCurrentOparend("");
		} catch (e) {
			console.log(e);
		}
	};
	const backSpace = () => {
		if (currentOparend) {
			setCurrentOparend(currentOparend.slice(0, -1));
		} else if (oparator) {
			setOparator(oparator.trim().slice(0, -1));
		} else {
			setPrevOparend((p) => p.toString().slice(0, -1));
		}
	};
	const clear = () => {
		setCurrentOparend("");
		setPrevOparend("");
		setOparator("");
		setResult("");
		// setOparend("");
		setResultIndex(0);
		setResult([""]);
	};
	return (
		<div className="container">
			<div className="inner-container">
				<div className="display">
					<div className="data">
						{render ? (
							<div className="result">{result[resultIndex]}</div>
						) : (
							<div className="result">
								{prevOparend}
								{oparator !== "" && oparator}
								{currentOparend}
							</div>
						)}
					</div>
				</div>
				<div className="buttons">
					<div className="inner-buttons">
						<div className="row">
							<span className="btn" onClick={clear}>
								C
							</span>
							<span
								className="btn"
								onClick={() => {
									storedResult("l");
								}}
							>
								{" "}
								&#8592;
							</span>
							<span
								className="btn"
								onClick={() => {
									storedResult("r");
								}}
							>
								&#8594;
							</span>
							<span className="btn" onClick={backSpace}>
								<BsBackspaceFill />
							</span>
						</div>
						<div className="row">
							<span
								className="btn"
								value="7"
								onClick={() => typeHandler("7")}
							>
								7
							</span>
							<span
								className="btn"
								value="8"
								onClick={() => typeHandler("8")}
							>
								8
							</span>
							<span
								className="btn"
								onClick={() => typeHandler("9")}
							>
								9
							</span>
							<span
								className="btn"
								onClick={() => opartorHandler(" / ")}
							>
								/
							</span>
						</div>
						<div className="row">
							<span
								className="btn"
								onClick={() => typeHandler("4")}
							>
								4
							</span>
							<span
								className="btn"
								onClick={() => typeHandler("5")}
							>
								5
							</span>
							<span
								className="btn"
								onClick={() => typeHandler("6")}
							>
								6
							</span>
							<span
								className="btn"
								onClick={() => opartorHandler(" * ")}
							>
								<BsX />
							</span>
						</div>
						<div className="row">
							<span
								className="btn"
								onClick={() => typeHandler("1")}
							>
								1
							</span>
							<span
								className="btn"
								onClick={() => typeHandler("2")}
							>
								2
							</span>
							<span
								className="btn"
								onClick={() => typeHandler("3")}
							>
								3
							</span>
							<span
								className="btn"
								onClick={() => opartorHandler(" - ")}
							>
								-
							</span>
						</div>
						<div className="row">
							<span
								className="btn"
								onClick={() => typeHandler("0")}
							>
								0
							</span>
							<span
								className="btn"
								onClick={() => typeHandler(".")}
							>
								{" "}
								.{" "}
							</span>{" "}
							<span className="btn" onClick={handleSubmit}>
								{" "}
								={" "}
							</span>
							<span
								className="btn"
								onClick={() => opartorHandler(" + ")}
							>
								+
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Calculator;
