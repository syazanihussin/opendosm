import { BaseRecord, DistrictRecord, StateRecord } from '@/types/dataset.types'

export interface InequalityRecord {
  gini: number
}

export type Inequality = BaseRecord & InequalityRecord
export type InequalityState = StateRecord & InequalityRecord
export type InequalityDistrict = DistrictRecord & InequalityRecord
