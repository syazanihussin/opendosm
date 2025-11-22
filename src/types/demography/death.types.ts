import { BaseRecord, DistrictRecord, StateRecord } from '@/types/dataset.types'

export type DeathRecord = {
  abs: number
  rate: number
}

export interface DeathsSexRecord extends DeathRecord {
  sex: string
}

export interface DeathsSexEthnicRecord extends DeathsSexRecord {
  ethnicity: string
}

export interface DeathsEarlyChildhoodRecord extends DeathRecord {
  type: string
}

export interface DeathsEarlyChildhoodSexRecord extends DeathsEarlyChildhoodRecord {
  sex: string
}

export type Deaths = BaseRecord & DeathRecord
export type DeathsState = StateRecord & DeathRecord

export type DeathsMaternal = BaseRecord & DeathRecord
export type DeathsMaternalState = StateRecord & DeathRecord

export type DeathsEarlyChildhood = BaseRecord & DeathsEarlyChildhoodRecord
export type DeathsEarlyChildhoodState = StateRecord & DeathsEarlyChildhoodRecord

export type DeathsEarlyChildhoodSex = BaseRecord & DeathsEarlyChildhoodSexRecord
export type DeathsEarlyChildhoodSexState = StateRecord & DeathsEarlyChildhoodSexRecord

export type DeathsSexEthnic = BaseRecord & DeathsSexEthnicRecord
export type DeathsSexEthnicState = StateRecord & DeathsSexEthnicRecord //no rate

export type DeathsDistrictSex = DistrictRecord & DeathsSexRecord
