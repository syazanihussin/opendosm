import { DistrictRecord } from '@/types/dataset.types'

export interface AmenityRecord extends DistrictRecord {
  piped_water: number
  sanitation: number
  electricity: number
}

export type AccessAmenity = DistrictRecord & AmenityRecord
