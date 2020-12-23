import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 50,
    // height: '450px',
    height:'auto',
    maxWidth: '80%',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  set: {
    justifyContent:'center',
    display: 'flex',
    flexDirection: 'row',
    padding: 80,
  },
  project: {
    color: '#ECECEC',
    textAlign: 'left',
    width: 700,
    // paddingRight:100
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
    fontSize: '20px',
    textAlign:'justify'
  },
  button: {
    marginRight: 50,
    fontFamily: 'Roboto Slab',
  },
  imgWrap:{
    width:300,
    display:'flex',
    alignItems:'center'
  },
  pic: {
    margin: 'auto',
    display: 'block',
  },
}));

export default function Project(props) {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  return (
    <div  >
      <Fade>
        <Container className={classes.container} style={{ backgroundImage: props.project.bgimage }}  >
        <Grid container spacing={8} className={classes.set}>
          <Grid item xs={12} md={7} direction="column" className={classes.project}>
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
          </Grid>
            <Grid item xs={12} md={5} direction="column" className={classes.imgWrap}>
              {(props.project.imgHover != null) ?
                <img
                  style={{ height: props.project.height}}
                  className={classes.pic}
                  src={props.project.img}
                  onMouseOver={e => (e.currentTarget.src = props.project.imgHover)}
                  onMouseOut={e => (e.currentTarget.src = props.project.img)}
                  alt={props.project.name} /> :
                <img
                  style={{ height: props.project.height }}
                  className={classes.pic}
                  src={props.project.img}
                  alt={props.project.name} />}
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </div>
  );
}