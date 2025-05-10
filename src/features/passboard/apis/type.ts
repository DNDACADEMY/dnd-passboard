import { type ProgramStatus } from '../types/status'

export type ResqPassboardStatus = {
  status: ProgramStatus
  recruitingEndDate: string | Date
}

export type ResqMyApplyStatus = {
  status: ProgramStatus
}
