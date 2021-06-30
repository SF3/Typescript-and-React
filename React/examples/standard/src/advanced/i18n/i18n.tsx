import React, {FC, useState} from "react";
import {IntlProvider} from "react-intl";
import translationES from './locales/es.json';
import translationZH from './locales/zh.json';
import Messages from "./messages";
import {DropDown, DropDownOption} from "./drop-down";

const translations = new Map([
    ['es', translationES],
    ['zh', translationZH]
]);

const languageOptions: DropDownOption[] = [
    {value: 'en', message: 'English'},
    {value: 'es', message: 'Spanish'},
    {value: 'zh', message: 'Chinese'}
];


const formats = {
    number: {
        gbp: {
            style: 'currency',
            currency: 'GBP'
        }
    }
};

export const I18NExample: FC = () => {
    const [locale, setLocale] = useState('en');

    return (
        <div>
            <IntlProvider locale={locale}
                          messages={translations.get(locale)}
                          formats={formats}
                          defaultFormats={formats}>
                <Messages/>
            </IntlProvider>
            <div>
                <DropDown options={languageOptions} value={locale}
                          onChange={(e) => setLocale(e.target.value)}/>
            </div>
        </div>
    );
}
