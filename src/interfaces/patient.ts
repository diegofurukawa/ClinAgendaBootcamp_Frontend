import type { IStatus } '@/interfaces/status'

export interface IPatient {
    id: number
    name: string
    phoneNumber: string
    documentNumber: string
    statusId: string
    birthDate: string
  }
  
  export type GetPatientListRequest = {
    itemsPerPage: number
    page: number
  }
  
  export type GetPatientListResponse = {
    total: number
    items: IPatient[]
  }