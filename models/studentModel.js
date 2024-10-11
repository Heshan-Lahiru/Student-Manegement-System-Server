const db = require('../config/db');

const Student = {
    create: (data, callback) => {
      const { name, age, contact, guardian_name, guardian_age, guardian_contact, picture } = data; 
      const sql = 'INSERT INTO students (name, age, contact, gardian_name, gardian_age, gardian_contact, picture) VALUES (?, ?, ?, ?, ?, ?, ?)';
      db.query(sql, [name, age, contact, guardian_name, guardian_age, guardian_contact, picture], callback);
      console.log("insert  ",age,name,guardian_name);
    },
  };
  

module.exports = Student;
