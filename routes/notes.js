var express = require('express');
var router = express.Router();

const Note = require('../models/Note');

/* GET notes listing. */
router.get('/', function(req, res, next) {
  const promise = Note.find({ });
	promise.then((data) => {
		res.json(data);
	}).catch((err) => {
		res.json(err);
	})
});


router.post('/', function(req, res, next) {
    const note = new Note(req.body);
	const promise = note.save();
	promise.then((data) => {
		res.json(data);
	}).catch((err) => {
		res.json(err);
	});
});

router.get('/:id', function(req, res, next) {
    const promise = Note.findById(req.params.id);
      promise.then((data) => {
          res.json(data);
      }).catch((err) => {
          res.json(err);
      })
 });

 router.put('/:id', function(req, res, next) {
    const promise = Note.findByIdAndUpdate(
		req.params.id,
		req.body,
		{
			new: true
		}
	);
	promise.then((data) => {
		if (!data)
			next({ message: 'The note was not found.', code: 99 });

		res.json(data);
	}).catch((err) => {
		res.json(err);
	});
});


router.delete('/:id', function(req, res, next) {
	const promise = Note.findByIdAndRemove(req.params.id);

	promise.then((data) => {
		if (!data)
			next({ message: 'The data was not found.', code: 99 });

		res.json({ status: 1 });
	}).catch((err) => {
		res.json(err);
	});
});

module.exports = router;
