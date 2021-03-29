import { IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import knuckleupImage from '../assets/images/knuckleup.png';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';

const useStyles = makeStyles((theme) => ({
    imageHolder: {
        maxWidth: '90px',

    },
    infoBox: {
        display: 'flex'
    },
    lightText: {
        color: theme.palette.grey[500]
    }
}))
function InfoBox() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.imageHolder}>
                <img src={knuckleupImage} alt="TenzinWoz" width="100%" />
            </div>
            <Typography>@Tenzinwoz</Typography>
            <Typography>Front-end developer</Typography>
            <div>
                <a href="https://www.linkedin.com/in/wozzer/" target="blank" >
                    <IconButton >
                        <LinkedInIcon />
                    </IconButton>
                </a>
                <a href="https://github.com/tenzinwoz" target="blank" >
                    <IconButton >
                        <GitHubIcon />
                    </IconButton>
                </a>
                <IconButton>
                    <a href="https://www.linkedin.com/in/wozzer/" target="blank"> </a>
                </IconButton>
            </div>
            <div>
                <div className={classes.infoBox}>
                    <PhoneForwardedIcon style={{ marginRight: "10px" }} />
                    <Typography className={classes.lightText} > 9591965547</Typography>
                </div>
                <div className={classes.infoBox}>
                    <Typography className={classes.lightText}> Tenzinwoeser15@gmail.com</Typography>
                </div>
            </div>
        </div>
    )
}

export default InfoBox
