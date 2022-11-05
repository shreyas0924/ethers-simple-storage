const ethers = require("ethers")
const fs = require("fs-extra")

async function main() {
  const provdier = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545") // provider ganache
  const wallet = new ethers.Wallet(
    "0xb71654dc9ca7acdbaa1e3c6ece54d44de788266ba096eef82534c1ffde257438", //ganache private key
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
  
  const transactionReceipt = await contract.deployTransaction.wait(1)
  console.log(transactionReceipt)
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
