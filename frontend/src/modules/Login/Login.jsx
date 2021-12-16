import React, { useState } from 'react'
import { TextField, Input, IconButton, InputAdornment, Button } from '@material-ui/core';
import Axios from 'axios';

import useStyles from './style';


export const Login = () => {
    const classes = useStyles();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try{
            const response = await Axios.post("http://localhost:5000/login1", {
                username,
                password
            })
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className={classes.loginBody}>
            <form action="/login1" method="POST" onSubmit={onSubmitForm}>
            <div className={classes.loginBody}>
                <h1 className={classes.hOne}>Login her</h1>
                <TextField onChange={(e) => setUsername(e.target.value)} className={classes.input} value={username} required id="standard-basic" label="Brugernavn" variant="standard" />
                <TextField onChange={(e) => setPassword(e.target.value)} className={classes.input} value={password} required id="standard-basic" label="Kodeord" type="password" variant="standard" /><br/>
            </div>
            <Button className={classes.button} value="submit" type="submit" onClick={() => onSubmitForm}variant="outlined">Login</Button>
            </form>
        </div>
    )
}

