AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [

  {
    title: "Coordinator",
    cardImage: "images/mi.jpeg",
    place: "MICROSOFT TECHNICAL CLUB VIT-BHOPAL",
    time: "(Jan - Feb, 2024)",
    desp: "<ul><li>Organized two remarkable events, Vainateya 1.0 and Code Garuda 2.0</li><li>Assigning specific roles to team members based on their expertise.</li><li>Organizing regular team meetings to discuss progress, challenges, and updates for the events.</li><li>Maintaining proper code of conduct among the volunteers and the participants.</li></ul>" 
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
    (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Github screen (project)

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Nhaac Restaurant Website",
   /* cardImage: "assets/images/experience-page/1.jpg",*/
    cardImage: "assets/images/designs/ProjetoPizza.png",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "Registration Form",
  /*  cardImage: "assets/images/experience-page/2.jpg", */
    cardImage: "assets/images/designs/Blog_dark_light.png",
    description: "Registration Form to receive newsletter",
  },
  {
    title: "Landing Page Nike",
    /* cardImage: "assets/images/experience-page/3.jpg", */
    cardImage: "assets/images/designs/Projeto_Chuteira.jpg",
    description:
      "Landing Page Football Boots Nike ",
  },
  {
    title: "Tutorial Rest API (In Developing)",
    cardImage: "assets/images/designs/rest_tutorial.png",
    description:"REST API  tutorial for all levels: What is Rest?, HTTP methods, Resource Name, IdemPotence...",
  },
  {
    title: "BMI calculator",
    cardImage:"assets/images/designs/BMI Calculator.jpg",
    description:"BMI Calculator app. Developed using Flutter",
  },
];

/* const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
    (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards); 

// Hackathon Section

 /*const hackathonsection = document.querySelector(".hackathon-section"); */


/* const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
    (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3); */
