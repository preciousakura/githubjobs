import Navbar from '../Components/Navbar.js';
import Footer from '../Components/Footer'


export default function ApiPage() {
    return(
        <div className="page">
        <Navbar />
        <div class="inner">
    <h1>The GitHub Jobs API</h1>
    <hr/>
        <p>
          The GitHub Jobs API allows you to search, and view jobs
          with JSON over HTTP.
        </p>

        <p>
          To get the JSON representation of any search result or
          job listing, append <code>.json</code> to the URL you'd use
          on the HTML GitHub Jobs site.
        </p>

        <p>
          For example, when searching for Python jobs near New York on the site
          I am taken to this url:
        </p>

        <p>
          <a href="https://jobs.github.com/positions?description=python&amp;location=new+york">https://jobs.github.com/positions?description=python&amp;location=new+york</a>
        </p>

        <p>
          To get the JSON representation of those jobs I just use <code>positions.json</code>:
        </p>

        <p>
          <a href="https://jobs.github.com/positions.json?description=python&amp;location=new+york">https://jobs.github.com/positions.json?description=python&amp;location=new+york</a>
        </p>

        <h3>Pagination</h3>

        <p>
          The API also supports pagination. <code>/positions.json</code>, for
          example, will only return 50 positions at a time. You can paginate results
          by adding a <code>page</code> parameter to your queries.
        </p>

        <p>
          Pagination starts by default at <strong>0</strong>.
        </p>

        <p>
          <h4>Examples</h4>
        </p>

        <ul>
          <li><a class="js-api-example" href="https://jobs.github.com/positions.json?description=ruby&amp;page=1">https://jobs.github.com/positions.json?description=ruby&amp;page=1</a></li>
          <li><a class="js-api-example" href="https://jobs.github.com/positions.json?page=1&amp;search=code">https://jobs.github.com/positions.json?page=1&amp;search=code</a></li>
        </ul>

        <hr/>

        <h3>
          GET /positions.json
        </h3>

        <p>
          Search for jobs by term, location, full time vs part time, or any combination
          of the three. All parameters are optional.
        </p>

        <p>
          <h4>Parameters</h4>
        </p>

        <ul>
          <li>
            <b>description</b> — A search term, such as "ruby" or "java". This parameter
            is aliased to <b>search</b>.
          </li>

          <li>
            <b>location</b> — A city name, zip code, or other location search term.
          </li>

          <li>
            <b>lat</b> — A specific latitude. If used, you must also send <code>long</code>
            and must <strong>not</strong> send <code>location</code>.
          </li>

          <li>
            <b>long</b> — A specific longitude. If used, you must also send <code>lat</code>
            and must <strong>not</strong> send <code>location</code>.
          </li>

          <li>
            <b>full_time</b> — If you want to limit results to full time positions set this
            parameter to 'true'.
          </li>
        </ul>

        <p>
          <h4>Examples</h4>
        </p>

        <ul>
          <li><a class="js-api-example" href="https://jobs.github.com/positions.json?description=python&amp;full_time=true&amp;location=sf">https://jobs.github.com/positions.json?description=python&amp;full_time=true&amp;location=sf</a></li>
          <li><a class="js-api-example" href="https://jobs.github.com/positions.json?search=node">https://jobs.github.com/positions.json?search=node</a></li>
          <li><a class="js-api-example" href="https://jobs.github.com/positions.json?lat=37.3229978&amp;long=-122.0321823">https://jobs.github.com/positions.json?lat=37.3229978&amp;long=-122.0321823</a></li>
        </ul>

        <hr/>

        <h3>
          GET /positions/ID.json
        </h3>

        <p>
          Retrieve the JSON representation of a single job posting.
        </p>

        <p>
          <h4>Parameters</h4>
        </p>

        <ul>
          <li>
            <b>markdown</b> — Set to 'true' to get the <code>description</code> and <code>how_to_apply</code> fields as Markdown.
          </li>
        </ul>

        <p>
          <h4>Examples</h4>
        </p>

        <ul>
          <li><a class="js-api-example" href="https://jobs.github.com/positions/21516.json">https://jobs.github.com/positions/21516.json</a></li>
          <li><a class="js-api-example" href="https://jobs.github.com/positions/21516.json?markdown=true">https://jobs.github.com/positions/21516.json?markdown=true</a></li>
        </ul>

      </div>
    <Footer />
    </div>
    );
}