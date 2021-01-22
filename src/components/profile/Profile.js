import React from 'react'
import ProfileAddress from '../profileAddress/ProfileAddress';
import ProfileGeneral from '../profileGeneral/ProfileGeneral';

export default function Profile(props) {

    const { general, address } = props.profile;

    return (
        <div>
            <ProfileGeneral {...general} />
            <ProfileAddress {...address} />
        </div>
    )
}
