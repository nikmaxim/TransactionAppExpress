const { db } = require(".");

const User = db.users;

exports.create = async (model) => {
  try {
    const foundUser = await User.findOne({ where: { email: model.email } });
    if (foundUser) return { succeeded: true, message: `User with such email=${model.email} already exists.` };

    await User.create(model);
    return { succeeded: true };
  } catch (e) {
    return { succeeded: false, message: "Error occurred while creating user." };
  }
};

exports.findOne = async (email) => {
  try {
    const product = await User.findOne({ where: { email } });
    if (!product) return { succeeded: true, message: `User with email=${email} was not found.` };
    return { succeeded: true, model: product };
  } catch {
    return { succeeded: false, message: "Error occurred while retrieving user by email." };
  }
};

exports.update = async (id, model) => {
  try {
    const result = await User.update(model, { where: { id } });

    if (result[0] === 1) return { succeeded: true };
    return { succeeded: true, message: `User with id=${id} was not updated.` };
  } catch {
    return { succeeded: false, message: "Error occurred while updating user." };
  }
};

exports.delete = async (id) => {
  try {
    const result = await User.destroy({ where: { id } });

    if (result === 1) return { succeeded: true };
    return { succeeded: true, message: `User with id=${id} was not deleted.` };
  } catch {
    return { succeeded: false, message: "Error occurred while deleting user." };
  }
};
