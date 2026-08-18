console.log("JavaScript is working!");

const cards = document.querySelectorAll(".project-card");

const category = document.getElementById("project-category");
const title = document.getElementById("project-title");
const description = document.getElementById("project-description");
const creators = document.getElementById("project-creators");


// Change the text when hovering over a project
cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        // Get information from HTML data attributes
        const newCategory = card.dataset.category;
        const newTitle = card.dataset.title;
        const newDescription = card.dataset.description;
        const newCreators = card.dataset.creators;


        // Small fade-out animation
        category.style.opacity = "0";
        title.style.opacity = "0";
        description.style.opacity = "0";
        creators.style.opacity = "0";


        setTimeout(() => {

            category.textContent = newCategory;

            title.textContent = newTitle;

            description.textContent = newDescription;

            // Turn | into a line break
            creators.innerHTML =
                newCreators.replace("|", "<br>");


            // Fade back in
            category.style.opacity = "1";
            title.style.opacity = "1";
            description.style.opacity = "1";
            creators.style.opacity = "1";

        }, 150);

    });

});
// const card = document.querySelector(".project-card");

// const back = document.querySelector(".back");
// const middle = document.querySelector(".middle");
// const front = document.querySelector(".front");
// const image = document.querySelector(".image-layer");

// const projectTitle = document.getElementById("project-title");
// const projectName = document.getElementById("project-name");
// const projectDescription = document.getElementById("project-description");    
// const projectMembers = document.getElementById("project-members");




// const projects = [

//     {
//         title: "COLLABORATIVE",

//         name: "MYTASK",

//         description:
//             "A digital space that facilitate a deeper concentration for those who daily procrastinate on their daily tasks.",

//         members: [
//             "London", 
//             "Naomi Castellanos - AFH",
//         ]
//     },


//     {
//         title: "COLLABORATIVE",

//         name: "Gaia",

//         description:
//             "A Manta ray-robot, named Gaia, which purpose is to save and prevent ocean pollution by automaticly collecting trash in the water. So then the trash is converted into a eco-brick to build houses for low-income families.",

//         members: [
//             "Biobots - Colegio Bilingüe El Castaño Robotic team",
//         ]
//     },


//     {
//         title: "Coming",

//         name: "---",

//         description:
//             "----.",

//         members: [
//             "---"
//         ]
//     },


//     {
//         title: "Coming",

//         name: "---",

//         description:
//             "-----",

//         members: [
//             "-----"
//         ]
//     }

// ];

// function changeProject(index) {

//     projectTitle.textContent =
//         projects[index].title;

//     projectName.textContent =
//         projects[index].name;

//     projectDescription.textContent =
//         projects[index].description;
//     projectMembers.innerHTML =
//         projects[index].members
//             .map(member => `<span>${member}</span>`)
//             .join("<br>");

// }

// card.addEventListener("mousemove", function(event) {

//     const rect = card.getBoundingClientRect();


//     const mouseX =
//         (event.clientX - rect.left)
//         / rect.width
//         * 2 - 1;


//     const mouseY =
//         (event.clientY - rect.top)
//         / rect.height
//         * 2 - 1;


//     /* BACK */

//     back.style.transform =
//         `translate(
//             ${mouseX * 8}px,
//             ${mouseY * 8}px
//         )`;


//     /* MIDDLE */

//     middle.style.transform =
//         `translate(
//             ${mouseX * 15}px,
//             ${mouseY * 15}px
//         )`;


//     /* FRONT */

//     front.style.transform =
//         `translate(
//             ${mouseX * 25}px,
//             ${mouseY * 25}px
//         )`;


//     /* IMAGE */

//     image.style.transform =
//         `translate(
//             ${mouseX * 40}px,
//             ${mouseY * 40}px
//         )`;


//     /* =========================
//        CHANGE TEXT
//        ========================= */

//     if (mouseX < -0.5) {
//     changeProject(0);
// }
// else if (mouseX < 0) {
//     changeProject(1);
// }
// else if (mouseX < 0.5) {
//     changeProject(2);
// }
// else {
//     changeProject(3);
// }

// });


// /* =========================
//    RESET WHEN MOUSE LEAVES
//    ========================= */

// card.addEventListener("mouseleave", function() {

//     back.style.transform =
//         "translate(0, 0)";

//     middle.style.transform =
//         "translate(0, 0)";

//     front.style.transform =
//         "translate(0, 0)";

//     image.style.transform =
//         "translate(0, 0)";

// });

// // const card = document.querySelector(".project-card");
// // const front = document.querySelector(".front");

// // card.addEventListener("mousemove", function(event) {

// //     const rect = card.getBoundingClientRect();

// //     const mouseX =
// //         (event.clientX - rect.left) / rect.width * 2 - 1;

// //     const mouseY =
// //         (event.clientY - rect.top) / rect.height * 2 - 1;

// //     front.style.transform =
// //         `translate(${mouseX * 40}px, ${mouseY * 40}px)`;
// // }