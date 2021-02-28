import { Link } from "react-router-dom";

export default function Footer(){
    return(
    <div id="footer">
        <ul class="github-nav">
          <li><a target="_blank" href="https://github.com/blog" class="blog">The GitHub Blog</a></li>
          <li><a target="_blank" href="https://github.com/contact">Contact</a></li>
          <li><a target="_blank" href="https://github.com/site/privacy">Privacy</a></li>
          <li><a target="_blank" href="https://github.com/site/terms">Terms</a></li>
          <Link to={"/Api"}><li><a>API</a></li></Link>
            
        </ul>

        <p class="copyline">
          © 2021 GitHub Inc. All rights reserved.
        </p>

        <a target="_blank" href="https://github.com">
          <img width="24" height="24" class="invertocat" src="https://jobs.github.com/images/layout/invertocat.png"/>
        </a>

      </div>
    );
}