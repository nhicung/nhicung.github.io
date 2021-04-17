import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { IconButton } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  footer: {
    position:'fixed',
    backgroundColor: '#ECECEC',
    height: 'auto',
    width: 'auto',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    alignItems: 'center',
  },
  contact: {
    height: 'auto',
    alignItems: 'center',
  },
  copyright: {
    paddingTop:15,
    height: 'auto',
    alignItems: 'center',
  },
  language: {
    paddingTop:10,
    height: 'auto',
    alignItems: 'center',
  }
}));

export default function Footer() {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  return (
    <Container className={classes.footer} maxWidth='xl'>
      <div>
        <Grid container>
          <Grid item xs={12} md={4}>
            <div className={classes.copyright} align="center">
            &#169;Copyright Nhi Cung 2020
            </div >
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.language} align="center">
              <Button onClick={() => changeLanguage('en')}> <img
                src='/images/united-states.png'
                alt="eng"
                width={15}
                height={15}
              /> .en.</Button>

              <Button onClick={() => changeLanguage('vi')}> <img
                src='/images/vietnam.png'
                alt="eng"
                width={15}
                height={15}
              /> .vi.</Button>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.contact} align="center" >
              <IconButton className={classes.IconButton} href='https://facebook.com/cungnhi' target='_blank'><FacebookIcon /></IconButton>
              <IconButton className={classes.IconButton} href='https://instagram.com/cungnhi' target='_blank'><InstagramIcon /></IconButton>
              <IconButton className={classes.IconButton} href={'mailto:cunghonglinhnhi@gmail.com?subject="subject text"'}><EmailIcon /></IconButton>
              <IconButton className={classes.IconButton} href='https://github.com/nhicung' target='_blank'><GitHubIcon /></IconButton>
              <IconButton className={classes.IconButton} href='https://www.linkedin.com/in/nhicung/' target='_blank'><LinkedInIcon /></IconButton>
            </div>
          </Grid>

        </Grid>
      </div>
    </Container>
  );
}

