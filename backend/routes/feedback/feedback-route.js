const router = require('express').Router();
let Feedback = require("../../model/feedback/feedback.model");
 
router.route('/').get((req, res) => {
 Feedback.find()
    .then(feedbacks => res.json(feedbacks))
    .catch(err => res.status(400).json('Error: ' + err));
});
 
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
 
  const newFeedback = new Feedback({
    name,
    email,
    message,
  });
 
  newFeedback.save()
  .then(() => res.json('Feedback added to this page!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
  



router.route('/:id').get((req, res) => {
  Feedback.findById(req.params.id)
    .then(feedback => res.json(feedback))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Feedback.findByIdAndDelete(req.params.id)
    .then(() => res.json('Feedback deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
 Feedback.findById(req.params.id)
    .then(feedback => {
      feedback.name = req.body.name;
      feedback.email = req.body.email;
      feedback.message = req.body.message;
    
     feedback.save()
        .then(() => res.json('Feedback updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;