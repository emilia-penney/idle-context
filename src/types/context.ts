export interface CurrentContextI {
  currencies: { [key: string]: number; }
  addCurrency: (name: string, amount: number) => void;
  updateCurrency: (name: string, amount: number) => void;
}