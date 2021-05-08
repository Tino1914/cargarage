IMPORTANT!
The backend is in  carservice-sprinboot-backend folder in the root directory of the GitLab
The frontend is in  react-app-carservice folder
The backend is written in Java and using Spring Boot, while the frontend is done with React JS and Redux which makes everything easier(explained in the design document).

During the development I used H2 dtabse in order to use mocking for the tests, hosted MYSQL databse for my tables and 
now I am using XAMPP server database on order to integrate it inside the Docker, because the hosted MYSQL db does not allow that.


The backend is fully CRUD working for each entity.
The connection to the React application show all this CRUD operations, which are creating updating and deleting clients. Moreover, adding cars to those client, updating them, deleting them and so on.
In the YML file you can find my CI script which can be found both in the root directory of GitLab and also in the root of the backend folder, which ensures that all Unit tests and Integration tests are passing for the controllers and
the models. Frontend testing is made by cypress.



Opening the app redirects you to the Login form, where client can log in with their Firstname and licenseplate insted of username and password.
The whole project is based on the solid principles, especially in the backend, using Servies to prevent Repositories from directly using Controllers.




New Features:
There is new Abouts us page in the application and the most important there is Appointment maker on each client. You can pick a date and time and when you open the 
calendar tab and press on a certain date you can see which clients have appointments.
Updated some Acces restrictions where Admin can see all the clients and a normal user can see only himself on the dashboard page.
Docker is used to host the frontend and the backend which is explained in the design document how I do it!

Zip file Explanation and all my documentation is in Canvas in the Submitted ZIP!

