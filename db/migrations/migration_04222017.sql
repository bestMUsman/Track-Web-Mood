DROP TABLE webdata;


CREATE TABLE IF NOT EXISTS webdata (
  id BIGSERIAL PRIMARY KEY,
  urllink VARCHAR(1024),
  description VARCHAR(1024),
  name VARCHAR(1024),
  user_id INTEGER REFERENCES users(id),
  user_name VARCHAR(255) REFERENCES users(username)
);