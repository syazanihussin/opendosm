import { DistrictRecord, StateRecord } from '@/types/dataset.types'

export interface HiesRecord {
  income_mean: number
  income_median: number
  expenditure_mean: number
  gini: number
  poverty: number
}

export type HiesState = StateRecord & HiesRecord
export type HiesDistrict = DistrictRecord & HiesRecord
