// src/routes/youtube.js
const express = require('express');
const router = express.Router();
const { processVideo } = require('../services/youtubeService');

// API endpoint to process YouTube videos
router.post('/process', (req, res) => {
  const { videoUrl, config } = req.body;

  if (!videoUrl) {
    return res.status(400).json({ error: 'Video URL is required' });
  }

  try {
    const result = await processVideo(videoUrl, config);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;