import { BaseRecord, StateRecord } from '@/types/dataset.types'

export interface ProfileRecord {
  households: number
  living_quarters: number
}

export type Profile = BaseRecord & ProfileRecord
export type ProfileState = StateRecord & ProfileRecord
