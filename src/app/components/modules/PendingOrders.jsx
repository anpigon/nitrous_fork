/* eslint react/prop-types: 0 */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import tt from 'counterpart';
import TransferHistoryRow from 'app/components/cards/TransferHistoryRow';
import TransactionError from 'app/components/elements/TransactionError';
import TimeAgoWrapper from 'app/components/elements/TimeAgoWrapper';
import {
    numberWithCommas,
    vestingSteem,
    delegatedSteem,
    powerdownSteem,
    pricePerSteem,
} from 'app/utils/StateFunctions';
import shouldComponentUpdate from 'app/utils/shouldComponentUpdate';
import Tooltip from 'app/components/elements/Tooltip';
import { FormattedHTMLMessage } from 'app/Translator';
import {
    LIQUID_TOKEN,
    LIQUID_TOKEN_UPPERCASE,
    VESTING_TOKEN,
} from 'app/client_config';
import * as transactionActions from 'app/redux/TransactionReducer';
import * as globalActions from 'app/redux/GlobalReducer';
import * as appActions from 'app/redux/AppReducer';
import DropdownMenu from 'app/components/elements/DropdownMenu';
import Icon from 'app/components/elements/Icon';
import classNames from 'classnames';
import { FormattedDate, FormattedNumber } from 'react-intl';
import { actions as fetchDataSagaActions } from 'app/redux/FetchDataSaga';

const HistoryItem = ({ item }) => {
    const timestamp = new Date(item.timestamp * 1000);
    const price = parseFloat(item.price);
    const quantity = parseFloat(item.quantity);
    const sum = parseFloat((price * quantity).toFixed(5));
    // const [, n1=""] = item.price.split(".");
    // const [, n2=""] = item.quantity.split(".");
    // const n = Math.max(n1.length, n2.length);
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
        let buyBook, sellBook, error;
        if (pendingOrders) {
            ({ buyBook, sellBook, error } = pendingOrders);
        }
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
