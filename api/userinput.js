const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

router.get('/', async (req, res) => {
    const userinput = await queries.getAll();
    res.json(userinput);
    //
    // THE .THEN VERSION
    // queries.getAll()
    // .then(dogs => {
    //  res.json(headlines);
    //});
})

router.get("/:userEmail", (request, response, next) => {
    queries.read(request.params.userEmail).then(user => {
        user
            ? response.json({user})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(user => {
        response.status(201).json({user: user});
    }).catch(next);
});

router.delete("/:userEmail", (request, response, next) => {
    queries.delete(request.params.userEmail).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:userEmail", (request, response, next) => {
    queries.update(request.params.userEmail, request.body).then(user => {
        response.json({user: user});
    }).catch(next);
});

module.exports = router; 