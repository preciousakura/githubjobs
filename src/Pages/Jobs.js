import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar.js';
import Search from '../Components/search-job'
import PostCard from '../Components/PostCard'
import Api from '../Api.js'
import Footer from '../Components/Footer'

function Jobs(props) {

    let desc = ''
    let loc = ''

    if (typeof(props.match.params.desc) !== 'undefined' && desc != null) {
        desc = props.match.params.desc
    } 

    if (typeof(props.match.params.loc) !== 'undefined' && desc != null) {
        loc = props.match.params.loc
    } 

    const [cases, setCases] = useState([]);  
    const[page, setPage] = useState(1)  

    const [leag, setLeag] = useState(desc); 
    const [location, setLocation] = useState(loc); 
    const [fullT, setFullT] = useState(false); 

    useEffect(() => {
        setPage(1)
        Api.get(`/positions.json?page=${page}&description=${leag}&full_time=${fullT}&location=${location}`).then((response) => {
            
            setCases(response.data)
        })

    }, [leag, location]);
    
    
    useEffect(() => {
        Api.get(`/positions.json?page=${page}&description=${leag}&full_time=${fullT}&location=${location}`).then((response) => {
            setCases(response.data)
        })

    }, [page]);
    

    return(
        <div>
        <Navbar />
        <Search setLocation={setLocation} setLeag={setLeag} setFullT={setFullT}/>

        {Object.keys(cases).length == 0? <h2>Not found</h2> : <><h2>Page {page} - Showing {Object.keys(cases).length} jobs</h2></>} 
        <div className="list">
        {
            cases.map(job => (
                <PostCard key={job.id} job={job}/>
            ))
        } </div>
        {Object.keys(cases).length == 50? <button className ="botao" onClick={() => setPage(page+1)}>More Awesome Jobs</button> : <></>} 

         
        <Footer />
        </div>
        
    )
}
export default Jobs;

