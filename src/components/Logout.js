import React from 'react';
import {useAuth0} from '@auth0/auth0-react';

const Logout = () => {
    const {logout, isAuthenticated} = useAuth0();
    return (
        isAuthenticated && (
        <button type="button" class="btn btn-info" onClick={() => logout()}>
            Log Out
        </button>
        )
    )
}

export default Logout
