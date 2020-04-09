
exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('settings', tbl => {
            tbl.increments();
            tbl.text('school_name').notNullable();
            tbl.text('address');
            
        })
        .createTable('admins', tbl => {
            tbl.increments();
            tbl.text('name').notNullable();
            tbl.bigInteger('phone');
            tbl.text('email').notNullable().unique();
            tbl.varchar('password', 128).notNullable();
        })
        .createTable('teachers', tbl => {
            tbl.increments();
            tbl.text('name').notNullable();
            tbl.bigInteger('phone');
            tbl.text('email').notNullable().unique();
            tbl.varchar('password', 128).notNullable();
        })
        .createTable('classes', tbl => {
            tbl.increments();
            tbl.text('name').notNullable();
            tbl.text('subject');
            tbl.date('created', 128);
            // Foreign Key
            tbl
                .bigInteger('teacher_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('teachers')
                .onDelete('RESTRICT') // if the PK record is deleted
                .onUpdate('CASCADE'); // if the PK value updates
        })
    
        .createTable('parents', tbl => {
            tbl.increments();
            tbl.text('name').notNullable();
            tbl.bigInteger('phone', 50).notNullable();
            tbl.text('address');
            tbl.text('spouse_name');
            tbl.bigInteger('spouse_phone');

        })

        .createTable('students', tbl => {
            tbl.increments();
            tbl.text('name').notNullable();
            tbl.date('dob');
            // Foreign Key
            tbl
                .bigInteger('class_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('classes')
                .onDelete('RESTRICT') // if the PK record is deleted
                .onUpdate('CASCADE'); // if the PK value updates

            tbl
                .bigInteger('parent_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('parents')
                .onDelete('RESTRICT') // if the PK record is deleted
                .onUpdate('CASCADE'); // if the PK value updates

                
        })

};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('settings')
        .dropTableIfExists('admins')
        .dropTableIfExists('students')
        .dropTableIfExists('parents')
        .dropTableIfExists('classes')
        .dropTableIfExists('teachers');
};
