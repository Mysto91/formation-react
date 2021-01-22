import React, { Component } from 'react'

export default class ContactForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lastName: '',
            firstName: '',
            motif: ''
        }
    }

    handleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        });
    }

    handleFirstNameChange = (event) => {
        this.setState({
            firstName: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Nom : ${this.state.lastName} \nPrénom : ${this.state.firstName} \nMotif : ${this.state.motif}`);
    }

    handleMotifChange = (event) => {
        this.setState({
            motif: event.target.value
        });
    }

    render() {
        const { firstName, lastName, motif } = this.state;

        return (
            <div>
                <h1>Formulaire</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nom
                        <input type="text" name="lastName" value={lastName} onChange={this.handleLastNameChange}></input>
                    </label>
                    <label>
                        Prénom
                        <input type="text" name="firstName" value={firstName} onChange={this.handleFirstNameChange}></input>
                    </label>
                    <textarea value={motif} onChange={this.handleMotifChange} ></textarea>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        )
    }
}
