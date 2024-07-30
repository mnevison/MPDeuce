document.addEventListener("DOMContentLoaded", function () {
  const friends = [
    { src: "assets/images/game-images/dusty.png", alt: "dusty image" },
    { src: "assets/images/game-images/indy.jpg", alt: "indy image" },
    { src: "assets/images/game-images/judo.png", alt: "judo image" },
    { src: "assets/images/game-images/snickers.png", alt: "snickers image" },
    { src: "assets/images/game-images/socks.png", alt: "socks image" },
  ];

  const friendCards = document.querySelector(".friend-cards");

  let cardFlipTemp = [];

  function createFriendCard() {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    const faceCard = document.createElement("div");
    faceCard.classList.add("face-card");

    const showCard = document.createElement("div");
    showCard.classList.add("show-card");

    const frontCard = document.createElement("div");
    frontCard.classList.add("front-card");

    faceCard.appendChild(showCard);
    faceCard.appendChild(frontCard);

    cardContainer.appendChild(faceCard);

    const cardHidden = document.createElement("img");
    cardHidden.src = "assets/images/game-images/question-mark.jpeg";
    cardHidden.alt = "question mark box";
    showCard.appendChild(cardHidden);

    return cardContainer;
  }

  let cardCount = {};

  function imageToCard(cardContainer) {
    const frontCard = cardContainer.querySelector(".front-card");

    let cardIndex;

    do {
      cardIndex = Math.floor(Math.random() * friends.length);
    } while (cardCount[cardIndex] >= 2);
    cardCount[cardIndex] = (cardCount[cardIndex] || 0) + 1;

    cardContainer.setAttribute("id", cardIndex);

    const img = document.createElement("img");
    img.src = friends[cardIndex].src;
    img.alt = friends[cardIndex].alt;

    frontCard.append(img);

    return cardContainer;
  }

  function checkMatchedCard(cardContainer) {
    if (
      cardContainer.classList.contains("disabledcard") ||
      cardContainer.classList.contains("click")
    ) {
      return;
    }

    if (cardFlipTemp.length >= 2) {
      setTimeout(() => {
        processFippeedCards();
      }, 1000);
      return;
    }

    if (cardFlipTemp.length === 0) {
      cardFlipTemp.push(cardContainer.id);
      return;
    }

    if (cardFlipTemp.length > 0 && cardFlipTemp[0] !== cardContainer.id) {
      cardFlipTemp = [];

      setTimeout(() => {
        unflipCard();
      }, 500);
      return;
    }
    if (cardFlipTemp.length > 0 && cardFlipTemp.includes(cardContainer.id)) {
      cardFlipTemp = [];
      setTimeout(() => {
        markAsMatched(cardContainer.id);
      }, 1000);
      return;
    }
  }

  function unflipCard(){
    cardFlipTemp = [];

    const cards = document.querySelector(".card-container");

    cards.forEach((cardContainer) =>{
        if(!cardContainer.classList.contains("disabledcard")){
            cardContainer.classList = ["card-container"];
        }
    });
  }

  function markAsMatched(id){
    const cards = document.querySelectorAll(".card-container");
    
    cards.forEach((cardContainer)=>{
        if (cardContainer.id === id){
            cardContainer.classList = ["card-container disabledcard click"];
        }
    });
  }
  function startGame() {
    for (let i = 0; i < 10; i++) {
      const card = createFriendCard();
      const cardWithFriend = imageToCard(card);

      card.addEventListener('click', function() {
        checkMatchedCard(card);
        card.classList.add('click');
      });

      friendCards.appendChild(cardWithFriend);
    }
  }

  startGame();
});
