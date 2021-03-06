import React,  {	Component} from 'react';
import { connect } from 'react-redux';
import {  Link } from 'react-router-dom';
import { getList } from '../../actions';
// import { getList } from "actions/Auth";
class Home extends Component {

	render() {
		return (
			<div className="text-center">
				<h2>Login Successful!</h2>
				<h3>Welcome to Home Page</h3>
				<button className="btn btn-primary" onClick={this.getHome}>Home</button>
				<Link  className="dropdown-item" to="/login">Logout</Link>
			</div>
		)
	}

}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: getList.getAll,
    deleteUser: getList.delete
}

const connectedHome = connect(mapState, actionCreators)(Home);
export { connectedHome as Home };