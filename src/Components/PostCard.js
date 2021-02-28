import { Link } from "react-router-dom";
import moment from 'moment';

function PostCard({ job }) {
    return(
    <div className="jobs-list">
        <div className="job-title"><span><Link to={`/${job.id}`}>{job.title}</Link></span></div>
        <div className="job-type"><b>{job.type}</b></div>
        <div className="job-location"><b>Location: </b>{job.location}</div>
        <div className="job-company"><b>Company: </b>{job.company}</div>
        <div className="job-date"><b>{moment(job.created_at).fromNow()}</b></div>

    </div>
    )
}


export default PostCard