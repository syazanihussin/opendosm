import { BaseRecord, DistrictRecord, StateRecord } from '@root/types/dataset.types'

export interface ExternalTradeRecord {
  exports: number
  imports: number
  balance: number
}

export type ExternalTradeAnnual = BaseRecord & ExternalTradeRecord
export type ExternalTradeAnnualState = StateRecord & ExternalTradeRecord
export type ExternalTradeAnnualDistrict = DistrictRecord & ExternalTradeRecord
