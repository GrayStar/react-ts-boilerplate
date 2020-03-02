This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the react-app in development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The browser will hot reload on save.<br />
You will see any lint errors in the console.

### `npm run test`

Launches jest in interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

jest configuration can be found in the package.json.

### `npm run build`

Builds the app for production to the `build` folder.<br />
Correctly bundles React in production mode and optimizes the build for performance.

Build is minified and the filenames are hashed.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run start:dev` and `npm run start:prod`

Starts the node server in either development or production mode.<br />
Server runs at [http://localhost:8080](http://localhost:8080).

Package.json contains a proxy to port 8080 so the react-app running on port 3000 can communicate with it.<br/>
In order to test communications, you must run both the react-app and the node server in seperate terminal windows.
It is NOT required to run the node server while working on the react-app.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
