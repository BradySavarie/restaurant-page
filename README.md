<h1>💪 Superfoodies</h1>

<h2>A Website for a Mock Health Foods Company</h2>

<img width="1025" alt="Superfoodies Home Page" src="https://user-images.githubusercontent.com/106128212/222635861-94b2f1fb-e76f-4671-9261-4829afe8b365.png">

<i>This website is a simple digital storefront for a mock health foods company that features a tabbed-browsing navigation system. The design was crafted using Tailwind, and each page has been developed as a Javascript module that is bundled using Webpack.</i>

Live Link: https://bradysavarie.github.io/restaurant-page/

<hr>

This application is a part of The Odin Projects Full-Stack Javascript curriculum and was developed with the purpose of integrating Webpack and ES6 modules into my workflow. I decided to use Tailwind for styling so I could get comfortable working with more complicated project configurations.

<h3>What I Learned</h3>

This project taught me alot about the benefits of using modules. Splitting my code up into more managable chunks and then bundling them together really helps with maintainability. I found it alot easier to navigate through my repository and find the lines of code that I need to make changes to. Configuring Webpack to work with Tailwind was quite a challenge as well and it really helped me understand how to manage bundled assets and use loaders properly which I think will prove to be important in future projects. I also learned that big chunks of html can be dynamically generated much easier using template strings within an elements innerHTML.

<h3>What I Would Do Differently</h3>

I think my code can be optimized by having header and footer components that are not re-parsed each time a user changes the page. Using the adjacentHTML method to replace only the body content of each tag would have been a better choice in this context so I will keep that in mind moving forward. I also noticed alot of code duplication as a result of using Tailwind for styling. I likely would have been better off creating some custom component classes and using the apply directive to style some parts of this project rather than repeat styles on reused elements such as the menu items. I also caught myself focusing on designing for desktop resolutions before concerning myself with mobile which I recognize is not good practice. I also didn't make the hamburger menu functional as I feel i've learned what I set out to with this project and it is time to move to the next one, but maybe in the future I will come back and add that feature in.
