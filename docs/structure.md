---
sidebar_position: 2
---
# Estrutura do Projeto - Food Timer

Este documento descreve a organização dos principais ficheiros do projeto **Food Timer**, uma aplicação web desenvolvida com Flask para gerenciamento de alimentos e controlo de temporizadores.

## Estrutura de Diretórios

```
cooking-timer/
├── app.py
├── config/
│   ├── config.py
│   └── db.py
├── templates/
│   ├── index.html
│   ├── new.html
│   ├── create.html
│   ├── create_food.html
│   ├── delete_food.html
│   ├── food.html
│   ├── user_food.html
│   ├── food_timer.html
│   └── timer.html
├── static/
│   └── assets/
│       ├── style.css
│       ├── script.js
│       ├── time.js
│       └── img/
```

## Componentes e Responsabilidades

### `app.py`
Arquivo principal da aplicação. Suas funções incluem:
- Inicializar a aplicação Flask;
- Definir e gerenciar rotas (GET e POST);
- Controlar sessões de usuário;
- Conectar lógica de negócio com a visualização e o banco de dados;
- Renderizar templates HTML.

### `config/config.py`
Contém configurações globais:
- Parâmetros como `DEBUG`, `SECRET_KEY`;
- Configurações específicas de ambiente (dev/prod);
- Centralização para facilitar manutenção.

### `config/db.py`
Responsável pela configuração e inicialização da conexão com o banco de dados MySQL:
- Usa `flask_mysqldb`;
- Fornece utilitários para operações SQL.

### `templates/`
Contém os arquivos HTML utilizados pela aplicação. Os templates seguem uma lógica modular para facilitar reutilização e manutenção.

### `static/assets/`
Armazena arquivos estáticos:
- **`style.css`**: Estilização da aplicação;
- **`script.js` / `time.js`**: Scripts para temporizadores e interações dinâmicas;
- **`img/`**: Imagens utilizadas na aplicação.

## Benefícios da Estrutura

- **Organização**: Código segmentado por função.
- **Escalabilidade**: Facilita a adição de novas funcionalidades.
- **Manutenção**: Cada módulo pode ser atualizado independentemente.
- **Colaboração**: Permite divisão clara entre front-end, back-end e banco de dados.

---

© 2025 Cooking Timer. Todos os direitos reservados.
