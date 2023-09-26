use dep::std::hash::poseidon;

fn main(age : u8, password : [Field; 2], passwordHash : pub Field) {
    assert(age > 18);
    assert(passwordHash == poseidon::bn254::hash_2(password));
}

#[test]
fn test_main() {
    main(55, [1, 2], 0x115cc0f5e7d690413df64c6b9662e9cf2a3617f2743245519e19607a4417189a);
}
