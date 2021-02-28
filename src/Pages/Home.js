import '../Style/Home.css'
import Navbar from '../Components/Navbar.js';
import { FaGlobeAmericas } from 'react-icons/fa';
import { FaPaperclip } from 'react-icons/fa';
import Footer from '../Components/Footer'
import React, {  useState } from 'react'
import { Link } from "react-router-dom";


function Home() {
    const [desc, setDesc] = useState(''); 
    const [loc, setLoc] = useState(''); 
    const [check, setCheck] = useState(false); 

    function sendInfo(){
        setDesc(desc);
        setLoc(loc);
        setCheck(check)
    }
    
  return (
    <div className="home">
        <Navbar />
        <div className="content">
            <div className="form">
                <div className="title-job-description">
                    <FaPaperclip /><label>Job Description</label>
                </div>
                <input 
                    onChange={(e) => setDesc(e.target.value)}
                    type="text" placeholder="Filter by title, benefits, companies, expertise" autoComplete="off"/>
                

                <div className="title-location">
                    <FaGlobeAmericas /><label>Location</label>
                </div>
                <input 
                onChange={(e) => setLoc(e.target.value)}
                type="text" placeholder="Filter by city, state, zip code or country" autoComplete="off"/>
                <div className="title-full-time">
                    
                <label><input type="checkbox" onClick={(e) => setCheck(!check)} name="full-time" /> Full Time Only</label>
                </div>
                <div className="bt-search">
                    <Link to={`/Jobs/${desc}/${loc}/${check}`}><span onClick={() => sendInfo()}>Search</span></Link>
                </div>
            </div>
            <div className="pic"></div>
        </div>
 <Footer />
    </div>
    );
}

export default Home;