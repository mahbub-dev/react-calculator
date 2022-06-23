/* eslint-disable no-eval */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import "./calculator.css";

function Calculator() {
	const [result, setResult] = useState("");
	const typeHandler = (num) => {
		setResult(result.concat(num));
	};
	const opartorHandler = (optr) => {
		setResult(result.concat(optr));
	};
	const handleSubmit = () => {
		try {
			setResult(eval(result).toString());
		} catch (e) {
			console.log(e);
			setResult("invalid format,click on C button");
		}
	};
	const backSpace = () => {
		setResult(result.slice(0, -1));
	};
	const clear = () => {
		setResult("");
	};
	return (
		<div className="container">
			<div className="inner-container">
				<div className="display">
					<div className="data">
						<div className="type-data"></div>
						<div className="result">{result}</div>
					</div>
				</div>
				<div className="buttons">
					<div className="inner-buttons">
						<div className="row">
							<span className="btn" onClick={clear}>
								C
							</span>
							<span className="btn" onClick={backSpace}>
								{" "}
								&#8592;
							</span>
							<span
								className="btn"
								onClick={() => opartorHandler(" % ")}
							>
								%
							</span>
							<span
								className="btn"
								value="/"
								onClick={() => opartorHandler(" / ")}
							>
								/
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
								onClick={() => opartorHandler(" * ")}
							>
								*
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
								onClick={() => opartorHandler(" - ")}
							>
								-
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
								onClick={() => opartorHandler(" + ")}
							>
								+
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
								onClick={() => typeHandler("00")}
							>
								00
							</span>
							<span
								className="btn"
								onClick={() => typeHandler(".")}
							>
								{" "}
								.{" "}
							</span>
							<span className="btn" onClick={handleSubmit}>
								{" "}
								={" "}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Calculator;
