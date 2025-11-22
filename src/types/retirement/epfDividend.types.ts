import { BaseRecord } from '@/types/dataset.types'

export interface EPFDividendRecord {
  conventional: number
  shariah: number
}

export type EPFDividend = BaseRecord & EPFDividendRecord
