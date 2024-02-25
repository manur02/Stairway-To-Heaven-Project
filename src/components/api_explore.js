import Header from './Header'
import Footer from './Footer'

export default function api_explore(){

    class Job {
        constructor(title, company, location, datePosted) {
            this.title = title;
            this.company = company;
            this.location = location;
            this.datePosted = datePosted;
        }
    }

    async function fetchData() {
        const url = 'https://jobsearch4.p.rapidapi.com/api/v2/Jobs/Latest';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5566fbcc9dmsh61ca4ffc5feac2cp1c6e75jsn4cb84cb54bb7',
                'X-RapidAPI-Host': 'jobsearch4.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            console.log(data);
            return data.data.map(jobData => new Job(jobData.title, jobData.company, jobData.location, jobData.datePosted));
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    function displayData(jobs) {
        const jobList = document.getElementById('jobList');
        jobList.innerHTML = '';

        if (jobs.length === 0) {
            jobList.textContent = 'No jobs found.';
            return;
        }

        jobs.forEach(job => {
            const listItem = document.createElement('li');
            listItem.textContent = `Title: ${job.title}, Company: ${job.company}, Location: ${job.location}, Date Posted: ${job.datePosted}`;
            jobList.appendChild(listItem);
        });
    }

    function search() {
        const searchInput = document.getElementById('searchInput');
        const searchTerm = searchInput.value.toLowerCase();

        if (!searchTerm.trim()) {
            alert('Please enter a search term.');
            return;
        }

        const found = jobs.some(job => job.title.toLowerCase().includes(searchTerm));
        alert(`Job with title "${searchTerm}" ${found ? 'found' : 'not found'}.`);
    }

    let jobs = [];
    fetchData()
        .then(data => {
            jobs = data;
            displayData(jobs);
        });

    return(
        <>
        <Header/>
        <section>
        <h1>We are hiring !!</h1>
        <div>
        <article>
            <input type="text" id="searchInput" placeholder ="Search by job title" />  
        </article>
        <aside>
            <button  >Search</button>
        </aside>
        </div>
        <ul id="jobList"></ul>
        </section>
        <Footer/>
        </>
    )
}