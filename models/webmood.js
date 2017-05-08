const db = require('../db/config');

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
    (urllink, name)
    VALUES ($1, $2) RETURNING *
    `,
    [webmood.urllink, webmood.name]
  );
};

Webmood.update = (webmood, id) => {
  return db.none(
    `
    UPDATE webdata SET
    urllink = $1,
    name = $2
    WHERE id = $3
    `,
    [webmood.urllink, webmood.name, id]
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
