# App

GymPass style app.

# Rfs (Requisitos Funcionais) // O que o usuário pode fazer; funcionalidades da aplicação;

[x] Deve ser possível se cadrastrar;
[x] Deve ser possível se autenticar;
[x] Deve ser possível obter o perfil de um usuário logado;
[x] Deve ser possível obter o número de check-ins relizados pelo usuário logado;
[x] Deve ser possível o usuário obter seu histórico de check-ins;
[x] Deve ser possível o usuário buscar academias próximas;
[x] Deve ser possível o usuário buscar academias pelo nome;
[x] Deve ser possível o usuário realizar check-in em uma academia;
[x] Deve ser possível validar o check-in de um usuário;
[x] Deve ser possível cadastrar uma academia;

# RNs (Regras de negócio) // Caminhos que a aplicação pode tomar; Determina as condições aplicadas para cada regra de negócio;

[x] O usuário não deve poder se cadastrar com um e-mail duplicado;
[x] O usuário não pode fazer 2 check-ins no mesmo dia;
[x] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
[x] O check-in só pode ser validado até 20 minutos após criado;
[x] O check-in só pode ser validado por adms;
[x] A academia só pode ser cadastrada por adms;

# RNFs (Requisitos não-funcionais) // Requisitos que não partem do cliente; São mais técnicos; Banco de dados, estratégias de paginação, etc;

[x] A senha do usuário precisa estar criptografada;
[x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
[x] Todas as listas de dados precisam estar paginadas com 20 itens por página;
[x] O usuário deve ser identificado por um JWT;
