# 🦀 rustdev 🦀

These are little cool things I found on my Rust journey. Imho these are **best-in-class tutorials, frameworks, and community-curated guides**.

BEST COMMAND TO LEARN: rustup doc --book

---
## 🎓 Rust Language Learning
- [The Rust Programming Language ("The Book")](https://doc.rust-lang.org/book/)  
- [Actix Web](https://actix.rs/)  This is cool, pair it with Tera... you got yourself a flask+jinja thing.
- [Axum](https://github.com/tokio-rs/axum)  Made by Tokio... looks cool
- [Leptos](https://github.com/leptos-rs/leptos)  
  *Minimalist and intuitive – good for beginners or hobby projects wanting a quick start.*
  Seems Reactish, really cool. But still need to study Typescript regardless.
---



@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@

# From this course:
rust_my_notes.md 
Using my rust Udemy Course: Master the rust programmlanguage A-Z
https://lmrms.udemy.com/course/learn-to-code-with-rust/learn/lecture/46619855#overview

# Import another func from a file (from inside main.rs, with ./poop.rs in samedir)
mod poop; // from inside main.rs, tell rust about other mod
use poop::Poop; // Import my other pub Poop "type" or "struct"

# Type Alias
Type Alias in Rust means just a alias:
```rust
type Bits = u32;
let myI32 : Bits = 32;
let myf64 : Bits = 64;
```

# Compiler DirectivesD
Compiler Directive applies to A SINGLE LINE or block:
```rust
#[allow(unused_variables)]
fn blah () {}

#![allow(unused_variables)]
fn main(){} fn blah(){} etc... // #![] is for the whole file
```

# isize/usize = are nicknames for built in types depending on computer
To basically let it pick a u8 or u16 if you have big compooter...
let x: u64 = 15_000_000;   // Btw, _'s are ignored, this is 15 million.
let y: usize = 15_000_000; // See how it is usize? the compoooter will pik it.

# rust raw string to ignore all backslashes
lets x = r"blah blah C:\blah no new line \n haha!";

# println format specifier
Customize the printed representation of the interpolated value.
let x: i32 = 50.13515212;
pln("{x:.2}"); // only 2 decidimal places

# cast a i32 to i8
let my32: i32 = 50;
let my8: i8 = my32 as i8; // "as i8" is the cast! BTW, can overflow to 255.
