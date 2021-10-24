BEGIN;
DROP TABLE IF EXISTS users,tasks,tasks_users,comments,visits,payments,settings, CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(55) NOT NULL,
    mobile VARCHAR(255) UNIQUE NOT NULL,
    password text NOT NULL,
    country VARCHAR(55) NOT NULL,
    user_permission text[] NOT NULL DEFAULT Array['{"view":false,"add":false,"edit":false,"delete":false}'],
    task_permission text[] NOT NULL DEFAULT Array['{"view":false,"add":false,"edit":false,"delete":false}'],
    visit_permission text[] NOT NULL DEFAULT Array['{"view":false,"add":false,"edit":false,"delete":false}'],
    payment_permission text[] NOT NULL DEFAULT Array['{"view":false,"add":false,"edit":false,"delete":false}'],
    setting_permission text[] NOT NULL DEFAULT Array['{"view":false,"edit":false}'],
    comment_permission text[] NOT NULL DEFAULT Array['{"view":false,"add":false,"edit":false,"delete":false}'],
    attatch VARCHAR(55),
    avatar TEXT,
    job_title VARCHAR(255)
);
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    protocol VARCHAR(255) NOT NULL,
    attatch VARCHAR(255) NOT NULL,
    type VARCHAR(55) DEFAULT 'normal',
    check(type in ('normal', 'settion', 'other'))
);
CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE NOT NULL,
    task_id INTEGER REFERENCES tasks(id) ON UPDATE CASCADE NOT NULL,
    comment VARCHAR(255) NOT NULL
);
CREATE TABLE tasks_users (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE NOT NULL ,
    task_id INTEGER REFERENCES tasks(id) ON UPDATE CASCADE NOT NULL ,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deadline TIMESTAMP NOT NULL,
    visibility boolean DEFAULT 'true',
    status VARCHAR(55) NOT NULL DEFAULT 'onwork',
    check(status in ('done', 'cancled', 'onwork')),
    check(visibility in ('false', 'true')),
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
CREATE TABLE payments (
    id SERIAL PRIMARY KEY UNIQUE,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE NOT NULL,
    amount VARCHAR(255),
    attachments TEXT,
    month VARCHAR(255)
);
CREATE TABLE settings (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE NOT NULL UNIQUE,
    km_cost VARCHAR(55) DEFAULT '10',
    notification_to_send TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

insert into users(username,password,mobile,country,user_permission,task_permission,visit_permission,payment_permission,setting_permission,comment_permission,job_title) values ('admin','$2b$10$npJSSfBYrXJSDlxowSi4Z.iEelfDM.Y1PN11HWY3hTuAUCoFkLZb6','059000000','gaza',Array['{"view":true,"add":true,"edit":true,"delete":true}'],Array['{"view":true,"add":true,"edit":true,"delete":true}'],Array['{"view":true,"add":true,"edit":true,"delete":true}'],Array['{"view":true,"add":true,"edit":true,"delete":true}'],Array['{"view":true,"edit":true}'],Array['{"view":true,"add":true,"edit":true,"delete":true}'],'admin');
insert into settings(user_id) values (1);
COMMIT;
