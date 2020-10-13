import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import dataProject from '../data/dataProject';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Project from '../components/Project';
import ButtonHeader from '../components/ButtonHeader';
import { useTranslation } from 'react-i18next';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#ECECEC',
		}
	},
});


const useStyles = makeStyles((theme) => ({
	root: {
		textAlign: 'center',
		fontFamily: 'Montserrat',
		height: 'auto%',
		width: 'auto',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundAttachment: 'fixed',
		backgroundImage: 'url(./images/myWorkbg.png)',
		backgroundPosition: 'center'
	},
	titleWrap: {
		marginLeft: '35%',
		fontFamily: 'Montserrat',
		fontSize: 70,
		paddingTop: '100px',
		width: '30%',
	},
	title: {
		backgroundColor: '#faf0af',
		borderRadius: '25px'
	},
	headerPos1: {
		left: '5%',
		backgroundColor: 'rgb(217, 173, 173,0.5)',
	},
	headerPos2: {
		right: '48%',
		backgroundColor: 'rgb(255, 245, 145,0.5)',
	},
	headerPos3: {
		right: '5%',
		backgroundColor: 'rgb(104, 176, 171, 0.5)',
	},
	clicked: {
		width: 200,
		position: 'absolute',
		transition: theme.transitions.create('opacity'),
	},
}));

export default function Mywork(props) {
	const classes = useStyles();
	const { t, i18n } = useTranslation();

	return (

		<div className={classes.root}>
			<div className={classes.header}>
				<div>
					<ButtonHeader className={classes.headerPos1} to={'/contact'}>
						{t('buttons.button3')}
						</ButtonHeader>
					<ButtonHeader className={classes.headerPos2} to={'/'}>
					{t('buttons.button4')}
						</ButtonHeader>
					<ButtonHeader className={classes.headerPos3} to={'/about-me'}>
					{t('buttons.button1')}
						</ButtonHeader>
				</div>
			</div>

			{/* Title */}

			<div className={classes.titleWrap} ><h className={classes.title}>{t('mywork.title')}</h></div>

			{/* Body */}

			<ThemeProvider theme={theme}>
				<div>
					{dataProject.map((project, i) => (
						<Project project={project}/>
					))}
				</div>
			</ThemeProvider >
		</div>

	);
}