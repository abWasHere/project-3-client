import React from "react";
import UserContext from "./../components/Auth/UserContext";
import FormEditAccount from "./../components/Forms/FormEditAccount";
import FormDeleteAccount from "./../components/Forms/FormDeleteAccount";

import "./../styles/Account.css";

class Account extends React.Component {
	static contextType = UserContext;

	state = { displayDelete: false };

	handleDisplayDelete = () => {
		this.setState({ displayDelete: !this.state.displayDelete });
	};

	render() {
		const { displayDelete } = this.state;
		console.log("le state de la page account", this.state);
		let role = this.context.user.role;

		return (
			<div className="Account ContentMain">
				<h1 className="title">Mon compte</h1>

				<div className="forms flex space-btw">
					{/*--------------------------- SECTION MODIF INFOS PERSOS */}
					<div className="edit-left col">
						{/*-------------------- edit section --------- */}
						<FormEditAccount />
						{/* ------------------delete section --------- */}
						<div className="edit-bottom">
							<button
								onClick={this.handleDisplayDelete}
								className="button is-danger is-outlined"
							>
								Supprimer mon compte
							</button>
							{displayDelete && (
								<FormDeleteAccount abortDelete={this.handleDisplayDelete} />
							)}
						</div>
					</div>
					{/*-------------- SECTION MODIF TEAMS ET EVENTS pour clubs */}
					{role === "Club" && (
						<div className="edit-right flex col">
							{/* ajouter des liens sur les noms */}
							<div className="teams">
								<p className="subtitle">Mettre à jour mes équipes</p>
							</div>
							<div className="events">
								<p className="subtitle">Mettre à jour mes évènements</p>
							</div>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Account;
