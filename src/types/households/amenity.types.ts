import { DistrictRecord } from '@root/types/dataset.types'

export interface AmenityRecord {
  piped_water: number
  sanitation: number
  electricity: number
}

export type AccessAmenity = DistrictRecord & AmenityRecord
