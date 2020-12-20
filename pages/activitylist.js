  
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
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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
  },
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
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

export default function Activitylist(props) {
  const classes = useStyles();

  const [activity, setActivity]  = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    props.axios.put('/activity/' + props.id, {
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

  const onEdit = () => {
    handleOpen();
  }

  const onDelete = () => {
    console.log(props.id);
    props.axios.delete('/activity/' + props.id, {
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
        <Paper className={classes.paper}>
            <Grid container style={{height: "100%"}}>
                <Grid item xs={11} sm={11} md={11}>
                    {/* <Title>Recent Deposits</Title> */}
                    <Typography component="p" variant="h6" style={{fontFamily: "raleway"}}>
                        {props.activity}
                    </Typography>
                    <Typography color="textSecondary" className={classes.depositContext}>
                        {props.createdAt}
                    </Typography>
                    {/* <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
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
                    </form> */} 
                </Grid>
                <Grid item xs sm md>
                    <Tooltip title="Edit" aria-label="edit">
                        <IconButton color="inherit" onClick={onEdit}>
                        {/* <Badge badgeContent={4} color="secondary"> */}
                            <EditIcon />
                        {/* </Badge> */}
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete" aria-label="delete">
                        <IconButton color="inherit" onClick={onDelete}>
                        {/* <Badge badgeContent={4} color="secondary"> */}
                            <DeleteIcon />
                        {/* </Badge> */}
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
        </Paper>
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
            <h2 id="transition-modal-title" style={{textAlign: "center"}}>Edit Activity {props.activity}</h2>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="activity"
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
                    fullWidth
                    className={classes.submit}
                    >
                    Edit
                    </Button>
                </form>
          </div>
        </Fade>
      </Modal>
    </React.Fragment>
  );
}