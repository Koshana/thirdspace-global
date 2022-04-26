import React, { useState } from 'react'

import { Grid, Container, Typography } from '@material-ui/core'

import useStyles from './styles'
import Form from '../Form/Form';


const Home = () => {

  const classes = useStyles();

  return (
    <Grid>
      <Container maxWidth={'xl'}>
        <Grid className={classes.mainContainer} container justifyContent='space-between' alignItems='stretch' spacing={3}>
            <Typography variant='h5' color='inherit'>Schedule Your Interview</Typography>
            <hr/>
            <Form/>
        </Grid>
      </Container>
    </Grid>
  )
}

export default Home