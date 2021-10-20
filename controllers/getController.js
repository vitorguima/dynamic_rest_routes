function defineGetController(controllers) {
  // if (controllers) {
  //   return controllers.get;
  // }

  const getController = (_req, res) => {
    return res.status(200).json({ message: 'get route ok' });
  }

  return getController;
}

console.log(defineGetController());

module.exports = defineGetController;
