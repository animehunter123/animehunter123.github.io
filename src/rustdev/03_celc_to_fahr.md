# celc_to_fahr.rs
```rust
use rand::Rng;
fn main() {
    println!("enter celcius...");
    let mut target = String::new();
    std::io::stdin().read_line(&mut target).expect("io error");
    let target: f32 = target.trim().parse().expect("cant convert to FARENHEIGHT!");
    let faren = (target * 9.0 / 5.0) + 32.0;
    println!("Ok in FARENHEIGHT it is... {faren}");
}
```