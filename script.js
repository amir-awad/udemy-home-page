const searchButton = document.getElementById("search-button");
searchButton.disabled = true;
searchButton.style.cssText = "cursor: not-allowed"; 
const checkFormsValidity = function(){
    const myForms = document.forms["searchForm"];   
    if (myForms.checkValidity()) {
        searchButton.disabled = false;
        searchButton.style.cssText = "cursor: pointer";
    } else {
        searchButton.disabled = true;
        searchButton.style.cssText = "cursor: not-allowed";
    }
}

let courses = [];
function readJson () {
    fetch('http://localhost:3000/courses')
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(json => {
        for(let i=0;i<json.length;i++) {
            courses.push(json[i]);
        }
    })
    .catch(function () {
        this.dataError = true;
    })
}
readJson();

const searchField = document.querySelector("#search-field");
searchField.addEventListener("keydown", async function (e) {
    if (e.key === "Enter") {  //checks whether the pressed key is "Enter"
        validate(e);
    }
});

function validate(e) {
    e.preventDefault();
    let searchInput = e.target.value;
    //validation of the input...
    let filteredCourses = [];
    for(let course of courses){
        if(course.title.toLowerCase().includes(searchInput.toLowerCase()))
            filteredCourses.push(course);
    }
    const searchResult = document.querySelector("h1");
    if(filteredCourses.length > 0)
        searchResult.textContent = filteredCourses.length + " results for (" + searchInput + ")";
    else{
        searchResult.textContent = "Sorry, we couldn't find any results for (" + searchInput + ")";
    }
    const coursesButtons = document.querySelector(".choose-course");
    coursesButtons.style.cssText = "display: none";
    const h2 = document.querySelector("h2");
    h2.style.cssText = "display: none";
    const courseIntro = document.querySelector("#course-intro");
    courseIntro.style.cssText = "display: none";
    const exploreButton = document.querySelector("#explore-course");
    exploreButton.style.cssText = "display: none";
    showFilteredCourses(filteredCourses);

}

function showFilteredCourses(filteredCourses) {
    const carouselInnerDiv = document.querySelector(".carousel-inner");
    carouselInnerDiv.innerHTML = "";
    const carouselItemDiv = document.createElement("div");
    carouselItemDiv.className = "carousel-item active";
    carouselInnerDiv.appendChild(carouselItemDiv);
    let styleDiv = document.createElement("div");
    styleDiv.style.cssText = "display:flex;flex-direction:row";
    carouselItemDiv.appendChild(styleDiv);
    let coursesCount = 5;

    for(let i=0;i<filteredCourses.length;i++){
        let course = filteredCourses[i];
        const div = document.createElement("div");
        div.style.cssText = "display: inline-block;width: 250px; margin-right: 5px; margin-bottom: 0px; margin-left:12px; height:40%; text-align: left";
        const courseImage = document.createElement("img");
        courseImage.src = course.image;
        courseImage.alt = "Course Image";
        const courseTitle = document.createElement("p");
        courseTitle.textContent = course.title;
        courseTitle.style.cssText = "font: bold 15px arial";
        const courseAuthor = document.createElement("p");
        courseAuthor.textContent = course.author;
        courseAuthor.style.cssText = "font-size: 13px";
        const ratingNum = document.createElement('span');
        ratingNum.textContent = "5";
        ratingNum.style.cssText = "font-size: bold 15px arial; color: rgb(172, 115, 8); margin-right: 3px";
        const firstStar = document.createElement('span');
        firstStar.className = "fa fa-star checked";
        const secondStar = document.createElement('span');
        secondStar.className = "fa fa-star checked";
        const thirdStar = document.createElement('span');
        thirdStar.className = "fa fa-star checked";
        const fourthStar = document.createElement('span');           
        fourthStar.className = "fa fa-star checked";
        const fifthStar = document.createElement('span');           
        fifthStar.className = "fa fa-star checked";
        const coursePrice = document.createElement('p');
        coursePrice.textContent = course.price;
        coursePrice.style.cssText = "font:bold 15px arial";

        div.appendChild(courseImage);
        div.appendChild(courseTitle);
        div.appendChild(courseAuthor);
        div.appendChild(ratingNum);
        div.appendChild(firstStar);
        div.appendChild(secondStar);
        div.appendChild(thirdStar);
        div.appendChild(fourthStar);
        div.appendChild(fifthStar);
        div.appendChild(coursePrice);

        if(--coursesCount > 0)
            styleDiv.appendChild(div);
        else{
            styleDiv.appendChild(div);
            if(i+1 < filteredCourses.length){
                let carouselDiv = document.createElement("div");
                carouselDiv.className = "carousel-item";
                carouselInnerDiv.appendChild(carouselDiv);
                const style = document.createElement("div");
                style.style.cssText = "display:flex;flex-direction:row";
                carouselDiv.appendChild(style);
                styleDiv=style;
                coursesCount=5;
            }
        }
    }

}

