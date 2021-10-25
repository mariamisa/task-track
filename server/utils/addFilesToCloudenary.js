/* eslint-disable no-await-in-loop */
const uploadCloudinary = require('./uploadCloudinary');

const addFilesToCloudenary = async (files) => {
  const urls = [];
  const paths = files.map((el) => el.path);
  // eslint-disable-next-line no-restricted-syntax
  for (const path of paths) {
    const { url } = await uploadCloudinary(path);
    urls.push(url);
  }
  return urls;
};

module.exports = addFilesToCloudenary;
