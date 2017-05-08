CREATE TABLE IF NOT EXISTS webdata (
  id BIGSERIAL PRIMARY KEY,
  urllink VARCHAR(1024),
  anger VARCHAR(255),
  disgust VARCHAR(255),
  fear VARCHAR(255),
  joy VARCHAR(255),
  sadness VARCHAR(255),
  user_id INTEGER REFERENCES users(id)
);