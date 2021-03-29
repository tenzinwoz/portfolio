import React, { Fragment, useState } from 'react'
import {
    AppBar,
    Toolbar,
    makeStyles,
} from '@material-ui/core';
import Switch from "react-switch";
import NightsStayIcon from '@material-ui/icons/NightsStay';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const useStyles = makeStyles((theme) => ({
    mainHeader: {
        backgroundColor: "transparent",
        boxShadow: 'none'
    },
    Toolbar: {
        justifyContent: 'flex-end'
    },
    icons: {
        color: '#ffb300',
        width: '20px'
    }
}))

export default function Header({ setDarkMode, darkMode }) {
    const classes = useStyles();
    const [toggle, setToggle] = useState(false)
    const handleToggleChange = () => {
        setDarkMode(!darkMode);
        setToggle(!toggle);
    }

    return (
        <Fragment>
            <AppBar className={classes.mainHeader} position="sticky">
                <Toolbar className={classes.Toolbar}>
                    <label>
                        <Switch
                            handleDiameter={28}
                            checked={toggle}
                            onChange={() => handleToggleChange()}
                            uncheckedIcon={
                                <div style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
                                    paddingRight: 2

                                }}>
                                    <Brightness4Icon className={classes.icons} />
                                </div>
                            }
                            checkedIcon={
                                <div style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
                                    paddingLeft: 2
                                }}>
                                    <NightsStayIcon className={classes.icons} />
                                </div>
                            }
                            offColor="#4d4d4d"
                            onColor="#4d4d4d"
                            height={30}
                            width={55}
                        >
                        </Switch>
                    </label>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}
