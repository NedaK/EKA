# EKA FULLSTACK DEVELOPER TECHNICAL CHALLENGE

PLEASE READ THIS DOCUMENT IN ITS ENTIRETY BEFORE PROCEEDING

## INTRODUCTION

For this technical challenge, we would like you to create a full stack application to demonstrate your expertise with the technologies required for the position.

## HELP

If you encounter any hangups that you believe is a result of lack of information/misinformation on our part, send an email to challenge@go-eka.com. We will get back to you as soon as possible.

## TECHNOLOGIES

Here's a list of the technologies that we expect you to utilize:

### FRONT-END

- React
- Redux (optional)
- Webpack
- Babel

### BACK-END

- Node
- Express
- Bookshelf.js (optional)
- PostgreSQL

### MISC

- Git
- Promises (async/await)

Boilerplate is fair game and actually recommended by us in the interest of time. You can use [create-react-app](https://github.com/facebook/create-react-app.git) for the front end requirements.

## CHALLENGE DETAILS

In a particular school, we have teachers, students, and classes. Teachers have one or more classes. Classes have students. Each class can only have one teacher. Teachers can not be students, and students can not be teachers. We would like you to develop an app that will help the end-user visually find students that belong to the teacher(s) selected.

_Please note that with this challenge, you are required to create your own fake data via script(s) to present. There should be at least 10 teachers, 20 classes, and 300 students_

### REQUIREMENT 0

As an EKA Development team member,

When I pull your project from Github,

I expect to be able to run a few setup scripts and be able to run your application locally in order to run through the basic workflow (defined below).

### REQUIREMENT 1

As a user,

When I open up your application,

I expect to see a list of names of teachers, the classes they teach, and the students in each class (arrangement and presentation is up to you).

### REQUIREMENT 2

As a user,

When I click on the name of a teacher,

I expect the app to fetch new data and allow me to visually differentiate my selected teacher's students and classes from the rest of the students.

Furthermore, I expect that clicking on a selected teacher again would unselect the teacher and when no teachers are selected, reverts back to showing the list of teachers, classes, and students in Requirement 1.

### REQUIREMENT 3

As a user,

When I click on the name of more than one teacher,

I expect to the app to fetch new data and allow me to visually differentiate the students and classes that belong to the selected teachers from the rest of the students.

### BONUS REQUIREMENT

As a user,

When I access the site,

I would like there to be a toggle that toggles between 'all' and 'any'.

When the toggle is set to 'all', I would expect to see the students that belong to _all_ of the teachers selected. ie. If StudentA has a class with Teacher1 and Teacher2, if Teacher1 and Teacher2 are selected with the 'all' toggle on, StudentA should show.

When the toggle is set to 'any', I would expect to see the students that belong to _any_ of the teachers selected. ie. If StudentA has a class with Teacher1 and StudentB has a class with Teacher2, if Teacher1 and Teacher2 are selected with the 'any' toggle on, StudentA and StudentB should show.

I would also expect this setting to be applied to current or future selections and exclusive to each other (can not have 'any' and 'all' toggles on at the same time).

### BONUS REQUIREMENT

Write tests for your features. We use [Nightwatch](https://nightwatchjs.org/) and [Mocha](https://mochajs.org/). You can use whatever testing suite you like.

### BONUS REQUIREMENT

Deploy your application to Heroku or AWS. Please note that we will still need to be able to setup a local environment to inspect your work.

## BASIC WORKFLOW (WHAT WE WILL INSPECT)

The basic workflow is:

1.  User visits the site. User sees all teachers, all students, and all classes.
2.  User clicks on one teacher. User can visually differentiate all students that have a class with that teacher.
3.  User clicks on more than one teacher. User can visually differentiate all students that have a class with all selected teachers.

We do not expect all candidates to submit a fully polished product within the time limit given. We leave it to the candidate to decide which aspects they would like to focus on for submission. However, all of the required technologies mentioned above _must_ be utilized in order for a submission to be considered. A Github repository with your work must also be published and shared with us as part of the submission process.

If you have any questions regarding the challenge, send us an email at challenge@go-eka.com.

## SUBMISSION & CLOSING COMMENTS

To submit your work, create a Github repository and email challenge@go-eka.com the link to your repository along with any comments regarding setup and anything else. Please note that late submissions will not be considered.

Please also note that while we fully respect the effort you put into your submission, we are not able to spend large amounts of time to troubleshoot any issues that may arise when trying to set up your submission on our laptops. If the setup instructions are insufficient it will greatly impact the review of your submission. Thanks and good luck!
