import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Search from "../search/Search";
import NewReservation from "../reservations/NewReservation";
import SeatReservation from "../reservations/SeatReservation";
import EditReservation from "../reservations/EditReservation";
import NewTable from "../tables/NewTable";
import NotFound from "./NotFound";

/**
 * Defines all the routes for the application.
 *
 * You will need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Routes() {

    return (
        <Switch>
            <Route exact={true} path="/">
                <Redirect to={"/dashboard"} />
            </Route>
            <Route exact={true} path="/reservations">
                <Redirect to={"/dashboard"} />
            </Route>
            <Route exact={true} path="/reservations/new">
                <NewReservation />
            </Route>
            <Route exact={true} path="/reservations/:reservationId/seat">
                <SeatReservation />
            </Route>
            <Route exact={true} path="/reservations/:reservationId/edit">
                <EditReservation />
            </Route>
            <Route exact={true} path="/tables/new">
                <NewTable />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}

export default Routes;
