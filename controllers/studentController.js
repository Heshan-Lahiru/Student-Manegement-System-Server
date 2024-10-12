const Student = require('../models/studentModel');
const Showdata = require('../models/studentModel');
const deletedata = require('../models/studentModel');
const updatedata = require('../models/studentModel');
const createStudent = async (req, res) => {
    try {
        const { name, age, contact, guardian_name, guardian_age, guardian_contact } = req.body;
        const picture = req.file ? req.file.path : null; 

        const newStudentData = {
            name,
            age,
            contact,
            guardian_name,
            guardian_age,
            guardian_contact,
            picture,
        };

        Student.create(newStudentData, (error, results) => {
            if (error) {
                return res.status(500).json({ error: error.message || 'Failed to register student' });
            }
            res.status(201).json({ message: 'Student registered successfully!', studentId: results.insertId });
            console.log(`Registered student: ${name}, Age: ${age}, Guardian: ${guardian_name}`);
        });
    } catch (error) {
        console.error('Error saving student:', error);
        res.status(500).json({ error: error.message || 'An error occurred while saving the student.' });
    }
};

const showstudent = async (req, res) => {
    Showdata.getAll((err, results) => { 
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};




    const deletestudent = async (req, res) => {
        console.log(req.params); 
        const studentId = req.params.id;
        console.log(studentId);


        deletedata.deleteById(studentId, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json({ message: 'Student deleted successfully' });
    });
};

const updatestudent = async (req, res) => {
    const { id } = req.params;
    const { name, age, contact } = req.body;

    try {
        updatedata.updateById(id, { name, age, contact }, (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message || 'Failed to update student' });
            }
            if (results.affectedRows === 0) {
                return res.status(404).json({ message: 'Student not found' });
            }
            res.json({ message: 'Student updated successfully' });
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};




module.exports = { createStudent, showstudent, deletestudent, updatestudent };
