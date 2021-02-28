import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Api from '../Api'
import moment from 'moment';
import Navbar from '../Components/Navbar.js';
import Footer from '../Components/Footer'
import HTML from "react-native-render-html"

import ReactMarkdown from 'react-markdown';


import '../Style/JobPage.css'


function PageJob() {
    const params = useParams()

    const [cases, setCases] = useState([]);    

    useEffect(() => {

        Api.get(`/positions/${params.id}.json?markdown=true`).then((response) => {
            setCases(response.data)
        })

    }, [cases]);
    
    
    return(
        <div>
            <Navbar />
            <div className="page">
            <div className="single_job">
                <div className="text">
                <div className="single_date_loc"><p>{moment(cases.created_at).fromNow()}  /  <b></b>{cases.location}</p></div>
                <div className="single_title"><h1>{cases.title}</h1></div>
                <div className="single_desc"><ReactMarkdown  source={cases.description} allowDangerousHtml={true} linkTarget="_blank" /></div>

                </div>
                <div className="company_info">
                    <div className="company"><h3>{cases.company}</h3></div>
                    <div className="logo"><a target="_blank" href={cases.company_url}><img src={cases.company_logo}/></a></div>
                    <p>More: <a target="_blank" href={cases.company_url}>{cases.company_url} </a></p> 
                    <hr/>
                    <h3>How to apply</h3>
                    <div className="apply"><ReactMarkdown  source={cases.how_to_apply} allowDangerousHtml={true} linkTarget="_blank" /></div>
                </div>
            </div></div>
            
            <Footer />
        </div>
    )
}

export default PageJob