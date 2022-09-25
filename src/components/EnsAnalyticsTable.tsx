interface EnsAnalyticsTableProps {
  data? : {[index:string]:string[]}
}

export const EnsAnalyticsTable = ({ data } : EnsAnalyticsTableProps) => {

  if (!data) return <></>

  return (
    <div className=''>
      <table className='table-zebra table w-full'>
        <thead>
          <tr>
            <th></th>
            <th>Address</th>
            <th>ENS</th>
          </tr>
        </thead>
        <tbody>
          {
            Object.keys(data).map((address, index) => 
              <tr key={address}>
                <th>{index+1}</th>
                <td><a className='text-purple-300' href={`https://app.ens.domains/address/0x${address}`} target='_blank' rel='noreferrer'>{`0x${address}`}</a></td>
                <td className='flex max-w-[600px] flex-row flex-wrap'>
                  {data[ address ].map(ensAddress=>
                    <button key={ensAddress} className='mr-2 mb-1' onClick={()=>{
                      window.open(`https://app.ens.domains/name/${ensAddress}.eth/details`)
                    }}>{ensAddress}</button>
                  )}
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )  
}