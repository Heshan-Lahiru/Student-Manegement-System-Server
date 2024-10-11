const db = require('../config/db');

const Student = {


  getAll: (callback) => {
    const sql = 'SELECT name, age, contact FROM students';
    db.query(sql, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    });
},

    create: (data, callback) => {
      const { name, age, contact, guardian_name, guardian_age, guardian_contact, picture } = data; 
      const sql = 'INSERT INTO students (name, age, contact, gardian_name, gardian_age, gardian_contact, picture) VALUES (?, ?, ?, ?, ?, ?, ?)';
      db.query(sql, [name, age, contact, guardian_name, guardian_age, guardian_contact, picture], callback);
      console.log("insert  ",age,name,guardian_name);
    },
  };


  const Showdata = {
    create: (data, callback) => {
      
      const sql = 'SELECT * FROM students';
      
      console.log("insert  ",sql);
    },
  };

  

module.exports = Student;
