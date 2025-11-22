import { BaseRecord, StateRecord } from '@/types/dataset.types'

export interface ForestRecord {
  area: number
}

export type ForestReserve = BaseRecord & ForestRecord
export type ForestReserveState = StateRecord & ForestRecord
