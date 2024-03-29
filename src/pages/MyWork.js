import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import dataProject from '../data/dataProject';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Project from '../components/Project';
import ButtonHeader from '../components/ButtonHeader';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import Footer from '../components/Footer';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ECECEC',
        },
        secondary: {
            main: '#8E3200',
        },
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        fontFamily: 'Montserrat',
        height: 'auto',
        width: 'auto',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        background: '#FFEBC1',
        backgroundPosition: 'center',
    },
    titleWrap: {
        textAlign: 'center',
        // paddingBottom: '30px',
        display: 'table',
        margin: '0 auto',
    },
    titleColor: {
        // backgroundColor: '#faf0af',
        borderRadius: '25px',
        height: 80,
        paddingLeft: 10,
        paddingRight: 10,
        color: '#8E3200',
    },
    title: {
        fontFamily: 'Montserrat',
        fontSize: '60px',
        width: 'auto',
    },
    set: {
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
        display: 'none',
    },
    headerPos1: {
        padding: theme.spacing(0, 1),
    },
    headerPos2: {
        padding: theme.spacing(0, 1),
    },
    headerPos3: {
        padding: theme.spacing(0, 1),
    },
    container: {
        paddingBottom: '40px',
    },
}));

export default function Mywork(props) {
    const classes = useStyles();
    const { t, i18n } = useTranslation();

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Grid container spacing={1} className={classes.set}>
                    <Grid item xs={12} md={4}>
                        <ButtonHeader
                            className={classes.headerPos1}
                            to={'/contact'}
                        >
                            {t('buttons.button3')}
                        </ButtonHeader>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ButtonHeader className={classes.headerPos2} to={'/'}>
                            {t('buttons.button4')}
                        </ButtonHeader>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ButtonHeader
                            className={classes.headerPos3}
                            to={'/about-me'}
                        >
                            {t('buttons.button1')}
                        </ButtonHeader>
                    </Grid>
                </Grid>
            </div>

            {/* Title */}

            <div className={classes.titleWrap}>
                <div className={classes.titleColor}>
                    <h1 className={classes.title}>{t('mywork.title')}</h1>
                </div>
            </div>

            {/* Body */}

            <ThemeProvider theme={theme}>
                <div>
                    <Grid container className={classes.container}>
                        <Grid item xs={12} md={12}>
                            {dataProject.map((project, i) => (
                                <Project project={project} />
                            ))}
                        </Grid>
                    </Grid>
                </div>
            </ThemeProvider>
            <Footer />
        </div>
    );
}
