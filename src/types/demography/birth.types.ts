import { BaseRecord, DistrictRecord, StateRecord } from '@/types/dataset.types'

export interface BirthDailyRecord {
  births: number
}

export interface BirthRecord {
  abs: number
  rate: number
}

export interface BirthSexRecord extends BirthRecord {
  sex: string
}

export interface BirthSexEthnicRecord extends BirthSexRecord {
  ethnicity: string
}

export type BirthsDaily = BaseRecord & BirthDailyRecord

export type BirthsAnnual = BaseRecord & BirthRecord
export type BirthsAnnualState = StateRecord & BirthRecord

export type BirthsAnnualSexEthnic = BaseRecord & BirthSexEthnicRecord
export type BirthsAnnualSexEthnicState = StateRecord & BirthSexEthnicRecord //no rate

export type BirthsDistrictSex = DistrictRecord & BirthSexRecord
