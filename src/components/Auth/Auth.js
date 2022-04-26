import React, { useState } from 'react'

import { Avatar, Button, Container, Grid, Paper, Typography, TextField } from '@material-ui/core';

import { GoogleLogin } from 'react-google-login'

import useStyles from './styles'

import { useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { CLIENT_ID } from '../../consts';

const Auth = () => {

  const classes = useStyles();


  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [user,setUser] = useState({
    email : "",
    password : ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/')
  }

  const googleFailure = (error) => {
    console.log(error)
  };
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type : 'AUTH' , data : { result, token } })

            navigate('/');
            
        } catch (error) {
            console.log(error)
        }
  };

  return (
    <Container component='main' maxWidth='xs'>
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                </svg>
            </Avatar>
            <Typography variant='h5'>{'Sign In'}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <TextField
                    className={classes.textField}
                    name= 'email'
                    label = 'Email'
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email : e.target.value })}
                    fullWidth
                    type="email"
                    variant='standard'
                    required
                  />
                  <TextField
                    className={classes.textField}
                    name = 'password'
                    label = 'Password'
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password : e.target.value})}
                    fullWidth
                    variant='standard'
                    required
                  />
                </Grid>
                <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit} disabled={user.email === '' || user.password ===''}>
                    Sign In
                </Button>
                <GoogleLogin
                    clientId={CLIENT_ID}
                    render={(renderProps) => (
                        <Button 
                            className={classes.googleButton} 
                            color='primary' 
                            fullWidth 
                            onClick={renderProps.onClick} 
                            disabled={renderProps.disabled} 
                            variant='contained'
                            >
                                Google Sign In
                            </Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                />
            </form>
        </Paper>
    </Container>
  )
}

export default Auth