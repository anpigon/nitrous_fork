import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import tt from 'counterpart';
import * as steem from '@steemit/steem-js';

const formatDate = d => {
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
};

class AuthorRecentPosts extends React.PureComponent {
    constructor(props) {
        super(props);
        console.log('props', props);
        this.state = {
            fetching: true,
            posts: [],
        };
    }

    componentDidMount() {
        this.getDiscussionsByAuthor();
    }

    async getDiscussionsByAuthor() {
        const { author, permlink } = this.props;

        // prettier-ignore
        const posts = (await steem.api.getDiscussionsByAuthorBeforeDateAsync(author, '', 0, 10))
            .filter(e => e.permlink !== permlink)
            .map(e => ({
                id: e.post_id,
                url: e.url,
                title: e.title,
                children: e.children,
                created: new Date(`${e.created}Z`),
            }))
            .sort((a, b) => b.created - a.created)
            .slice(0, 5);

        this.setState({
            fetching: false,
            posts,
        });
    }

    render() {
        const { fetching, posts } = this.state;
        const { author } = this.props;
        if (!fetching && (posts && posts.length)) {
            return (
                <div className={classNames('AuthorRecentPosts', 'callout')}>
                    <h6>
                        {tt('postfull_jsx.recent_posts_by_author', { author })}
                    </h6>
                    <table>
                        <tbody>
                            {posts.map(e => (
                                <tr key={e.id}>
                                    <th>
                                        <a href={e.url}>{e.title}</a>
                                        {'  '}
                                        <span>({e.children})</span>
                                    </th>
                                    <td>{formatDate(e.created)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }
        return null;
    }
}

AuthorRecentPosts.propTypes = {
    author: PropTypes.string.isRequired,
};

export default AuthorRecentPosts;
