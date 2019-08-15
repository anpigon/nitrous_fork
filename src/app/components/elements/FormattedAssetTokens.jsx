import React from 'react';
import {
    formatDecimal,
    parsePayoutAmount,
} from 'app/utils/ParsersAndFormatters';

const FormattedAssetToken = ({ item }) => {
    const tooltip = [];
    const {
        symbol,
        delegationsIn,
        delegationsOut,
        pendingUndelegations,
        pendingUnstake,
    } = item;
    let { balance, stake } = item;
    let isStake = false;
    if (balance && typeof balance === 'string') {
        balance = formatDecimal(parsePayoutAmount(balance));
        tooltip.push(`Balance: ${balance.join('')}`);
    }
    if (stake && typeof stake === 'string') {
        stake = formatDecimal(parsePayoutAmount(stake));
        isStake = Boolean(parseFloat(stake));
    }
    if (isStake) {
        tooltip.push(`Stake: ${stake.join('')}`);
    }
    if (parseFloat(delegationsOut)) {
        tooltip.push(`delegationsOut: ${delegationsOut}`);
    }
    if (parseFloat(delegationsIn)) {
        tooltip.push(`DelegationsIn: ${delegationsIn}`);
    }
    if (parseFloat(pendingUndelegations)) {
        tooltip.push(`PendingUndelegations: ${pendingUndelegations}`);
    }
    if (parseFloat(pendingUnstake)) {
        tooltip.push(`PendingUnstake: ${pendingUnstake}`);
    }

    return (
        <span className="label" data-tooltip={tooltip.join(', ')}>
            <span className="integer">{balance[0]}</span>
            {balance[1] !== '.00' ? (
                <span className="decimal">{balance[1]}</span>
            ) : null}
            {isStake ? (
                <span>
                    (<span className="integer">{stake[0]}</span>
                    {stake[1] !== '.00' ? (
                        <span className="decimal">{stake[1]}</span>
                    ) : null})
                </span>
            ) : null}{' '}
            <span className="asset">{symbol}</span>
        </span>
    );
};

const FormattedAssetTokens = ({ items }) => {
    const sortedItems = items.sort((a, b) => (a.symbol > b.symbol ? 1 : -1));
    //     account: "anpigon"
    // balance: "147.9433"
    // delegationsIn: "0"
    // delegationsOut: "805.4288"
    // pendingUndelegations: "0"
    // pendingUnstake: "0.0000"
    // stake: "0.0000"
    // symbol: "AAA"
    return (
        <div className="UserWallet__balance-tokens">
            {sortedItems &&
                sortedItems.map(item => (
                    <FormattedAssetToken item={item} key={item.symbol} />
                ))}
        </div>
    );
};

export default FormattedAssetTokens;
