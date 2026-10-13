# API REST - Farmácia

CRUD de medicamentos com Node.js, Express e MySQL/MariaDB.

## Como executar
1. Execute o script `database/farmacia.sql` no MySQL/MariaDB.
2. Ajuste usuário e senha em `config/db.js`, se necessário.
3. Rode:
```bash
npm install
npm start
```
4. A API sobe em http://localhost:3000

## Rotas

- **GET**    `/medicamento` - Lista todos os medicamentos.
- **GET**    `/medicamento/:id` - Retorna um medicamento pelo ID.
- **POST**   `/medicamento` - Adiciona um novo medicamento.
- **PUT**    `/medicamento/:id` - Atualiza um medicamento pelo ID.
- **DELETE** `/medicamento/:id` - Remove um medicamento pelo ID.