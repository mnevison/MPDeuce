document.addEventListener("DOMContentLoaded", function () {
  const friends = [
    { src: "assets/images/game-images/dusty.png", alt: "dusty image" },
    { src: "assets/images/game-images/indy.jpg", alt: "indy image" },
    { src: "assets/images/game-images/judo.png", alt: "judo image" },
    { src: "assets/images/game-images/snickers.png", alt: "snickers image" },
    { src: "assets/images/game-images/socks.png", alt: "socks image" },
    { src: "assets/images/game-images/mackenzie.jpg", alt: "mackenzie image" }
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

    cardContainer.setAttribute("data-id", cardIndex);

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

    cardContainer.classList.add("click");

    if (cardFlipTemp.length >= 2) {
      setTimeout(() => {
        processFlippedCards();
      }, 1000);
      return;
    }

    cardFlipTemp.push(cardContainer);

    if (cardFlipTemp.length === 2) {
      const [firstCard, secondCard] = cardFlipTemp;
      if (firstCard.getAttribute("data-id") === secondCard.getAttribute("data-id")) {
        setTimeout(() => {
          markAsMatched(firstCard, secondCard);
        }, 1000);
      } else {
        setTimeout(() => {
          unflipCards(firstCard, secondCard);
        }, 1000);
      }
    }
  }

  function unflipCards(firstCard, secondCard) {
    firstCard.classList.remove("click");
    secondCard.classList.remove("click");
    cardFlipTemp = [];
  }

  function markAsMatched(firstCard, secondCard) {
    firstCard.classList.add("disabledcard");
    secondCard.classList.add("disabledcard");
    cardFlipTemp = [];
  }

  function startGame() {
    for (let i = 0; i < 12; i++) {
      const card = createFriendCard();
      const cardWithFriend = imageToCard(card);

      card.addEventListener("click", function () {
        checkMatchedCard(card);
      });

      friendCards.appendChild(cardWithFriend);
    }
  }

  startGame();
});