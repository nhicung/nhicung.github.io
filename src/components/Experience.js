import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import Typography from '../components/Typography';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 25,
  },
  container: {
    backgroundColor: '#68b0ab',
    height: 'auto',
    width: 'auto',
    left: 0,
    right: 0,
    padding: 50,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  expTitle: {
    color: '#c2dfdd',
    textAlign: 'left',
    width: 900,
    paddingRight: 100,
    fontSize: '50px',
    fontFamily: 'Roboto Slab',
    margin: 0,
  },
  expText: {
    fontSize: 25,
    textAlign: 'left',
    color: '#ECECEC'
  },
  item1: {
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
    // backgroundColor: '#8fc0a9'
  },
  item2: {
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
    // backgroundColor: '#c8d5b9'
  },
  item3: {
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
    // backgroundColor: '#faf3dd'
  },
  image: {
    height: 80,
    width: 80,
    padding: 30,
  },
  itemText: {
    color: '#ececec',
    fontFamily: 'Roboto Slab',
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
            <Grid container spacing={5}>
              <Grid item xs={12} md={4}>
                <div className={classes.item1}>
                  <img
                    src={process.env.PUBLIC_URL + '/images/campus.png'}
                    alt="rating"
                    className={classes.image}
                  />
                  <Typography className={classes.itemText} variant="h6" align="justify">
                    {t('aboutme.exp1')}
                    <b>{t('aboutme.note1')}</b>
                    {t('aboutme.exp11')}
                    <b>{t('aboutme.note2')}</b>
                    {t('aboutme.exp12')}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.item2}>
                  <img
                    src={process.env.PUBLIC_URL + '/images/personal-computer.png'}
                    alt="rating"
                    className={classes.image}
                  />
                  <Typography className={classes.itemText} variant="h6" align="justify">
                    {t('aboutme.exp2')}
                    {t('aboutme.note3')}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.item3}>
                  <img
                    src={process.env.PUBLIC_URL + '/images/computer-2.png'}
                    alt="rating"
                    className={classes.image}
                  />
                  <Typography className={classes.itemText} variant="h6" align="justify">
                    {t('aboutme.exp3')}
                    <b>{t('aboutme.note6')}</b>
                    {t('aboutme.exp31')}
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