import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../Auth/UserContext";
import authApiHandler from "./../../api/authApiHandler";

import "bulma/css/bulma.css";

class FormSignin extends Component {
	static contextType = UserContext;

	state = {
		email: "",
		password: "",
		// invalidMail: "no",
		// invalidPass: "no",
	};

	handleChange = (event) => {
		const key = event.target.name;
		const value =
			event.target.type === "file"
				? event.target.files[0]
				: event.target.type === "checkbox"
				? event.target.checked
				: event.target.value;

		this.setState({ [key]: value });
	};

	/* handleSubmitClub = (event) => {
		event.preventDefault();
		console.log("sign in club submitted");

		authApiHandler
			.signinClub(this.state)
			.then(() => {
				this.context.setUser(dataClub);
				this.props.callback();
			})
			.catch((error) => {
				console.log(error); // Display error message here, if you set the state
				// if (error.message === "unknown user")
				// 	this.setState({ invalidPass: true });
				// if (error.message === "wrong credentials")
				// 	this.setState({ invalidMail: true });
			});
	};
	handleSubmitPlayer = (event) => {
		event.preventDefault();
		console.log("sign in player submitted");

		authApiHandler
			.authApiHandler(this.state)
			.then(() => {
				this.context.setUser(dataPlayer);
				this.props.callback();
			})
			.catch((error) => {
				console.log(error); // Display error message here, if you set the state
				// if (error.message === "unknown user")
				// 	this.setState({ invalidPass: true });
				// if (error.message === "wrong credentials")
				// 	this.setState({ invalidMail: true });
			});
	}; */
	handleSubmit = (event) => {
		event.preventDefault();
		console.log("sign in submitted");

		authApiHandler
			.signin(this.state)
			.then((data) => {
				this.context.setUser(data);
				this.props.callback();
			})
			.catch((error) => {
				console.log(error); // Display error message here, if you set the state
				// if (error.message === "unknown user")
				// 	this.setState({ invalidPass: true });
				// if (error.message === "wrong credentials")
				// 	this.setState({ invalidMail: true });
			});
	};
	/* 	handleSubmit = (event) => {
		event.preventDefault();
		console.log("sign in submitted");

		authApiHandler
			.signinClub(this.state)
			.then((dataClub) => {
				if (!dataClub) {
					authApiHandler
						.signinPlayer(this.state)
						.then((dataPlayer) => {
							this.context.setUser(dataPlayer);
							this.props.callback();
						})
						.catch((error) => {
							console.log(error);
						});
				} else {
					this.context.setUser(dataClub);
					this.props.callback();
				}
			})
			.catch((error) => {
				console.log(error); // Display error message here, if you set the state
				// if (error.message === "unknown user")
				// 	this.setState({ invalidPass: true });
				// if (error.message === "wrong credentials")
				// 	this.setState({ invalidMail: true });
			});
	}; */

	render() {
		// console.log("mail ? ", this.invalidMail);
		// console.log("password ? ", this.invalidPass);
		return (
			<div>
				{/* 	<React.Fragment>
					<h1>Tu es ?</h1>
					<div className="buttons has-addons">
						<button
							onClick={() => this.handleDelete(user._id)}
							className="button is-danger is-selected"
						>
							Une meuf
						</button>
						<button
							onClick={() => {
								this.handleAbort();
								this.props.abortDelete();
							}}
							className="button is-link is-selected"
						>
							Un club{" "}
						</button>
					</div>
				</React.Fragment> */}

				<form
					onChange={this.handleChange}
					onSubmit={this.handleSubmit}
					className="SignInForm box-shadowed border-round"
				>
					<div className="field">
						<label className="label">Email</label>
						<div className="control has-icons-left has-icons-right">
							<input
								className="input"
								/* className={`input ${
								this.invalidMail ==="yes" ? "is danger" : "is success"
							} `} */
								type="email"
								placeholder="Entrez votre email"
								// value="foo@bar.baz"
								name="email"
							/>
							<span className="icon is-small is-left">
								<i className="fas fa-envelope"></i>
							</span>
							<span className="icon is-small is-right">
								<i className="fas fa-exclamation-triangle"></i>
							</span>
						</div>
						{this.invalidMail && (
							<p className="help is-danger">Mail incorrect</p>
						)}
					</div>
					<div className="field">
						<label className="label">Mot de passe</label>
						<div className="control has-icons-left has-icons-right">
							<input
								className="input"
								// className={`input ${this.invalidPass === "yes" && "is danger"} `}
								type="password"
								// value="1234"
								name="password"
							/>
							<span className="icon is-small is-left">
								<i className="fas fa-user"></i>
							</span>
							<span className="icon is-small is-right">
								<i className="fas fa-check"></i>
							</span>
						</div>
						{/* {this.invalidPass && (
						<p className="help is-danger">Password incorrect</p>
					)} */}
					</div>
					<div className="control">
						<button className="button is-link">Se connecter</button>
					</div>
				</form>
			</div>
		);
	}
}

export default withRouter(FormSignin);
