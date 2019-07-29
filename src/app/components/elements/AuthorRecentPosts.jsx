/* eslint-disable arrow-parens */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import tt from 'counterpart';

import { fetchFeedDataAsync } from 'app/utils/steemApi';

import LoadingIndicator from 'app/components/elements/LoadingIndicator';

const formatDate = date => {
    const d = new Date(`${date}Z`);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
        2,
        '0'
    )}-${String(d.getDate()).padStart(2, '0')}`;
};

class AuthorRecentPosts extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            posts: [],
        };
    }

    componentDidMount() {
        fetchFeedDataAsync('getDiscussionsByBlogAsync', {
            tag: this.props.author,
            limit: 20,
        }).then(({ feedData }) => {
            if (feedData) {
                const posts = feedData
                    .filter(item => item.author === this.props.author) // find matched author
                    .filter(item => item.permlink !== this.props.permlink) // excepted current posts
                    .slice(0, 5)
                    .map(item => ({
                        id: item.post_id,
                        title: item.title,
                        children: item.children,
                        created: item.created,
                        url: item.url,
                    }));
                this.setState({
                    posts,
                    loading: false,
                });
            }
        });
    }

    render() {
        const { loading, posts } = this.state;

        return (
            <div className={classNames('AuthorRecentPosts', 'callout')}>
                <h6>{this.props.author}님의 최근 글</h6>
                <table>
                    <tbody>
                        {posts.map(item => (
                            <tr>
                                <th key={item.id}>
                                    <a href={item.url}>{item.title}</a>
                                    {'  '}
                                    <span>({item.children})</span>
                                </th>
                                <td>{formatDate(item.created)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {loading ? (
                    <center>
                        <LoadingIndicator type="circle" />
                    </center>
                ) : null}
            </div>
        );
    }
}

AuthorRecentPosts.propTypes = {
    author: PropTypes.string.isRequired,
    permlink: PropTypes.string.isRequired,
};

export default AuthorRecentPosts;
