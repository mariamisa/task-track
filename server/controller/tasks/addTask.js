const { addNewTask } = require('../../database/queries');
const { boomify, addFilesToCloudenary } = require('../../utils');

const addTask = async (req, res, next) => {
  try {
    const { add } = req.permission;
    const { name, type } = req.body;
    if (!add) {
      throw boomify(401, 'you dont have permission to add task!');
    }
    const taskData = { name, type };
    if (req.files && req.files.protocol && req.files.protocol.length > 0) {
      const urls = await addFilesToCloudenary(req.files.protocol);
      taskData.protocol = urls;
    }
    if (req.files && req.files.attach && req.files.attach.length > 0) {
      const urls = await addFilesToCloudenary(req.files.attach);
      taskData.attach = urls;
    }
    await addNewTask(taskData);
    res.status(200).json({
      statusCode: 200,
      msg: 'task added successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addTask;
