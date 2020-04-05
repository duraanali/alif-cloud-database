const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const settingsModel = require('./settings-model.js');
const authenticate = require('../auth/restricted-middleware');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());


server.get('/', authenticate, (req, res) => {
    console.log('body', req.body)
    settingsModel.getSettings()
        .then(settingsModel => {
            console.log(settingsModel);
            res.json(settingsModel);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Could not find schools" });
          });
});

// get setting by id
server.get("/:id", authenticate, (req, res) => {
    const id = req.params.id;
    settingsModel.getSettingsById(id)
      .then(singleSchool => {
        res.json(singleSchool);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: "Could not find school" });
      });
  });

server.post('/', authenticate, (req, res) => {
    const schoolData = req.body;

    console.log('body', req.body)

    schoolData.parent_id = schoolData;
    settingsModel.postSettings(schoolData)
        .then((settingsModel) => {
            res.status(200).json(settingsModel)
        }).catch((err) => {
            res.status(500).json({ message: 'Error adding school' })
        });
});


server.put('/:id', authenticate, (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    settingsModel.updateSettings(id, changes)
        .then((settingsModel) => {
            res.status(200).json({ message: `school ${id} updated!` })
        }).catch((err) => {
            res.status(500).json({ message: 'Error Updating school' })
        });
});

server.delete('/:id', authenticate, (req, res) => {
    const id = req.params.id;
    settingsModel.removeSettings(id)
        .then(settingsModel => {
            res.status(204).json({ message: `school ${id} Deleted!` })
        }).catch((err) => {
            res.status(500).json({ message: 'Error Deleting school' })
        });
});

module.exports = server;


