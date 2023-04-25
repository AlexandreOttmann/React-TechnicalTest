export enum CardName {
  Basic = 'Basic',
  Business = 'Business',
}

export enum CardStatus {
  Active = 'active',
  Locked = 'locked',
  Lost = 'lost',
}

export default interface Card {
  id: string;
  expiresAt: string;
  expired: boolean;
  name: CardName;
  pan: string;
  pin: string;
  status: CardStatus;
  isPhysical: boolean;
  owner: string;
}