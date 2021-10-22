# task tracking
 An app that facilitates managing,tracking and pays for the employee's tasks on the company.

## Live demo :tv: 
[Heroku link , Click here to visit our app](https://tracker-task1.herokuapp.com/)

use these credientials: <br>
email: guest@guest.com
password: 123456789

## Main problem :anger: 
most of those who manage a company has a problem on tracking and manage the employee's tasks, and forget to archive the small tasks, and don't find the time to pay manually for these tasks.

## Solution :bulb:
Build a task-tracking application that facilitates managing, tracking, and pays money to the employee's tasks on the company

## User Journey :airplane:
As an admin, I can add new manager or employee.

As a company manager, I can add new employees and tasks or visits.

As a user, I can see all tasks and visited, and add my own tasks/visits, and edit it.


## User Stories :open_book:
***As a super admin :***
* I can log in into the app.
* I can see all the compony managers and employee's.
* I can add new managers/compony to the app.

***As a compony manager :***
* I can log in into the app.
* I can see all employee's on my componay.
* I can see all employee's tasks and visits.
* I can add new employee.
* I can add new task.
* I can add edit my setting (change the color and set the notification date and km cost).

***As a employee :***
* I can log in into the app.
* I can see all tasks and visits.
* I can add new task to me.
* I can add new visit to me.
* I can add edit my task/visit status.
* I can edit my task visibility.
* I need to recive notification for my task or visit.
* I need to recive money for my completed tasks/visited.


## Prototype :art:
[Figma Link]()


## DATABASE Schema :file_cabinet:
[dbdigram]()
![](https://i.imgur.com/jGp1Gbf.png)

## Installation Guide :

1. Clone this repo.
2. Navigate to the cloned repo.

### Database Setup

1. If you have pgcli skip this step.

   - Install PostgreSQL database
   - Along side with pgcli
   - [instructions on how to install pgcli](https://www.pgcli.com/install)

2. Open your terminal, run pgcli, navigate through the project to this path: `./server/database/config/build.sql`

3. Copy this file path and write in the terminal:

```
    \i <paste your copied path to the file>
```

4. build the dummy data by using this command:

```
    npm run build:db
```

### Project setup

1. Create a `.env` file in the project root folder.
2. Add the following in it **This step is so important!!**

```
SECRET_KEY=AB#%&HD

DATABASE_URL=postgres://tracking:0000@localhost:5432/tracking

DEV_DB_URL=postgres://tracking:123456@localhost:5432/tracking_dev

TEST_DB_URL=postgres://tracking:123456@localhost:5432/tracking_test

```

3. To install the dependencies, run this command only for the first time:

```
    npm i
```

### Running the project:

1. To run the server, Open your terminal and run:

```
    npm run dev
```

2. To run the React Development server, Open another terminal and run:

```
    npm run client
```

3. To run the tests:

```
    npm test
```

## Technologies :computer:

#### Front-end Technology:

- ReactJS (Hooks).
    - useState
    - useEffect
    - useReducer(for state managing)
- Material UI

#### Back-end Technology:

- Node JS
- Express.

#### Database Technology:
- PostgreSQL.

## Stretch Goals :goal_net:



## Resources :mag:
* https://cloudinary.com/documentation/developer_overview
* https://material-ui.com/
