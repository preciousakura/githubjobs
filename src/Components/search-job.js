import '../Style/Jobs.css'
import { FaGlobeAmericas } from 'react-icons/fa';
import { FaPaperclip } from 'react-icons/fa';
import React, {  useState } from 'react'



function Search({ setLocation, setLeag, setFullT }){

    const [desc, setDesc] = useState(''); 
    const [loc, setLoc] = useState(''); 
    const [check, setCheck] = useState(false); 

    function sendInfo(){
        setLeag(desc);
        setLocation(loc);
        setFullT(check)
    }

    return(
        <div className="search-jobs">
                
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
                    <span onClick={() => sendInfo()}>Search</span>
                </div>
            </div>

                 </div>

    )
}

export default Search;