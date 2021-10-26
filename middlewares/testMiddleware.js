const validateBody = (req, res, next) => {
  const { nome, sobrenome } = req.body;

  if (nome && sobrenome) {
    return next()
  }

  return res.status(400).json({ message: 'nome e sobrenome são obrigatórios' });
}

module.exports = validateBody;