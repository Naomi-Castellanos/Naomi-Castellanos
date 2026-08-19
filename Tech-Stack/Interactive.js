console.log("HALOOOOOO JAVA SCIPT WORKING!!!");

const cards = document.querySelectorAll(".project-card");

console.log("Number of cards:", cards.length);

const projectInfo =
    document.querySelector(".project-info");

const projectCategory =
    document.getElementById("project-category");

const projectTitle =
    document.getElementById("project-title");

const projectDescription =
    document.getElementById("project-description");

const projectCreators =
    document.getElementById("project-creators");

const projectsSection =
    document.querySelector(".projects-section");

let activeIndex = 0;

let scrollLocked = false;

/* =========================================
   UPDATE CARDS
========================================= */

function updateCards() {

    cards.forEach((card, index) => {

        /*
            Remove the old position
        */

        card.classList.remove(
            "active",
            "previous",
            "next",
            "waiting"
        );


        /*
            ACTIVE CARD
        */

        if (index === activeIndex) {

            card.classList.add("active");
        }


        /*
            PREVIOUS CARD
        */

        else if (
            index ===
            (activeIndex - 1 + cards.length)
            % cards.length
        ) {

            card.classList.add("previous");
        }


        /*
            NEXT CARD
        */

        else if (
            index ===
            (activeIndex + 1)
            % cards.length
        ) {

            card.classList.add("next");
        }


        /*
            WAITING CARD
        */

        else {

            card.classList.add("waiting");
        }

    });


    updateProjectText();
}


/* =========================================
   CHANGE PROJECT TEXT
========================================= */

function updateProjectText() {

    const activeCard =
        cards[activeIndex];


    /*
        Start fade-out
    */

    projectInfo.classList.add("changing");


    setTimeout(() => {

        /*
            Change category
        */

        projectCategory.textContent =
            activeCard.dataset.category;


        /*
            Change title
        */

        projectTitle.textContent =
            activeCard.dataset.title;


        /*
            Change description
        */

        projectDescription.textContent =
            activeCard.dataset.description;


        /*
            Change creators
        */

        projectCreators.innerHTML =
            activeCard.dataset.creators
                .replace("|", "<br>");


        /*
            Fade text back in
        */

        projectInfo.classList.remove("changing");

    }, 250);
}


/* =========================================
   INITIAL PROJECT
========================================= */

updateCards();


/* =========================================
   CLICK CARD
========================================= */

cards.forEach((card, index) => {

    card.addEventListener("click", () => {

        activeIndex = index;

        updateCards();

    });

});


/* =========================================
   SCROLL
========================================= */

window.addEventListener("wheel", (event) => {

    /*
        Get position of project section
    */

    const sectionRect =
        projectsSection.getBoundingClientRect();


    /*
        Check if mouse is inside
        the project section
    */

    const mouseInside =
        event.clientX >= sectionRect.left &&
        event.clientX <= sectionRect.right &&
        event.clientY >= sectionRect.top &&
        event.clientY <= sectionRect.bottom;


    /*
        Don't change projects if the
        mouse isn't over the project section
    */

    if (!mouseInside) {

        return;
    }


    /*
        Prevent several projects changing
        from one fast scroll
    */

    if (scrollLocked) {

        return;
    }


    scrollLocked = true;


    /* ================================
       SCROLL DOWN
    ================================= */

    if (event.deltaY > 0) {

        activeIndex =
            (activeIndex + 1) % cards.length;
    }


    /* ================================
       SCROLL UP
    ================================= */

    else {

        activeIndex =
            (activeIndex - 1 + cards.length)
            % cards.length;
    }


    /*
        Update cards and text
    */

    updateCards();


    /*
        Wait for the card animation
        before allowing another change
    */

    setTimeout(() => {

        scrollLocked = false;

    }, 700);

});







const personalcards =
    document.querySelectorAll(
        ".personal-project-card"
    );


const personalprojectInfo =
    document.querySelector(
        ".personal-project-info"
    );


const personalprojectCategory =
    document.getElementById(
        "personal-project-category"
    );


const personalprojectTitle =
    document.getElementById(
        "personal-project-title"
    );


const personalprojectDescription =
    document.getElementById(
        "personal-project-description"
    );


const personalprojectCreators =
    document.getElementById(
        "personal-project-creators"
    );


const personalprojectsSection =
    document.querySelector(
        ".personal-projects-section"
    );


let personalactiveIndex = 0;

let personalscrollLocked = false;



/* =========================================
   UPDATE PERSONAL CARDS
========================================= */

