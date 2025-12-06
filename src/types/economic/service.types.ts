import { BaseRecord, DistrictRecord, StateRecord } from '@root/types/dataset.types'

export interface ServiceRecord {
  revenue: number
  expenditure: number
  employees: number
  salaries: number
}

export type ServiceAnnual = BaseRecord & ServiceRecord
export type ServiceAnnualState = StateRecord & ServiceRecord
export type ServiceAnnualDistrict = DistrictRecord & ServiceRecord
