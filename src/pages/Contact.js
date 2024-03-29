import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Slide from 'react-reveal/Slide';
import ButtonHeader from '../components/ButtonHeader';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import Footer from '../components/Footer';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        fontFamily: 'Montserrat',
        height: '100vh',
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        background: '#FFEBC1',
        backgroundPosition: 'center',
        margin: 0,
        padding: 0,
        color: '#8E3200',
        // position: 'absolute',
    },
    set: {
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
        display: 'none',
    },
    headerPos1: {
        padding: theme.spacing(0, 5),
    },
    headerPos2: {
        padding: theme.spacing(0, 5),
    },
    headerPos3: {
        padding: theme.spacing(0, 5),
    },
    clicked: {
        transition: theme.transitions.create('opacity'),
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
    },
    title: {
        fontFamily: 'Montserrat',
        fontSize: '60px',
        width: 'auto',
    },
    container: {
        fontFamily: 'Montserrat',
        textAlign: 'center',
        paddingTop: 0,
        [theme.breakpoints.up('md')]: {
            paddingTop: '5%',
        },
        fontSize: '30px',
    },
    iconList: {
        // display: 'table',
        margin: '0 auto',
        // paddingLeft: '15%',
        alignItems: 'center',
        paddingBottom: 95,
    },
    icon: {
        margin: '3%',
        background: 'rgba(224, 159, 135, 0.3)',
        '&:hover': {
            backgroundColor: '#faf0af',
            cursor: 'pointer',
        },
    },
    footer: {
        [theme.breakpoints.up('sm')]: {
            position: 'absolute',
            width: '100%',
            bottom: 0,
        },
    },
}));

const dataIcon = [
    {
        id: 0,
        img: 'images/linkedin.png',
        title: 'linkedin',
        href: 'https://www.linkedin.com/in/nhicung/',
    },
    {
        id: 1,
        img: 'images/email.png',
        title: 'email',
        href: 'mailto:cunghonglinhnhi@gmail.com?subject="subject text"',
    },
    {
        id: 2,
        img: 'images/handshake.png',
        title: 'upwork',
        href: 'https://cgu.joinhandshake.com/users/29415787',
    },
    {
        id: 3,
        img: 'images/facebook.png',
        title: 'facebook',
        href: 'https://facebook.com/cungnhi',
    },
    {
        id: 4,
        img: 'images/instagram.png',
        title: 'instagram',
        href: 'https://instagram.com/cungnhi',
    },
];

export default function Contact(props) {
    const classes = useStyles();
    const { t, i18n } = useTranslation();
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <div>
                    <Grid container spacing={1} className={classes.set}>
                        <Grid item xs={12} md={4}>
                            <ButtonHeader
                                className={classes.headerPos1}
                                to={'/about-me'}
                            >
                                {t('buttons.button1')}
                            </ButtonHeader>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <ButtonHeader
                                className={classes.headerPos2}
                                to={'/'}
                            >
                                {t('buttons.button4')}
                            </ButtonHeader>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <ButtonHeader
                                className={classes.headerPos3}
                                to={'/my-work'}
                            >
                                {t('buttons.button2')}
                            </ButtonHeader>
                        </Grid>
                    </Grid>
                </div>
            </div>

            <Container maxWidth='md' className={classes.container}>
                <Slide bottom>
                    <div className={classes.titleWrap}>
                        <div className={classes.titleColor}>
                            <h1 className={classes.title}>
                                {' '}
                                {t('contact.title')}
                            </h1>
                        </div>
                    </div>
                    <br />
                    {t('contact.contact1')}
                    <div>
                        <Grid container spacing={5}>
                            <Grid item xs={12} md={12}>
                                <div className={classes.iconList}>
                                    {dataIcon.map((icon) => (
                                        <IconButton
                                            className={classes.icon}
                                            size='small'
                                            icon={icon}
                                            key={icon.id}
                                            href={icon.href}
                                            target='_blank'
                                        >
                                            <img
                                                height={80}
                                                width={80}
                                                src={icon.img}
                                                alt={icon.title}
                                            />
                                        </IconButton>
                                    ))}
                                    {/* <IconButton className={classes.icon} size="small">
									<img
										height={80}
										width={80}
										src={process.env.PUBLIC_URL + '/images/email.png'}
										alt='email' />
								</IconButton>
								<IconButton className={classes.icon} size="small">
									<img
										height={80}
										width={80}
										src={process.env.PUBLIC_URL + '/images/upwork.png'}
										alt='upwork' />
								</IconButton>
								<IconButton className={classes.icon} size="small">
									<img
										height={80}
										width={80}
										src={process.env.PUBLIC_URL + '/images/facebook.png'}
										alt='facebook' />
								</IconButton>
								<IconButton className={classes.icon} size="small">
									<img
										height={80}
										width={80}
										src={process.env.PUBLIC_URL + '/images/instagram.png'}
										alt='instagram' />
								</IconButton> */}
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Slide>
            </Container>
            <div className={classes.footer}>
                <Footer />
            </div>
        </div>
    );
}
