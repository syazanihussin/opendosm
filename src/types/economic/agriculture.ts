import { BaseRecord, DistrictRecord, StateRecord } from '@root/types/dataset.types'

export interface AgricultureRecord {
  production_value: number
  planted_area: number
}

export type AgricultureAnnual = BaseRecord & AgricultureRecord
export type AgricultureAnnualState = StateRecord & AgricultureRecord
export type AgricultureAnnualDistrict = DistrictRecord & AgricultureRecord
