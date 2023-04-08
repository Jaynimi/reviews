// Reviews array
const reviews = [
    {
        id: 1,
        name: "Jay",
        job: "Web Developer",
        img: "imgs/img1.png",
        text: "Jay is a budding web developer trying to improve her skills in JavaScript. She has no idea what to write here, so she's just going to stop now."
    },
    {
        id: 2,
        name: "Adeola Jay",
        job: "Writer",
        img: "imgs/img3.png",
        text: "Adeola is an amazing writer that enjoys passing information and feeding minds through written words. You can find her researching and creating worlds no-one has ever lived in with her imagination and little keyboard."
    },
    {
        id: 3,
        name: "Dee Jay",
        job: "Fitness Critic",
        img: "imgs/img2.png",
        text: "Omoleegho is a fitness enthusiast. She's been working out since she was 15 years old. And if you ask her, she'd tell you it saved her life and it still makes it better."
    },
    {
        id: 4,
        name: "Jay Tee",
        job: "Model",
        img: "imgs/img4.png",
        text: "Tee is a sweet girl that enjoys taking pictures of herself being weird. The interesting part is that she never posts them. You could say that's a secret talent of hers."
    },
    {
        id: 5,
        name: "Omoh",
        job: "University Student",
        img: "imgs/img5.png",
        text: "Omoh is a student of the prestigious Obafemi Awolowo University, OAU. She majors in Animal sciences, and though she's not the sharpest tool in the box, she's doing pretty good as a student."
    },
];

//select items from html file
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info =  document.getElementById("info");


//select buttons from html file
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const  randomBtn = document.querySelector(".random-btn"  );

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
    showPerson()
});

//show person based on array item
function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent =item.text;
}

//show next review
nextBtn.addEventListener('click', function () {
    currentItem++
    if (currentItem >= reviews.length) {
        currentItem = 0;
    }
    showPerson();
});

//show previous review
prevBtn.addEventListener('click', function () {
    currentItem--
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});


// show random review
randomBtn.addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * reviews.length);
    currentItem = randomNumber;
    showPerson();
});

