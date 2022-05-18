export interface CurrentContextI {
  currencies: { [key: string]: number; }
  addCurrency: (name: string, amount: number) => boolean;
  updateCurrency: (name: string, amount: number) => boolean;
}