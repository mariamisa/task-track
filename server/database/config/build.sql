BEGIN;
DROP TABLE IF EXISTS users,tasks,tasks_users,visits,sitings, CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(55) NOT NULL,
    mobile VARCHAR(255) UNIQUE NOT NULL,
    password text NOT NULL,
    country VARCHAR(55) NOT NULL,
    permission text[] NOT NULL DEFAULT Array['{"view":false,"add":false,"edit":false,"delete":false}'],
    attatch VARCHAR(55),
    avatar TEXT,
    job_title VARCHAR(255) NOT NULL
);
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    protocol VARCHAR(255),
    attatch VARCHAR(255),
    comments VARCHAR(255)
);
CREATE TABLE tasks_users (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE NOT NULL UNIQUE,
    task_id INTEGER REFERENCES tasks(id) ON UPDATE CASCADE NOT NULL UNIQUE,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deadline TIMESTAMP,
    status VARCHAR(55) NOT NULL,
    check(status in ('done', 'cancled', 'onwork'))
);
CREATE TABLE visits (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE NOT NULL UNIQUE,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    from_country VARCHAR(55),
    to_country VARCHAR(255),
    location VARCHAR(255),
    km_number VARCHAR(255),
    status VARCHAR(55) NOT NULL,
    check(status in ('done', 'cancled', 'pending'))
);
CREATE TABLE sitings (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE NOT NULL UNIQUE,
    km_cost VARCHAR(55),
    notification_to_send TIMESTAMP
);

-- insert into users values (1,'mariam','0597180930','123456789','gaza',ARRAY['admin','user'],'hhhhhh','hhhhhhh','admin');


COMMIT;
