import type { IStatus } '@/interfaces/status'

export interface IDoctor {
    id: number
    name: string
    phoneNumber: string
    documentNumber: string
    statusId: string
    birthDate: string
  }
  
  export type GetDoctorListRequest = {
    itemsPerPage: number
    page: number
  }
  
  export type GetDoctorListResponse = {
    total: number
    items: IDoctor[]
  }