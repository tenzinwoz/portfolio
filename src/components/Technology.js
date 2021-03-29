import React, { Fragment } from 'react';
import {
    Typography,
    Grid,
    makeStyles
} from '@material-ui/core'
import html from '../assets/icons/html.svg';
import css from '../assets/icons/css.svg';
import js from '../assets/icons/js.svg';
import bootstrap from '../assets/icons/bootstrap.svg';
import react from '../assets/icons/react.svg';
import mui from '../assets/icons/materialui.svg';
import sass from '../assets/icons/sass.svg';
import firebase from '../assets/icons/firebase.svg';
import mongodb from '../assets/icons/mongodb.svg';
import express from '../assets/icons/express.svg';
import nodejs from '../assets/icons/nodejs.svg';

const useStyles = makeStyles((theme) => ({
    logoHolder: {
        maxWidth: '30px',
        display: 'flex',
        justifyContent: 'center'
    },
    widerImageHolder: {
        maxWidth: '100px'
    },
    headings: {
        margin: theme.spacing(5, 0, 3, 0)
    }
}))

const goodAtIcons = [
    html,
    css,
    js,
    sass,
    bootstrap,
    react,
    mui,
    firebase
]

const familiarIcons = [
    nodejs,
    express,
    mongodb
]

export default function Technology() {
    const classes = useStyles();
    return (
        <Fragment>
            <Typography variant="h2" className={classes.headings}>I'm Good At</Typography>
            <Grid container spacing={3}>
                {
                    goodAtIcons.map((icon, index) => {
                        return <Grid item lg={2} key={index} >
                            <div className={classes.logoHolder}>
                                <img src={icon} alt="Teachnology" width="100%" />
                            </div>
                        </Grid>
                    })
                }
            </Grid>
            <Typography variant="h2" className={classes.headings}>I'm Familiar With</Typography>
            <Grid container spacing={3}>
                {
                    familiarIcons.map((icon, index) => {
                        return <Grid item lg={3} key={index} >
                            <div className={classes.widerImageHolder}>
                                <img src={icon} alt="Teachnology" width="100%" />
                            </div>
                        </Grid>
                    })
                }
            </Grid>
        </Fragment>
    )
}
