import User from '../models/User';

class UserRepository {
  async create(user) {
    const newUser = new User(user);
    return await newUser.save();
  }

  async findAll(page) {
    return await User.paginate({}, { sort: { createdAt: -1 }, page });
  }

  async findById(id) {
    return await User.findById(id);
  }

  async findByUsername(username) {
    return await User.findOne({ username });
  }

  async findByEmail(email) {
    return await User.findOne({ email });
  }

  async findByUsernameOrEmail(username = '', email = '') {
    return await User.findOne({ $or: [{ username }, { email }] });
  }

  async update(id, user) {
    return await User.findOneAndUpdate(id, user);
  }

  async delete(id) {
    return await User.deleteOne({ _id: id });
  }
}

export default UserRepository;