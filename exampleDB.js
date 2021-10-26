const db = {
  "CLIENTES": {
     "SCHEMA": ["id", "nome", "sobrenome"],
     "DATA": {
         "1":{"nome": "Nicolas", "sobrenome":"Ryberg"},
         "2":{"nome": "Vitor", "sobrenome":"Guimarães"},
     }  
 },
  "FORNECEDORES": { 
     "SCHEMA": ["id", "col1", "col2"],
     "DATA": {
         "1":{"col1": "", "col2":""}
     },
  }
};

module.exports = {
  db,
};