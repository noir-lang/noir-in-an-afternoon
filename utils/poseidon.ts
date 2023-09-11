// @ts-ignore
import { buildPoseidon } from "circomlibjs"

async function main() {
    const poseidon = await buildPoseidon()
    const hash = poseidon([ 104, 101, 108, 108, 111 ])
    console.log(poseidon.F.toString(hash, 16))
}

main();
