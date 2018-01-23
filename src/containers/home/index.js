/*
 * home.js
 **/

import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import styles from './styles';

import SwipeHeaders from './swipeheader';
import Service from './service'
import Steps from './steps'
import Group from './group'
import Chance from './chance'

class Home extends Component{
    render(){
	const { classes } = this.props
	return(
	    <div>
		<AppBar position="static" >
		<Toolbar className={ classes.appbar }><Grid container alignItems="center">
		<Grid item align="center" xs={12} sm={4}><Typography type="button" >
		<img className={classes.barlogo} src={require('./imgs/img/bklogo.png')} alt="barlogo" />
		</Typography></Grid>
		<Grid item sm={6} align="center" ><Typography type="button">
		<Button color="default" disableRipple disableFocusRipple>HOME</Button>
		<Button color="default" disableRipple disableFocusRipple>NEWS</Button>
		<Button color="default" disableRipple disableFocusRipple>HOME</Button>
		</Typography></Grid>
	    </Grid></Toolbar>
		
	    </AppBar>

		<SwipeHeaders />
		<Service />
		<Steps />
		<Group />
		<Chance />
		</div>
	)
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)