let coursesButtons = [];
const python = document.querySelector("#python");
coursesButtons.push(python);
python.addEventListener('click', async function(){
    coursesIntro("Python");
    changeButtonsStyle("Python");
    tabCourses("Python");
})

const excel = document.querySelector("#excel");
coursesButtons.push(excel);
excel.addEventListener('click', async function(){
    coursesIntro("Excel");
    changeButtonsStyle("Excel");
    tabCourses("Excel");

})

const web = document.querySelector("#web-development");
coursesButtons.push(web);
web.addEventListener('click', async function(){
    coursesIntro("Web Development");
    changeButtonsStyle("Web Development");
    tabCourses("Web Development");

})

const javaScript = document.querySelector("#java-script");
coursesButtons.push(javaScript);
javaScript.addEventListener('click', async function(){
    coursesIntro("JavaScript");
    changeButtonsStyle("JavaScript");
    tabCourses("JavaScript");

})

const dataScience = document.querySelector("#data-science");
coursesButtons.push(dataScience);
dataScience.addEventListener('click', async function(){
    coursesIntro("Data Science");
    changeButtonsStyle("Data Science");
    tabCourses("Data Science");

})

const aws = document.querySelector("#aws");
coursesButtons.push(aws);
aws.addEventListener('click', async function(){
    coursesIntro("AWS Certification");
    changeButtonsStyle("AWS Certification");
    tabCourses("AWS Certification");

})

const drawing = document.querySelector("#drawing");
coursesButtons.push(drawing);
drawing.addEventListener('click', async function(){
    coursesIntro("Drawing");
    changeButtonsStyle("Drawing");
    tabCourses("Drawing");

})

function coursesIntro(name) {
    const h2 = document.querySelector("h2");
    const p = document.querySelector("#course-intro");
    const explore = document.querySelector("#explore-course");
    explore.textContent = "Explore " + name;
    switch (name) {
        case "Python":
            h2.textContent = "Expand your career opportunities with Python";
            p.textContent = "Take one of Udemy's range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You'll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike.";
            break;
        case "Excel":
            h2.textContent = "Analyze and visualize data with Excel";
            p.textContent = "Take a Microsoft Excel course from Udemy, and learn how to use this industry-standard software. Real-world experts will show you the basics like how to organize data into sheets, rows and columns, and advanced techniques like creating complex dynamic formulas. Both small businesses and large companies use Excel to turn their raw data into actionable insights.";
            break;
        case "Web Development":
            h2.textContent = "Build websites and applications with Web Development";
            p.textContent = "The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on.";
            break;
        case "JavaScript":
            h2.textContent = "Grow your software development skills with JavaScript";
            p.textContent = "JavaScript is a text-based computer programming language used to make dynamic web pages. A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels, displaying countdowns and timers, and playing media on a webpage. With JavaScript online classes, you can learn to build interactive web applications, choose the best framework, and work with other programming languages like HTML and CSS.";
            break;
        case "Data Science":
            h2.textContent = "Lead data-driven decisions with Data Science";
            p.textContent = "Data science application is an in-demand skill in many industries worldwide — including finance, transportation, education, manufacturing, human resources, and banking. Explore data science courses with Python, statistics, machine learning, and more to grow your knowledge. Get data science training if you’re into research, statistics, and analytics.";
            break;
        case "AWS Certification":
            h2.textContent = "Become an expert in cloud computing with AWS Certification";
            p.textContent = "Prep for your AWS certification with an AWS course on Udemy. Learn the fundamentals of AWS such as working with a serverless platform, the various frameworks, security and more. With these courses, you’ll build the valuable skills you need to implement cloud initiatives — and open up new career opportunities. If you want to become an AWS developer, we’ve got the course for you.";
            break;
        default:
            h2.textContent = "Expand your creative skillset with Drawing";
            p.textContent = "Want to start drawing for fun or take your craft to the next level? Explore our online drawing classes and learn pencil drawing, figure drawing, cartoon drawing, character drawing for cartoons and anime, illustration, sketching, shading and more. Take an overview course on the fundamentals of drawing or zero in on an area you’d like to improve with a specialized course. We’ve got tons of options to get — and keep — you going.";
    }

}

function changeButtonsStyle(name){
    for(let btn of coursesButtons){
        if(btn.textContent === name){
            btn.style.cssText = "color: black";
        }
        else{
            btn.style.cssText = "color: rgb(103, 103, 103);";   
        }
    }
}

function tabCourses(name){
    let filteredCourses = [];
    for(let course of courses){
        let f = ((name==="Python"&&course.id<=8) || (name==="Excel"&&course.id>8&&course.id<=16) || (name==="Web Development"&&course.id>16&&course.id<=24) || (name==="JavaScript"&&course.id>24&&course.id<=32) || (name==="Data Science"&&course.id>32&&course.id<=40) || (name==="AWS Certification"&&course.id>40&&course.id<=48) || (name==="Drawing"&&course.id>48&&course.id<=56));
        if(f)
            filteredCourses.push(course);
    }
    showFilteredCourses(filteredCourses);
}