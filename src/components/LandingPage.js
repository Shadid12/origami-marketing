import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// components
import Hamburger from './Hamburger'

//sass 

// assets
import backImage from './back.svg';
import logo from './logo.png';

class AppBarContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scrolled: 0
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight

        const scrolled = winScroll / height
        this.setState({
            scrolled: scrolled
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar
                    className={this.state.scrolled >= .01 ?
                        `${classes.appbar} ${classes.appbar2}` : `${classes.appbar}`}
                    position="fixed"
                >
                    <Toolbar>
                        <Typography
                            variant="h6"
                            color="inherit"
                            className={classes.logo}
                        >
                            Origami
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className={classes.hero}>
                    <div className={classes.container}>
                        <Typography variant="h3" color="inherit" className={classes.title}>
                            Origami Solutions
                        </Typography>
                        <Typography variant="subtitle1"
                            color="inherit" className={classes.p}>
                            We take pride in creating user friendly, accesible and responsive analytical
                            tools for healthcare industries.
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary" className={classes.button}
                        >
                            Try Now
                        </Button>
                    </div>
                </div>
                <Hamburger />
            </div>
        )
    }
}

const styles = {
    root: {
        flexGrow: 1,
    },
    logo: {
        background: `url(${logo}) no-repeat`
    },
    hero: {
        marginTop: '10px',
        height: '100vh',
        background: `url(${backImage}) no-repeat`,
        ['@media (min-width:1200px)']: {
            backgroundPosition: '100px 0px'
        },
        ['@media (min-width:1400px)']: {
            backgroundPosition: '400px 0px'
        }
    },
    appbar: {
        backgroundColor: '#fff',
        color: '#194866',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'ease-in-out',
        boxShadow: 'none'
    },
    appbar2: {
        backgroundColor: '#194866',
        color: '#fff',
        boxShadow:
            `0px 2px 4px -1px rgba(0,0,0,0.2), 
        0px 4px 5px 0px rgba(0,0,0,0.14), 
        0px 1px 10px 0px rgba(0,0,0,0.12)`

    },
    container: {
        display: 'flex',
        padding: `250px 0px 0px 0px`,
        flexDirection: 'column',
        width: '400px',
        alignItems: 'center',
        ['@media (min-width:768px)']: {
            padding: `100px 0px 0px 0px`,
        },
    },
    title: {
        paddingLeft: '25px',
        paddingRight: '25px',
        textTransform: 'uppercase',
        fontWeight: '100',
    },
    p: {
        marginTop: '10px',
        display: 'flex',
        width: '200px'
    },
    button: {
        marginTop: '10px',
        textTransform: 'none',
        background: `linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)`
    }
};

export default withStyles(styles)(AppBarContainer);