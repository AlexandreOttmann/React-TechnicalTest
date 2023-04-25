export interface ICardsList {
  items: ICard[];
}

export interface ICardProps {
  card: ICard;
   payment: {
    balance: number;
    limit: number;
  };
  isFiltered: boolean;
}

export interface ICard {
  id: string;
  name: string;
  pan: string;
  pin: string;
  expiresAt: string;
  expired: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  isPhysical: number;
  owner: string;
}

export interface IBadge {
  status: string | undefined;
}