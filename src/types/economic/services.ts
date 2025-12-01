import { BaseRecord, DistrictRecord, StateRecord } from '@root/types/dataset.types'

export interface ServicesRecord {
  revenue: number
  expenditure: number
  employees: number
  salaries: number
}

export type ServicesAnnual = BaseRecord & ServicesRecord
export type ServicesAnnualState = StateRecord & ServicesRecord
export type ServicesAnnualDistrict = DistrictRecord & ServicesRecord
