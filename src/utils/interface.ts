export interface IUser {
  _id?: string
  email: string
  password: string
  firstName?: string
  lastName?: string
  createdAt?: Date
  updatedAt?: Date
}
export interface CustomRequest {
  details: IUser
  file: object
  params: object
  query: object
  path: object
}

export interface ILogin {
  email: string
  password: string
}

export interface IWallet {
  userId: string
  balance: number
}

export interface IWalletTransac {
  userId: string
  amount: number
  isinflow: boolean
  status: string
  paymentMethod: string
  currency: string
}

export interface ITransac {
  userId: string
  transactionId: number
  name: string
  email: string
  phone: string
  amount: number
  currency: string
  paymentStatus: string
  paymentGateway: string
}