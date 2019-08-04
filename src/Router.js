import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import PrivateRoute from './components/PrivateRoute'

import Home from './pages/Home'
import NotFound from './pages/error/NotFound'


const Router = () => (
    <Switch>
        {/* <PrivateRoute path="/" component={Profile} />
        <PrivateRoute path="/commute-list" component={CommuteList} />
        <PrivateRoute path="/commute-builder" component={CommuteBuilder} />
        <PrivateRoute path="/my-journeys" component={MyJourneys} />
        <PrivateRoute path="/missing-journeys" component={MissingJourneys} />
        <PrivateRoute path="/my-footprint" component={MyFootprint} />


        <PrivateRoute path="/users" component={Users} />
        <PrivateRoute path="/company-details" component={CompanyDetails} />
        <PrivateRoute path="/emission-report" component={EmissionReport} />


        <PrivateRoute path="/companies" component={Companies} />
        <PrivateRoute path="/commute-types" component={CommuteTypes} />
        <PrivateRoute path="/car-types" component={CarTypes} />


        <Route exact path="/login" component={Login} />
        <Route exact path="/reset-password" component={ResetPassword} />


        <Route exact path="/faq" component={Faq} /> */}
        <Route path="/" component={Home} />
        <Route component={NotFound} /> */}
    </Switch>
)

export default Router
