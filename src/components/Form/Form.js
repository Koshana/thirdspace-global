import React, { useState } from 'react'

import { Paper, TextField, Typography, Button } from '@material-ui/core'

import Swal from 'sweetalert2'

import useStyles from './styles'

const Form = () => {

    const user = JSON.parse(localStorage.getItem('profile'));

    const classes = useStyles();

    const [userDetails, setUserDetails] = useState({
        name : '',
        date : '',
        time : '',
        email : ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();


        console.log(user);

        Swal.fire({
            icon : "success",
            title : 'Confirm Booking',
            text : `${userDetails.time} on ${userDetails.date}`,
            showCancelButton : true,
            cancelButtonText : "Cancel",
            showConfirmButton : true,
            confirmButtonText : "Book Now"
        })
    }

  return (
    <Paper className={classes.paper} elevation={6}>
        <form
            autoComplete='off'
            noValidate
            className={`${ classes.form} ${classes.root}`}
            onSubmit={handleSubmit}
        >
            <Typography variant='h6' color='inherit'>Select Your Date</Typography>
            <TextField 
                className={classes.textField}
                name='date'
                type='date'
                fullWidth
                value={userDetails.date}
                onChange={(e) => setUserDetails({ ...userDetails, date : e.target.value })}
                variant='filled'
            />

            <Typography variant='h6' color='inherit'>Select Your Time</Typography>
            <hr/>

            <table className="table table-borderless">
                <thead>
                    <tr>
                    <th scope="col">Morning</th>
                    <th scope="col">Afternoon</th>
                    <th scope="col">Evening</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Button onClick={() => setUserDetails({ ...userDetails, time : "08:00-08-45" })} type='button'>08:00-08-45</Button>
                        </td>
                        <td>
                            <Button onClick={() => setUserDetails({ ...userDetails, time : "12:00-12-45" })} type='button'>12:00-12-45</Button>
                        </td>
                        <td>
                            <Button onClick={() => setUserDetails({ ...userDetails, time : "18:00-18-45" })} type='button'>18:00-18-45</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button onClick={() => setUserDetails({ ...userDetails, time : "09:00-09-45" })} type='button'>09:00-09-45</Button>
                        </td>
                        <td>
                            <Button onClick={() => setUserDetails({ ...userDetails, time : "13:00-13-45" })} type='button'>13:00-13-45</Button>
                        </td>
                        <td>
                            <Button onClick={() => setUserDetails({ ...userDetails, time : "09:00-09-45" })} type='button'>19:00-19-45</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button onClick={() => setUserDetails({ ...userDetails, time : "10:00-10-45" })} type='button'>10:00-10-45</Button>
                        </td>
                        <td>
                            <Button onClick={() => setUserDetails({ ...userDetails, time : "14:00-14-45" })} type='button'>14:00-14-45</Button>
                        </td>
                        <td>
                            <Button onClick={() => setUserDetails({ ...userDetails, time : "20:00-20-45" })} type='button'>20:00-20-45</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button onClick={() => setUserDetails({ ...userDetails, time : "11:00-11-45" })} type='button'>11:00-11-45</Button>
                        </td>
                        <td>
                            <Button onClick={() => setUserDetails({ ...userDetails, time : "15:00-15-45" })} type='button'>15:00-15-45</Button>
                        </td>
                        <td>
                            <Button onClick={() => setUserDetails({ ...userDetails, time : "21:00-21-45" })} type='button'>21:00-21-45</Button>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <Button onClick={() => setUserDetails({ ...userDetails, time : "16:00-16-45" })} type='button'>16:00-16-45</Button>
                        </td>
                        <td>
                            <Button onClick={() => setUserDetails({ ...userDetails, time : "22:00-22-45" })} type='button'>22:00-22-45</Button>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <Button onClick={() => setUserDetails({ ...userDetails, time : "17:00-17-45" })} type='button'>17:00-17-45</Button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <Button 
                className={classes.buttonSubmit}
                variant='contained' 
                color='primary' 
                size='large' 
                type='submit'
                fullWidth
                disabled={!user}
            >Make Appointment</Button>

        </form>
    </Paper>
  )
}

export default Form