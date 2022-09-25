import { Models } from '@rematch/core'
import { count } from './count'
import { auth } from './auth'
import { ensData } from './ensData'



export interface RootModel extends Models<RootModel> {
  count: typeof count;
  auth: typeof auth;
  ensData: typeof ensData;
}
export const models: RootModel = { count, auth, ensData }