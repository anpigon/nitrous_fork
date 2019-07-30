import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import tt from 'counterpart';

import { actions as fetchDataSagaActions } from 'app/redux/FetchDataSaga';

import LoadingIndicator from 'app/components/elements/LoadingIndicator';

const formatDate = date => {
    const d = new Date(`${date}Z`);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
};

class AuthorRecentPosts extends PureComponent {
    componentDidMount() {
        this.props.requestData({
            order: 'by_author',
            accountname: this.props.author,
            postFilter: value => value.author === this.props.author,
        });
    }

    render() {
        const { status, accounts, content } = this.props;
        const fetching = (status && status.fetching) || this.props.loading;
        const posts = accounts ? accounts.get('') : [];

        if (!fetching && (posts && posts.size))
            return (
                <div className={classNames('AuthorRecentPosts', 'callout')}>
                    <h6>{this.props.author}님의 최근 글</h6>
                    <table>
                        <tbody>
                            {posts.map(item => {
                                const cont = content.get(item);
                                return (
                                    <tr>
                                        <th>
                                            <a href={cont.get('url')}>
                                                {cont.get('title')}
                                            </a>
                                            {'  '}
                                            <span>
                                                ({cont.get('children')})
                                            </span>
                                        </th>
                                        <td>
                                            {formatDate(cont.get('created'))}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            );
        else if (fetching)
            return (
                <center>
                    <LoadingIndicator type="circle" />
                </center>
            );
    }
}

AuthorRecentPosts.propTypes = {
    author: PropTypes.string.isRequired,
};

export default connect(
    (state, ownProps) => ({
        loading: state.app.get('loading'),
        global_status: state.global.getIn(['status', '', 'by_author']),
        accounts: state.global.getIn(['accounts', ownProps.author]),
        content: state.global.get('content'),
    }),
    dispatch => ({
        requestData: args => dispatch(fetchDataSagaActions.requestData(args)),
    })
)(AuthorRecentPosts);
