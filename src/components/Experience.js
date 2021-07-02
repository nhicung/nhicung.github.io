import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import Typography from '../components/Typography';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: 25,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#68b0ab',
    height: 'auto',
    maxWidth: 'auto',
    left: 0,
    right: 0,
    padding: 50,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  expTitle: {
    color: '#ECECEC',
    textAlign: 'left',
    paddingRight: 100,
    paddingLeft: 10,
    fontSize: '34px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '44px',
    },
    fontFamily: 'Roboto Slab',
    margin: 0,
  },
  expText: {
    fontSize: 25,
    textAlign: 'left',
    color: '#c2dfdd',
    fontFamily: 'Roboto Slab',
    fontStyle: 'italic',
    margin: 15,
  },
  expType: {
    color: '#ececec',
    fontFamily: 'Montserrat',
    fontSize: 23,

  },
  item1: {
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
  },
  item2: {
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
  },
  item3: {
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
    // backgroundColor: '#faf3dd'
  },
  image: {
    height: 80,
    width: 80,
  },
  itemText: {
    color: '#ececec',
    fontFamily: 'Montserrat',
    padding: 10
  },
  link: {
    fontWeight: 'bold',
    color: '#ececec',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}));

export default function Mywork(props) {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  return (
    <div className={classes.root}>
      <Fade>
        <Container className={classes.container} maxWidth='lg'>
          <h2 className={classes.expTitle}>{t('aboutme.expTitle')}</h2>
          <p className={classes.expText}>{t('aboutme.expIntro')}</p> <br />
          <div>
            <Grid container>
              <Grid item xs={12} md={4}>
                <div className={classes.item2}>
                  <img
                    src={process.env.PUBLIC_URL + '/images/people.png'}
                    alt="rating"
                    className={classes.image}
                  />
                  <h3 className={classes.expType}> Gender Equality </h3>
                  <Typography className={classes.itemText} variant="h6" align="left">
                    {t('aboutme.exp21')}
                    <a className={classes.link} target="_blank" href="https://www.knox.edu/news/club-provides-support-for-women-in-computer-science">{t('aboutme.note3')}</a>
                    {t('aboutme.exp22')}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.item3}>
                  <img
                    src={process.env.PUBLIC_URL + '/images/personal-computer.png'}
                    alt="rating"
                    className={classes.image}
                  />
                  <h3 className={classes.expType}> Tech Support </h3>
                  <Typography className={classes.itemText} variant="h6" align="left">
                    {t('aboutme.exp3')}
                    <a className={classes.link} target="_blank" href="https://www.knox.edu/offices/information-technology-services">{t('aboutme.note4')}</a>
                    {t('aboutme.exp31')}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.item1}>
                  <img
                    src={process.env.PUBLIC_URL + '/images/campus.png'}
                    alt="rating"
                    className={classes.image}
                  />
                  <h3 className={classes.expType}> Community Involvement </h3>
                  <Typography className={classes.itemText} variant="h6">
                    {t('aboutme.exp1')}
                    <a className={classes.link} target="_blank" href="https://www.knox.edu/offices/student-development/campus-life">{t('aboutme.note1')}</a>
                    {t('aboutme.exp11')}
                    <b>{t('aboutme.note2')}</b>
                    {t('aboutme.exp12')}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </Fade>
    </div>
  );
}