'use strict';

process.env.NODE_ENV = 'test';

const request = require('supertest');
const app = require('../app');

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /json/);
    expect(response.body.message).toBe("Hello Aktia!");
  });
});
