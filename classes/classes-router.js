const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const classesModel = require('./classes-model');
const authenticate = require('../auth/restricted-middleware');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());


server.get('/', authenticate, (req, res) => {
    classesModel.getClasses()
        .then(classesModel => {
            res.json(classesModel);
        })
        .catch(err => res.send(err));
});

server.post('/', authenticate, (req, res) => {
    const classesData = req.body;

    const teacherId = req.body.teacher_id
    console.log('teacherid', req.body.teacher_id)

    classesData.teacher_id = teacherId;
    classesModel.postClass(classesData)
        .then((classesModel) => {
            res.status(200).json(classesModel)
        }).catch((err) => {
            res.status(500).json({ message: 'Error adding class' })
        });
});


server.put('/:id', authenticate, (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    classesModel.updateClass(id, changes)
        .then((classesModel) => {
            res.status(200).json({ message: `class ${id} updated!` })
        }).catch((err) => {
            res.status(500).json({ message: 'Error Updating class' })
        });
});

server.delete('/:id', authenticate, (req, res) => {
    const id = req.params.id;
    classesModel.removeClass(id)
        .then(classesModel => {
            res.status(204).json({ message: `class ${id} Deleted!` })
        }).catch((err) => {
            res.status(500).json({ message: 'Error Deleting class' })
        });
});

module.exports = server;


