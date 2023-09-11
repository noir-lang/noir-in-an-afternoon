// @ts-ignore
import { utils } from "ethers"

async function main() {
    const bytes = Uint8Array.from([ 104, 101, 108, 108, 111 ])
    console.log(bytes)
    const hash = utils.keccak256(bytes)
    console.log(utils.arrayify(hash))
}

main();
