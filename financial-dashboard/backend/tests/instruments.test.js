const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const instrumentRoutes = require('../routes/instruments');

// Create a mock server for testing
const app = express();
app.use(bodyParser.json());
app.use('/api/instruments', instrumentRoutes);

describe('Instruments API', () => {
  // Test case: GET /api/instruments
  test('GET /api/instruments returns all instruments', async () => {
    const response = await request(app).get('/api/instruments');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  // Test case: GET /api/instruments/:id
  test('GET /api/instruments/:id returns instrument by ID', async () => {
    const response = await request(app).get('/api/instruments/1'); // Replace `1` with a valid test ID
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('name');
  });

  // Test case: Invalid route
  test('GET /api/invalid returns 404', async () => {
    const response = await request(app).get('/api/invalid');
    expect(response.statusCode).toBe(404);
  });
});
