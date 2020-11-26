import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';


class Postlist extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }


    render() {
        return (
            <div>
                Post List
            </div>
        );
    };
};

const mapStateToProp = (state) => {
    return {posts: state.posts};
}


export default connect(mapStateToProp, {fetchPosts})(Postlist);
