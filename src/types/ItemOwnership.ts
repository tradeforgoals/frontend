import { TradeStatus } from './TradeStatus';

export type ItemOwnership = {
  id: number;
  ownerId: string;
  tradeStatus: TradeStatus;
  tradeAgainst: number;
};