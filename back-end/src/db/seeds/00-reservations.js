const data = require('./00-reservations.json');

exports.seed = function (knex) {
    return knex.raw("TRUNCATE TABLE reservations RESTART IDENTITY CASCADE").then(() =>
        knex("reservations")
            .del()
            .then(() => knex("reservations").insert(data))
    );
};
