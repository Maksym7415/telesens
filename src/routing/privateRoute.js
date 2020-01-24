import React from 'react'
import { Route, Redirect} from 'react-router-dom'

let PrivateRoute = props =>
<Route {...props}
    component={pageComponentProps => {
        const PageComponent = props.component
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

export default PrivateRoute
