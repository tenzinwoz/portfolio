import React, { Fragment } from 'react';
import {
    Container,
    Divider,
    makeStyles,
    Paper,
    Typography
} from '@material-ui/core';
import Header from './Header';
import Intro from './Intro';
import Details from './Details';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default
    },
    mainContainer: {
        borderRadius: '0px'
    },
    dividerSpacing: {
        margin: theme.spacing(3, 0)
    }

}))

export default function Landing({ setDarkMode, darkMode }) {
    const classes = useStyles();
    return (
        <Fragment className={classes.mainContainer}>

            <Header setDarkMode={setDarkMode} darkMode={darkMode} />
            <Container maxWidth="md">
                <Intro />
                <Divider className={classes.dividerSpacing} />
                <Details />
            </Container>
            <Footer />
        </Fragment>
    )
}
