DROP TABLE webdata;
DROP TABLE users;

CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  password TEXT UNIQUE NOT NULL
);

CREATE TABLE webdata (
  id BIGSERIAL PRIMARY KEY,
  urllink VARCHAR(1024),
  description VARCHAR(1024),
  name VARCHAR(1024),
  user_id INTEGER REFERENCES users(id),
  user_name VARCHAR(255) REFERENCES users(username)
);
