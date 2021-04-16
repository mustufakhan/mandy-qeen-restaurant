import React,{useEffect, useState} from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Product } from '../components/products/Product'

const PrivateRoutes = ({ component: Component, ...rest }) => {
	const user = JSON.parse(localStorage.getItem("user"))
	return (
		<Route {...rest} render={(props) => (user ? <Component {...props} /> : <Redirect to={{ pathname: '/admin', state: { from: props.location } }} />)} />
	)
}

export default PrivateRoutes