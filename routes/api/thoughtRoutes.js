const router = require('express').Router();

const { getThoughts, getSingleThought, createThought, updateThought, killThought, createReaction } = require('../../controllers/thoughtControllers');


// /api/thoughts

router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(killThought);

//

router.route('/thoughtId/reactions').post(createReaction)


module.exports = router;