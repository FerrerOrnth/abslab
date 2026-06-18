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