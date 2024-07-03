const cards = document.querySelectorAll(".card-wrapper");

cards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
        if(event.clientX < (card.getBoundingClientRect().left + card.getBoundingClientRect().width/2) && (event.clientX > card.getBoundingClientRect().left)){
            card.style.transform = "rotateY(-30deg)";
        } else if (event.clientX > (card.getBoundingClientRect().left + card.getBoundingClientRect().width/2) && (event.clientX < card.getBoundingClientRect().left + card.getBoundingClientRect().width)){
            card.style.transform = "rotateY(30deg)";
        } else if (event.clientX < (card.getBoundingClientRect().left) || (event.clientX > card.getBoundingClientRect().left + card.getBoundingClientRect().width)){
            card.style.transform = "rotate(0)";
        }
    })
})