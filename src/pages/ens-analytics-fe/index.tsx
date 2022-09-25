import { dispatch, useReduxSelector } from '../../redux'
import { useEffect, useState } from 'react'
import { truncateAddress } from '../../utils/truncateAddress'
import dayjs from 'dayjs'
import { getGreeting } from '../../utils/getGreeting'
import { EnsAnalyticsTable } from '../../components/EnsAnalyticsTable'

function IndexPage() {
  const { auth, ensData } = useReduxSelector()
  const [ currentTime, setCurrentTime ] = useState(new Date())
  const [ currentTab, setCurrentTab ] = useState<string>('Table')

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000)
    if (!ensData.rawOwnership) dispatch.ensData.getRawOwnership()
    return () => {
      clearInterval(interval)
    }
  }, [])

  const onConnect = () => {
    dispatch.auth.connect()
  }
  
  return (
    <div className='h-full w-full overflow-x-hidden bg-[url("/ens-analytics-fe/background.jpg")] bg-cover p-16'>
      <div className='rounded-xl border border-gray-100 bg-gray-500/20 bg-clip-padding p-4 backdrop-blur-md'>
        <div className='flex flex-col items-center'>
          <div className='text-8xl'>{dayjs(currentTime).format('hh:mm')}</div>
          {auth?.wallet?.accounts?.[ 0 ]?.address ? <div className='py-8 text-4xl'><>{getGreeting(currentTime)}, {auth?.wallet?.accounts?.[ 0 ]?.ens || truncateAddress(auth?.wallet?.accounts?.[ 0 ]?.address)}</></div>
            :<button className='btn btn-primary my-8' onClick={onConnect} disabled={!!auth?.wallet?.accounts?.[ 0 ]?.address}>
              {truncateAddress(auth?.wallet?.accounts?.[ 0 ]?.address) || 'Connect My Wallet'}
            </button>}
        </div>
        <div className='flex h-full w-full flex-col items-center'>
          <div className='tabs'>
            {
              [ 'Table', 'Graph', 'Hoarder' ].map((tab) => (
                <a key={tab} className={`tab tab-bordered ${currentTab === tab?'tab-active':''}`} onClick={()=>setCurrentTab(tab)}>{tab}</a> 
              ))
            }
          </div>
          <div className='mt-8'>
            {currentTab === 'Table' && <EnsAnalyticsTable data={ensData.rawOwnership} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
