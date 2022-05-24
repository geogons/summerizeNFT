// import { useAddress, useMetamask, useNFTDrop } from '@thirdweb-dev/react';

// export default function ClaimButton () {
//   const connectWithMetamask = useMetamask();
//   const nftDrop = useNFTDrop('0xeb36ae2fcf66d48cbb48a1213be3a2395ce638d63af1959f9fcd382549d65a58');
//   const address = useAddress();
//   return (
//     <div>
//       {address ? (
//         <button onClick={() => nftDrop?.claim(1)}>Claim 1</button>
//       ) : (
//         <button onClick={connectWithMetamask}>Connect Wallet</button>
//       )}
//     </div>
//   );
// };