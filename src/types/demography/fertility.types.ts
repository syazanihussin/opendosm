import { BaseRecord, StateRecord } from '@root/types/dataset.types.js'

export interface FertilityRecord {
  age_group: string
  fertility_rate: number
}

export type Fertility = BaseRecord & FertilityRecord
export type FertilityState = StateRecord & FertilityRecord
