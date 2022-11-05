const ethers = require("ethers")
const fs = require("fs-extra")

async function main() {
  const provdier = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545") // provider ganache
  const wallet = new ethers.Wallet(
    "0x05b1b978cdbc8fbc9c48e16dd7f7317ee07193ffcb0eb53705bbf555cf8ab8b8", //ganache private key
    provdier
  )
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf-8")
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf-8"
  )

  const contractFactory = new ethers.ContractFactory(abi, binary, wallet)
  console.log("Deploying........")
  const contract = await contractFactory.deploy()
  console.log(contract)
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
