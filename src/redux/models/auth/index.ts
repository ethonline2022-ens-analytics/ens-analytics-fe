import { ethers } from 'ethers'
import { Dispatch } from '../..'
import { onboard } from '../../../onboard'
import { WalletState } from '@web3-onboard/core'
import { CONFIG } from '../../../config'
interface Auth {
  wallet: WalletState | undefined
  error   : string | undefined
  provider: ethers.providers.Provider | undefined,
  contract: ethers.Contract | undefined,
}

export const auth = {
  //
  state: {
    onboard : undefined,
    provider: undefined,
    contract: undefined,
    wallet  : undefined,
    error   : undefined
  } as Auth,
  //
  reducers: {
    setError(state: Auth, payload: string) {
      return {
        ...state, error: payload
      }
    },
    setWallet(state: Auth, payload: WalletState[] | WalletState | any) {
      return {
        ...state, wallet: Array.isArray(payload) ? payload[ 0 ] : payload
      }
    },
    setProvider(state: Auth, payload: { getSigner: () => ethers.Signer | ethers.providers.Provider | undefined }|any) {
      const contract = payload ? new ethers.Contract(
        CONFIG.CONTRACT.ADDRESS,
        CONFIG.CONTRACT.ABI,
        payload.getSigner()
      ) : undefined
      return {
        ...state, provider: payload, contract: contract
      }
    },
    onDisconnect(state: Auth) {
      return {
        ...state, provider: undefined, contract: undefined, wallet: undefined
      }
    }
  },
  //
  effects: (dispatch:Dispatch) => ({
    async connect () {
      try {
        const connectedWallet = await onboard.connectWallet()
        dispatch.auth.setWallet(connectedWallet)
      } catch (error:unknown) {
        dispatch.auth.setError((error as string).toString())
      }
    }
  })
}