import React from 'react';

export default function CopyEmail(props) {
    const copyEmailToClipboard = async (event) => {
        event.preventDefault(); // disable default link behaviour
        try {
            const email = props.email;
            await navigator.clipboard.writeText(email);
            alert('Email has been copied to clipboard!');
        } catch (err) {
            alert('Failed to copy email');
        }
    };

    const titleText = props.title ?? props.email;
    return (
        // Render a link that when clicked, will copy the email to the clipboard
        <a href="/" style={{color: '#2b87ba'}} onClick={ copyEmailToClipboard }> { titleText } </a>

    );
}