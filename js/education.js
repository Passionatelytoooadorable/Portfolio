AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Postman API Fundamentals Student Expert",
    cardImage: "images/c9.png",
    moocLink: "https://api.badgr.io/public/assertions/6kizmTJtTMWRTKbmz6Xs5g",
  },
  {
    title: "Cloud Computing",
    cardImage: "images/c1.png",
    moocLink: "https://onlinecourses.nptel.ac.in/noc21_cs14/preview",
  },
  {
    title: "Principles of UX/UI Design",
    cardImage: "images/c2.png",
    moocLink: "https://coursera.org/verify/L9D6KUFCJAXP",
  },
  {
    title: "Mastering Data Structures & Algorithms using C and C++",
    cardImage: "images/c3.png",
    moocLink: "https://www.udemy.com/certificate/UC-10d27913-91a3-4fa0-ae27-034990653f57/",
  },
  {
    title: "Simulink Onramp",
    cardImage: "images/c4.png",
    moocLink: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=55944eb5-53cc-42ca-b291-d58b6233b773&",
  },
  {
    title: "What is Graphic Design?",
    cardImage: "images/c5.png",
    moocLink: "https://www.linkedin.com/learning/certificates/ee007c7c29a43ef378d4e3be5e0d14b1ea417f6c0a7fb4e13a84338f11e3e451",
  },
  {
    title: "Vityarthi (Python Essentials)",
    cardImage: "images/ed1.jpeg",
    moocLink: "https://vityarthi.com/home/course/python-essentials/2",
  },
  {
    title: "Introduction to C plus plus",
    cardImage: "images/c6.png",
    moocLink: "https://simpli-web.app.link/e/QAaE4vIDoJb",
  },
  {
    title: "IBM AI Engineering",
    cardImage: "images/c2.png",
    moocLink: "https://www.coursera.org/account/accomplishments/professional-cert/UF54RZDYBQAB",
  },
  {
    title: "AWS Image Processing",
    cardImage: "images/c7.png",
    moocLink: "https://olympus.mygreatlearning.com/courses/64212/certificate",
  },
  {
    title: "Machine Learning with Python",
    cardImage: "images/c2.png",
    moocLink: "https://coursera.org/verify/Z5K8GS7VNHFW",
  },
  {
    title: "Innovating with Data and Google Cloud",
    cardImage: "images/c8.png",
    moocLink: "https://www.cloudskillsboost.google/public_profiles/cc23d13e-19db-4aa6-927d-42eec8c4ad5b/badges/6101998",
  },
];


let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
