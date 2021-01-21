import React from 'react'

export default function ProfileAddress(props) {

    const { adresse, codePostal, ville } = props;

    return (
        <div>
            <h1>Adresse</h1>
            <div>Adresse : {adresse} </div>
            <div>Code postal : {codePostal}</div>
            <div>Ville : {ville}</div>
        </div>
    )
}
