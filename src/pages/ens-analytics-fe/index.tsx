import { dispatch, useReduxSelector } from '../../redux'

function IndexPage() {
  const { auth } = useReduxSelector()

  return (
    <div className=''>
      <button onClick={()=>{
        dispatch.auth.connect()
      }}>Connect</button>
      <div>Wallet address: {auth?.wallet?.accounts?.[ 0 ]?.address}</div>
      <div>Contract address: {auth.contract?.address}</div>
    </div>
  )
}

export default IndexPage
