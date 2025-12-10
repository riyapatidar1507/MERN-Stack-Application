const Newsletter = require('../models/Newsletter');

exports.getAllNewsletters = async (req, res) => {
  try {
    const newsletters = await Newsletter.find().sort({ createdAt: -1 });
    res.json(newsletters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    const existingEmail = await Newsletter.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }

    const newsletter = new Newsletter({ email });
    const newNewsletter = await newsletter.save();
    res.status(201).json(newNewsletter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};