import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	header: {
		position: 'fixed',
		width: 'auto',
		height: 50,
		zIndex: 1000,
		backgroundColor: '#ECECEC'
	},

	headerStyle: {
		fontFamily: 'Montserrat',
		fontSize: 20,
		color: 'black',
		top: '20px',
		'&:hover $clicked': {
			color: 'grey',
			cursor: 'pointer',
			transition: 'all 200ms ease-in',
			transform: 'scale(1.2)',
		},
	},
	clicked: {
		transition: theme.transitions.create('opacity'),
	},
}));

export default function ButtonHeader(props) {
	const classes = useStyles();

	return (
		<Button
			style={{ backgroundColor: 'transparent' }}
			classes={{
				root: classes.headerStyle,
				label: classes.clicked,
			}}
			className={props.className}
			component={Link}
			to={props.to}
		>
			{props.children}
		</Button>
	);
}