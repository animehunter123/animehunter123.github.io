# encode_a_msg.rs
```rust
// This was a cool example from https://doc.rust-lang.org/std/iter/trait.Iterator.html
let chars = ['g', 'd', 'k', 'k', 'n'];

let hello: String = chars.into_iter()
    .map(|x| x as u8)
    .map(|x| (x + 1) as char)
    .collect();

assert_eq!("hello", hello);
```