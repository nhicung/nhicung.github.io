import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
	root: {
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		textAlign: 'center',
		height: 'auto',
		width: 'auto',
		position: 'absolute',
		backgroundImage: 'url(./images/homebg.png)',
		backgroundPosition: 'center'
	},
	name: {
		textAlign: 'center',
		paddingTop: '5%',
		fontFamily: 'Montserrat',
		fontSize: 80,
		marginTop: 0
	},
	button: {
		fontFamily: 'Montserrat',
		fontSize: 30,
		color: 'black',
		position: 'absolute',
		'&:hover $clicked': {
			color: 'grey',
			cursor: 'pointer',
			textDecoration: 'line-through',
			transition: 'all 200ms ease-in',
			transform: 'scale(1.2)',
		},
	},
	buttonPos1:{
		width:50,
		top: '45%',
		left: '25%'
	},
	buttonPos2:{
		top: '57%',
		right: '22%',
	},
	buttonPos3:{
		top: '88%',
		left: '46%',
	},
	clicked: {
		width: 200,
		position: 'absolute',
	},
	hi: {
		color: 'black',
		fontWeight: 'bolder',
		fontSize: 26,
		textAlign: 'center',
		fontFamily: 'Montserrat',
	},

}));

export default function Home({}) {
	const classes = useStyles();
	const { t, i18n } = useTranslation();

	return (
		// <div className="App">
		<div className={classes.root}>
			<Fade top><div className={classes.name}>.Nhi Cung.</div></Fade>
			<Fade top><p className={classes.hi}> {t('title')} </p></Fade>
			<div>
				<Button
					classes={{
						root: clsx(classes.button, classes.buttonPos1),
						label: classes.clicked,
					}}
					component={Link} to={'/about-me'}
					>
					{t('buttons.button1')}
                </Button>
			</div>

			<div>
				<Button
					classes={{
						root: clsx(classes.button, classes.buttonPos2 ),
						label: classes.clicked,
					}}
					component={Link} to={'/my-work'}>
					{t('buttons.button2')}
				</Button>
			</div>
			<div>
				<Button
					classes={{
						root: clsx(classes.button, classes.buttonPos3 ),
						label: classes.clicked,
					}}
					component={Link} to={'/contact'}>
					{t('buttons.button3')}
				</Button>
			</div>
		</div>
	);
}