const express = require('express');
const {createTv, getAllTvs, updateTv, deleteTv} = require('../controller/tv.controller');
const router = express.Router();

router.post('/', createTv);
router.get('/', getAllTvs);
router.put('/:id', updateTv);
router.delete('/:id', deleteTv);

module.exports = router;