# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#############################################################################################
Tailwind Setup :
Setting up Tailwind CSS in a React App project.

Install Tailwind via npm
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9


Install and configure CRACO
Since Create React App doesn’t let you override the PostCSS configuration natively, we also need to install CRACO to be able to configure Tailwind:
npm install @craco/craco

Next, generate the tailwind.config.js file:
npx tailwindcss-cli@latest init

Include Tailwind in your CSS
Open the ./src/index.css file that Create React App generates for you by default and use the @tailwind directive to include Tailwind’s base, components, and utilities styles, replacing the original file contents:

/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
#############################################################################################

Register UI :
http://localhost:3000/register
Login UI :
http://localhost:3000/login
Dashboard UI :
http://localhost:3000/dashboard


-API Integration in register,login and dashboard.
