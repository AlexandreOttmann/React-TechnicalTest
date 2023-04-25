# Candidate Playground server

## Getting started

Initialize the project and inject mocked data by running

```bash
yarn
yarn data:init
```

Run the server with

```bash
yarn dev
```

Run the unit tests with

```bash
yarn test
```

## Documentation

Open [api-docs](http://localhost:3000/api-docs) in your local browser to get all information about the supported endpoints.

Note: The swagger file follows the [openapi 3.0 specification](https://swagger.io/specification/).

### Examples of calls

You may use these commands to check your database's data initialization.

### List cards

```bash
curl -X GET -H "Content-Type: application/json" \
    http://localhost:3000/cards
```

### Get a card by id

```bash
curl -X GET -H "Content-Type: application/json" \
    http://localhost:3000/cards/<cardId>
```

## Details about the implementation

> This is not mandatory for the frontend exercise and is only here for your information.

### Database

This project uses [knex](https://knexjs.org/guide/query-builder.html) to manage and query a sqlite database.

You can restore the state of the dev database by removing the sqlite files, running the migrations and the seeds.
Everything is managed by the following command :

```bash
yarn data:init
```

If you want to cancel your migrations, remove them from the migrations folder before the command.
Be sure to not remove the 20220930145245_init-cards-table migration which contains the basic structure of th Cards table.

### Migrations

Add a new migration by running the following command in the terminal

```bash
knex migrate:make migration_name -x ts
```

Migration files are created under migrations/. Follow [knex migration API](https://knexjs.org/guide/schema-builder.html) to define your changes and apply your migrations using the following command

```bash
knex migrate:latest
```

### Seeds

Add a new seed file by running the following command in the terminal

```bash
knex seed:make init-cards
```

Seed files are created under seeds/dev. Populate your seed and apply them by running

```bash
knex seed:run
```
