import React, { useState } from 'react';
import data from './CampaignListData';
import CampaignTabManager from '../CampaignTabManager/CampaignTabManager.component';
import Translator from '../translator/translator';
import defaultMsg from '../LangauageSelector/defaultMessages';

//Component to select between campaign based on Time
//Categories are Past, live and upcoming

function CampaignSelect(props) {
    const [active, setActive] = useState("");

    function handleClick(event) {
        setActive(event.target.title);
    }

    const style1 = {
        color: "#82a523",
        borderBottom: "4px solid #82a523",
        fontWeight: "bold"
    };


    const dt = new Date(props.date).getTime() + 5.5 * (3600000); // for Indian time Zone
    const updated = data.body.map(item => {
        if (item['name'] === props.param)
            item['createdOn'] = dt;
        return item;
    }).filter(Boolean);

    return (
        <div>
            <style type="text/css">
                {`
                        button:focus {
                            outline: none;
                        }
                        .myTabs {
                            color: #5e6e8f;
                            border: none;
                            background: none;
                        }
                    `}
            </style>
            <button title="upcoming" onClick={handleClick}
                style={active === 'upcoming' ? style1 : null}
                className="myTabs pl-1 pr-2 py-2" >
                {Translator('upcoming', defaultMsg.msg.err)}
            </button>
            <button onClick={handleClick}
                title='live'
                style={active === 'live' ? style1 : null}
                className="myTabs pl-3 pr-2 py-2">
                {Translator('live', defaultMsg.msg.err)}
            </button>
            <button onClick={handleClick}
                title='past'
                style={active === 'past' ? style1 : null}
                className="myTabs pl-3 pr-2 py-2">
                {Translator('past', defaultMsg.msg.err)}
            </button>
            <br />
            <br />
            <CampaignTabManager
                data={updated}
                activeState={active}

            />
        </div>
    );
}


export default CampaignSelect;