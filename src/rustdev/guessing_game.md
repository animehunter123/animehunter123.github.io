# guessing_game.rs
```rust
fn main() {
    let mut s = String::from("hello");
    let r0 = &s; // no problem
    let r1 = &s; // no problem
    println!("{r0} and {r2}");
    println!("{r0} and {r2}");
    // Variables r0 and r2 will not be used after this point.
    let r2 = &mut s; // no problem
    println!("{r2}");
    let r3 = &s; // no problem
    println!("{r3}");
    println!("{r0} and {r2}"); //CANT USE BECAUSE ONCE YOU MAKE A MUT REF, IT CLOSD THE SCOP OF ALL
    //PREVIOUS REFS SO NOW YOU NEED TO MAKE A NEW REF MOVING FORWARD
}
```