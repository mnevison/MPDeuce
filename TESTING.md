# Bluey! Interactive Front End Design/Development - Milestone Project 2.

![AmIResponsive Image](docs/images/amiresponsive-main.png)

Visit the deployed site: [Bluey!](https://mnevison.github.io/MPDeuce/index.html)

---

## Contents

- [Automated Testing](#automated-testing)

  - [W3 Validator - HTML](#w3-validator---html)
  - [W3 Jigsaw - CSS](#w3-jigsaw---css)
  - [JSHint - Javascript](#jshint---javascript)
  - [Lighthouse](#lighthouse)

- [Manual Testing](#manual-testing)

  - [User Stories](#testing-user-stories)
  - [Full Site & Feature Testing](#full-site--feature-testing)
    - [Devices](#devices)
    - [Features](#features)

    ---

## Automated Testing

### W3 Validator - HTML

[W3C Validator](https://validator.w3.org/) has been used to ensure the validity of the HTML markup across the project.

- [Index/Home](docs/testing/w3c-home.png) - Fixed 1 issue with an aria-current label being incorrect - No errors.
- [Information](docs/testing/w3c-info.png) - Fixed 1 issue with an aria-current label being incorrect - No errors.
- [Game](docs/testing/w3c-game.png) - Fixed 1 issue with an aria-current label being incorrect - No errors.

### W3 Jigsaw - CSS

- [CSS](docs/testing/w3jigsaw-css.png) - This image will show 9 "errors" - I have chosen to leave these errors for the following reason:

    - When going through the project I wanted to try some different things vs my first one. One of those things was using "modern" CSS - The methods I used have good browser support (Tested on Chrome, Safari, Edge and Firefox) and the CSS works across the site. 

    - The first "error" is related to "Container Queries" - An alternative to "Media Queries". You need to define the container by defining the "container-type".
        - ![Container Query Example](docs/testing/container-css.png)
        - This is what a "Container Query" looks like - Very much like a media one, but your targeting one specific container rather than the whole site. As I used Bootstrap assets, not everything needed to be included, hence why I wanted to try "Container Queries".

    - The rest of the errors are related to "Nesting" - I find this method to be a cleaner way to do CSS for the most part, where applicable. You target the parent, and then within the parent you can target the children and style them in a block which is easier to read and follow along with. 
        - ![Nesting CSS](docs/testing/nested-css.png)

### JShint - Javascript 

[JSHint](https://jshint.com/) has been used to validate my JavaScript. 

