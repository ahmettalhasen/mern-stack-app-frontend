<p align="center">
  <img src="resources/logo.PNG" width="850" height="300" />
</p>

# LaundryWise

LaundryWise is a web application which connects laundry service providers, its customers and the laundry devices, in order to find available machines, make reservations and pay online.

The project is developed in scope of the SEBA Master - Web Application Engineering course at TUM.

### Value Proposition
- A Web-application which connects customers, laundry service providers and laundry devices in order to find available machines, reserve and pay online.

### Customer Segment
-  People who want to do their laundry at shared machines.
- Organizations who provide shared laundry services.

### Requirements
+ MERN Stack:
    + Mongo Database
    + Express
    + React
    + Node
+ Material UI Web Components






# laundrywise-frontend application

LaundryWise application based on React. Backend can be found [here](https://gitlab.lrz.de/seba-master-2021/team-39/backend.git)

## Prerequisites

Both for the frontend and the backend:

-   nodejs [official website](https://nodejs.org/en/) - nodejs includes [npm](https://www.npmjs.com/) (node package manager)


### Install Dependencies

We get the tools we depend upon via `npm`, the [node package manager](https://www.npmjs.com).

```
npm install
```

### Create a Bundle for the Application

This project use [webpack](https://github.com/webpack/webpack) version 1 for creating a bundle of the application and its dependencies

We have pre-configured `npm` to automatically run `webpack` so we can simply do:

```
npm run build
```

Behind the scenes this will call `webpack --config webpack.config.js `. After, you should find that you have one new folder in your project.

-   `dist` - contains all the files of your application and their dependencies.

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:3000`.

### Sample Admin Credidentials

Username: Grammar-Immobilien 

Password: 123456

### Sample Customer Credidentials

Username: Laura-Paul

Password: 123456

