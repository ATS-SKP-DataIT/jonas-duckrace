import React, { useState } from 'react';
import { TextField, Input, IconButton, InputAdornment, Button } from '@material-ui/core';
import Axios from 'axios';

import useStyles from './styles';

export const Signup = () => {
    const classes = useStyles();
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try{
            const response = await Axios.post("http://localhost:5000/create", {
                username,
                password,
                phone
            })
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className={classes.signupBody}>
            <form action="/create" method="POST" onSubmit={onSubmitForm}>
            <div className={classes.signupBody}>
                <h1>Opret en bruger her</h1>
                <TextField onChange={(e) => setUsername(e.target.value)} className={classes.input} value={username} required id="standard-basic" label="Brugernavn" variant="standard" />
                <TextField onChange={(e) => setPhone(e.target.value)} className={classes.input} value={phone} required id="standard-basic" label="Telefon nummer" variant="standard"  />
                <TextField onChange={(e) => setPassword(e.target.value)} className={classes.input} value={password} required id="standard-basic" label="Kodeord" type="password" variant="standard" /><br/>
            </div>
            <Button className={classes.button} value="submit" type="submit" onClick={() => onSubmitForm}variant="outlined">Opret nu</Button>
            </form>
        </div>
    )
}

