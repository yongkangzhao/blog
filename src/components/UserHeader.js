import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';


class UserHeader extends Component {

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}

export default connect(null,{fetchUser})(UserHeader);
