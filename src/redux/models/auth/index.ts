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
    setError(state: any, payload: any) {
      return {
        ...state, error: payload
      }
    },
    setWallet(state: any, payload: any) {
      return {
        ...state, wallet: payload
      }
    },
    setProvider(state: any, payload: { getSigner: () => ethers.Signer | ethers.providers.Provider | undefined }) {
      const contract = payload ? new ethers.Contract(
        CONFIG.CONTRACT.ADDRESS,
        CONFIG.CONTRACT.ABI,
        payload.getSigner()
      ) : undefined
      return {
        ...state, provider: payload, contract: contract
      }
    }
  },
  //
  effects: (dispatch:Dispatch) => ({
    async connect () {
      try {
        const connectedWallet = await onboard.connectWallet()
        dispatch.auth.setWallet(connectedWallet)
      } catch (error) {
        dispatch.auth.setError(error)
      }
    }
  })
}