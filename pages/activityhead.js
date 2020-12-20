  
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import Title from './Title';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { useForm } from "react-hook-form";

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

export default function Activityhead(props) {
  const classes = useStyles();

  const [activity, setActivity]  = useState("");

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    props.axios.post('/activity', {
      activity : activity,
    })
    .then(function (response) {
      console.log(response);
      window.location.reload();
    //   if (response.data.success) {
    //     handleOpen();
    //   }
    })
    .catch(function (error) {
      console.log(error);
    //   handleOpen2();
    });
  } 

  return (
    <React.Fragment>
        <Grid container style={{height: "100%"}}>
            <Grid item xs={12} sm={12} md>
                {/* <Title>Recent Deposits</Title> */}
                <Typography component="p" variant="h5" style={{fontFamily: "raleway"}}>
                    Mulai harimu dengan aktivitas positif!
                </Typography>
                <Typography color="textSecondary" className={classes.depositContext}>
                    {/* on 15 March, 2019 */}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="activity"
                    label="Tambah aktivitasmu"
                    placeholder="Tambah aktivitasmu, misal menikmati senja"
                    id="activity"
                    InputLabelProps={{style:{fontFamily: "overpass"}}}
                    inputProps={{style:{fontFamily: "overpass"}}}
                    value={activity}
                    onChange={e => setActivity(e.target.value)}
                    inputRef={register({ required: true})}
                    />
                <Button
                    type="submit"
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