import React, { Fragment } from 'react';
import {
    Typography,
    Grid,
    makeStyles
} from '@material-ui/core';
import laptopEmpji from '../assets/images/laptop-emoji.png';
import waveHand from '../assets/images/wave-hand.svg';

const useStyles = makeStyles((theme) => ({
    imageHolder: {
        maxWidth: '150px',
        // margin: '0 auto'
    },
    waveHandHolder: {
        padding: "0px 10px"
    },
    subHead: {
        color: theme.palette.grey[500]
    }
}))

export default function Intro() {
    const classes = useStyles();
    return (
        <Fragment>
            <Grid container>
                <Grid item lg={10} md={10} sm={10} xs={10}>
                    <Typography variant="h1">Tashi deleck
                    <span className={classes.waveHandHolder}>
                            <img src={waveHand} alt="Greetings" width="4%" />
                        </span>
                     I'm Tenzin Woeser,<br /> a self taught <span>front-end developer</span>  who aspire to be a full-stack developer.  </Typography>
                </Grid>
                <Grid item lg={2} md={2} sm={2} xs={2}>
                    <div className={classes.imageHolder}>
                        <img src={laptopEmpji} alt="Emoji" width="100%" />
                    </div>
                </Grid>
                <Grid item lg={12} xs={12}>
                    <Typography variant="h3" className={classes.subHead}>When i'm away from the keyboard and the internet, i like to play soccer and go swimming. I have crazy love towards dogs and i spent most of my free time  with Mikey(1 yr old lhasaapso)
                    </Typography>
                </Grid>
            </Grid>

        </Fragment>
    )
}
