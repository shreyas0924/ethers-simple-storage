const ethers = require("ethers")

async function main() {
  const provdier = new ethers.providers.JsonRpcProvider("http://127.0.0.1:7545") // provider ganache
  const wallet = new ethers.Wallet("PRIVATE_KEY", provdier)
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
