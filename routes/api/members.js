const express = require('express');
const router = express.Router();

const Member = require('../../models/Member');

router.get('/', (req, res) => {
  Member.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

router.post('/', (req, res) => {
  const newMember = new Member({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    eventDate: req.body.eventDate
  });

  console.log(newMember.eventDate);

  newMember.save().then(member => res.json(member));
});

module.exports = router;
