import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import Info from './Info';

const User = () => {
    const {user, isAuthenticated} = useAuth0();
    return (
        isAuthenticated && (
        <div class="container">
            <img src={user.picture} alt={user.name} />
            <h2>
                {user.name}
            </h2>
            <p>
                {user.email}
            </p>
            {/* {JSON.stringify(user, null, 2)} */}
            <Info />
        </div>
        )
    )
}

export default User;
