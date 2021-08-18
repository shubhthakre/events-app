
# Tech Stack
 - node
 - react
 - boostrap
 - firebase
 


# Create React App
Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.

It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 10.16 and npm >= 5.6 on your machine. To create a project, run:
```
npx create-react-app my-app
cd my-app
npm start
Note
```

```
npx on the first line is not a typo — it’s a package runner tool that comes with npm 5.2+.
```
Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses Babel and webpack, but you don’t need to know anything about them.

When you’re ready to deploy to production, running npm run build will create an optimized build of your app in the build folder. You can learn more about Create React App from its README and the User Guide.

# React-boostrap Installation
The best way to consume React-Bootstrap is via the npm package which you can install with npm (or yarn if you prefer).

If you plan on customizing the Bootstrap Sass files, or don't want to use a CDN for the stylesheet, it may be helpful to install vanilla Bootstrap as well.
```
npm install react-bootstrap@next bootstrap@5.1.0
```
# How do I install Firebase in react project?
So here's what we are going to do:

NPM Bundler (Browserify, Webpack, Rollup, etc.)
Install the Firebase NPM module:
```
$ npm init
$ npm install --save firebase
```
1. Log into Firebase Console and create a new project.
2. Create a simple React application with create-react-app.
3. Deploy it to Firebase Hosting with one simple command.
4. Wire data in your app to Firebase Database.

