const router = require('express').Router();

const { getThoughts } = require('../../controllers/thoughtControllers');


// /api/thoughts

router.route('/').get(getThoughts)


module.exports = router;