const router = require('express').Router();

const { getThoughts, getSingleThought, createThought, updateThought, killThought, createReaction, killReaction} = require('../../controllers/thoughtControllers');


// /api/thoughts

router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(killThought);

// /api/thoughts/:thoughtId/reactions

router.route('/:thoughtId/reactions').post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId

router.route('/:thoughtId/reactions/:reactionId').delete(killReaction);
module.exports = router;