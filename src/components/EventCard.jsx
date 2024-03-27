import React from "react";
import '../css/global.css'

export default function EventCard(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    { props.card }
                </div>
                <div className="col-8">
                    <h3 className="body-text-blue-bold-heavy py-2" style={{textAlign: 'left'}}>{ props.title }</h3>

                    <p style={{textAlign: 'left'}}>{ props.description }</p>
                </div>
            </div>
        </div>
    );
}
