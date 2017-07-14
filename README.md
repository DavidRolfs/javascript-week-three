# JavascriptWeekThree

## SkateTeam

####  July 14th, 2017_

#### By _**David Rolfs**_

## Description
Webpage uses Angular 2.0 cli and firebase to manage a skateboard team webpage. User can view and sort through the team roster as well as view individual profiles. Admin can add, update, and delete team riders in the database.

## Repository
https://github.com/DavidRolfs/javascript-week-three

## Specs
| Description | input | output |
| ------------- |:-------------:| -----:|
|Webpage displays entire team roster stored in firebase| selects team from nav-bar | names of all persons in database are displayed |
|Webpage has individual pages for each person | click name on team roster list| new page shows individuals name, age, location, sponsors, about |
| admin can add new team member to database | clicks admin and enters information in form, click update | new rider is added to database|
| admin can update information | enter admin page and change rider information in form, click update | new information is updated |
| admin can delete rider from database | enter admin page, click delete next to rider name | rider is deleted from database |
| user can filter displayed roster by status | user changes select from Everyone to legend | list only displays riders with status of legend |



## Setup/Installation Requirements
* Make sure npm, node.js, and typescript are installed on your computer.
* Type _git clone https://github.com/DavidRolfs/javascript-week-three _ into your teminal.
* Install promise-polyfill patch npm install promise-polyfill --save-exact
* Create a Firebase account at firebase.google.com.
* Click Add project.
* Select 'Add Firebase to your web app' to obtain api keys.
* In the app folder of this project, create the file 'api-keys.ts'.
* Create file called _api-keys.ts_ inside of app directory.
* Paste
      export var masterFirebaseConfig = {
      apiKey: "xxxx",
      authDomain: "xxxx.firebaseapp.com",
      databaseURL: "https://xxxx.firebaseio.com",
      storageBucket: "xxxx.appspot.com",
      messagingSenderId: "xxxx"
      };
* Replace the _x_'s with your api keys
* Go to Database Options and select Rules
* Change both the ".read", and ".write" properties here to "true"
* In firebase select Database option.
* import _sample-skaters.json_ from the home directory into firebase.
* In the terminal enter npm install bower install ng serve
* Webpage will be running on `http://localhost:4200/`.

## Known bugs
admin page background image displays for only half of page.

## Support and contact details
rolfs97@yahoo.com

## Technologies Used

_HTML, CSS, JavaScript, jQuery, Bootstrap, SASS, NodeJS, Angular 2.0, firebase, typescript_

### License
 This program is licensed under MIT license.

Copyright (c) 2017 **_David Rolfs_**
