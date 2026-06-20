document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});

const whatsappButton = document.getElementById("whatsappFloat");

window.addEventListener("scroll", () => {
    if(window.scrollY > 500){
        whatsappButton.classList.add("pulse");
    }else{
        whatsappButton.classList.remove("pulse");
    }
});
const workflow = document.querySelector(".workflow");
const cards = document.querySelectorAll(".workflow-card");
const panel = document.querySelector(".workflow-panel");
const contents = document.querySelectorAll(".workflow-content");

function activateWorkflow(step){

    panel.classList.add("open");

    cards.forEach(card => card.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));

    document
        .querySelector(`.workflow-card[data-step="${step}"]`)
        .classList.add("active");

    document
        .querySelector(`.workflow-content[data-step="${step}"]`)
        .classList.add("active");
}

function closeWorkflow(){

    panel.classList.remove("open");

    cards.forEach(card => card.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));
}

cards.forEach(card => {

    // Desktop
    card.addEventListener("mouseenter", () => {
        if(window.innerWidth > 768){
            activateWorkflow(card.dataset.step);
        }
    });

    // Mobile
    card.addEventListener("click", () => {
        if(window.innerWidth <= 768){
            activateWorkflow(card.dataset.step);
        }
    });

});

// Cierra al salir de toda la sección (solo desktop)
workflow.addEventListener("mouseleave", () => {
    if(window.innerWidth > 768){
        closeWorkflow();
    }
});