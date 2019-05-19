export const Quality = {
  as_new: 'As new',
  almost_new: 'Almost new',
  used: 'Used'
};

export interface TradeType {
  title: string;
  description: string;
  quality: string;
  photo: string;
  category: string;
}