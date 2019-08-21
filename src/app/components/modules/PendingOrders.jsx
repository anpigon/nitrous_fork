/* eslint react/prop-types: 0 */
import React from 'react';
import { connect } from 'react-redux';
import tt from 'counterpart';
import classNames from 'classnames';
import { FormattedDate, FormattedNumber } from 'react-intl';
import { actions as fetchDataSagaActions } from 'app/redux/FetchDataSaga';

const HistoryItem = ({ item }) => {
    const timestamp = new Date(item.timestamp * 1000);
    const price = parseFloat(item.price);
    const quantity = parseFloat(item.quantity);
    const sum = parseFloat((price * quantity).toFixed(5));
    return (
        <tr>
            <td className="text-center">
                <FormattedDate
                    value={timestamp}
                    year="numeric"
                    month="2-digit"
                    day="2-digit"
                    hour12={false}
                    hour="2-digit"
                    minute="2-digit"
                    second="2-digit"
                />
            </td>
            <td className="text-center">
                <strong className="symbol">{item.symbol}</strong>
            </td>
            <td className={classNames('text-center', 'uppercase')}>
                <a
                    className={classNames('type', item.type)}
                    href={`https://steem-engine.com/?p=market&t=${item.symbol}`}
                    target="_blank"
                >
                    <strong>
                        {tt(['pendingorders_jsx', item.type], {
                            fallback: item.type,
                        })}
                    </strong>
                </a>
            </td>
            <td className="text-right">
                <span className="price">
                    <FormattedNumber
                        value={price}
                        minimumSignificantDigits={1}
                    />{' '}
                    <i>STEEM</i>
                </span>
            </td>
            <td className="text-right">
                <span className="price">
                    <FormattedNumber
                        value={quantity}
                        minimumSignificantDigits={1}
                    />
                </span>
            </td>
            <td className="text-right">
                <span className="price">
                    <FormattedNumber value={sum} minimumSignificantDigits={1} />{' '}
                    <i>STEEM</i>
                </span>
            </td>
        </tr>
    );
};

const HistoryList = ({ pendingOrders }) => {
    if (pendingOrders) {
        let { buyBook, sellBook, error } = pendingOrders;

        if (!error) {
            buyBook = buyBook.map(e => ({
                ...e,
                type: 'buy',
            }));
            sellBook = sellBook.map(e => ({
                ...e,
                type: 'sell',
            }));
            const items = buyBook
                .concat(sellBook)
                .sort((a, b) => b.timestamp - a.timestamp);
            return (
                <table>
                    <thead>
                        <tr>
                            <th className="text-center">
                                {tt('pendingorders_jsx.timestamp')}
                            </th>
                            <th className="text-center">
                                {tt('pendingorders_jsx.symbol')}
                            </th>
                            <th className="text-center">
                                {tt('pendingorders_jsx.type')}
                            </th>
                            <th className="text-right">
                                {tt('pendingorders_jsx.price')}
                            </th>
                            <th className="text-right">
                                {tt('pendingorders_jsx.quantity')}
                            </th>
                            <th className="text-right">
                                {tt('pendingorders_jsx.sum')}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <HistoryItem key={item.txId} item={item} />
                        ))}
                    </tbody>
                </table>
            );
        }
    }
    return <div />;
};

class PendingOrders extends React.Component {
    componentDidMount() {
        const account = this.props.account.get('name');
        this.props.fetchPendingOrders({ account });
    }

    render() {
        const { pendingOrders } = this.props;

        return (
            <div className="PendingOrders">
                <div className="row">
                    <div className="column small-12">
                        <br />
                        <h4>{tt('g.pending-orders')}</h4>
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="column small-12">
                        <HistoryList pendingOrders={pendingOrders} />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    // mapStateToProps
    (state, ownProps) => {
        const { global } = state;
        const pendingOrders = global.has('pending_orders')
            ? global.get('pending_orders')
            : null;
        return {
            ...ownProps,
            pendingOrders,
        };
    },
    // mapDispatchToProps
    dispatch => ({
        fetchPendingOrders: args => {
            dispatch(fetchDataSagaActions.fetchPendingOrders(args));
        },
    })
)(PendingOrders);
