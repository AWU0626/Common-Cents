import React from "react";

export default function Footer() {
    
    const disclaimer = "Common Cents Collaborative (\"Common Cents\") is not a financial advisor, " +  
                        "investment advisor, legal advisor, accountant, or other certified financial " + 
                        "professional. All opinions expressed by Common Cents Collaborative are " + 
                        "intended for informational purposes and should not be viewed as legal or " + 
                        "financial advice.";
    const copyRight = "© Copyright 2023 Common Cents Collaborative";
    return (
        <footer className="py-3 container-fluid">
            <div className="row justify-content-center">
                <div className="col-8">
                    <p className="text-center">{ disclaimer }</p>
                    <p className="text-center">{ copyRight }</p>
                </div>
            </div>
        </footer>
    );
}