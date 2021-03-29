import React, { Fragment } from 'react';
import {
    Container,
    makeStyles,
    Paper,
    Typography
} from '@material-ui/core';
import starEyes from '../assets/images/starEyes.png'
const useStyles = makeStyles((theme) => ({
    footerContainer: {
        padding: theme.spacing(1, 0),
        marginTop: theme.spacing(5)
    },
    footerImage: {
        maxWidth: '70px'
    },
    footerDisplay: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}))

export default function Footer() {
    const classes = useStyles();

    return (
        <Paper className={classes.footerContainer} elevation={3}>
            <Container className={classes.footerDisplay} maxWidth="md">
                <Typography>Build with <span style={{ color: 'red' }}> ♥ </span>By Tenzinwoz</Typography>
                <div className={classes.footerImage}>
                    <img src={starEyes} alt="Amazing" width="100%" />
                </div>
            </Container>
        </Paper>
    )
}
