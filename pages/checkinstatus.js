  
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import Title from './Title';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
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
});

export default function Checkinstatus() {
  const classes = useStyles();
  return (
    <React.Fragment>
        <Grid container style={{height: "100%"}}>
            <Grid item xs={12} sm={12} md>
                {/* <Title>Recent Deposits</Title> */}
                <Typography component="p" variant="h4" style={{fontFamily: "raleway"}}>
                    Sudahkah kamu Check In hari ini?
                </Typography>
                <Typography color="textSecondary" className={classes.depositContext}>
                    {/* on 15 March, 2019 */}
                </Typography>
            </Grid>
            <Grid item xs={false} sm={false} md className={classes.image}>
            </Grid>
        </Grid>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
            <Typography component="p" variant="button" style={{fontFamily: "raleway"}}>
                Kuy Check In!
            </Typography>
        </Link>
      </div>
    </React.Fragment>
  );
}