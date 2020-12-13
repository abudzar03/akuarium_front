import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Button, TextField } from '@material-ui/core';
import Head from 'next/head';

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  media: {
    height: "30vh",
  },
  title: {
    textAlign: "center",
  },
  form: {
    marginTop: "25px",
  },
  field: {
    marginTop: "10px",
    justifyContent: "center",
  },
  button: {
    textAlign: "center",
  }
});

export default function Index() {
  const classes = useStyles();

  return (
    <>
    <Head>
      <title>AKUARIUM - Login</title>
      <link rel="icon" href="/img/favicon.ico" />
    </Head>
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Card>
            <CardMedia className={classes.media}
              image="/img/akuarium-head.png"
            />
            <CardContent>
              <Typography variant="h4" color="primary" className={classes.title}>
                Selamat datang di AKUARIUM
              </Typography>
              <form className={classes.form}>
                <Grid container className={classes.field}>
                  <Grid item xs={12} sm={4}>
                      <TextField required id="nik" label="NIK" fullWidth></TextField>
                  </Grid>
                </Grid>
                <Grid container className={classes.field}>
                  <Grid item xs={12} sm={4}>
                      <TextField required id="password" label="Password" fullWidth></TextField>
                  </Grid>
                </Grid>
                <Grid container className={classes.field}>
                  <Grid item xs={12} sm={2} className={classes.button}>
                    <Button size="large">LOGIN</Button>
                  </Grid>
                  <Grid item xs={12} sm={2} className={classes.button}>
                    <Link href="/register" passHref style={{ textDecoration: 'none' }}>
                      <Button size="large" color="secondary" type="button">Register</Button>
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/* <Link href="/about" color="secondary">
        Go to the about page
      </Link> */}
      {/* <ProTip /> */}
      {/* <Copyright /> */}
    </Container>
    </>
  );
}
