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
    backgroundColor: '#4e89ae',
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
    // alignItems: 'center',
    padding: theme.spacing(0, 5),
    backgroundColor: '#477ea0',
  },
  item2: {
    paddingTop: 40,
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    padding: theme.spacing(0, 5),
    backgroundColor: '#477ea0',
  },
  item3: {
    paddingTop: 40,
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(0, 5),
    backgroundColor: '#477ea0',
  },
  title: {
    color: '#ECECEC',
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
    color: '#b7cfdf',
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
    color: '#ececec',
    fontFamily: 'Montserrat',
  },
  name: {
    width: 'auto',
    color: '#ececec',
    fontSize: 15,
    paddingBottom: 30,
    paddingTop: 20,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}));

export default function Feedback() {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  return (
    <div className={classes.root}>
      <Fade>
        <Container className={classes.container} maxWidth='lg'>
          <h1 className={classes.title}>
            {t('aboutme.feedTitle')}
          </h1>
          <p className={classes.feedbackText}>{t('aboutme.feedIntro')}</p> <br />
          <div>
            <Grid container spacing={5}>
              <Grid item xs={12} md={4}>
                <div className={classes.item1}>
                  <Typography className={classes.itemText} variant="h6" align="left">
                    {t('aboutme.feed1')}
                  </Typography>
                  <a className={classes.name} target="_blank" href="https://www.lindsaycurrie.com/about-me">
                    <b>Lindsay C.</b> <i>- Author at Simon and Schuster</i>
                  </a>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.item2}>
                  <Typography className={classes.itemText} variant="h6" align="left">
                    {t('aboutme.feed2')}
                  </Typography>
                  <a className={classes.name} target="_blank" href="https://www.linkedin.com/in/monicamcgill/">
                    <b>Monica M.</b> <i>- President and CEO at CSEdResearch.org</i>
                  </a>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.item3}>
                  <Typography className={classes.itemText} variant="h6" align="left">
                    {t('aboutme.feed3')}
                  </Typography>
                  <a className={classes.name} target="_blank" href="https://www.fourunitedrepublic.com/about-us">
                    <br />
                    <b>Thomas H.</b> <i>- CEO at FOUR</i>
                  </a>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </Fade>
    </div>
  );
}
