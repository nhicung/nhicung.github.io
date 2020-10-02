import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 50,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 50,
    height: 600,

  },
  category1: {
    // position: 'absolute',
    fontFamily: 'Montserrat',
    fontSize: 120,
    color: '#ECECEC',
    writingMode: 'sideways-lr',
    margin: 'auto',
    marginRight: '100px',
  },

  project: {
    color: '#ECECEC',
    textAlign: 'left',
    paddingTop: '8%'
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
    fontSize: '22px'
  },

  button: {
    marginRight: 50,
    fontFamily: 'Roboto Slab',
  },

  pic: {
    paddingLeft: '5%'
  },
}));

export default function Project(props) {
  const classes = useStyles();

  return (
    <div key={props.project.id}>
      <Fade>
        <Container className={classes.container} style={{ backgroundColor: props.project.color }} maxWidth='lg' >
          <p className={classes.category1}>{props.project.type}</p>
          <div className={classes.project}>
            <h1 className={classes.names}> {props.project.name}</h1>
            <h2 className={classes.tools}> {props.project.tool}</h2>
            <p className={classes.descripts}> {props.project.description}</p>
            {(props.project.webURL != null) ?
              <Button
                color="primary"
                className={classes.button}
                size='medium'
                variant="outlined"
                href={props.project.webURL} target='_blank'> Visit Site </Button> : null}

            {(props.project.gitURL != null) ?
              <Button
                color="primary"
                className={classes.button}
                size='medium'
                variant="outlined"
                href={props.project.gitURL}> See Git Repo </Button> : null}
          </div>
          <Fade>
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
          </Fade>
        </Container>
      </Fade>
    </div>
  );
}