# Bluey! Interactive Front End Design/Development - Milestone Project 2.

![AmIResponsive Image](docs/images/amiresponsive-main.png)

Visit the deployed site: [Bluey!](https://mnevison.github.io/MPDeuce/index.html)

I have young children.. So when I mentioned the possibility of making a memory game, the first thing they suggested was doing one based on Bluey. I went for a very friendly vibe with this site, and tried to contain some useful information about the show and main characters along with a game that can be played for hours (my kids were my primary game testers..).

## Contents

- [User Experience](#user-experience-ux)

  - [User Stories](#user-stories)

- [Design](#design)

  - [Colour Scheme](#colour-scheme)
  - [Typography](#typography)
  - [Imagery](#imagery)
  - [Wireframes](#wireframes)
  - [Features](#features)

    - [Homepage](#home-page)
    - [Experience](#experience)
    - [Projects](#projects)
    - [Contact](#contact)
    - [Form Submit](#form-submit)
    - [404](#404)
    - [Site Wide](#site-wide)
    - [Future Updates/Changes](#future-improvementschanges)

  - [Accessability](#accessibility)

- [How It Was Built](#how-it-was-built)

  - [Languages Used](#languages-used)
  - [Libraries, Websites & Programs Used](#libraries-websites--programs-used)

- [Deployment & Local Development](#deployment--local-development)

  - [Deployment](#deployment)
  - [Local Development](#local-development)

- [Testing](#testing)

  - [Solved Bugs](#solved-bugs)
  - [Known Bugs](#known-bugs)

- [Credits](#credits)

  - [Code Used](#code-used)
  - [Page Content](#page-content)
  - [Media](#media)
  - [Acknowledgements](#acknowledgements)

***

## User Experience (UX)

  ### User Stories

  #### First Time Visitor Goals

  - I LOVE Bluey and I can't get enough!
  - I want something to entertain my kids!
  - I want to find my way around the site easily.

  #### Returning Visitor Goals

  - I LOVE Bluey and I can't get enough!
  - Explore the site, look at the useful link's that show you everything Bluey!

  #### Frequent Visitor Goals

  - I LOVE Bluey and I can't get enough!
  - Playing the memory game - Simple design with a nice pop-up that gives that gratification upon completion.

  ***

  ## Design

  ### Colour Scheme

  The colours used across the site are all represented in the main character of the show.. Bluey!. When doing research into the character (that wasn't just my kids telling me about how good the show was..) I came across the official Bluey website [Bluey.tv](https://www.bluey.tv/) where I was able to get a bit of inspiration on the project. This website ended up being VERY useful throughout the project from a design perspective.

  Here are the hex values I used:

  ![colour-scheme](docs/images/colour-scheme.png)

  These were added across the site as custom CSS variables, so if I ever wanted to change the colours it would be a case of changing 3 things rather than going through the whole site where colour is applied.

  ### Typography

  I was able to find my found of choice on Google Fonts.

  I would have loved to use the "Bluey" font (Hello Headline) however I was unable to find a free version of it! Failing that, I wanted something with a "cartoony" vibe, but something that was also very readable. I settled on "Margarine" as the final font for the site.

   - **Script Typeface**: Margarine is classified as a script typeface, meaning it mimics cursive handwriting or calligraphy.
   - **Retro Feel**: It has a vintage, mid-20th-century aesthetic with a friendly, casual vibe.
   - **Thick Strokes**: The letters are bold with thick strokes, making it highly legible and impactful.
   - **Rounded Edges**: The edges of the characters are rounded, adding to its approachable and warm appearance.

  ![font](docs/images/font-preview.png)

  ### Imagery 

  All the images I used on the website I was able to get from [Bluey.tv](https://www.bluey.tv/). Being the "official" Bluey website, they had a wealth of resources on the show and character. 

 - I wanted a nice hero Image for the site and was able to get a nice one of the Heeler family going on a trip!

 - For the game I wanted to use something other than the main cast - So I decided to go with Bluey's friends. 

 - I generated the image to hide the friend cards using AI ([Bing](https://www.bing.com/images/create)).
 
 - Fontawesome was used in the footer for brand logos.

  ### Wireframes
  
  Wireframes were created for various devices using Balsamiq

  ![index-desktop](docs/images/index-wireframe-desktop.png) ![index-mobile](docs/images/index-wireframe-mobile.png)
  ![info-desktop](docs/images/info-wireframe-desktop.png) ![info-mobile](docs/images/info-wireframe-mobile.png)
  ![game-desktop](docs/images/game-wireframe-desktop.png) ![game-mobile](docs/images/game-wireframe-mobile.png)

  ### Features 

  The website is set across 3 pages, made up of the home page, an information page and the game page. 

  Each page is responsive across a range of popular devices.

  - Each page has an "on theme" Favicon.
  - Navigation is present across the site.
  - The footer is present on each page which contains a nav link back to the home page, and also access to popular social media links related to Bluey.
  - I've added an audio element to the information page, where you can listen to the Bluey theme until your hearts content!
  - And it wouldn't be a good game website without.. a game! Again, you can play this until your hearts content.


