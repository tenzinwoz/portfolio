import React, { Fragment } from 'react';
import {
    Grid
} from '@material-ui/core'
import InfoBox from './InfoBox';
import Technology from './Technology';
import WorkExperience from './WorkExperience';
import MyWorks from './MyWorks';
import Education from './Education';

export default function Details() {
    return (
        <Fragment>
            <Grid container spacing={2}>
                <Grid item lg={3} md={3} sm={3} xs={12}>
                    <InfoBox />
                </Grid>
                <Grid item lg={9} md={9} sm={9} xs={12}>
                    <Technology />
                    <WorkExperience />
                    <MyWorks />
                    <Education />
                </Grid>
            </Grid>
        </Fragment>
    )
}
