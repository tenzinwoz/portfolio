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
        margin: theme.spacing(5, 0, 3, 0)
    },
    cardHolder: {
        padding: theme.spacing(2),
        height: '100%'
    },
    duaration: {
        color: theme.palette.grey[500]
    }
}))

function Education() {
    const classes = useStyles();

    return (
        <Fragment>
            <Typography variant="h2" className={classes.headings}>My Qualifications</Typography>
            <Grid container spacing={3}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Paper className={classes.cardHolder} elevation={3}>
                        <Typography>Global Acadamey of Technology</Typography>
                        <Typography >BE computer science</Typography>
                        <Typography variant="subtitle2" className={classes.duaration}> 2013 - 2017</Typography>
                    </Paper>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Paper className={classes.cardHolder} elevation={3}>
                        <Typography>Cst Mundgod</Typography>
                        <Typography >PCM </Typography>
                        <Typography variant="subtitle2" className={classes.duaration}>2011 - 2013</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Education
