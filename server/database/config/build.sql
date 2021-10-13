BEGIN;
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(55) NOT NULL,
    mobile VARCHAR(255) UNIQUE NOT NULL,
    password text NOT NULL,
    country VARCHAR(55) NOT NULL,
    permition VARCHAR(55) NOT NULL,
    attatch VARCHAR(55),
    avatar TEXT,
    job_title VARCHAR(255) NOT NULL
);


COMMIT;
