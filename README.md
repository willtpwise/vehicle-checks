# vehicle-checks

## Device setup
1. [Download this repo](https://github.com/willtpwise/vehicle-checks/archive/master.zip) (or clone it if you know how to do that!)
1. Install [Node](https://nodejs.org/en/download/)
1. Using your terminal, navigate to the folder where you've downloaded this repo
    - For Mac, try `cd ~/Downloads/vehicle-checks-master`
    - For Windows, see [this example](https://www.digitalcitizen.life/command-prompt-how-use-basic-commands)
1. Install the dependencies of the app by running `npm install`
1. Run the local development server by running `npm run serve`
1. The app will now be available at [http://localhost:8080/](http://localhost:8080/). Open it up in a browser to check that it's working
1. Now open the repo in a code editor of your choice, some popular options include VSCode, Atom and Sublime. All of which are free to use.
1. Changes made to the files inside of `src/` will automatically trigger an update. Try it out, open up `src/pages/HomePage.vue`, change the page title from "Vehicle Checks" to whatever and hit save!

## Code Tour
This app is written in [Vue.js](https://vuejs.org/v2/guide/).

You might want to install an extension to your code editor to give you syntax highlighting. Here's how to [install one for VSCode](https://marketplace.visualstudio.com/items?itemName=octref.vetur).

The app has two pages. All pages are stored in the `src/pages` directory.
1. The home page, which lives at `src/pages/HomePage.vue` and can be accessed in the browser by visiting [http://localhost:8080/](http://localhost:8080/)

1. The vehicle page, which lives at `src/pages/VehiclePage.vue` and can be accessed in the browser by visiting either:
    - [http://localhost:8080/vehicle/cat-1](http://localhost:8080/vehicle/cat-1), or
    - [http://localhost:8080/vehicle/pc](http://localhost:8080/vehicle/pc)

This app was bootstrapped using the [Vue CLI](https://cli.vuejs.org/guide/).

## Helpful Docs

- [W3Schools](https://www.w3schools.com/tags/default.asp) - Everything about HTML, CSS and JavaScript
- [Vue.js](https://vuejs.org/v2/guide/)

