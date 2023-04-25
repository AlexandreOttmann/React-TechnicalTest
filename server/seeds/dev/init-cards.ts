import { Knex } from "knex";
import Card, { CardName, CardStatus } from "../../src/domain/entities/Card";

const INIT_DATA: Card[] = [
  {
    id: 'cd08d6e1-48c7-4fc3-a62e-ea838d180955',
    pan: '2702 **** **** 3585',
    pin: "1234",
    name: CardName.Basic,
    expiresAt: "2023-12-01T02:32:29.060Z",
    expired: false,
    status: CardStatus.Locked,
    isPhysical: true,
    owner: "John McClane",
},
{
    id: '1d02cfc0-dd0e-44f0-94e0-713920f01711',
    pan: '6633 **** **** 9104',
    pin: "5678",
    name: CardName.Basic,
    expiresAt: "2023-08-02T18:41:30.823Z",
    expired: true,
    status: CardStatus.Active,
    isPhysical: false,
    owner: "Ellen Ripley",
},
{
    id: 'c86e5dda-dfdd-4728-a2c9-5c1a7eb4a449',
    pan: '4479 **** **** 4199',
    pin: "8888",
    name: CardName.Business,
    expiresAt: "2023-09-14T20:40:45.727Z",
    expired: false,
    status: CardStatus.Lost,
    isPhysical: true,
    owner: "Sarah Connor",
},
{
    id: '1f72ed4c-e282-488f-9723-a4c5d70f831d',
    pan: '6090 **** **** 8276',
    pin: "2099",
    name: CardName.Business,
    expiresAt: "2025-03-03T05:56:50.116Z",
    expired: false,
    status: CardStatus.Active,
    isPhysical: false,
    owner: "Marty McFly",
},
];

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("cards").del();

  // Inserts seed entries
  await knex("cards").insert(INIT_DATA);
}
