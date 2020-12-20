import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(/img/akuarium-head.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paperModal: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Register() {
  const classes = useStyles();

  const axios = require('axios');
  axios.defaults.baseURL = 'http://localhost:4000';

  const [username, setUsername]  = useState("");
  const [password, setPassword]  = useState("");
  const [firstname, setFirstname]  = useState("");
  const [surname, setSurname]  = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('/users/signup', {
      username : username,
      password : password,
      firstname : firstname,
      lastname : surname,
    })
    .then(function (response) {
      // console.log(response);
      if (response.data.success) {
        handleOpen();
      }
    })
    .catch(function (error) {
      console.log(error);
      handleOpen2();
    });
  } 

  // const register = async (e) => {
  //   e.preventDefault() // prevents page reload
    // axios.post('/users/signup', {
    //   username : username,
    //   password : password,
    //   firstname : firstname,
    //   lastname : surname,
    // })
    // .then(function (response) {
    //   // console.log(response);
    //   if (response.data.success) {
        
    //   }
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    // try {
    //   const res = await fetch('http://localhost:4000/users/signup', {
    //     method: 'post',
    //     headers: {
    //       'Content-Type': 'text/json'
    //     },
    //     body: JSON.stringify({
    //       username : username,
    //       password : password,
    //       firstname : firstname,
    //       lastname : surname,
    //     })
    //   })

    //   if (res.status === 200) {
    //     alert('You are subscribed!')
    //   } else {
    //     console.log(res)
    //     alert('Sorry, something went wrong.')
    //   }
    // } catch(err) {
    //   console.log(err) 
    //   alert('Sorry, something went wrong.')
    //  }
  // }

  return (
    <Grid container component="main" className={classes.root}>
      <Head>
        <title>AKUARIUM - Register</title>
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link href="https://fonts.googleapis.com/css2?family=Overpass&family=Raleway&display=swap" rel="stylesheet" />
      </Head>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          {/* <Avatar src="/img/beta-red.png" className={classes.avatar}>
            
          </Avatar> */}
          <Typography component="h1" variant="h5" style={{fontFamily: "raleway"}}>
            Jadilah bagian dari
          </Typography>
          <Typography component="h1" variant="h4" style={{fontFamily: "raleway"}}>
            AKUARIUM
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              InputLabelProps={{style:{fontFamily: "overpass"}}}
              inputProps={{style:{fontFamily: "overpass"}}}
              value={username}
              onChange={e => setUsername(e.target.value)}
              inputRef={register({ required: true})}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              InputLabelProps={{style:{fontFamily: "overpass"}}}
              inputProps={{style:{fontFamily: "overpass"}}}
              value={password}
              onChange={e => setPassword(e.target.value)}
              inputRef={register({ required: true})}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="firstname"
              label="Nama Depan"
              id="firstname"
              InputLabelProps={{style:{fontFamily: "overpass"}}}
              inputProps={{style:{fontFamily: "overpass"}}}
              value={firstname}
              onChange={e => setFirstname(e.target.value)}
              inputRef={register({ required: true})}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="lastname"
              label="Nama Belakang"
              id="lastname"
              InputLabelProps={{style:{fontFamily: "overpass"}}}
              inputProps={{style:{fontFamily: "overpass"}}}
              value={surname}
              onChange={e => setSurname(e.target.value)}
              inputRef={register({ required: true})}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              // onClick={register}
            >
              Register
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Sudah punya akun? Kuy login!"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              {/* <Copyright /> */}
            </Box>
          </form>
        </div>
      </Grid>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paperModal}>
            <h2 id="transition-modal-title" style={{textAlign: "center"}}>Terima kasih telah menjadi bagian dari AKUARIUM</h2>
            <Link href="/">
              <p id="transition-modal-description" style={{textAlign: "center"}}>Klik di sini untuk menuju halaman login</p>
            </Link>
          </div>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open2}
        onClose={handleClose2}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open2}>
          <div className={classes.paperModal}>
            <h2 id="transition-modal-title" style={{textAlign: "center"}}>Terjadi kesalahan</h2>
            <p id="transition-modal-description" style={{textAlign: "center"}}>Silakan diulang</p>
          </div>
        </Fade>
      </Modal>
    </Grid>
  );
}