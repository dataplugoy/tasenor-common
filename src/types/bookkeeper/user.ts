import { ID } from 'interactive-elements'

export interface UserDataModel {
  id: ID,
  name: string,
  email: string,
  disabled: boolean,
  config: Record<string, unknown>
}
