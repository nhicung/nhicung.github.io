import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { IconButton } from '@material-ui/core';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  contact: {
    bottom: 0,
    right: 3,
    width: '100%',
    textAlign: 'right',
    backgroundColor: '#ECECEC',
    position: 'fixed',
  },
  copyright: {
    position: 'fixed',
    bottom: 10,
    left: 20
  },
  language: {
    paddingLeft: 680,
    position: 'fixed',
    bottom: 5,
    zIndex: 1000
  }
}));

export default function Footer(props) {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  return (
    <React.Fragment>
      <div className={classes.footer}>
        <div className={classes.contact}>
          <IconButton className={classes.IconButton} href='https://facebook.com/cungnhi' target='_blank'><FacebookIcon /></IconButton>
          <IconButton className={classes.IconButton} href='https://instagram.com/cungnhi' target='_blank'><InstagramIcon /></IconButton>
          <IconButton className={classes.IconButton} href={'mailto:' + props.email}><EmailIcon /></IconButton>
          <IconButton className={classes.IconButton} href='https://github.com/nhicung/my-portfolio' target='_blank'><GitHubIcon /></IconButton>
          <IconButton className={classes.IconButton} href='https://www.linkedin.com/in/nhicung/' target='_blank'><LinkedInIcon /></IconButton>
        </div>
      </div>

      <div className={classes.copyright}>
        @Copyright Nhi Cung 2020
      </div >
      <div className={classes.language}>
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
    </React.Fragment>

  );
}

