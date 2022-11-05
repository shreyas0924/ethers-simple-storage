const ethers = require("ethers")

async function main() {
  const provdier = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545") // provider ganache
  const wallet = new ethers.Wallet(
    "7861f938d4a6d3c14b2f4ad57096ae7ce22e5106c9d82bda2b85dda31fee65b6",
    provdier
  )
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
