import React from "react";

export default function PageHeader(props) {

    return(
        <header style={{ backgroundImage: props.backgroundUrl, backgroundSize: 'cover' }} className="bg-dark py-5">
            <div className="container-fluid px-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-8">
                        <div className="text-center my-5">
                            <h1 className="display-3 fw-bold text-white mb-3 py-2">{ props.title }</h1>
                            <p className="h2 fw-bold text-white mb-5 py-2">{ props.subtitle }</p>
                        </div>
                    </div>
                </div>
            </div>
      </header>
    );
}