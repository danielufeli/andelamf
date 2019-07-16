# WayFarer [![Build Status](https://travis-ci.org/danielufeli/andelamf.svg?branch=develop)](https://travis-ci.org/danielufeli/andelamf)  [![Coverage Status](https://coveralls.io/repos/github/danielufeli/andelamf/badge.svg)](https://coveralls.io/github/danielufeli/andelamf)  [![Maintainability](https://api.codeclimate.com/v1/badges/d04d8b3cc0893a21985a/maintainability)](https://codeclimate.com/github/danielufeli/andelamf/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/d04d8b3cc0893a21985a/test_coverage)](https://codeclimate.com/github/danielufeli/andelamf/test_coverage)
___

# andelamf
WayFarer is a public bus transportation booking server. You are required to develop the back-end API.

___

# Technologies

WayFarer was developed with JavaScript (ES6), Node.js using [Express 4](http://expressjs.com/). <br/>
with [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

___


## Swagger Documentation
API endpoints Documentation URL - https://wayfareran.herokuapp.com/api/v1/docs/

## API Information
API endpoints URL - https://wayfareran.herokuapp.com/

|METHOD  |DESCRIPTION                             |ENDPOINT                                  |
|------- |----------------------------------------|------------------------------------------|
|POST    |Sign Up                                 |api/v1/auth/signup                        |
|POST    |Sign In                                 |api/v1/auth/signin                        |
|POST    |Admin can create a trip                 |api/v1/trips                              |
|PATCH   |Admin can cancel a trip                 |api/v1/trips/:tripId                      |
|GET     |Both Admin and Users can see all trips  |api/v1/bookings                           |
|POST    |Users can book a seat on a trip         |api/v1/bookings                           |
|GET     |View all bookings. An Admin can see all 
          bookings, while user can see all of 
          his/herbookings.                        |api/v1/bookings                           |
|DELETE  |Users can delete their booking          |api/v1/bookings/:bookingId                |

___
### Sample Users
Admin-<br/>
Username: admin@wayfarer.com<br/>
Password: Domi@2019

User-<br/>
Username: user@wayfarer.com<br/>
Password: Domi@2019

___

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) 12.0.0 installed and [POSTMAN](https://www.getpostman.com/downloads/).

```sh
git clone https://github.com/danielufeli/andelamf.git
cd andelamf
npm install
npm start
```

Wafarer app should now be running on [localhost:3000](http://localhost:3000/).
___

## Author
### Daniel Ufeli
