import React from "react";
import PageHeader from "../../components/PageHeader";

export default function CoffeeChatPage() {
    const titleText = "CC Coffee Chats";
    const subTitleText = "New for Spring 2024!";
    
    return (
        <div>
            <PageHeader title={ titleText } subtitle={ subTitleText }></PageHeader>
            coffee chats
        </div>
    );
}