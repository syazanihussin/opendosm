import { BaseRecord, StateRecord } from '@/types/dataset.types'

export interface HiesPercentileRecord {
  percentile: number
  variable: string
  income: number
}

export type HiesPercentile = BaseRecord & HiesPercentileRecord
export type HiesPercentileState = StateRecord & HiesPercentileRecord
