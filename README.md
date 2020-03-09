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

### `npm run test:static`

Launches jest in static mode.<br />
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

### `npm run start`

Starts the node server.<br />
Server runs at locally on port `8080`.

The node server is currently only used to populate configuration (`process.env`) variables at render time in production. It does not need to be running during local development, as default configuration variables are provided by `@/lib/config/constants`.

If you ever need to test your code against the server, create a production build of the react app using `npm run build`. Then start the node server point your browser to [http://localhost:8080](http://localhost:8080).
