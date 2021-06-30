import React, {FC, useState} from "react";
import {
    FormattedDate,
    FormattedMessage,
    FormattedNumber,
    FormattedPlural,
    FormattedTime,
    injectIntl,
    useIntl
} from "react-intl";
import {readMessageFromCode} from "./api";
import {DropDown, DropDownOption} from "./drop-down";

const lemonOptions: DropDownOption[] = [
    {value: 0, message: '0'},
    {value: 1, message: '1'},
    {value: 2, message: '2'},
    {value: 3, message: '3'}
];

const Messages: FC = () => {
    const [count, setCount] = useState(2);
    const intl = useIntl();

    const breadCost = 1.12;
    const arrivalTime = new Date();
    const nested = true;
    arrivalTime.setHours(arrivalTime.getHours() + 48);

    return (
        <div>
            <strong>Simple Messages</strong>
            <ul>
                <li><FormattedMessage id={'i18nExample.where'}
                                      defaultMessage={'Where is the library?'}/>
                </li>
                <li><FormattedMessage id={'i18nExample.what'}
                                      defaultMessage={'What is your name?'}/>
                </li>
                <li>{intl.formatMessage(readMessageFromCode())}</li>
                <li>{count} <FormattedPlural value={count}
                                             one={'lemon'}
                                             other={'lemons'}/>
                </li>

                {/* eslint-disable-next-line react/style-prop-object */}
                <li><FormattedNumber value={breadCost} style='currency'
                                     currency='GBP'/></li>

                <li>Today: <FormattedDate value={new Date()}/></li>
                <li><FormattedTime value={arrivalTime}/></li>
            </ul>
            <strong>Complex Messages</strong>
            <ul>
                <li><FormattedMessage id={'i18nExample.simpleValue'}
                                      description='A greeting to the user'
                                      defaultMessage={'Hello {name}'}
                                      values={{name: 'John'}}/>
                </li>
                <li><FormattedMessage id={'i18nExample.date'}
                                      defaultMessage={'The ambassador arrives at {arrivalTime, time, short}'}
                                      values={{arrivalTime}}/>
                </li>
                <li><FormattedMessage id={'i18nExample.complex'}
                                      defaultMessage={'I would like to buy ' +
                                      '{count, plural, one {# lemon} other {# lemons}}'}
                                      values={{count: count}}/>
                </li>
                <li><FormattedMessage id={'i18nExample.number'}
                                      defaultMessage={'The cost of bread is {breadCost, number, gbp}'}
                                      values={{breadCost}}/>
                </li>
                <li><FormattedMessage id={'i18nExample.nestedSelect'}
                                      defaultMessage={'Can messages be nested? ' +
                                      '{nested, select,' +
                                      ' true {Yes they can}' +
                                      ' false {No they cannot}}'}
                                      values={{nested}}/>
                </li>
            </ul>
            <DropDown options={lemonOptions} value={count} onChange={e => setCount(Number(e.target.value))}/>
        </div>
    );
}

export default injectIntl(Messages);
