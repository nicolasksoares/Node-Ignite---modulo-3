# App

GymPass style app.

# Rfs (Requisitos Funcionais) // O que o usuário pode fazer; funcionalidades da aplicação;

[ ] Deve ser possível se cadrastrar;
[ ] Deve ser possível se autenticar;
[ ] Deve ser possível obter o perfil de um usuário logado;
[ ] Deve ser possível obter o número de check-ins relizados pelo usuário logado;
[ ] Deve ser possível o usuário obter seu histórico de check-ins;
[ ] Deve ser possível o usuário buscar academias próximas;
[ ] Deve ser possível o usuário buscar academias pelo nome;
[ ] Deve ser possível o usuário realizar check-in em uma academia;
[ ] Deve ser possível validar o check-in de um usuário;
[ ] Deve ser possível cadastrar uma academia;

# RNs (Regras de negócio) // Caminhos que a aplicação pode tomar; Determina as condições aplicadas para cada regra de negócio;

[ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
[ ] O usuário não pode fazer 2 check-ins no mesmo dia;
[ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
[ ] O check-in só pode ser validado até 20 minutos após criado;
[ ] O check-in só pode ser validado por adms;
[ ] A academia só pode ser cadastrada por adms;

# RNFs (Requisitos não-funcionais) // Requisitos que não partem do cliente; São mais técnicos; Banco de dados, estratégias de paginação, etc;

[ ] A senha do usuário precisa estar criptografada;
[ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
[ ] Todas as listas de dados precisam estar paginadas com 20 itens por página;
[ ] O usuário deve ser identificado por um JWT;
