const router = require('express').Router();

const { getThoughts, getSingleThought, createThought, updateThought } = require('../../controllers/thoughtControllers');


// /api/thoughts

router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId

router.route('/:thoughtId').get(getSingleThought);


module.exports = router;