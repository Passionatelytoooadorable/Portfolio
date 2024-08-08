AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Recipe Finding App",
    cardImage: "images/food.jpg",
    description: "An API named Recipe Finding App using HTML, CSS and Java Script Codes where the user can search for any food recipe, which he/she wishes to make on clicking the desired food.",
    Previewlink: "images/Recipe.jpg",
    Githublink: "https://github.com/Passionatelytoooadorable/AI-Recipe",
  },
  {
    title: "Profile",
    cardImage: "images/portfolio.jpg",
    description: "Responsive Portfolio Website built in JavaScript, HTML and CSS",
    Previewlink: "",
    Githublink: "https://github.com/Passionatelytoooadorable/Portfolio",
  },
  {
    title: "Flipkart_Clone",
    cardImage: "images/flipkart.jpeg",
    description: "Clone of Flipkart using HTML, CSS and JavaScript to replicate the functionality and design of the popular e-commerce platform.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://flipkart-clone-seven-azure.vercel.app/",
    Githublink: "https://github.com/Passionatelytoooadorable/Flipkart_Clone",
  },
  {
    title: "Spring-Music-Player",
    cardImage: "images/jio.png",
    description: "The Spring Music Player with JioSaavn API Integration is a web application that allows users to listen to their favorite music tracks using the JioSaavn music streaming service. It provides a seamless and user-friendly interface for discovering, playing, and managing music playlists.",
    Previewlink: "https://spring-music-player.vercel.app/",
    Githublink: "https://github.com/Passionatelytoooadorable/Spring-Music-Player",
  },
  {
    title: "FoodiesWeb",
    cardImage: "images/order.jpg",
    description: "This project enables the end users to register online, read and select the food from e-menu card and order food online by just selecting the food that the user want to have from canteen. This system will minimize the queues in the canteen and make hassle-free payments using the unique id provided to the students and the faculty by the college.",
    Previewlink: "https://foodies-web-app.vercel.app/",
    Githublink: "https://github.com/Passionatelytoooadorable/FoodiesWeb",
  },
 {
    title: "Discord-Clone",
    cardImage: "images/discord.jpeg",
    description: "Clone built to replicate the functionality and design of the popular communication platform Discord using the Next.js framework, to provide users with real-time text, voice, and video communication features.",
    Previewlink: "images/discord.png",
    Githublink: "https://github.com/Passionatelytoooadorable/Discord-Clone",
  }, 
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}