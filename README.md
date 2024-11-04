# OlaKeHaceXela
 This is a Client Side Application created with Angular.
To manage the Client Logic and Data Render of a Event Publishing Application.
This Application Consumes an API Rest created with Laravel 11,
which is running in port 8000.

-----------------------------------------------------

## Sofware and Versions used in the Project. 

* #### Typescript: v5.5.2
  * We have chosen this language since is a syntactic superset of JavaScript which adds static typing. This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.
  
* #### Angular: v18.2
  * We have chosen this Framework since is an open-source, JavaScript framework written in TypeScript. Google maintains it, and its primary purpose is to develop single-page applications. As a framework, Angular has clear advantages while also providing a standard structure for developers to work with. It enables users to create large applications in a maintainable manner.
  
* #### Angular CLI: v18.2.7
  * It's a command-line interface tool which allows you to scaffold, develop, test, deploy, and maintain Angular applications directly from a command shell.
  
* #### Angular Material: v18.2.10
  * It's a UI library component developed by Google in 2014. It is specially designed for Angular developers. It helps to design the application in a structured manner. Its components help to construct attractive, consistent, and functional web pages and web applications. It is used to create a responsive and faster website.


-------------------------------------------------------

## Components

* #### Nav Component
  * It helps us to navigate through the application based in our Role.
* #### Footer Component
  * It shows information about the person that created this app.
* #### Home Component
  * It helps to render all the approved posts.
* #### Post Component
  * It helps to render the post one by one.
* #### Register Component
  * It helps to render a form to register a new account.
* #### Edit User Component
  * It helps to render a form to edit an existing user in the system.
* #### User Component
  * It helps to render all the users in the system.
* #### Create Post Component
  * It helps to render a form that allow us to create Posts.
* #### Create User Component
  * It helps to render a form that allow us to create User.
* #### Post Approval Pending Component
  * It help us to render all the post that are pending for approval.
* #### Report Card Component
  * It helps us to send a report for a post.
* #### Reports Component
  * It helps us to render all the reports in the system.
* #### Reports By Post Component
  * It helps us to render all the reports by a Post.

-------------------------------------------------------

## Services
Their function is to consume the Endpoints of an API REST.
Like the basic CRUD Operations and many more.

* #### User Role Service
  * It consumes User Role endpoints from an API REST.
* #### User Service
  * It consumes User endpoints from an API REST.
* #### Token Service
  * It serves to catch the Token when we are logging in the app.
* #### Report Service
  * It consumes Report endpoints from an API REST.
* #### Post Category Service
  * It consumes Post Category endpoints from an API REST.
* #### Post Service
  * It consumes Post endpoints from and API REST.
* #### Notification Service
  * It consumes Notification endpoints from an API REST.
* #### Auth Service
  * It's in charge of Manage all the Authentication from the Client Side App.
* #### Attendance Service
  * It consumes Attendance endpoints from an API REST.
* #### Approved Post Service
  * It consumes Approved Post endpoints from an API REST.

-----------------------------------------------

## Models

* #### User Role Model
* #### User Model
* #### Report Model
* #### Post Category Model
* #### Post Model
* #### Notification Model
* #### Auth Model
* #### Attendance Model
* #### Approved Post Model

-----------------------------------------------------

## Interceptors

* #### Token Interceptor
  * Allow us to add the Bearer Token to the Headers of all our HTTP Request.

-----------------------------------------------------

## How to run the App

* #### You should run the following command:
  * ng serve -o

This will run the app locally in port 4200.

-----------------------------------------------------

## Full Documentation

* For a full documentation experience, please read the file under Docs Folder with the name "Technical Manual".

------------------------------------------------------

## License

This project is licensed under the [MIT license](https://opensource.org/licenses/MIT).

--------------------------------------------------

## Author

* #### Diego José Maldonado Monterroso.
* #### Carné: 201931811.
* #### Date: November 2024.
