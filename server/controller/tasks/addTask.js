const { addNewTask } = require('../../database/queries');
const { boomify, addFilesToCloudenary } = require('../../utils');

const addTask = async (req, res, next) => {
  try {
    const { add } = req.permission;
    const {
      name, type, date,
      deadline,
      visibility,
    } = req.body;
    if (!add) {
      throw boomify(401, 'you dont have permission to add task!');
    }
    const taskData = {
      name,
      type,
      date,
      deadline,
      visibility,
    };
    if (req.files && req.files.protocol && req.files.protocol.length > 0) {
      const urls = await addFilesToCloudenary(req.files.protocol);
      taskData.protocol = urls;
    }
    if (req.files && req.files.attach && req.files.attach.length > 0) {
      const urls = await addFilesToCloudenary(req.files.attach);
      taskData.attach = urls;
    }
    const { rows: [taskDataInserted] } = await addNewTask(taskData);
    res.status(200).json({
      statusCode: 200,
      taskId: taskDataInserted.id,
      message: 'task added successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addTask;
