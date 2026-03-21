# actix_in_a_fn.rs

```rust
fn main() {
    let condition = true;
    let condition = false;
    let condition = 12414214 + 2412; // Bad b/c IFLET needs a BOOL!
    let number = if condition { 5 } else { 6 };

    println!("The value of number is: {number}");
}
```