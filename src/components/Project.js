import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme, props) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 50,
    paddingBottom:80,
    paddingTop:30,
    // height: '450px',
    height: 'auto',
    width: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  set: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    // padding: 'auto',
    // margin:'auto'
    marginTop: 'auto',
    paddingBottom: 'auto'
  },
  project: {
    color: '#ECECEC',
    textAlign: 'justify',
    // height: 400,
    // paddingTop: 100,
  },
  names: {
    fontSize: '44px',
    fontFamily: 'Roboto Slab',
    margin: 0,
    textAlign: 'left'
  },
  tools: {
    color: '#e8e8e8',
    fontFamily: 'Roboto Slab',
    margin: 0,
    fontStyle: 'italic',
    textAlign: 'left'
  },
  descripts: {
    fontFamily: 'Montserrat',
    fontSize: '20px',
    textAlign: 'justify'
  },
  button: {
    marginRight: 50,
    fontFamily: 'Roboto Slab',
  },
  imgWrap: {
    width: 'auto',
    height: 350,
    display: 'flex',
    alignItems: 'center'
  },
  pic: {
    margin: 'auto',
    height:'auto',
    maxWidth:'100%', 
    paddingLeft: 0,
    [theme.breakpoints.up('md')]:{
      paddingLeft: props => (props.project.type === 'phone')? 150: 0,
    }
    // display: 'block',
  },
}));

export default function Project(props) {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const classes = useStyles(props);

  return (
    <div  >
      <Fade>
        <Container className={classes.container} style={{ backgroundImage: props.project.bgimage }}  >
          <Grid container spacing={5} className={classes.set}>
            <Grid item xs={12} md={6} direction="column" className={classes.project} align="center">
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
                  href={props.project.gitURL} target='_blank'> {t('projectButton.button2')} </Button> : null}
            </Grid>
            <Grid item xs={12} md={5} direction="column" className={classes.imgWrap}>
              {(props.project.imgHover != null) ?
                <img
                  style={{ height: props.project.height }}
                  className={classes.pic}
                  src={props.project.img}
                  onMouseOver={e => (e.currentTarget.src = props.project.imgHover)}
                  onMouseOut={e => (e.currentTarget.src = props.project.img)}
                  alt={props.project.name} /> :
                <img
                  style={{ maxHeight: props.project.height }}
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