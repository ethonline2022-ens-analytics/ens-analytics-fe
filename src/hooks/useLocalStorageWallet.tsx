import { useConnectWallet, useWallets } from '@web3-onboard/react'
import { useEffect } from 'react'
import { dispatch } from '../redux'
import { ethers } from 'ethers'

export const useLocalStorageWallet = () => {
  const [ { wallet }, connect ] = useConnectWallet()
  const connectedWallets = useWallets()

  useEffect(() => {
    if (wallet?.provider) {
      dispatch.auth.setWallet(wallet)
      dispatch.auth.setProvider(new ethers.providers.Web3Provider(wallet.provider, 'any'))
    }
  }, [ wallet ])

  useEffect(() => {
    if (!connectedWallets.length) return
    const connectedWalletsLabelArray = connectedWallets.map(({ label }) => label)
    window.localStorage.setItem('connectedWallets', JSON.stringify(connectedWalletsLabelArray))
  }, [ connectedWallets, wallet ])

  useEffect(() => {
    async function setWalletFromLocalStorage() {
      await connect({ autoSelect: { label: previouslyConnectedWallets[ 0 ], disableModals: true } })
    }
    const previouslyConnectedWallets = JSON.parse(window.localStorage.getItem('connectedWallets')||'[]')
    if (previouslyConnectedWallets?.length) {
      setWalletFromLocalStorage()
    }
  }, [ connect ])
}
