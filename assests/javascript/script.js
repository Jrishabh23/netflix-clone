//Get all answer node
var faq_container = document.querySelectorAll(".answer");
//Show the Faq answer
document.querySelector(".faq").addEventListener("click", (e) => {
    //Toggle the answer block or none
    let display = { none: "block", block: "none" };
    let classes = e.target.dataset.question;
    if (!classes) return;
    console.log(e.target.querySelector("i").classList.remove("fa-plus"));
    e.target.querySelector("i").classList[1] = "fa-times";
    let displayToggle =
        display[document.querySelector(`.${classes}-details`).style.display];
    displayToggle = displayToggle ?? "block";
    //Set display none for all answer
    faq_container.forEach((answer) => {
        answer.style.display = "none";
        //Toggle Icon
        e.target.querySelector("i").classList.remove("fa-times");
        e.target.querySelector("i").classList.add("fa-plus");
    });
    document.querySelector(`.${classes}-details`).style.display = displayToggle;
    if (displayToggle == "block") {
        //Toggle Icon
        e.target.querySelector("i").classList.add("fa-times");
        e.target.querySelector("i").classList.remove("fa-plus");
    }
});