function updatepersonalCards() {

    personalcards.forEach(
        (personalcard, index) => {

            /*
                Remove previous position
            */

            personalcard.classList.remove(
                "active",
                "previous",
                "next",
                "waiting"
            );


            /*
                ACTIVE CARD
            */

            if (
                index === personalactiveIndex
            ) {

                personalcard.classList.add(
                    "active"
                );

            }


            /*
                PREVIOUS CARD
            */

            else if (
                index ===
                (
                    personalactiveIndex - 1
                    + personalcards.length
                )
                % personalcards.length
            ) {

                personalcard.classList.add(
                    "previous"
                );

            }


            /*
                NEXT CARD
            */

            else if (
                index ===
                (
                    personalactiveIndex + 1
                )
                % personalcards.length
            ) {

                personalcard.classList.add(
                    "next"
                );

            }


            /*
                WAITING CARD
            */

            else {

                personalcard.classList.add(
                    "waiting"
                );

            }

        }
    );


    updatepersonalProjectText();

}



/* =========================================
   CHANGE PERSONAL PROJECT TEXT
========================================= */

function updatepersonalProjectText() {

    const personalactiveCard =
        personalcards[
            personalactiveIndex
        ];


    /*
        Fade text out
    */

    personalprojectInfo.classList.add(
        "changing"
    );


    setTimeout(() => {

        /*
            CATEGORY
        */

        personalprojectCategory.textContent =
            personalactiveCard.dataset.category;


        /*
            TITLE
        */

        personalprojectTitle.textContent =
            personalactiveCard.dataset.title;


        /*
            DESCRIPTION
        */

        personalprojectDescription.textContent =
            personalactiveCard.dataset.description;


        /*
            CREATORS
        */

        personalprojectCreators.innerHTML =
            personalactiveCard.dataset.creators
                .replace("|", "<br>");


        /*
            Fade text back in
        */

        personalprojectInfo.classList.remove(
            "changing"
        );

    }, 250);

}



/* =========================================
   INITIAL PERSONAL PROJECT
========================================= */

updatepersonalCards();



/* =========================================
   CLICK PERSONAL CARD
========================================= */

personalcards.forEach(
    (personalcard, index) => {

        personalcard.addEventListener(
            "click",
            () => {

                personalactiveIndex = index;

                updatepersonalCards();

            }
        );

    }
);



/* =========================================
   SCROLL PERSONAL PROJECTS
========================================= */

window.addEventListener(
    "wheel",
    (event) => {

        /*
            Get section position
        */

        const sectionRect =
            personalprojectsSection
                .getBoundingClientRect();


        /*
            Check if mouse is inside
            Personal section
        */

        const mouseInside =
            event.clientX >=
                sectionRect.left &&

            event.clientX <=
                sectionRect.right &&

            event.clientY >=
                sectionRect.top &&

            event.clientY <=
                sectionRect.bottom;


        /*
            Stop if mouse isn't
            inside section
        */

        if (!mouseInside) {

            return;

        }


        /*
            Stop multiple scrolls
        */

        if (personalscrollLocked) {

            return;

        }


        personalscrollLocked = true;


        /*
            SCROLL DOWN
        */

        if (event.deltaY > 0) {

            personalactiveIndex =
                (
                    personalactiveIndex + 1
                )
                % personalcards.length;

        }


        /*
            SCROLL UP
        */

        else {

            personalactiveIndex =
                (
                    personalactiveIndex - 1
                    + personalcards.length
                )
                % personalcards.length;

        }


        /*
            Update cards
        */

        updatepersonalCards();


        /*
            Unlock after animation
        */

        setTimeout(() => {

            personalscrollLocked = false;

        }, 700);

    }
);



// console.log("JavaScript is working!");

// const cards = document.querySelectorAll(".project-card");

// const category = document.getElementById("project-category");
// const title = document.getElementById("project-title");
// const description = document.getElementById("project-description");
// const creators = document.getElementById("project-creators");


// // Function that changes the text
// function changeProjectText(card) {

//     const newCategory = card.dataset.category;
//     const newTitle = card.dataset.title;
//     const newDescription = card.dataset.description;
//     const newCreators = card.dataset.creators;


//     // Fade out
//     category.style.opacity = "0";
//     title.style.opacity = "0";
//     description.style.opacity = "0";
//     creators.style.opacity = "0";


//     setTimeout(() => {

//         category.textContent = newCategory;

//         title.textContent = newTitle;

//         description.textContent = newDescription;

//         creators.innerHTML =
//             newCreators.replace("|", "<br>");


//         // Fade in
//         category.style.opacity = "1";
//         title.style.opacity = "1";
//         description.style.opacity = "1";
//         creators.style.opacity = "1";

//     }, 150);
// }



// // ======================================
// // SCROLL DETECTION
// // ======================================

// const observer = new IntersectionObserver(

//     (entries) => {

//         entries.forEach(entry => {

//             if (entry.isIntersecting) {

//                 // Change the text to match
//                 // the picture currently visible
//                 changeProjectText(entry.target);

//             }

//         });

//     },

//     {
//         threshold: 0.6
//     }

// );


// // Watch every project card
// cards.forEach(card => {

//     observer.observe(card);

// });





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