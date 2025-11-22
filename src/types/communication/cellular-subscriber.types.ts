import { BaseRecord } from '@/types/dataset.types'

export interface CellularSubscriberRecord {
  plan: string
  subscriptions: number
}

export type CellularSubscriber = BaseRecord & CellularSubscriberRecord
