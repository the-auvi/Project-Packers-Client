import React, { useState } from 'react';
import { useEffect } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const Customers = () => {
	const [users, setUser] = useState();
	const [orders, setOrders] = useState();
	const [customers, setCustomers] = useState();

	const [axiosSecure] = useAxiosSecure();

	useEffect(() => {
		axiosSecure.get('user').then((res) => {
			// console.log('users', res.data);
			setUser(res.data);
		});
	}, []);

	console.log(users);

	// useEffect(() => {
	// 	axiosSecure.get('order').then((res) => {
	// 		// console.log('users', res.data);

	// 		// console.log(totalOrder);

	// 		res.data?.docs?.map((doc) => {
	// 			const customer = {
	// 				name: doc.user.name,
	// 				id: doc.user.id,
	// 				email: doc.user.email,
	// 			};
	// 		});

	// 		setOrders(res.data);
	// 	});
	// }, []);

	// useEffect(() => {
	// 	axiosSecure.get('order').then((res) => {
	// 		const orderMap = new Map();

	// 		// Populate the orderMap with users and their orders
	// 		res.data?.docs?.forEach((doc) => {
	// 			const userId = doc.user.id;

	// 			if (!orderMap.has(userId)) {
	// 				orderMap.set(userId, {
	// 					name: doc.user.fullName,
	// 					id: userId,
	// 					email: doc.user.email,
	// 					location: doc.shippingaddress.address,
	// 					totalOrders: 0,
	// 				});
	// 			}

	// 			const customer = orderMap.get(userId);
	// 			customer.totalOrders++;
	// 			orderMap.set(userId, customer);
	// 		});

	// 		// Convert the orderMap values to an array of customers
	// 		const customersArray = Array.from(orderMap.values());

	// 		// Include users who haven't placed orders
	// 		users.forEach((user) => {
	// 			if (!orderMap.has(user.id)) {
	// 				customersArray.push({
	// 					name: user.name,
	// 					id: user.id,
	// 					email: user.email,
	// 					totalOrders: 0,
	// 				});
	// 			}
	// 		});

	// 		setCustomers(customersArray);
	// 		setOrders(res.data);
	// 	});
	// }, [users]);

	// useEffect(() => {
	// 	axiosSecure.get('order').then((res) => {
	// 		const orderMap = new Map();

	// 		// Populate the orderMap with users and their orders
	// 		res.data?.docs?.forEach((doc) => {
	// 			const userId = doc.user.id;

	// 			if (!orderMap.has(userId)) {
	// 				orderMap.set(userId, {
	// 					name: doc.user.name,
	// 					id: userId,
	// 					email: doc.user.email,
	// 					totalOrders: 0,
	// 					lastOrderDate: doc.date,
	// 					status: '',
	// 				});
	// 			}

	// 			const customer = orderMap.get(userId);
	// 			customer.totalOrders++;
	// 			customer.lastOrderDate = new Date(doc.orderDate); // Assuming orderDate field exists
	// 			orderMap.set(userId, customer);
	// 		});

	// 		// Convert the orderMap values to an array of customers
	// 		const customersArray = Array.from(orderMap.values());

	// 		// Include users who haven't placed orders
	// 		users.forEach((user) => {
	// 			if (!orderMap.has(user.id)) {
	// 				customersArray.push({
	// 					name: user.name,
	// 					id: user.id,
	// 					email: user.email,
	// 					totalOrders: 0,
	// 					lastOrderDate: null,
	// 					status: '',
	// 				});
	// 			}
	// 		});

	// 		// Determine status for each customer
	// 		const currentDate = new Date();
	// 		customersArray.forEach((customer) => {
	// 			if (customer.lastOrderDate) {
	// 				const daysSinceLastOrder = Math.floor(
	// 					(currentDate - customer.lastOrderDate) / (1000 * 60 * 60 * 24),
	// 				);
	// 				if (daysSinceLastOrder <= 7) {
	// 					customer.status = 'New';
	// 				} else if (daysSinceLastOrder >= 30) {
	// 					customer.status = 'Returning';
	// 				}
	// 			}
	// 		});

	// 		setCustomers(customersArray);
	// 		setOrders(res.data);
	// 	});
	// }, [users]); // Depend on users state to ensure proper customer creation

	// useEffect(() => {
	// 	axiosSecure.get('order').then((res) => {
	// 		const ordersData = res.data.docs || [];

	// 		// Map orders and create customers array
	// 		const customersMap = new Map(); // To store customers based on userId

	// 		ordersData.forEach((order) => {
	// 			const userId = order.user.id;

	// 			// Calculate order status based on date
	// 			const currentDate = new Date();
	// 			const orderDate = new Date(order.date);
	// 			const daysDifference =
	// 				(currentDate - orderDate) / (1000 * 60 * 60 * 24);

	// 			let orderStatus = 'Returning';
	// 			if (daysDifference <= 7) {
	// 				orderStatus = 'New';
	// 			}

	// 			// Check if customer already exists in the map
	// 			if (customersMap.has(userId)) {
	// 				const existingCustomer = customersMap.get(userId);
	// 				existingCustomer.totalOrders += 1;
	// 				existingCustomer.status = orderStatus;
	// 			} else {
	// 				const user = users.find((user) => user.id === userId);
	// 				if (user) {
	// 					customersMap.set(userId, {
	// 						id: userId,
	// 						name: user.name,
	// 						email: user.email,
	// 						totalOrders: 1,
	// 						status: orderStatus,
	// 					});
	// 				}
	// 			}
	// 		});

	// 		// Convert map values to array and set customers state
	// 		setCustomers(Array.from(customersMap.values()));

	// 		setOrders(ordersData);
	// 	});
	// }, [users]);

	// useEffect(() => {
	// 	axiosSecure.get('order').then((res) => {
	// 		const ordersData = res.data.docs || [];

	// 		// Map users to an object for easier lookup
	// 		const usersMap = new Map();
	// 		users.forEach((user) => {
	// 			usersMap.set(user.id, user);
	// 		});

	// 		// Map orders and create customers array
	// 		const customersMap = new Map(); // To store customers based on userId

	// 		ordersData.forEach((order) => {
	// 			const userId = order.user.id;

	// 			// Calculate order status based on date
	// 			const currentDate = new Date();
	// 			const orderDate = new Date(order.date);
	// 			const daysDifference =
	// 				(currentDate - orderDate) / (1000 * 60 * 60 * 24);

	// 			let orderStatus = 'Returning';
	// 			if (daysDifference <= 7) {
	// 				orderStatus = 'New';
	// 			}

	// 			// Check if customer already exists in the map
	// 			if (customersMap.has(userId)) {
	// 				const existingCustomer = customersMap.get(userId);
	// 				existingCustomer.totalOrders += 1;
	// 				existingCustomer.status = orderStatus;
	// 			} else {
	// 				const user = usersMap.get(userId);
	// 				if (user) {
	// 					customersMap.set(userId, {
	// 						id: userId,
	// 						name: user.name,
	// 						email: user.email,
	// 						totalOrders: 1,
	// 						status: orderStatus,
	// 					});
	// 				}
	// 			}
	// 		});

	// 		// Convert map values to array and set customers state
	// 		setCustomers(Array.from(customersMap.values()));

	// 		setOrders(ordersData);
	// 	});
	// }, [users]);

	// useEffect(() => {
	// 	axiosSecure.get('order').then((res) => {
	// 		const ordersData = res.data.docs || [];

	// 		// Map users to an object for easier lookup
	// 		const usersMap = new Map();
	// 		users.forEach((user) => {
	// 			usersMap.set(user.id, user);
	// 		});

	// 		// Map orders and create customers array
	// 		const customersMap = new Map(); // To store customers based on userId

	// 		ordersData.forEach((order) => {
	// 			const userId = order.user.id;

	// 			// Calculate order status based on date
	// 			const currentDate = new Date();
	// 			const orderDate = new Date(order.date);
	// 			const daysDifference =
	// 				(currentDate - orderDate) / (1000 * 60 * 60 * 24);

	// 			let orderStatus = 'Returning';
	// 			if (daysDifference <= 7) {
	// 				orderStatus = 'New';
	// 			}

	// 			// Check if customer already exists in the map
	// 			if (customersMap.has(userId)) {
	// 				const existingCustomer = customersMap.get(userId);
	// 				existingCustomer.totalOrders += 1;
	// 				existingCustomer.status = orderStatus;
	// 			} else {
	// 				const user = usersMap.get(userId);
	// 				if (user) {
	// 					customersMap.set(userId, {
	// 						id: userId,
	// 						name: user.name,
	// 						email: user.email,
	// 						totalOrders: 1,
	// 						status: orderStatus,
	// 					});
	// 				}
	// 			}
	// 		});

	// 		// Add users who haven't placed orders as customers
	// 		users.forEach((user) => {
	// 			if (!customersMap.has(user.id)) {
	// 				customersMap.set(user.id, {
	// 					id: user.id,
	// 					name: user.name,
	// 					email: user.email,
	// 					totalOrders: 0,
	// 					status: 'No Orders',
	// 				});
	// 			}
	// 		});

	// 		// Convert map values to array and set customers state
	// 		setCustomers(Array.from(customersMap.values()));

	// 		setOrders(ordersData);
	// 	});
	// }, [users]);

	// useEffect(() => {
	// 	axiosSecure.get('order').then((res) => {
	// 		const ordersData = res.data.docs || [];

	// 		// Map users to an object for easier lookup
	// 		const usersMap = new Map();
	// 		users.forEach((user) => {
	// 			usersMap.set(user.id, user);
	// 		});

	// 		// Map orders and create customers array
	// 		const customersMap = new Map(); // To store customers based on userId

	// 		ordersData.forEach((order) => {
	// 			const userId = order.user.id;

	// 			// Calculate order status based on date
	// 			const currentDate = new Date();
	// 			const orderDate = new Date(order.date);
	// 			const daysDifference =
	// 				(currentDate - orderDate) / (1000 * 60 * 60 * 24);

	// 			let orderStatus = 'Returning';
	// 			if (daysDifference <= 7) {
	// 				orderStatus = 'New';
	// 			}

	// 			// Check if customer already exists in the map
	// 			if (customersMap.has(userId)) {
	// 				const existingCustomer = customersMap.get(userId);
	// 				existingCustomer.totalOrders += 1;
	// 				if (orderStatus === 'New') {
	// 					existingCustomer.status = 'New';
	// 				}
	// 			} else {
	// 				const user = usersMap.get(userId);
	// 				if (user) {
	// 					customersMap.set(userId, {
	// 						id: userId,
	// 						name: user.name,
	// 						email: user.email,
	// 						totalOrders: 1,
	// 						status: orderStatus,
	// 					});
	// 				}
	// 			}
	// 		});

	// 		// Add users who haven't placed orders as customers
	// 		users.forEach((user) => {
	// 			if (!customersMap.has(user.id)) {
	// 				customersMap.set(user.id, {
	// 					id: user.id,
	// 					name: user.name,
	// 					email: user.email,
	// 					totalOrders: 0,
	// 					status: 'New',
	// 				});
	// 			}
	// 		});

	// 		// Convert map values to array and set customers state
	// 		setCustomers(Array.from(customersMap.values()));

	// 		setOrders(ordersData);
	// 	});
	// }, [users]);

	useEffect(() => {
		axiosSecure.get('order').then((res) => {
			const ordersData = res.data.docs || [];

			// Map users to an object for easier lookup
			const usersMap = new Map();
			console.log('11', usersMap);
			users.forEach((user) => {
				usersMap.set(user.id, user);
			});
			console.log('12', usersMap);
			const t = new Map();
			console.log('t', t);
			// Map orders and create customers array
			const customersMap = new Map(); // To store customers based on userId
			console.log('13', customersMap);

			ordersData.forEach((order) => {
				const userId = order.user.id;

				// Calculate order status based on date
				const currentDate = new Date();
				const orderDate = new Date(order.date);
				const daysDifference =
					(currentDate - orderDate) / (1000 * 60 * 60 * 24);

				let orderStatus = 'Returning';
				if (daysDifference <= 7) {
					orderStatus = 'New';
				}

				const orderAmount = order.total; // Assuming the order object has a 'totalAmount' field

				// Check if customer already exists in the map
				if (customersMap.has(userId)) {
					const existingCustomer = customersMap.get(userId);

					console.log();
					existingCustomer.totalOrders += 1;
					existingCustomer.totalAmountSpent += orderAmount;
					if (orderStatus === 'New') {
						existingCustomer.status = 'New';
					}
				} else {
					const user = usersMap.get(userId);
					if (user) {
						customersMap.set(userId, {
							id: userId,
							name: user.fullName,
							email: user.email,
							totalOrders: 1,
							totalAmountSpent: orderAmount,
							status: orderStatus,
							phone: order.phone,
						});
					}
				}
			});

			// Add users who haven't placed orders as customers
			users.forEach((user) => {
				if (!customersMap.has(user.id)) {
					customersMap.set(user.id, {
						id: user.id,
						name: user.fullName,
						email: user.email,
						totalOrders: 0,
						totalAmountSpent: 0,
						status: 'New',
						phone: null,
					});
				}
			});

			// Convert map values to array and set customers state
			setCustomers(Array.from(customersMap.values()));

			setOrders(ordersData);
		});
	}, [users]);

	console.log('users', users);
	console.log('orders', orders);
	console.log('customers', customers);

	// console.log(orders);

	return <div>Customers</div>;
};

export default Customers;
