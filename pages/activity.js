import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { menuList } from './menu';
import Activityhead from './activityhead';
// import Deposits from './Deposits';
// import Orders from './Orders';
import Head from 'next/head';
import Tooltip from '@material-ui/core/Tooltip';
import Cookies from 'cookies';
import Activitylist from './activitylist';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    fontFamily: "raleway"
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 275,
  },
}));

function Activity({ activities }) {
  const classes = useStyles();

  const username = typeof window !== 'undefined' ? localStorage.getItem('username') : null

  const userToken = typeof window !== 'undefined' ? localStorage.getItem('userToken') : null
  // console.log(userToken);
  const AUTH_TOKEN = 'bearer ' + userToken;

  const axios = require('axios');
  axios.defaults.baseURL = 'http://localhost:4000';
  axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const logout = () => {
    localStorage.removeItem("userToken");
    window.location.href = '/';
  }

  return (
    <div className={classes.root}>
        <Head>
            <title>AKUARIUM - Home</title>
            <link rel="icon" href="/img/favicon.ico" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link href="https://fonts.googleapis.com/css2?family=Overpass&family=Raleway&display=swap" rel="stylesheet" />
        </Head>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Selamat Datang {username} di AKUARIUM
          </Typography>
          <Tooltip title="LOGOUT" aria-label="logout">
            <IconButton color="inherit" onClick={logout}>
              {/* <Badge badgeContent={4} color="secondary"> */}
                <MeetingRoomIcon />
              {/* </Badge> */}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{menuList}</List>
        {/* <Divider />
        <List>{secondaryListItems}</List> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {/* <Grid container spacing={3}> */}
            {/* Checkinstatus */}
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                <Activityhead axios={axios}/>
              </Paper>
            </Grid>
            {/* Activity List */}
            <Grid item xs={12}>
              
              {activities.map(({ _id, activity, createdAt }) => (
                <Activitylist key={_id} id={_id} activity={activity} createdAt={createdAt} axios={axios} />
                // <Paper>
                // <li key={_id}>
                //   {activity}
                //   <br />
                //   {createdAt}
                // </li>
                // </Paper>
              ))}
              
            </Grid>
            {/* Recent Orders */}
            {/* <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid> */}
          {/* <Box pt={4}>
            <Copyright />
          </Box> */}
        </Container>
      </main>
    </div>
  );
}

Activity.getInitialProps = async ({ req, res }) => {
  // const res = await fetch('https://api.github.com/repos/vercel/next.js')
  // const json = await res.json()
  // Create a cookies instance
  const cookies = new Cookies(req, res)
  const userToken = cookies.get('userToken')
  const AUTH_TOKEN = 'bearer ' + userToken;
  const axios = require('axios');
  axios.defaults.baseURL = 'http://localhost:4000';
  axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  // const allActivities = () => {
  //   axios.get('/activity', {
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //       return response.data;
  //     //   if (response.data.success) {
  //     //     handleOpen();
  //     //   }
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     //   handleOpen2();
  //     });
  // }
  // try {
  const response = await axios.get('/activity');
  console.log(response);
  // } catch (error) {
  //   console.error(error);
  // }
  return { activities: response.data }
}

export default Activity