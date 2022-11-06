import { Store } from "../types"

/**
 * Default version of the configuration for the RISP setup.
 *
 * @property baseUrl Base address for HTPP requests.
 */
export interface Setup {
  baseUrl?: string
  token?: string
  errorMessage?: (message: string) => void
  successMessage?: (message: string) => void
}

/**
 * A setup for RISP used in Tasenor project.
 */
export type TasenorSetup = Setup & {
  baseUrl: string
  store: Store
  token: string
  errorMessage: (msg: string) => void
  successMessage: (msg: string) => void
}
