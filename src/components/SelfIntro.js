import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 100,
    padding: 50,
  },
  container: {
    backgroundColor: '#d49a89',
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
  hi: {
    textAlign: 'left',
    color: '#ECECEC',
    fontSize: '40px'
  },
  set: {
    display: 'flex',
    flexDirection: 'row',
  },
  introTitle: {
    color: '#ECECEC',
    textAlign: 'left',
    width: 700,
    paddingRight: 100,
    fontSize: '44px',
    fontFamily: 'Roboto Slab',
    margin: 0,
  },
  imgWrap: {
    padding: 50,
    width: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  profilePic: {
    height: '300px',
    padding: '5%',
    marginTop: '3%'
  },
  introText: {
    fontFamily: 'Montserrat',
    fontSize: 20,
    textAlign: 'left',
    color: '#ECECEC'
  },
  link: {
    color: '#b35b41',
    fontWeight:'bold'
  }
}));

export default function Mywork(props) {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  return (
    <div className={classes.root}>
      <Fade>
        <Container className={classes.container} maxWidth='lg'>
          <Grid container spacing={5} className={classes.set}>
            <Grid item xs={12} md={8}>
              <h1 className={classes.introTitle}>{t('aboutme.aboutTitle')}</h1>
              {/* <h1 className={classes.hi}> {t('aboutme.hi')}</h1> */}
              <p className={classes.introText}>{t('aboutme.aboutme1')}</p>
              <p className={classes.introText}>{t('aboutme.aboutme2')}</p>
              <p className={classes.introText}>{t('aboutme.aboutme3')}</p>
              <p className={classes.introText}>{t('aboutme.aboutme4')} <Link to={'/my-work'} onClick={() => {
                window.scrollTo(0, 0);
              }} className={classes.link}>
                {t('aboutme.link1')}
              </Link> {t('aboutme.aboutme5')} <Link to={'/contact'} className={classes.link}>
                  {t('aboutme.link2')}
                </Link> {t('aboutme.aboutme6')}</p>
            </Grid>
            <Grid item xs={12} md={4} className={classes.imgWrap}>
              <img
                className={classes.profilePic}
                src={process.env.PUBLIC_URL + '/images/profile.jpg'}
                alt='Nhi Cung'
                onMouseOver={e => (e.currentTarget.src = '/images/drawing.jpg')}
                onMouseOut={e => (e.currentTarget.src = '/images/profile.jpg')}
              />
            </Grid>
          </Grid>
          {/* <div className={classes.set}>
          <div className={classes.imgWrap}>
            <img
              className={classes.profilePic}
              src={process.env.PUBLIC_URL + '/images/profile.jpg'}
              alt='Nhi Cung'
            // onMouseOver={e => (e.currentTarget.src = '/images/profile.jpg')}
            // onMouseOut={e => (e.currentTarget.src = '/images/profile.jpg')}
            />
          </div>
          <div>
          
          </div>
        </div> */}
        </Container>
      </Fade>
    </div>
  );
}