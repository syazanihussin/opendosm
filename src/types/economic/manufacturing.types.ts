import { BaseRecord, DistrictRecord, StateRecord } from '@root/types/dataset.types'

export interface ManufacturingRecord {
  sales_value: number
  employees: number
  salaries_wages: number
}

export type ManufacturingAnnual = BaseRecord & ManufacturingRecord
export type ManufacturingAnnualState = StateRecord & ManufacturingRecord
export type ManufacturingAnnualDistrict = DistrictRecord & ManufacturingRecord
