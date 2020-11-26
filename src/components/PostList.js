import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';


class Postlist extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }


    renderList() {
        return (
            this.props.posts.map(post => {
                return (
                    <div className="item" key ={post.id}>
                        <i className="large middle aligned icon user" />
                        <div className="content">
                            <div className="description">
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        );
    };
};

const mapStateToProp = (state) => {
    return {posts: state.posts};
}


export default connect(mapStateToProp, {fetchPosts})(Postlist);
