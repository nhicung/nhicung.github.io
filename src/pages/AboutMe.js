import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonHeader from '../components/ButtonHeader';
import { useTranslation } from 'react-i18next';
import SelfIntro from '../components/SelfIntro';
import Experience from '../components/Experience';
import Feedback from '../components/Feedback';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    height: 'auto',
    width: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundImage: 'url(./images/aboutMebg.png)',
    backgroundPosition: 'center'
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
    // backgroundColor: 'rgb(212, 154, 137, 0.5)',
    textAlign: 'left',
    display: 'flex',
  },
  
}));

export default function LeftSide() {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div>
          <Grid container spacing={1} className={classes.set}>
            <Grid item xs={12} md={4}>
              <ButtonHeader className={classes.headerPos1} to={'/my-work'}>
                {t('buttons.button2')}
              </ButtonHeader>
            </Grid>
            <Grid item xs={12} md={4}>
              <ButtonHeader className={classes.headerPos2} to={'/'}>
                {t('buttons.button4')}
              </ButtonHeader>
            </Grid>
            <Grid item xs={12} md={4}>
              <ButtonHeader className={classes.headerPos3} to={'/contact'}>
                {t('buttons.button3')}
              </ButtonHeader>
            </Grid>
          </Grid>
        </div>
        <div className={classes.content}>
          <SelfIntro />
          <br />
          <Experience />
          <br />
          <Feedback />
          <br />
        </div>
      </div>
      {/* <div className={classes.container} maxWidth="md">
        <Slide left>
          <div className={classes.description}>
            <h1 className={classes.hi}> {t('aboutme.hi')}</h1>
            <hr color='black'></hr>
            <p className={classes.descript}>{t('aboutme.aboutme1')} <br /> {t('aboutme.aboutme2')}</p>
          </div>
        </Slide>
        <Fade delay={1000}>
          <img
            className={classes.profilePic}
            src={process.env.PUBLIC_URL + '/images/profile.jpg'}
            alt='Nhi Cung' />
        </Fade>
      </div>
      <div className={classes.container} maxWidth="md">
        <Fade delay={3000}>
          <img
            className={classes.langPic}
            src={process.env.PUBLIC_URL + '/images/languages.jpg'}
            alt='Nhi Cung' />
        </Fade>
        <Slide right delay={2000}>
          <div className={classes.description}>
            <p className={classes.descript}>{t('aboutme.aboutme3')} </p>
          </div>
        </Slide>
      </div>
      <div className={classes.container} maxWidth="md">
        <Slide left delay={500}>
          <div className={classes.description}>
            <p className={classes.descript}>{t('aboutme.aboutme4')} </p>
          </div>
        </Slide>
        <Fade delay={1000}>
          <img
            className={classes.profilePic}
            src={process.env.PUBLIC_URL + '/images/drawing.jpg'}
            alt='Nhi Cung' />
        </Fade>
      </div>
      <div className={classes.container} maxWidth="md">
        <Slide left delay={500}>
          <div className={classes.description}>
            <p className={classes.descript}>{t('aboutme.aboutme5')} </p>
          </div>
        </Slide>
      </div>
      <div className={classes.container} maxWidth="md">
        <Slide right delay={500}>
          <div className={classes.descriptionLast}>
            <p className={classes.descript}>{t('aboutme.aboutme6')} <Link to={'/my-work'} onClick={() => {
              window.scrollTo(0, 0);
            }} className={classes.link}>
              {t('aboutme.link1')}
            </Link> {t('aboutme.aboutme7')} <Link to={'/contact'} className={classes.link}>
                {t('aboutme.link2')}
              </Link> {t('aboutme.aboutme8')}</p>
          </div>
        </Slide>
      </div> */}
    </div>

  );
}