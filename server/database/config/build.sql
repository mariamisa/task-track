BEGIN;
DROP TABLE IF EXISTS users,tasks,tasks_users,comments,visits,sitings, CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(55) NOT NULL,
    mobile VARCHAR(255) UNIQUE NOT NULL,
    password text NOT NULL,
    country VARCHAR(55) NOT NULL,
    permission text[] NOT NULL DEFAULT Array['{"view":false,"add":false,"edit":false,"delete":false}'],
    attatch VARCHAR(55),
    avatar TEXT,
    job_title VARCHAR(255)
);
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    protocol VARCHAR(255) NOT NULL,
    attatch VARCHAR(255) NOT NULL,
    type VARCHAR(55) DEFAULT 'normal',
    check(type in ('normal', 'settion', 'other'))
);
CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE NOT NULL,
    task_id INTEGER REFERENCES tasks(id) ON UPDATE CASCADE NOT NULL,
    comment VARCHAR(255)
);
CREATE TABLE tasks_users (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE NOT NULL ,
    task_id INTEGER REFERENCES tasks(id) ON UPDATE CASCADE NOT NULL ,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deadline TIMESTAMP NOT NULL,
    visibility boolean DEFAULT false,
    status VARCHAR(55) NOT NULL DEFAULT 'onwork',
    check(status in ('done', 'cancled', 'onwork')),
    CONSTRAINT UC_user_task UNIQUE (user_id, task_id)
);
CREATE TABLE visits (
    id SERIAL PRIMARY KEY UNIQUE,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    from_country VARCHAR(55),
    to_country VARCHAR(255),
    location VARCHAR(255),
    km_number VARCHAR(255),
    status VARCHAR(55) DEFAULT 'pending',
    check(status in ('done', 'canceled', 'pending')),
    CONSTRAINT UC_user_visit UNIQUE (user_id,from_country,to_country)
);
CREATE TABLE sitings (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE NOT NULL UNIQUE,
    km_cost VARCHAR(55),
    notification_to_send TIMESTAMP
);

insert into users(username,password,mobile,country,permission,job_title) values ('admin','$2b$10$npJSSfBYrXJSDlxowSi4Z.iEelfDM.Y1PN11HWY3hTuAUCoFkLZb6','059000000','gaza',Array['{"view":true,"add":true,"edit":true,"delete":true}'],'admin');

COMMIT;
