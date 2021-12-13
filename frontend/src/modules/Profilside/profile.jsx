import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';

export const Profile = () => {
    return (
        <div>
            <h1>Velkommen!</h1>
            <div>
            <Typography>Login her!</Typography>
            <Button variant="outlined">Login</Button>
            </div>
            <div>
                <Typography>Ikke en bruger? Opret dig her.</Typography>
                <Button component={Link} to="/signup" variant="outlined">Gå til registrering</Button>
            </div>
        </div>
    )
}

