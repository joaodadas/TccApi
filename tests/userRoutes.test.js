const request = require('supertest');
const express = require('express');
const userRoutes = require('../routes/userRoutes');
const userService = require('../application/userService');

jest.mock('../application/userService');

const app = express();
app.use(express.json());
userRoutes(app);

describe('user routes', () => {
  test('POST /api/users returns 201', async () => {
    userService.createUser.mockResolvedValue({ id: 1 });

    const res = await request(app)
      .post('/api/users')
      .send({ name: 'A', email: 'a@example.com', password: 'pwd' });

    expect(res.status).toBe(201);
    expect(userService.createUser).toHaveBeenCalled();
  });
});
