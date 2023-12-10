# My Shop App Frontend

This is the frontend for the My Shop App, an e-commerce platform that allows users to buy and sell products online. This frontend is built with React using React Router Dom to create a single page app, Redux and Redux Toolkit for state management and Mantine UI for component styles.

## Installation

To install this frontend, make sure you have Node.js and Yarn installed on your machine. Then, clone this repository and run the following command:

```
yarn install
```

This will install all dependencies necessary to run the frontend.

## Configuration

Before running the frontend, make sure to configure the API URL in the `.env` file. Update the `REACT_APP_API_URL` variable with the URL for the backend API.

## Execution

To run the frontend, run the following command:

```
yarn start
```

This will start the development server at `http://localhost:5173`.

## Routes

The My Shop App frontend has the following routes:

- `/`: Home page with featured products and navigation links.
- `/products`: List of all products.
- `/products/:id`: Individual product page.
- `/cart`: Shopping cart page.
- `/checkout`: Checkout page.

These routes are managed with React Router Dom and allow for seamless navigation within the single page app.

## State Management

This frontend uses Redux and Redux Toolkit for state management. The state is organized into slices with each slice representing a specific aspect of the app's state, such as products or cart items.

## UI Components

This frontend uses Mantine UI for component styles. The components are designed to be reusable and customizable, allowing for a consistent and visually appealing user interface.

## Live preview
[https://65752688a8508d4ec5ee188b--heroic-sorbet-642922.netlify.app](https://65752688a8508d4ec5ee188b--heroic-sorbet-642922.netlify.app)

You will be automatically logged in as a test user, since this preview isn't connected to a back-end server

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
