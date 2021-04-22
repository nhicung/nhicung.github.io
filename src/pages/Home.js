import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import Footer from '../components/Footer'

const useStyles = makeStyles((theme) => ({
	root: {
		// left: 0,
		// right: 0,
		// top: 0,
		// bottom: 0,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		textAlign: 'center',
		// height: 'auto',
		width: '100%',
		height: '100vh',
		margin: 0, 
		padding: 0,
		// position: 'absolute',
		backgroundImage: 'url(./images/homebg.png)',
		backgroundPosition: 'center'
	},
	name: {
		textAlign: 'center',
		paddingTop: '8%',
		fontFamily: 'Montserrat',
		fontSize: 68,
		marginTop: 0,
	},
	container: {
		// paddingBottom: '100px'
	},
	button: {
		fontFamily: 'Montserrat',
		fontSize: 30,
		color: 'black',
		'&:hover $clicked': {
			color: 'grey',
			cursor: 'pointer',
			transition: 'all 200ms ease-in',
			transform: 'scale(1.2)',
			background: 'rbga(0,0,0,0)'
		},
	},
	buttonPos1: {
		padding: theme.spacing(0, 5),
	},
	buttonPos2: {
		padding: theme.spacing(0, 5),
	},
	buttonPos3: {
		padding: theme.spacing(0, 5),
	},
	clicked: {
		transition: theme.transitions.create('opacity'),
	},
	intro: {
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '70%',
			margin: '0 auto',
		},
	},
	hi: {
		color: 'black',
		fontWeight: 'bolder',
		fontSize: 26,
		textAlign: 'center',
		fontFamily: 'Montserrat',
	},
	footer: {
		// bottom: 0,
		// position: 'fixed',
		// [theme.breakpoints.up('sm')]: {
		// 	// position: 'absolute',
		// 	width: '100%',
		// 	bottom: 0
		// },
		position: 'absolute',
		width:'100%',
		bottom: 0
	}
}));

export default function Home({ }) {
	const classes = useStyles();
	const { t, i18n } = useTranslation();

	return (
		<React.Fragment>
			<div className={classes.root}>
				<Fade top><div className={classes.name}>.Nhi Cung.</div></Fade>
				<Fade top><div className={classes.intro}> <p className={classes.hi}> {t('title')} </p> </div> </Fade>

				<div className={classes.container}>
					<Grid container spacing={1}>
						<Grid item xs={12} md={4}>
							<div>
								<Button
									style={{ backgroundColor: 'transparent' }}
									classes={{
										root: clsx(classes.button, classes.buttonPos1),
										label: classes.clicked,
									}}
									component={Link} to={'/about-me'}
								>
									{t('buttons.button1')}
								</Button>
							</div>
						</Grid>

						<Grid item xs={12} md={4}>
							<div>
								<Button
									style={{ backgroundColor: 'transparent' }}
									classes={{
										root: clsx(classes.button, classes.buttonPos2),
										label: classes.clicked,
									}}
									component={Link} to={'/my-work'}>
									{t('buttons.button2')}
								</Button>
							</div>
						</Grid>
						<Grid item xs={12} md={4}>
							<div>
								<Button
									style={{ backgroundColor: 'transparent' }}
									classes={{
										root: clsx(classes.button, classes.buttonPos3),
										label: classes.clicked,
									}}
									component={Link} to={'/contact'}>
									{t('buttons.button3')}
								</Button>
							</div>
						</Grid>
					</Grid>
				</div >
			</div>
			<div className={classes.footer}>
				<Footer />
			</div>
		</React.Fragment>
	);
}