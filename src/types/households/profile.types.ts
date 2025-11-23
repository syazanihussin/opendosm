import { BaseRecord, StateRecord } from '@root/types/dataset.types'

export interface ProfileRecord {
  households: number
  living_quarters: number
}

export type Profile = BaseRecord & ProfileRecord
export type ProfileState = StateRecord & ProfileRecord
