// @ts-ignore
import { buildPoseidon } from "circomlibjs"

async function main() {
    const poseidon = await buildPoseidon()
    const hash = poseidon([180, 15])
    console.log(poseidon.F.toString(hash, 16))
}

main();
