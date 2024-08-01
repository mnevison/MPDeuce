/* jshint esversion: 6 */

// Array of the the images used with alt tags
document.addEventListener("DOMContentLoaded", function () {
  const friends = [
    { src: "assets/images/game-images/dusty.png", alt: "dusty image" },
    { src: "assets/images/game-images/indy.jpg", alt: "indy image" },
    { src: "assets/images/game-images/judo.png", alt: "judo image" },
    { src: "assets/images/game-images/snickers.png", alt: "snickers image" },
    { src: "assets/images/game-images/socks.png", alt: "socks image" },
    { src: "assets/images/game-images/mackenzie.jpg", alt: "mackenzie image" },
  ];

  // Container for the card elements

  const friendCards = document.querySelector(".friend-cards");

  // Button to reset the game

  const resetButton = document.getElementById("reset-button");

  // Stores flipped card for comparison
  let cardFlipTemp = [];
  // Keeps track of each card type
  let cardCount = {};
  // Flags to prevent more than 2 cards being flipped
  let cardsFlipped = false;

  // Creates new card elements with a front and back face
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

    // Hidden image for the card's back face
    const cardHidden = document.createElement("img");
    cardHidden.src = "assets/images/game-images/question-mark.jpeg";
    cardHidden.alt = "question mark box";
    cardHidden.tabIndex = 0;
    showCard.appendChild(cardHidden);

    return cardContainer;
  }
  // Assigns a random image to the card and sets its data-id attribute

  function imageToCard(cardContainer) {
    const frontCard = cardContainer.querySelector(".front-card");

    let cardIndex;
    // Ensure each card type appears exactly twice
    do {
      cardIndex = Math.floor(Math.random() * friends.length);
    } while (cardCount[cardIndex] >= 2);
    cardCount[cardIndex] = (cardCount[cardIndex] || 0) + 1;

    cardContainer.setAttribute("data-id", cardIndex);

    const img = document.createElement("img");
    img.src = friends[cardIndex].src;
    img.alt = friends[cardIndex].alt;
    img.tabIndex = 0;

    frontCard.append(img);

    return cardContainer;
  }
  // Handles card click events and checks for matches
  function checkMatchedCard(cardContainer) {
    if (
      cardsFlipped ||
      cardContainer.classList.contains("disable") ||
      cardContainer.classList.contains("click")
    ) {
      return;
    }

    cardContainer.classList.add("click");

    cardFlipTemp.push(cardContainer);

    if (cardFlipTemp.length === 2) {
      cardsFlipped = true;
      const [firstCard, secondCard] = cardFlipTemp;
      if (
        firstCard.getAttribute("data-id") === secondCard.getAttribute("data-id")
      ) {
        setTimeout(() => {
          markAsMatched(firstCard, secondCard);
          if (checkGameCompletion()) {
            Swal.fire({
              title: "Good job!",
              text: "You found all of Bluey's friends!",
              icon: "success",
            });
          }
          cardsFlipped = false;
        }, 1000);
      } else {
        setTimeout(() => {
          turnCards(firstCard, secondCard);
          cardsFlipped = false;
        }, 1000);
      }
    }
  }
  // Hides the cards if they do not match
  function turnCards(firstCard, secondCard) {
    firstCard.classList.remove("click");
    secondCard.classList.remove("click");
    cardFlipTemp = [];
  }
  // Marks the cards as matched by adding the 'disable' class
  function markAsMatched(firstCard, secondCard) {
    firstCard.classList.add("disable");
    secondCard.classList.add("disable");
    cardFlipTemp = [];
  }
  // Checks if all pairs of cards have been matched
  function checkGameCompletion() {
    const matchedCards = document.querySelectorAll(".card-container.disable");
    return matchedCards.length === 12;
  }
  // Initializes the game by creating and shuffling cards
  function startGame() {
    cardCount = {};
    cardFlipTemp = [];
    cardsFlipped = false;
    // Clear the card container
    friendCards.innerHTML = "";

    // Create 12 cards and add them to the container
    for (let i = 0; i < 12; i++) {
      const card = createFriendCard();
      const cardWithFriend = imageToCard(card);

      card.addEventListener("click", function () {
        checkMatchedCard(card);
      });

      friendCards.appendChild(cardWithFriend);
    }
  }
  // Resets the game by restarting it
  function resetGame() {
    startGame();
  }

  resetButton.addEventListener("click", resetGame);

  startGame();
});
