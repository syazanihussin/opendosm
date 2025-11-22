import { BaseRecord, StateRecord } from '@/types/dataset.types.js'

export interface FertilityRecord {
  age_group: string
  fertility_rate: number
}

export type Fertility = BaseRecord & FertilityRecord
export type FertilityState = StateRecord & FertilityRecord
