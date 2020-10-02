import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import ExtensionIcon from '@material-ui/icons/Extension';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item1: {
    height: 350,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
    backgroundColor: '#F3D250'
  },
  item2: {
    height: 350,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
    backgroundColor: '#90CCF4'
  },
  item3: {
    height: 350,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
    backgroundColor: '#F78888'
  },
  title: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 70,
    marginBottom: theme.spacing(4),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },
  icon: {
    color: '#FFA21F',
  }
});

function ProductHowItWorks(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h4" className={classes.title} component="h2">
          Feedback
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item1} backgroundColor='#90CCF4'>
                <img
                  src={process.env.PUBLIC_URL + '/images/rating.png'}
                  alt="rating"
                  className={classes.image}
                />
                <Typography variant="h6" align="justify">
                  "She was flexible, hard-working, and reliable. I was very impressed with her attention to detail and would absolutely recommend her in the future."
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item2}>
                <img
                  src={process.env.PUBLIC_URL + '/images/rating.png'}
                  alt="rating"
                  className={classes.image}
                />
                <Typography variant="h6" align="justify">
                  "She is a talented computer scientist with the necessary "soft skills" to make her a valuable employee. She is eager to learn new skills as she is driven by natural curiosity and deep desire to learn."
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item3}>
                <img
                  src={process.env.PUBLIC_URL + '/images/rating.png'}
                  alt="rating"
                  className={classes.image}
                />
                <Typography variant="h6" align="justify">
                  "Nhi delivered fantastic work on my website improvement project and I enjoyed working with her. Her communication was top-notch, she met all deadlines, and her skills were reasonably strong."
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHowItWorks);