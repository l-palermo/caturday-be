#CATURDAY-BE

This is the first approach to create a dockerised proxy server to work as `interface` between frontend and external services.

Todos:

* Try  Pinojs for logging 
* Add JWT for endpoint auth

##Docker

The benefit of using docker is having an isolated setting of my application, where I can develop the application and collaborate with other devs making sure the dependencies and tools versions are always consistent. This means I can have Node:12 installed in my machine but developing the app with Node:14 without having to change the version with `nvm`. This is not just true between collaborators but also ensures that the environment in which the code will be deployed keeps this consistent setting.

I decided to use the `docker-compose` functionality to run the app in a dev environment as similar as possible to the dev environment that will run once deployed. `docker-compose` also helps with the creating of a network among different services, eg. my app with a separate/switchable DB service, moreover it allows my to start the dev environment with an easy to run cmd.

##Express
Express is an `unopinionated` framework, very popular in the Node.JS environment. It allows to simply set routing, middleware and listening to the HTTP request methods for a really straight forward creation of an API.

I decided to go with express because the fact that is unopinionated allows me to set up my app/API with the architecture I think is more suitable.
It is very popular and well documented. TBC

##Jest & Supertest
