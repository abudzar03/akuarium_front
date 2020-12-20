  
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import Title from './Title';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useForm } from "react-hook-form";

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
}));

export default function Checkinhad(props) {
  const classes = useStyles();

  // console.log(props.axios);
  
//   const { register, handleSubmit } = useForm();
//   const onSubmit = data => {
//     console.log(data);
//     props.axios.post('/checkin', {
//     })
//     .then(function (response) {
//       console.log(response);
//       // if (response.data.success) {
//       //   handleOpen();
//       // }
//     })
//     .catch(function (error) {
//       console.log(error);
//       // handleOpen2();
//     });
//   }

  return (
    <React.Fragment>
        <Grid container style={{height: "100%"}}>
            <Grid item xs={12} sm={12} md>
                {/* <Title>Recent Deposits</Title> */}
                <Typography component="p" variant="h5" style={{fontFamily: "raleway"}}>
                    {/* Klik tombol di bawah untuk Check In */}
                    Terima kasih sudah Check In pada
                </Typography>
                <Typography color="textSecondary" className={classes.depositContext}>
                    {props.checkin.createdAt}
                </Typography>
                {/* <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    >
                    GAS CHECK IN!
                    </Button>
                </form>
                 */}
            </Grid>
            <Grid item xs={false} sm={false} md className={classes.image2}>
            </Grid>
        </Grid>
    </React.Fragment>
  );
}