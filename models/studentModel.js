const db = require('../config/db');

const Student = {


  getAll: (callback) => {
    const sql = 'SELECT id,name, age, contact FROM students'; 
    db.query(sql, (error, results) => {
        if (error) {
            return callback(error);
        }
        callback(null, results);
    });
    console.log(sql);
},

    create: (data, callback) => {
      const { name, age, contact, guardian_name, guardian_age, guardian_contact, picture } = data; 
      const sql = 'INSERT INTO students (name, age, contact, gardian_name, gardian_age, gardian_contact, picture) VALUES (?, ?, ?, ?, ?, ?, ?)';
      db.query(sql, [name, age, contact, guardian_name, guardian_age, guardian_contact, picture], callback);
    // console.log("insert  ",age,name,guardian_name);
    },

       
   
  deleteById: (id, callback) => {
    const sql = 'DELETE FROM students WHERE id = ?';
    db.query(sql, [id], (error, results) => {
      if (error) {
        return callback(error);
      }
      callback(null, results);
    });
    //console.log('Student deleted with ID:', id);
  },

  updateById: (id, data, callback) => {
    const { name, age, contact } = data;
    console.log(name,age,contact)
    const sql = 'UPDATE students SET name = ?, age = ?, contact = ? WHERE id = ?';
    db.query(sql, [name, age, contact, id], (error, results) => {
        if (error) {
            return callback(error);
        }
        callback(null, results);
    });
},
};




  const Showdata = {
    create: (data, callback) => {
      
      const sql = 'SELECT * FROM students';
      
     // console.log("insert  ",sql);
    },
  };

  

module.exports = Student;
