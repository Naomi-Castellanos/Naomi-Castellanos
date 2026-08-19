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

const title = document.querySelector(".hover-h1");
const normalTitle = title.querySelector(".normal-title");
const translations = title.querySelectorAll(".hover-text-content");

let currentIndex = 0;
let interval;

title.addEventListener("mouseenter", function () {

    // Hide the original name
    normalTitle.style.display = "none";

    // Show the first translation
    translations[currentIndex].style.display = "inline";

    // Keep changing the language
    interval = setInterval(function () {

        // Hide current translation
        translations[currentIndex].style.display = "none";

        // Move to the next translation
        currentIndex++;

        // Go back to the beginning
        if (currentIndex >= translations.length) {
            currentIndex = 0;
        }

        // Show the next translation
        translations[currentIndex].style.display = "inline";

    }, 700); // changes every 1 second
});


title.addEventListener("mouseleave", function () {

    // Stop changing languages
    clearInterval(interval);

    // Hide all translations
    translations.forEach(function(translation) {
        translation.style.display = "none";
    });

    // Show original name
    normalTitle.style.display = "inline";

    // Start from Japanese next time
    currentIndex = 0;
});
