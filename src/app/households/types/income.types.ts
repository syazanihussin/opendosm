export interface GetIncomeProps {
  date?: string
  state?: string
  district?: string
}

export interface Income {
  date: string
  state: string
  district: string
  income_mean: number
  income_median: number
}

export type Incomes = Income[]
