const userRepository = require('../repositories/userRepository');
const userService = require('../application/userService');

jest.mock('../repositories/userRepository');

describe('userService', () => {
  test('createUser calls repository.create', async () => {
    userRepository.create.mockResolvedValue({ id: 1 });
    const data = { name: 'A', email: 'a@example.com', password: 'pwd' };
    const result = await userService.createUser(data);
    expect(userRepository.create).toHaveBeenCalledWith(data);
    expect(result).toEqual({ id: 1 });
  });
});
