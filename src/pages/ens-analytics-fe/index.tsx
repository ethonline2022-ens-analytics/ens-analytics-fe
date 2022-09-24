import { dispatch, useReduxSelector } from '../../redux'
import { useEffect, useState } from 'react'
import { truncateAddress } from '../../utils/truncateAddress'

function IndexPage() {
  const { auth } = useReduxSelector()
  const [ currentTime, setCurrentTime ] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  const onConnect = () => {
    dispatch.auth.connect()
  }
  
  return (
    <div className='h-full w-full bg-[url("/ens-analytics-fe/background.jpg")] bg-cover p-16'>
      <div className='rounded-xl border border-gray-100 bg-gray-500/20 bg-clip-padding p-4 backdrop-blur-md'>
        <div className='flex flex-col items-center'>
          <div>{currentTime.toTimeString()}</div>
          <button className='btn btn-primary' onClick={onConnect} disabled={!!auth?.wallet?.accounts?.[ 0 ]?.address}>
            {truncateAddress(auth?.wallet?.accounts?.[ 0 ]?.address) || 'Connect My Wallet'}
          </button>
        </div>
        <div><>My ENS: {auth?.wallet?.accounts?.[ 0 ]?.ens}</></div>
      </div>

    </div>
  )
}

export default IndexPage
