import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 50,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 50,
    height: 500,
    width: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  project: {
    color: '#ECECEC',
    textAlign: 'left',
    paddingTop: '8%',
    width: 700,
    paddingRight:100
  },
  names: {
    fontSize: '44px',
    fontFamily: 'Roboto Slab',
    margin: 0,
  },
  tools: {
    color: '#e8e8e8',
    fontFamily: 'Roboto Slab',
    margin: 0,
    fontStyle: 'italic'
  },
  descripts: {
    fontFamily: 'Montserrat',
    fontSize: '22px',
    textAlign:'justify'
  },
  button: {
    marginRight: 50,
    fontFamily: 'Roboto Slab',
  },
  imgWrap:{
    width:300,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  pic: {
    paddingLeft: '5%'
  },
}));

export default function Project(props) {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  return (
    <div  >
      <Fade>
        <Container className={classes.container} style={{ backgroundImage: props.project.bgimage }} maxWidth='lg' >
          <div className={classes.project}>
            <h1 className={classes.names}> {props.project.name}</h1>
            <h2 className={classes.tools} id={props.project.id} > {t(`mywork.${props.project.id}.tool`)}</h2>
            <p className={classes.descripts}> {t(`mywork.${props.project.id}.description`)}</p>
            {(props.project.webURL != null) ?
              <Button
                color="primary"
                className={classes.button}
                size='medium'
                variant="outlined"
                href={props.project.webURL} target='_blank'> {t('projectButton.button1')} </Button> : null}

            {(props.project.gitURL != null) ?
              <Button
                color="primary"
                className={classes.button}
                size='medium'
                variant="outlined"
                href={props.project.gitURL}> {t('projectButton.button2')} </Button> : null}
          </div>
          <Fade>
            <div className={classes.imgWrap}>
              {(props.project.imgHover != null) ?
                <img
                  style={{ height: props.project.height, paddingTop: props.project.padding }}
                  className={classes.pic}
                  src={props.project.img}
                  onMouseOver={e => (e.currentTarget.src = props.project.imgHover)}
                  onMouseOut={e => (e.currentTarget.src = props.project.img)}
                  alt={props.project.name} /> :
                <img
                  style={{ height: props.project.height, paddingTop: props.project.padding }}
                  className={classes.pic}
                  src={props.project.img}
                  alt={props.project.name} />}
            </div>
          </Fade>
        </Container>
      </Fade>
    </div>
  );
}