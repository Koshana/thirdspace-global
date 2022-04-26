import React, { useState, useEffect } from 'react'

import { AppBar, Toolbar, Typography, Avatar, Button } from '@material-ui/core'

import useStyles from './styles'
import { Link } from 'react-router-dom';

import Logo from '../../images/logo.jpg'

import { useLocation, useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import decode from 'jwt-decode'

const NavBar = () => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const location = useLocation();

    const navigate = useNavigate();

    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')));
    },[location])

    const logout = () => {
        dispatch({
            type : 'LOGOUT'
        })

        navigate('/auth');

        setUser(null)
    }

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
        <div className={classes.brandContainer}>
            <Link to={'/'} className={classes.heading}>
                <Typography variant='h3' align='center'>Third Space Global</Typography>
            </Link>
            <img src={Logo} alt='logo' className={classes.image}/>
        </div>
        <Toolbar className={classes.toolbar}>
            {
                user ? 
                    (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{
                                user.result.name.charAt(0)
                            }</Avatar>
                            <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                            <Button variant='contained' color='secondary' onClick={logout}>Logout</Button>
                        </div>
                    ) : (
                        <div>
                            <Link to='/auth' className={classes.signInButton}>
                                <Button variant='outlined' color='inherit'>Sign In</Button>
                            </Link>
                        </div>
                    )
            }
        </Toolbar>
    </AppBar>
  )
}

export default NavBar