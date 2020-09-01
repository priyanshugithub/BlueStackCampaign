import React, { useState } from 'react';
import CampaignTable from '../campaign-table/CampaignTable.component';

// Tab manager is actually managing the tab data which needs to be rendered 
// tab is refreshed once you click again.

function CampaignTabManager(props) {

    const [campaignJson, setJson] = useState(props.data);

    function updateData(d, item) {
        const campaignData = campaignJson.map(data => {
            if (data['name'] === item['name']) {
                return { ...data, createdOn: d }
            }
            return data;
        });
        setJson(campaignData);
    }

    let d = new Date(); // today date updated
    let milsec = d.getTime();
    let upData = campaignJson.map(item => {
        if ((parseInt(item['createdOn']) - milsec) > 86400000) {
            return item;
        } return null;
    }).filter(Boolean);

    let liveData = campaignJson.map(item => {
        if ((parseInt(item['createdOn']) - milsec) >= 0 && (parseInt(item['createdOn']) - milsec) <= 86400000) {
            return item;
        } return null;
    }).filter(Boolean);

    let pastData = campaignJson.map(item => {
        if (parseInt(item['createdOn']) < milsec) {
            return item;
        } return null;
    }).filter(Boolean);

    const whichData = props.activeState === 'upcoming' ? upData :
        props.activeState === 'live' ? liveData :
            props.activeState === 'past' ? pastData : null;

    return (
        <CampaignTable data={whichData} updatedData={updateData} />
    );
}

export default CampaignTabManager;