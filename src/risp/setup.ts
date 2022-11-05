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
