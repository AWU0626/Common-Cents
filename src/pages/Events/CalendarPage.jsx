import React from "react";
import PageHeader from "../../components/PageHeader";

export default function CalendarPage() {
    const titleText = "Events";
    const subTitleText = "";
    
    return (
        <div>
            <PageHeader title={ titleText } subtitle={ subTitleText }></PageHeader>
            calendar
        </div>
    );
}