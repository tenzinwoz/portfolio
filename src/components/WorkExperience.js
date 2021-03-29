import React, { Fragment } from 'react';
import {
    Typography,
    Grid,
    makeStyles,
    Paper,
    Box
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    headings: {
        margin: theme.spacing(4, 0)
    },
    cardHolder: {
        padding: theme.spacing(2)
    },
    duaration: {
        color: theme.palette.grey[500]
    }
}))

function WorkExperience() {
    const classes = useStyles();

    return (
        <Fragment>
            <Typography variant="h2" className={classes.headings}>Work Experience</Typography>
            <Grid container spacing={3}>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <Paper className={classes.cardHolder} elevation={3}>
                        <Typography>ResoluteAi</Typography>
                        <Typography >Software Developer</Typography>
                        <Typography variant="subtitle2" className={classes.duaration}>Nov 1st 2021 - Present</Typography>
                    </Paper>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <Paper className={classes.cardHolder} elevation={3}>
                        <Typography>Blufig</Typography>
                        <Typography >Website Developer</Typography>
                        <Typography variant="subtitle2" className={classes.duaration}>2018 - 2020</Typography>
                    </Paper>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <Paper className={classes.cardHolder} elevation={3}>
                        <Typography>Think201</Typography>
                        <Typography >Internship</Typography>
                        <Typography variant="subtitle2" className={classes.duaration}>Jan - Apr 2018</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default WorkExperience
