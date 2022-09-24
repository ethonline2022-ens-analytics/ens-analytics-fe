export const truncateAddress = (walletAddress:string|undefined) => {
  if (!walletAddress) return undefined
  return  `${walletAddress.substring(0, 5)  }...${  walletAddress.substring(39, 42)}`
}