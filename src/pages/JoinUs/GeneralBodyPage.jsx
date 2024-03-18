import React from "react";
import PageHeader from "../../components/PageHeader";

export default function GeneralBodyPage() {
    const titleText = "General Body Membership";
    const subTitleText = "";
    return (
        <div>
            <PageHeader title={ titleText } subTitleText={ subTitleText }/>
            general body
        </div>
    );
}