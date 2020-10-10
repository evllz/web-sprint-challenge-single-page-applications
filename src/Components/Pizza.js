import React, { useState, useEffect } from 'react';
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
	Card,
	CardBody,
	CardTitle,
	Navbar,
	NavbarBrand,
	Nav,
	NavItem,
	Container,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';

const Pizza = () => {
	const [order, setOrder] = useState({
		size: '',
		sauce: '',
		toppings: [],
		instructions: '',
	});
	const [disable, setDisable] = useState(true);
	const [errors, setErrors] = useState({
		size: '',
		sauce: '',
	});
	const [info, setInfo] = useState([]);
	const formSchema = yup.object().shape({
		size: yup.string().oneOf(['Small', 'Medium', 'Large']),
		sauce: yup
			.string()
			.oneOf(['Original Red', 'Garlic Ranch', 'BBQ Sauce', 'Spinach Alfredo']),
	});
	useEffect(() => {
		formSchema.isValid(order).then((valid) => {
			setDisable(!valid);
		});
	}, [order]);
	const validateChange = (event) => {
		yup
			.reach(formSchema, event.target.name)
			.validate(event.target.value)
			.then((valid) => {
				setErrors({ ...errors, [event.target.name]: '' });
			})
			.catch((error) => {
				setErrors({ ...errors, [event.target.name]: error.errors[0] });
			});
	};
	const formSubmit = (event) => {
		event.preventDefault();
		axios
			.post('https://reqres.in/api/users', order)
			.then((response) => {
				console.log(response.data);
				setInfo(response.data);
				setOrder({ size: '', sauce: '', toppings: [], instructions: '' });
				console.log(info);
				console.log(order);
			})
			.catch((error) => console.log(error.response));
	};
	const handleChange = (event) => {
		event.persist();
		const newOrder = { ...order, [event.target.name]: event.target.value };
		if (event.target.name === 'instructions') {
			setOrder(newOrder);
		} else {
			validateChange(event);
			setOrder(newOrder);
		}
	};
	const handleChecked = (event) => {
		if (event.target.checked) {
			const addedTopping = event.target.value;
			setOrder({
				...order,
				[event.target.name]: [...order.toppings, addedTopping],
			});
		}
	};
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
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<span style={{ fontSize: '24px' }}>Build your own pizza!</span>
			</div>
			<Container>
				<Form onSubmit={formSubmit}>
					<FormGroup>
						<Label for='size'>Choice of Size</Label>
						<div>Required</div>
						{errors.size.length > 0 ? (
							<p className='error' style={{ color: 'red' }}>
								{errors.size}
							</p>
						) : null}
						<Input
							type='select'
							name='size'
							data-cy='size'
							id='size'
							value={order.size}
							onChange={handleChange}
						>
							<option>Please choose one..</option>
							<option>Small</option>
							<option>Medium</option>
							<option>Large</option>
						</Input>
					</FormGroup>
					<FormGroup tag='fieldset'>
						<Label for='sauce'>Chice of Sauce</Label>
						<div>Required</div>
						{errors.sauce.length > 0 ? (
							<p className='error' style={{ color: 'red' }}>
								{errors.sauce}
							</p>
						) : null}
						<FormGroup check>
							<Label check>
								<Input
									type='radio'
									name='sauce'
									data-cy='original'
									id='original'
									value='Original Red'
									onChange={handleChange}
								/>{' '}
								Original Red
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input
									type='radio'
									name='sauce'
									id='garlic'
									value='Garlic Ranch'
									onChange={handleChange}
								/>{' '}
								Garlic Ranch
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input
									type='radio'
									name='sauce'
									id='bbq'
									value='BBQ Sauce'
									onChange={handleChange}
								/>{' '}
								BBQ Sauce
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input
									type='radio'
									name='sauce'
									id='spinach'
									value='Spinach Alfredo'
									onChange={handleChange}
								/>{' '}
								Spinach Alfredo
							</Label>
						</FormGroup>
					</FormGroup>
					<FormGroup>
						<Label for='toppings'>Add toppings</Label>
						<div>Chose up to 10</div>
						<FormGroup check>
							<Label check>
								<Input
									type='checkbox'
									name='toppings'
									data-cy='pepperoni'
									value='Pepperoni'
									onChange={handleChecked}
								/>{' '}
								Pepperoni
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input
									type='checkbox'
									name='toppings'
									value='Sausage'
									onChange={handleChecked}
								/>{' '}
								Sausage
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input
									type='checkbox'
									name='toppings'
									value='Canadian Bacon'
									onChange={handleChecked}
								/>{' '}
								Canadian Bacon
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input
									type='checkbox'
									name='toppings'
									value='Spicy
								Italian Sausage'
									onChange={handleChecked}
								/>{' '}
								Spicy Italian Sausage
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input
									type='checkbox'
									name='toppings'
									value='Grilled Chicker'
									onChange={handleChecked}
								/>{' '}
								Grilled Chicker
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input
									type='checkbox'
									name='toppings'
									value='Onions'
									onChange={handleChecked}
								/>{' '}
								Onions
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input
									type='checkbox'
									name='toppings'
									value='Green Pepper'
									onChange={handleChecked}
								/>{' '}
								Green Pepper
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input
									type='checkbox'
									name='toppings'
									value='Diced Tomatos'
									onChange={handleChecked}
								/>{' '}
								Diced Tomatos
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input
									type='checkbox'
									name='toppings'
									value='Black Olives'
									onChange={handleChecked}
								/>{' '}
								Black Olives
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input
									type='checkbox'
									name='toppings'
									value='Rosted Garlic'
									onChange={handleChecked}
								/>{' '}
								Rosted Garlic
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input
									type='checkbox'
									name='toppings'
									value='Artichoke'
									onChange={handleChecked}
								/>{' '}
								Artichoke Hearts
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input
									type='checkbox'
									name='toppings'
									value='Three Cheese'
									onChange={handleChecked}
								/>{' '}
								Three Cheese
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input
									type='checkbox'
									name='toppings'
									value='Pineapple'
									onChange={handleChecked}
								/>{' '}
								Pineapple
							</Label>
						</FormGroup>
						<FormGroup check>
							<Label check>
								<Input
									type='checkbox'
									name='toppings'
									value='Extra Chesee'
									onChange={handleChecked}
								/>{' '}
								Extra Chesee
							</Label>
						</FormGroup>
					</FormGroup>
					<FormGroup>
						<Label for='instructions'>Special Instructions</Label>
						<Input
							type='text'
							name='instructions'
							id='instructions'
							data-cy='instructions'
							value={order.instructions}
							onChange={handleChange}
						/>
					</FormGroup>
					<Button type='submit' disabled={disable}>
						Order
					</Button>
				</Form>
			</Container>
		</div>
	);
};

export default Pizza;
