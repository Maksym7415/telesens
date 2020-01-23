import React from 'react'
import { Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import { dive } from '../functions'

let PrivateRoute = props =>
<Route {...props}
    component={pageComponentProps => {
        const PageComponent = props.component
        console.log(pageComponentProps)
        if (localStorage.RBTauth) {
            return (
                <PageComponent {...pageComponentProps}/>
            )
        } else {
            return (
                <Redirect to={props.fallback} />
            )
        }
    }
}/>

export default connect(state => ({data: dive`${state}authorization.payload`})) (PrivateRoute)
