import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    root: {
        // padding: 30,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: 50,
        paddingBottom: 50,
        background: 'rgba(224, 159, 135, 0.3)',
        height: 'auto',
        width: 'auto',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        fontFamily: 'Roboto Slab',
        marginBottom: 80,
    },
    item1: {
        paddingTop: 40,
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(0, 5),
        // backgroundColor: '#477ea0',
    },
    item2: {
        paddingTop: 40,
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(0, 5),
        // backgroundColor: '#477ea0',
    },
    item3: {
        paddingTop: 40,
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(0, 5),
        // backgroundColor: '#477ea0',
    },
    title: {
        color: '#8E3200',
        textAlign: 'left',
        paddingLeft: 10,
        paddingRight: 100,
        fontSize: '33px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '44px',
        },
        fontFamily: 'Roboto Slab',
        margin: 0,
    },
    feedbackText: {
        color: '#8E3200',
        fontSize: 25,
        textAlign: 'left',
        fontStyle: 'italic',
        margin: 15,
    },
    image: {
        height: 70,
        marginBottom: theme.spacing(4),
    },
    itemText: {
        color: '#8E3200',
        fontFamily: 'Montserrat',
    },
    name: {
        width: 'auto',
        color: '#8E3200',
        fontSize: 15,
        paddingBottom: 30,
        paddingTop: 20,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));

const data = [
    {
        id: 1,
        content: 'aboutme.feed1',
        link: 'https://www.lindsaycurrie.com/about-me',
        name: 'Lindsay C.',
        position: '- Author at Simon and Schuster',
    },
    {
        id: 2,
        content: 'aboutme.feed2',
        link: 'https://www.linkedin.com/in/monicamcgill/',
        name: 'Monica M.',
        position: '- President and CEO at CSEdResearch.org',
    },
    {
        id: 3,
        content: 'aboutme.feed3',
        link: 'https://www.fourunitedrepublic.com/about-us',
        name: 'Thomas H.',
        position: '- CEO at FOUR',
    },
];

export default function Feedback() {
    const classes = useStyles();
    const { t, i18n } = useTranslation();

    return (
        <div className={classes.root}>
            <Fade>
                <Container className={classes.container} maxWidth='lg'>
                    <h1 className={classes.title}>{t('aboutme.feedTitle')}</h1>
                    <p className={classes.feedbackText}>
                        {t('aboutme.feedIntro')}
                    </p>{' '}
                    <br />
                    <div>
                        <Grid container spacing={5}>
                            {data.map((item) => (
                                <Grid item xs={12} md={4}>
                                    <div className={classes.item1}>
                                        <Typography
                                            className={classes.itemText}
                                            variant='h6'
                                            align='left'
                                        >
                                            {t(item.content)}
                                        </Typography>
                                        <a
                                            className={classes.name}
                                            target='_blank'
                                            href={item.link}
                                        >
                                            <b>{item.name}</b>{' '}
                                            <i>{item.position}</i>
                                        </a>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </Container>
            </Fade>
        </div>
    );
}
