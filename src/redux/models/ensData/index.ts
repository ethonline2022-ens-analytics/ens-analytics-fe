import axios from 'axios'
import { Dispatch } from '../..'
import { CONFIG } from '../../../config'

interface EnsDataState {
  rawOwnership: {[index:string]: string[]} | undefined
  error   : string | undefined
}

export const ensData = {
  //
  state: {
    rawOwnership: undefined,
    error       : undefined
  } as EnsDataState,
  //
  reducers: {
    setError(state: EnsDataState, payload: string) {
      return {
        ...state, error: payload
      }
    },
    setRawOwnership(state: EnsDataState, payload:{[index:string]: string[]}) {
      return {
        ...state, rawOwnership: payload
      }
    }
  },
  //
  effects: (dispatch:Dispatch) => ({
    async getRawOwnership () {
      try {
        const res = await axios.get(CONFIG.STATIC_DUMP.RAW_OWNERSHIP)
        dispatch.ensData.setRawOwnership((res[ 'data' ] as {[index:string]: string[]}))
      } catch (error:unknown) {
        dispatch.ensData.setError((error as string).toString())
      }
    }
  })
}