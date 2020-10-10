import React from 'react';
import {
	Navbar,
	NavbarBrand,
	Nav,
	NavItem,
	Button,
	Container,
} from 'reactstrap';
import { Switch, Route, Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<Navbar style={{ backgroundColor: '#ff3333' }}>
				<NavbarBrand style={{ color: 'white' }}>Lambda Eats</NavbarBrand>
				<Nav>
					<NavItem>
						<Button tag={Link} to='/'>
							Home
						</Button>
					</NavItem>
					<NavItem>
						<Button>Help</Button>
					</NavItem>
				</Nav>
			</Navbar>
			<Container>
				<img
					src='https://dylzm7u8zqclv.cloudfront.net/2019/03/25/03/57/26/93ddc5f0-6366-416f-ac48-611bb408954b/mini%20pepperoni%20pizza.jpg'
					style={{ width: '100%' }}
				/>
				<span
					style={{
						position: 'relative',
						left: '300px',
						bottom: '300px',
						color: 'white',
						fontSize: '24px',
					}}
				>
					Your favorite food delivered while coding!
				</span>
				<Button
					data-cy='pizza'
					style={{ position: 'relative', left: '50px', bottom: '250px' }}
					tag={Link}
					to='/pizza'
				>
					Pizza?
				</Button>
			</Container>
		</div>
	);
};

export default Home;
