import { BaseRecord } from '@root/types/dataset.types'

export interface CellularSubscriberRecord {
  plan: string
  subscriptions: number
}

export type CellularSubscriber = BaseRecord & CellularSubscriberRecord
