import { DistrictRecord } from '@root/types/dataset.types'

export interface CrimeRecord {
  category: string
  type: string
  crimes: number
}

export type CrimeDistrict = DistrictRecord & CrimeRecord
