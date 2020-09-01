import React from 'react';
import LanguageSelector from '../LangauageSelector/LangaugeSelector.component';
import Translator from '../translator/translator';
import defaultMsg from '../LangauageSelector/defaultMessages';
import CampaignSelect from '../campaign-select/CampaignSelect.component'

function Main() {
        return (
            <LanguageSelector>
                <br/>
            <div>
                <div className="container mr-auto pl-5">
                    <h1
                        style={{ color: "#2b416c" }}><b>{Translator('header',defaultMsg.msg.err)}</b></h1>
                </div>
                <br />
                <div className="container mr-auto pl-5">
                    <CampaignSelect />
                </div>
            </div>
            </LanguageSelector>
        );
}


export default Main;