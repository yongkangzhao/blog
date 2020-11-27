import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.map(user => dispatch(fetchUser(user)));
}



export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({type: 'FETCH_POSTS', payload: response.data});
};


export const fetchUser = (userId) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${userId}`);

    dispatch({type: 'FETCH_USER', payload: response.data});
};















// memoization version requires lodash package >>>> import _ from 'lodash';

// export const fetchUser = (userId) => async dispatch => {
//     _fetchUser(userId, dispatch);
// };

// const _fetchUser = _.memoize(async (userId, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${userId}`);
//     dispatch({type: 'FETCH_USER', payload: response.data});
// });