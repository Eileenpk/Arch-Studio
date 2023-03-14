# Arch Studio - A four page responsive website 

## Table of contents

- [Overview](#overview)
  - [The HTML](#the-HTML)
  - [The CSS](#the-CSS)
  - [The JavaScript](#the-JavaScript)
  - [The Expected Behavior](#Expected-Behavior)
    - [All Pages](#All-Pages)
    - [The Home page](#Home)
    - [The About page](#About)
    - [The Contact page](#Contact)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
- [Author](#author)

## Overview
This project is built with HTML5, CSS, Tailwind, React (ES6), and Next.js(13). The data for the website will come from Firebase The form data will be sent to the Firebase API for collection and an auto response will be sent using the data for a custom auto email response. 

### The HTML
The HTML has:

- Four pages:
    - Home

        - Header section - project carousel 
            - Page name (h1)
            - Uses GoToSlideInCarousel function
            - Project name (h2)
            - Info text (p)
            - background image for project
            - display correct background image at desktop, tablet and mobile size

        - Welcome section
            - Welcome (h2)
            - Image
            - Welcome text

        - Small team section
            - Background Image
            - Small team big ideas(h3)
            - About Us CTA btn -> links to about.js

        - Featured section
            - Featured cards
                - Background image
                - Overlay
                    - Number of project
                    - Project name
                    - CTA link to view all projects -> links to portfolio page

    - Portfolio

        - Header section
            - Page name (h1)

        - Portfolio card section (maps all projects and returns portfolio cards)
            - Portfolio card
                - Background image
                - Name of project (h2)
                - Date of project

    - About

        - Header
            - Page name (h1)
            - About (h2)
            - Subheading (h3)
            - Info text (p)
            - Background image

        - Our heritage section 
            - Our heritage (h3)
            - Info (p)
            - Image

        - Leaders section (maps all employees and returns leaders cards)
            - The leaders (h2)
                - Leaders card
                    - Name (h3)
                    - Avatar
                    - Role (h4)

    - Contact 

        - Header
            - Page name (h1)
            - About (h2)
            - Subheading (h3)
            - Info text (p)
            - Background image
        
        - Contact details section 
            - Contact details (h2)
            - contact detail card section (maps all offices and returns contact detail cards)
                - Mail -> opens email to send an email to the address
                - Address
                - Phone
                - CTA view on map btn -> uses the google maps API
            
            - Map section
                - Google maps API to view address on map when pin is clicked

        - Connect with us section
            - Connect with us (h2)
            - Form
                - Name 
                - Email address
                - Message
                - Submit btn
                - Form validation 
                    - Uses Form validation function that returns error
                    - If error show Form error (<div>)
                - Form submit
                    - Uses Firestore collection
                - Auto response to form submission 
                    - Uses Firestore-send-email

- All pages will be wrapped with the following components:
    - Nav
        - Logo -> link to Home page
        - Portfolio page link
        - About us page link
        - Contact page link
        
    - Footer
        - Logo light -> link to Home page
        - Portfolio page link
        - About us page link
        - Contact page link
        - See our Portfolio page CTA btn -> links to Portfolio page

### The CSS
The CSS has:
- Modular style sheets
- Mobile first development
- Tailwind - only used for general styling like margin and padding
- Prefers light or dark mode
- Variables
- The organization of the styles.css will be(in descending order):

    - Variables
    - Resets
    - All typography
    - Media query for typography
    - General styles
    - Media query for General styles

### The JavaScript
The JavaScript has:
- FetchData function to retrieve data to be displayed
- GetWindowWidth function to dynamically render content
- GoToSlideInCarousel function to go the the next slide in the carousel
- Logic for mobile nav bar
    - Use getWindowWidth function to display mobile nav if width < 768, else display regular nav
    -  if < 768 and navIsOpen (state) === false
        - display hamburger.svg
    - If < 768 and navIsOpen (state) === true
        - Display close.svg not hamburger.svg
        - Display <ul>(z-index: 2) with links under nav bar with overlay(z-index: 1)

- Form validation
- SendForm function to send form data to firebase collection and trigger auto send email
- showPopUp function should show a popup with info for the corresponding office

### Expected Behavior

#### All Pages

- When any of the links in the Nav bar is clicked, navigate to the corresponding page

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site


#### Home
- When one of the carousel btns is clicked show that projects info in header
- When one of the 3 Featured projects near the bottom are clicked, navigate to the `/portfolio` page.

#### Portfolio

- The thumbnails on the `/portfolio` index page should be anchor tags but should not link anywhere. If this were a real site, these could link to the project websites individually.
#### About
- When the "Contact us" call-to-action in the Ready to get started component is clicked, navigate to the Contact page

- See the correct content for each team member when the `+` icon is clicked

- Hide the extra content for each team member when the `-` icon is clicked

#### Contact

- Clicking on "View on Map" should open a new page on google maps that is for that location
- Clicking on a map pin should show a popup with the info for that office

- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email Address` or `Message` fields are empty should show "This field is required"
  - The `Email Address` is not formatted correctly should show "Please use a valid email address"

- On submit
    - Send form data to firebase collection
    - Auto send custom HTML responsive email from Firestore-send-email

### Screenshot

![screen shot of full screen webpage]()
![screen shot of mobile webpage]()
### Links

- Solution URL: [GitHub]()
- Live Site URL: [live site]()

### Built with

- [Semantic HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5) - HTML5 with clear and descriptive tags for better accessibility and search engine optimization
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html) - A utility-first CSS framework
- Mobile-first workflow
- [Tailwind](https://tailwindcss.com/) - A utility-first CSS framework
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Firebase](https://firebase.google.com/) - Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world.

## Author

- Frontend Mentor - [@Eileenpk](https://www.frontendmentor.io/profile/Eileenpk)
- LinkedIn - [@Eileenpk](www.linkedin.com/in/eileen-dangelo)
