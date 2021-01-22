import React, { Component } from 'react'
import Clock from '../clock/Clock';
import Counter from '../counter/Counter';
import Profile from '../profile/Profile'
import './Main.css'

export default class Main extends Component {

    render() {

        const myProfile = {
            general: {
                nom: "TRAN",
                prenom: "Etienne",
                age: 25
            },
            address: {
                ville: "Montgeron",
                codePostal: "91230",
                adresse: "95 A Avenue de la République"
            }
        };

        return (
            <div className="profile-container">
                <Clock />
                <Profile profile={myProfile} />
                <Counter />
            </div>
        )
    }
}
