  
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import Title from './Title';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useForm } from "react-hook-form";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useState } from 'react';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  depositContext: {
    flex: 1,
  },
  image: {
    backgroundImage: 'url(/img/beta-red.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },
  image2: {
    backgroundImage: 'url(/img/beta-green.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
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

export default function Checkinaction(props) {
  const classes = useStyles();

  // console.log(props.axios);
  
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    props.axios.post('/checkin', {
    })
    .then(function (response) {
      console.log(response);
      window.location.reload();
      // if (response.data.success) {
      //   handleOpen();
      // }
    })
    .catch(function (error) {
      console.log(error);
      handleOpen2();
    });
  }

  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  return (
    <React.Fragment>
        <Grid container style={{height: "100%"}}>
            <Grid item xs={12} sm={12} md>
                {/* <Title>Recent Deposits</Title> */}
                <Typography component="p" variant="h5" style={{fontFamily: "raleway"}}>
                    Klik tombol di bawah untuk Check In
                    {/* Terima kasih sudah Check In pada */}
                </Typography>
                <Typography color="textSecondary" className={classes.depositContext}>
                    {/* on 15 March, 2019 */}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    >
                    GAS CHECK IN!
                    </Button>
                </form>
                
            </Grid>
            <Grid item xs={false} sm={false} md className={classes.image}>
            </Grid>
        </Grid>
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
    </React.Fragment>
  );
}