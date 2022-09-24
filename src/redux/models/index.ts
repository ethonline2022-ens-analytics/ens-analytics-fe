import { Models } from '@rematch/core'
import { count } from './count'
import { auth } from './auth'

export interface RootModel extends Models<RootModel> {
  count: typeof count;
  auth: typeof auth
}
export const models: RootModel = { count, auth }