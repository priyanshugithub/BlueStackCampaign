import React, { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { IntlProvider } from 'react-intl';

// import Languages
import English from './en.json';
import German from './de.json';


export default function LanguageProvider(props) {
    // setting initial state with language 
    const [locale, setLocale] = useState('en');
    const [lang, setLang] = useState(English);


    // switch operation to provide Langauge Selection Option
    const changeLang = (getLang) => {
        setLocale(getLang);
        switch (getLang) {
            case 'en':
                setLang(English);
                break;
            case 'de':
                setLang(German);
                break;
            default:
                setLang(English);
        }
    };

    return (
        <IntlProvider locale={locale} messages={lang}>
            <div className="container mr-auto pl-5" >
                <DropdownButton id="dropdown-item-button" variant="success" title="Language">
                    <Dropdown.Item
                        onClick={() => changeLang('en')}
                        as="button" title="en">EN</Dropdown.Item>
                    <Dropdown.Item
                        onClick={() => changeLang('de')}
                        as="button" title="de">DE</Dropdown.Item>
                </DropdownButton>
            </div>
            <div>
                {props.children}
            </div>
        </IntlProvider>
    );
}