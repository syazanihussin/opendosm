import { BaseRecord, DistrictRecord, StateRecord } from '@root/types/dataset.types'

export interface MiningRecord {
  production_value: number
  sales_value: number
}

export type MiningAnnual = BaseRecord & MiningRecord
export type MiningAnnualState = StateRecord & MiningRecord
export type MiningAnnualDistrict = DistrictRecord & MiningRecord
