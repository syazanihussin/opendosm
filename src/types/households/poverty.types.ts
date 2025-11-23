import { BaseRecord, DistrictRecord, StateRecord } from '@root/types/dataset.types'

export interface PovertyRecord {
  poverty_absolute: number
  poverty_hardcore: number
  poverty_relative: number
}

export type Poverty = BaseRecord & PovertyRecord
export type PovertyState = StateRecord & PovertyRecord
export type PovertyDistrict = DistrictRecord & PovertyRecord
