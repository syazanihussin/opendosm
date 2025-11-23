import { BaseRecord, DistrictRecord, StateRecord } from '@root/types/dataset.types'

export interface IncomeRecord {
  income_mean: number
  income_median: number
}

export type Income = BaseRecord & IncomeRecord
export type IncomeState = StateRecord & IncomeRecord
export type IncomeDistrict = DistrictRecord & IncomeRecord
