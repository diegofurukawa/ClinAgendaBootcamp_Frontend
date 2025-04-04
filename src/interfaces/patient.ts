import type { IStatus } '@/interfaces/status'

export interface IPatient {
    id: number
    name: string
    phoneNumber: string
    documentNumber: string
    statusId: IStatus
    birthDate: string
  }
  
  export type GetPatientListRequest = {
    itemsPerPage: number
    page: number
    name: IPatient['name']
  }
  
  export type GetPatientListResponse = {
    total: number
    items: IPatient[]
  }


  export type PatientForm = {
    name: IPatient['name']
    phoneNumber: IPatient['phoneNumber']
    documentNumber: IPatient['documentNumber']
    birthDate: IPatient['birthDate']
    statusId: IPatient['statusId']
  }
  