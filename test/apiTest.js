// test/apiTest.js
const request = require('supertest');
const app = require('../src/app');

describe('YouTube API', () => {
  it('should process a YouTube video', async () => {
    const response = await request(app)
      .post('/api/youtube/process')
      .send({
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        config: {
          format: 'mp4',
          quality: 'highest'
        }
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
  });

  it('should return an error if video URL is missing', async () => {
    const response = await request(app)
      .post('/api/youtube/process')
      .send({
        config: {
          format: 'mp4',
          quality: 'highest'
        }
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('Video URL is required');
  });
});