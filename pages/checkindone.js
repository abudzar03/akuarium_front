  
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
  image0: {
    backgroundImage: 'url(/img/mahatma.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },
  image1: {
    backgroundImage: 'url(/img/rowling.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },
  image2: {
    backgroundImage: 'url(/img/oprah.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },
  image3: {
    backgroundImage: 'url(/img/henry.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },
  image4: {
    backgroundImage: 'url(/img/lincoln.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  },
});

export default function Checkindone() {
  const classes = useStyles();

  const random = Math.floor(Math.random() * 3);
  console.log(random);
  const quotes = ["Be the change you want to see in the world", "What is life without a little risk?", "If you look at what you don't have in life, youll never have enough", "You can do anything if you have enthusiasm", "It's not the years in your life that count, it's the life in your years"];
  const people = ["Mahatma Gandhi", "J.K. Rowling", "Oprah Winfrey", "Henry Ford", "Abraham Lincoln"];
  let image;
  if (random == 0) {
    console.log(1);
    image = <Grid item xs={false} sm={false} md className={classes.image0}></Grid>;
  } else if (random == 1) {
    console.log(2);
    image = <Grid item xs={false} sm={false} md className={classes.image1}></Grid>;
  } else if (random == 2) {
    console.log(3);
    image = <Grid item xs={false} sm={false} md className={classes.image2}></Grid>;
  } else if (random == 3) {
    console.log(4);
    image = <Grid item xs={false} sm={false} md className={classes.image3}></Grid>;
  } else if (random == 4) {
    console.log(5);
    image = <Grid item xs={false} sm={false} md className={classes.image4}></Grid>;
  }

  return (
    <React.Fragment>
        <Grid container style={{height: "100%"}}>
            <Grid item xs={12} sm={12} md>
                {/* <Title>Recent Deposits</Title> */}
                <Typography component="p" variant="h4" style={{fontFamily: "raleway"}}>
                    {quotes[random]}
                </Typography>
                <Typography color="textSecondary" className={classes.depositContext}>
                    {people[random]}
                </Typography>
            </Grid>
            {image}
        </Grid>
      {/* <div>
        <Link color="primary" href="/checkin">
            <Typography component="p" variant="button" style={{fontFamily: "raleway"}}>
                Kuy Check In!
            </Typography>
        </Link>
      </div> */}
    </React.Fragment>
  );
}