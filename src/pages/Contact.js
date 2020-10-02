import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Slide from 'react-reveal/Slide';
import ButtonHeader from '../components/ButtonHeader';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
	root: {
		fontFamily: 'Montserrat',
		height: 'auto%',
		width: 'auto',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		position: 'absolute',
		backgroundImage: 'url(./images/contactbg.png)',
		backgroundPosition: 'center'
	},
	clicked: {
		width: 200,
		position: 'absolute',
		transition: theme.transitions.create('opacity'),
	},
	header: {
		position: 'fixed',
		width: '100%',
		height: 50,
		zIndex: 1000,
		backgroundColor: '#ECECEC'
	},
	headerStyle: {
		fontFamily: 'Montserrat',
		fontSize: 20,
		color: 'black',
		position: 'absolute',
		top: '20px',
		borderRadius: '25px',

		'&:hover $clicked': {
			borderRadius: '25px',
			color: 'grey',
			cursor: 'pointer',
			textDecoration: 'underline',
			transition: 'all 200ms ease-in',
			transform: 'scale(1.2)',
		},
	},
	headerPos1: {
		left: '5%',
		backgroundColor: 'rgb(104, 176, 171, 0.5)',
	},
	headerPos2: {
		left: '48%',
		backgroundColor: 'rgb(255, 245, 145,0.5)',
	},
	headerPos3: {
		right: '5%',
		backgroundColor: 'rgb(134, 117, 169,0.5)',
	},
	title: {
		fontFamily: 'Montserrat',
		width: '30%',
		marginLeft: '35%',
		backgroundColor: '#faf0af',
		borderRadius: '25px'
	},
	container: {
		fontFamily: 'Montserrat',
		textAlign: 'center',
		paddingTop: '8%',
		fontSize: '30px'
	},
	iconList: {
		display: 'flex',
		paddingLeft: '15%',
		paddingTop: '2%'
	},
	icon: {
		margin: '3%',
		backgroundColor: 'rgb(217, 173, 173,0.5)',
		'&:hover': {
			backgroundColor: '#faf0af',
			cursor: 'pointer',
		},
	},
	effect: {
		width: '70%'
	}
}));

const dataIcon = [
	{
		id: 0,
		img: 'images/linkedin.png',
		title: 'linkedin',
		href: 'https://www.linkedin.com/in/nhicung/'
	},
	{
		id: 1,
		img: 'images/email.png',
		title: 'email',
		href: ''
	},
	{
		id: 2,
		img: 'images/upwork.png',
		title: 'upwork',
		href: ''
	},
	{
		id: 3,
		img: 'images/facebook.png',
		title: 'facebook',
		href: 'https://facebook.com/cungnhi'
	},
	{
		id: 4,
		img: 'images/instagram.png',
		title: 'instagram',
		href: 'https://instagram.com/cungnhi'
	},


];


export default function Contact(props) {
	const classes = useStyles();
	const { t, i18n } = useTranslation();
	return (
		<div className={classes.root}>
			<div className={classes.header}>
				<div>
					<ButtonHeader className={classes.headerPos1} to={'/about-me'}>
						{t('buttons.button1')}
					</ButtonHeader>
					<ButtonHeader className={classes.headerPos2} to={'/'}>
						{t('buttons.button4')}
					</ButtonHeader>
					<ButtonHeader className={classes.headerPos3} to={'/my-work'}>
						{t('buttons.button2')}
					</ButtonHeader>
				</div>
			</div>

			<Container maxWidth="md" className={classes.container}>
				<Slide bottom>

					<h1 className={classes.title}> {t('contact.title')}</h1>
					{t('contact.contact1')} <br />
					{t('contact.contact2')}

					<div className={classes.iconList}  >
						{dataIcon.map((icon) => (
							<IconButton className={classes.icon} size="small" icon={icon} key={icon.id}>
								<img
									height={80}
									width={80}
									src={icon.img}
									alt={icon.title} />
							</IconButton>
						))}
						{/* <IconButton className={classes.icon} size="small">
									<img
										height={80}
										width={80}
										src={process.env.PUBLIC_URL + '/images/email.png'}
										alt='email' />
								</IconButton>
								<IconButton className={classes.icon} size="small">
									<img
										height={80}
										width={80}
										src={process.env.PUBLIC_URL + '/images/upwork.png'}
										alt='upwork' />
								</IconButton>
								<IconButton className={classes.icon} size="small">
									<img
										height={80}
										width={80}
										src={process.env.PUBLIC_URL + '/images/facebook.png'}
										alt='facebook' />
								</IconButton>
								<IconButton className={classes.icon} size="small">
									<img
										height={80}
										width={80}
										src={process.env.PUBLIC_URL + '/images/instagram.png'}
										alt='instagram' />
								</IconButton> */}
					</div>
				</Slide>
			</Container>
		</div >
	);
}