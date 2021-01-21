import React from 'react'

export default function ProfileGeneral(props) {

    const { nom, prenom, age } = props;

    return (
        <div>
            <h1>Général</h1>
            <div>Nom : {nom}</div>
            <div>Prénom : {prenom}</div>
            <div>Age : {age}</div>
        </div>
    )
}
