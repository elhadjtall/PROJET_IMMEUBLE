import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, curPage}) => {
  return (
    <div className="pageheader-section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="pageheader-content">
                        <h2>{title}</h2>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">{curPage}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PageHeader
