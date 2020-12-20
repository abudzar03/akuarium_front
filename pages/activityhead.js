  
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import Title from './Title';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  depositContext: {
    flex: 1,
  },
  image: {
    backgroundImage: 'url(/img/beta-blue.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
}));

export default function Activityhead() {
  const classes = useStyles();
  return (
    <React.Fragment>
        <Grid container style={{height: "100%"}}>
            <Grid item xs={12} sm={12} md>
                {/* <Title>Recent Deposits</Title> */}
                <Typography component="p" variant="h5" style={{fontFamily: "raleway"}}>
                    Mau ngapain nih di AKUARIUM?
                    {/* Terima kasih sudah Check In pada */}
                </Typography>
                <Typography color="textSecondary" className={classes.depositContext}>
                    {/* on 15 March, 2019 */}
                </Typography>
                <form className={classes.form}>
                <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    >
                    TAMBAH AKTIVITAS SERU MU!
                    </Button>
                </form>
                
            </Grid>
            <Grid item xs={false} sm={false} md className={classes.image}>
            </Grid>
        </Grid>
    </React.Fragment>
  );
}