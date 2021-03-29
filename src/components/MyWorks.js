import React, { Fragment } from 'react';
import {
    Grid,
    Typography,
    makeStyles,
    IconButton,
    Chip
} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
    headings: {
        margin: theme.spacing(5, 0, 3, 0)
    },
    desc: {
        marginBottom: theme.spacing(2)
    }
}))

export default function MyWorks() {
    const classes = useStyles();
    return (
        <Fragment>
            <Typography variant="h2" className={classes.headings}>My Works</Typography>
            <div className={classes.desc}>
                <Typography variant="h3">Stylo <span> <a href="https://stylo-821a2.web.app/" target="blank"><IconButton><ExitToAppIcon fontSize="small" /></IconButton></a> </span></Typography>
                <Typography className={classes.desc}>Developed an eCommerce website for my personal project which containes all the features that a good eCommerce website should have.
                    This website is build on modern tech statck .  </Typography>
                <Chip label="React" />
                <Chip label="Material UI" />
                <Chip label="React Redux" />
                <Chip label="Redux" />
                <Chip label="Stripe" />
            </div>
            <div className={classes.desc}>
                <Typography variant="h3">Facegenie</Typography>
                <Typography className={classes.desc}>Developed dashboards which supports real-time UI changes and graphical elements for an AI product(Facegenie) </Typography>
                <Chip label="React" />
                <Chip label="Context API" />
                <Chip label="Material UI" />
                <Chip label="Chart.js" />
                <Chip label="Apex Chart" />
                <Chip label="Firebase" />
            </div>
            <div className={classes.desc}>
                <Typography variant="h3">DevConnector <span> <a href="https://woz-devconnector-mern.herokuapp.com/" target="blank"><IconButton><ExitToAppIcon fontSize="small" /></IconButton></a> </span></Typography>
                <Typography className={classes.desc}>Developed an MERN stack app which helps in connecting developer across the globe and check their public git hub repos. </Typography>
                <Chip label="React" />
                <Chip label="Css" />
                <Chip label="Node.js" />
                <Chip label="Redux" />
                <Chip label="Express" />
                <Chip label="Mongodb" />
                <Chip label="Jwt" />
                <Chip label="Heroku" />
            </div>
            <div className={classes.desc}>
                <Typography variant="h3">LinkedIn (Clone) <span> <a href="https://linkedin-clone-efe59.web.app/" target="blank"><IconButton><ExitToAppIcon fontSize="small" /></IconButton></a> </span></Typography>
                <Typography className={classes.desc}>Since cloning is the best way to test ones front-end skill, i chose to clone linkedin and added some basic features like authentication and more. </Typography>
                <Chip label="React" />
                <Chip label="Material UI" />
                <Chip label="Redux" />
                <Chip label="Firebase" />
            </div>
            <div className={classes.desc}>
                <Typography variant="h3">Blufig  <span> <a href="https://www.theblufig.com/" target="blank"><IconButton><ExitToAppIcon fontSize="small" /></IconButton></a> </span></Typography>
                <Typography className={classes.desc}>Rewamped blufigs company website following their color guidelines. The website is build by keeping in mind of Speed,SEO. </Typography>
                <Chip label="Wordpress" />
                <Chip label="Scss" />
                <Chip label="Plugins" />
                <Chip label="Custom Theme" />
            </div>
        </Fragment>
    )
}
