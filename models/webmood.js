const db = require("../db/config");

const Webmood = {};

Webmood.findAll = () => {
  return db.query(`SELECT * FROM webdata ORDER BY id ASC`);
};

Webmood.findById = id => {
  return db.oneOrNone(`SELECT * FROM webdata WHERE id = $1`, [id]);
};

Webmood.create = webmood => {
  return db.one(
    `
    INSERT INTO webdata
    (urllink, name, description, user_id, user_name)
    VALUES ($1, $2, $3, $4, $5) RETURNING *
    `,
    [
      webmood.urllink,
      webmood.name,
      webmood.description,
      webmood.user_id,
      webmood.user_name,
    ]
  );
};

Webmood.update = (webmood, id) => {
  return db.none(
    `
    UPDATE webdata SET
    name = $1,
    description = $2,
    urllink = $3
    WHERE id = $4
    `,
    [webmood.name, webmood.description, webmood.urllink, id]
  );
};

Webmood.destroy = id => {
  return db.none(
    `
      DELETE FROM webdata
      WHERE id = $1
    `,
    [id]
  );
};

module.exports = Webmood;
