import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import ExtensionIcon from '@material-ui/icons/Extension';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 30,
  },
  container: {
    padding: 50,
    backgroundColor: '#4e89ae',
    height: 'auto',
    width: 'auto',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  item1: {
    paddingTop: 40,
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    padding: theme.spacing(0, 5),
    backgroundColor: '#477ea0'
  },
  item2: {
    paddingTop: 40,
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    padding: theme.spacing(0, 5),
    backgroundColor: '#477ea0'
  },
  item3: {
    paddingTop: 40,
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    padding: theme.spacing(0, 5),
    backgroundColor: '#477ea0'
  },
  title: {
    color: '#b7cfdf',
    textAlign: 'left',
    // width: 700,
    paddingRight: 100,
    fontSize: '50px',
    fontFamily: 'Roboto Slab',
    margin: 0,
  },
  feedbackText: {
    fontSize: 25,
    color: '#ECECEC', 
    textAlign:'left'
  },
  image: {
    height: 70,
    marginBottom: theme.spacing(4),
  },
  itemText: {
    color: '#ececec',
    fontFamily: 'Roboto Slab',
  },
  name: {
    width: 300,
    color: '#ececec',
    fontSize: 15,
    paddingBottom: 20,
    paddingTop: 20
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
                  <Typography className={classes.itemText} variant="h6" align="justify">
                    {t('aboutme.feed1')}
                  </Typography>
                  <div className={classes.name}>
                    <b>Lindsay C.</b> <i>- Author at Simon and Schuster</i>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.item2}>
                  <Typography className={classes.itemText} variant="h6" align="justify">
                    {t('aboutme.feed2')}
                  </Typography>
                  <div className={classes.name}>
                    <b>Monica M.</b><i>- President and CEO at CSEdResearch.org</i> 
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.item3}>
                  <Typography className={classes.itemText} variant="h6" align="justify">
                    {t('aboutme.feed3')}
                  </Typography>
                  <div className={classes.name}>
                    <br />
                    <b>Thomas H.</b> <i>- CEO at FOUR</i></div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </Fade>
    </div>
  );
}
