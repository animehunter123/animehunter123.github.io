# misc
Random notes...

```bash
cargo doc --open ---- this will open only the manpages of your current git project
Ownership BTW ONLY 1 MUTABLE REF to mem is allowed.md
Ownership Transfer to Functions for Heap stuff like string, but not ints.rs
reference is like a pointer but always guaranteed to point to valid memory
SemVer means Semantic versioning like rand 0.8.5.txt
unwrap() is same as expect() but wo msg
```

# GuessingGame (loop, stdin, match)
```rust
// GuessingGame! NOTE: run "cargo add rand" with rust edition 2024 to add the rand crate, confirm with toml, but future might not work with below code. 2021 used the "use rand::Rng;" but rust edition 2024 no longer needs a use import. (I think).
use std::cmp::Ordering;
use std::io;
fn main() {
    println!("Guess the number (from 1 to 100!");
    let secret_number = rand::random_range(1..=100);
    loop {
        println!("Please input your guess.");
        let mut guess = String::new();
        io::stdin()
            .read_line(&mut guess)
            .expect("Failed to read line");
        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => { println!("Please type a number i32!"); continue; },
        };
        println!("You guessed: {guess}");
        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("You win!");
                break;
            }
        }
    }
}
```

# Ownership (borrowing)
```rust
fn main() {
    let mut s = String::from("hello");
    let r1 = &s; // no problem
    let r2 = &s; // no problem
    println!("{r1} and {r2}");
    println!("{r1} and {r2}");
    // Variables r1 and r2 will not be used after this point.
    let r3 = &mut s; // no problem
    println!("{r3}");
    let r4 = &s; // no problem
    println!("{r4}");
    println!("{r1} and {r2}"); //CANT USE BECAUSE ONCE YOU MAKE A MUT REF, IT CLOSD THE SCOP OF ALL
    //PREVIOUS REFS SO NOW YOU NEED TO MAKE A NEW REF MOVING FORWARD
}
```

# CelciusToFarenheight.rs
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