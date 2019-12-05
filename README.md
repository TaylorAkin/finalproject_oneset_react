
## OneSet


## About OneSet

OneSet is a web application that allows musicians to easily find open availabilities to play, wherever someone has posted an opening.
With 2 user types, musicians and venues(people looking for musicians, both can register and then become searchable to one another. Musicians can find venues that have posted available openings, and Venues can also search for local musicians.


## Getting Started

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 1500 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Built With

- **[Laravel6](https://laravel.com/)**
- **[React.js](https://reactjs.org/)**
- **[BootStrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/)**
- **[reactstrap](https://reactstrap.github.io/)**
- **[MDBootStrap](https://mdbootstrap.com/)**
- **[NPM react-cardflip](https://www.npmjs.com/package/react-card-flip)**
- **[NPM react-youtube](https://www.npmjs.com/package/react-youtube)**


## First Iteration

I chose 11 stories to complete during my first sprint of this project, accomplishing 8 of them.  
Users are able to register and edit their own personal profile with a bio, and tag names for musicians.
Users can also view the opposite user type in a search view, that comes with updated data from their profiles.


## Known Bugs/Things to Fix
 -Fixing buttons on register to toggle press, using a radio instead. Just have to figure out how to capture the event.
 
 -A musician can select multiple of the same tags from the dropdown on their profile.
 
 -I learned late that the Dev Tools IphoneX view does not translate 100%, so I will need to update my footer buttons/icons to style         correctly
 
 -When you refresh the page it takes you back to the profile page(needs to stay on the same)
 
 -When you update your bio, if you refresh it will revert back to what was last in the database. However if you log back in it will be populated as you had just saved it. Needs to be a savy way of conditional rendering from local storage for the refresh.
 
 
## Next Iteration

Continue working through my backlog, focusing on:

-Finishing the profile picture and youtube upload

-Allowing more tag selections for musicians

-Adding a filter search for finding users and musician types

-Creating the calander for venues to populate available time slots
 


## Security Vulnerabilities

If you discover a security vulnerability within OneSet, please send an e-mail to Taylor Akin via [taylorakin.ky@gmail.com](mailto:taylorakin.ky@gmail.com). All security vulnerabilities will be promptly addressed.

## Acknowledgements

A big thanks to Justin Hall and Ian Rios teaching me over the past 16 weeks, and for helping me gain all the knowledge that I now have.







This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
