import { dispatch, useReduxSelector } from '../../redux'
import { useEffect, useState } from 'react'

function IndexPage() {
  const { auth } = useReduxSelector()
  const [ myEns, setMyEns ] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (auth?.wallet?.accounts?.[ 0 ]?.address) {
      auth?.provider?.lookupAddress(auth?.wallet?.accounts?.[ 0 ]?.address).then((res)=>{
        setMyEns(res || undefined)
      })
    }
  }, [ auth?.wallet?.accounts?.[ 0 ]?.address ])

  return (
    <div className=''>
      <button onClick={()=>{
        dispatch.auth.connect()
      }}>Connect</button>
      <div>Wallet address: {auth?.wallet?.accounts?.[ 0 ]?.address}</div>
      <div>Contract address: {auth.contract?.address}</div>
      <div>My ENS: {myEns}</div>
    </div>
  )
}

export default IndexPage
