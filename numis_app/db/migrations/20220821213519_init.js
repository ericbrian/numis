/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('shape', table => {
            table.increments('id');
            table.string('name').notNullable().unique();
            table.timestamps(true, true);
        })
        .table('shape', function (t) {
            t.index(['name']);
        })
        .createTable('country', table => {
            table.increments('id');
            table.string('name').notNullable();
            table.string('short_name').notNullable();
            table.timestamps(true, true);
        })
        .createTable('image', table => {
            table.increments('id');
            table.text('url');
            table.text('base64encoding');
            table.text('copyright');
            table.string('description');
            table.timestamps(true, true);
        })
        .createTable('mint', table => {
            table.increments('id');
            table.string('name').notNullable();
            table.integer('country_id');
            table.foreign('country_id').references('country.id');
            table.timestamps(true, true);
        })
        .createTable('mintmark', table => {
            table.increments('id');
            table.string('mark').notNullable();
            table.string('description');
            table.integer('mint_id');
            table.foreign('mint_id').references('mint.id');
            table.string('period');
            table.timestamps(true, true);
        })
        .createTable('grade', table => {
            table.increments('id');
            table.string('name').notNullable().unique();
            table.string('short_name');
            table.integer('sort_order');
            table.timestamps(true, true);
        })
        .createTable('currency', table => {
            table.increments('id');
            table.string('name').notNullable();
            table.string('short_name');
            table.string('years').notNullable();
            table.string('demonitized_date');
            table.string('comments');
            table.timestamps(true, true);
        })
        .createTable('currency_country', table => {
            table.increments('id');
            table.integer('currency_id');
            table.foreign('currency_id').references('currency.id');
            table.integer('country_id');
            table.foreign('country_id').references('country.id');
            table.timestamps(true, true);
        })
        .createTable('designer', table => {
            table.increments('id');
            table.string('name').notNullable().unique();
            table.text('comment');
            table.timestamps(true, true);
        })
        .createTable('coin', table => {
            table.increments('id');
            table.decimal('face_value', 8, 2);
            table.string('pretty_face_value');
            table.string('series_or_theme_name');
            table.string('common_name');
            table.text('obverse');
            table.text('reverse');
            table.string('edge');
            table.string('years');
            table.string('composition');
            table.decimal('weight_grams', 7, 3);
            table.decimal('diameter_mm', 7, 3);
            table.text('comments');
            table.integer('currency_id');
            table.foreign('currency_id').references('currency.id');
            table.integer('country_id');
            table.foreign('country_id').references('country.id');
            table.integer('mint_id');
            table.foreign('mint_id').references('mint.id');
            table.integer('shape_id');
            table.foreign('shape_id').references('shape.id');
            table.integer('designer_obv_id');
            table.foreign('designer_obv_id').references('designer.id');
            table.integer('designer_rev_id');
            table.foreign('designer_rev_id').references('designer.id');
            table.timestamps(true, true);
        })
        .createTable('coin_mintmark', table => {
            table.increments('id');
            table.integer('coin_id').notNullable();
            table.foreign('coin_id').references('coin.id');
            table.integer('mintmark_id').notNullable();
            table.foreign('mintmark_id').references('mintmark.id');
            table.timestamps(true, true);
        })
        .createTable('coin_image', table => {
            table.increments('id');
            table.integer('coin_id').notNullable();
            table.foreign('coin_id').references('coin.id');
            table.integer('image_id').notNullable();
            table.foreign('image_id').references('image.id');
            table.timestamps(true, true);
        })
        .createTable('coinset', table => {
            table.increments('id');
            table.string('name').notNullable();
            table.integer('owner_id').comment('No user info in the db yet!!!');
            table.timestamps(true, true);
        })
        .createTable('collection', table => {
            table.increments('id');
            table.integer('coin_id').notNullable();
            table.foreign('coin_id').references('coin.id');
            table.integer('coinset_id');
            table.foreign('coinset_id').references('coinset.id');
            table.string('year').notNullable();
            table.integer('mint_id').comment('If a mintmark is set, then no mint should be set.');
            table.foreign('mint_id').references('mint.id');
            table.integer('mintmark_id').comment('If a mint is set, then no mintmark should be set.');
            table.foreign('mintmark_id').references('mintmark.id');
            table.integer('grade_id');
            table.foreign('grade_id').references('grade.id');
            table.string('condition');
            table.decimal('paid_amount', 5, 2);
            table.integer('paid_currency_id');
            table.foreign('paid_currency_id').references('currency.id');
            table.string('sourced_from');
            table.date('sourced_when');
            table.boolean('is_cleaned').defaultTo('false');
            table.integer('owner_id').comment('No user info in the db yet!!!');
            table.timestamps(true, true);
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
        .dropTable('collection')
        .dropTable('coinset')
        .dropTable('coin_image')
        .dropTable('coin_mintmark')
        .dropTable('coin')
        .dropTable('designer')
        .dropTable('currency_country')
        .dropTable('currency')
        .dropTable('grade')
        .dropTable('mintmark')
        .dropTable('mint')
        .dropTable('image')
        .dropTable('country')
        .dropTable('shape');
};
