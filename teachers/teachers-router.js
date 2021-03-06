const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const session = require('express-session'); // <<<<<<<<<<<<<<<<<<<<<
const KnexSessionStore = require('connect-session-knex')(session); // gotcha
const jwt = require('jsonwebtoken');


const teachersModel = require('./teachers-model.js');
const authenticate = require('../auth/restricted-middleware.js');
const dbConnection = require('../data/dbConfig.js');
const secrets = require('../config/secret.js');

const server = express();

const sessionConfig = {
    name: 'school', // would name the cookie sid by default
    secret: process.env.SESSION_SECRET || 'keep it secret, keep it safe',
    cookie: {
        maxAge: 1000 * 60 * 60, // in milliseconds
        secure: false, // true means only send cookie over https
        httpOnly: true, // true means JS has no access to the cookie
    },
    resave: false,
    saveUninitialized: true, // GDPR compliance
    store: new KnexSessionStore({
        knex: dbConnection,
        tablename: 'knexsessions',
        sidfieldname: 'sessionid',
        createtable: true,
        clearInterval: 1000 * 60 * 30, // clean out expired session data
    }),
};

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig)); // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


server.post('/register', (req, res) => {
    let { name, phone, email, password } = req.body;

    const hash = bcrypt.hashSync(password, 8); // it's 2 ^ 8, not 8 rounds

    teachersModel.add({ name, phone, email, password: hash })
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json(error);
        });
});


server.post('/login', (req, res) => {
    let { email, password } = req.body;

    teachersModel.findBy({ email })
        .first()
        .then(admin => {

            if (admin && bcrypt.compareSync(password, admin.password)) {
                const token = getJwt(admin);
                console.log(getJwt(admin));
                let id = admin.id
                res.status(200).json({ message: `Welcome ${admin.email}!`, token, id });
            } else {
                res.status(401).json({ message: 'Invalid Credentials' })
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

  server.get('/all', authenticate, (req, res) => {
    teachersModel.find()
        .then(teachers => {
      
            res.json(teachers);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Could not find teachers" });
          });
});

server.get("/all/:id", authenticate, (req, res) => {
    const id = req.params.id;
    teachersModel.findById(id)
      .then(singleTeacher => {
        res.json(singleTeacher);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: "Could not find teacher" });
      });
  });

  
function getJwt(admin) {
    const payload = {
        subject: admin.id,
        email: admin.email,
        jwtid: 1,
    };
    const options = {
        expiresIn: '8h',
    }
    return jwt.sign(payload, secrets.jwtSecret, options);
}




server.put('/all/:id', (req, res) => {
    let { name, phone, email, password } = req.body;
    console.log(req.body)
    const hash = bcrypt.hashSync(password, 8); // it's 2 ^ 8, not 8 rounds

    teachersModel.updateTeacher({ name, phone, email, password: hash })
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json(error);
        });
});

server.get('/hash', (req, res) => {
    const name = req.query.name;

    // hash the name
    const hash = bcrypt.hashSync(name, 8); // use bcryptjs to hash the name
    res.send(`the hash for ${name} is ${hash}`);
});

server.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(error => {
            if (error) {
                res.status(500).json({
                    message:
                        'you can check out anytime you like, but you can never leave',
                });
            } else {
                res.status(200).json({ message: 'Hey, Bye, come back soon!' });
            }
        });
    } else {
        res.status(200).json({ message: 'already logged out' });
    }
});

server.delete('/all/:id', authenticate, (req, res) => {
    const id = req.params.id;
    console.log(id)
    teachersModel.removeTeacher(id)
        .then(teachersModel => {
            console.log(teachersModel)
            res.status(204).json({ message: `teacher ${id} Deleted!` })
        }).catch((err) => {
            res.status(500).json({ message: 'Error Deleting teacher' })
        });
});

module.exports = server;


