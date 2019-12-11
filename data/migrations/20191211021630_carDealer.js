//.notNull()??????
exports.up = function (knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.string('VIN').unique();
        tbl.string('make');
        tbl.string('model');
        tbl.integer('mileage');
        tbl.boolean('transmission');
        tbl.string('title-status');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars')
};
