// src/services/youtubeService.js
const ytdl = require('ytdlp-nodejs');

const processVideo = async (videoUrl, config) => {
  try {
    if (!videoUrl) {
      throw new Error('Video URL is required');
    }

    const options = {
      format: config?.format || 'best',
      quality: config?.quality || 'highest',
      output: config?.output || './output/%(title)s.%(ext)s'
    };

    console.log('Processing video with options:', options);
    
    // Use ytdl to download and process the video
    const result = await ytdl.download(videoUrl, options);
    
    return {
      success: true,
      message: 'Video processed successfully',
      result
    };
  } catch (error) {
    console.error('Error processing video:', error);
    throw new Error(`Failed to process video: ${error.message}`);
  }
};

module.exports = { processVideo };