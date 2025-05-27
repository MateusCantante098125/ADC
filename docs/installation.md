---
sidebar_position: 3
---
# Guia de Instalação do Cooking Timer

Este guia descreve como instalar e iniciar rapidamente a aplicação **Food Timer**, desenvolvida com Flask e MySQL.

## Passos para Instalação

1. **Clone o repositório ou baixe os arquivos**
   ```bash
   git clone https://github.com/seu-usuario/cooking-timer.git
   cd cooking-timer
   ```

2. **Crie e ative um ambiente virtual (opcional, mas recomendado)**
   ```bash
   python -m venv venv
   source venv/bin/activate  # no Windows: venv\Scripts\activate
   ```

3. **Instale as dependências**
   ```bash
   pip install flask flask-mysqldb
   ```

4. **Configure o banco de dados**
   - Crie um banco de dados MySQL chamado `food`.
   - Atualize as credenciais no `app.py` ou use variáveis de ambiente.

5. **Execute a aplicação**
   ```bash
   python app.py
   ```

6. **Acesse a aplicação**
   - Abra o navegador e vá para `http://localhost:5000`.

## Requisitos

- Python 3.x
- MySQL
- Navegador moderno (Google Chrome, Firefox, Edge, etc.)

> **Nota:** O banco de dados e as credenciais devem estar configurados corretamente antes da execução.

---

Caso deseje implantar o projeto em produção, considere o uso de servidores como Gunicorn + Nginx, e o armazenamento seguro de variáveis sensíveis.

© 2025 Cooking Timer. Todos os direitos reservados.
