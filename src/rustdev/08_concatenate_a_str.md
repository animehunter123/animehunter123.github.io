# This is how you concatenate 2 string slices...

```rust
#[allow(unused_variables)]
fn main() {
    let s1 = "this is a &str 1...";
    let s2 = "this is a &str 2...";

    // Both of these ways are ok...
    let s3 = s1.to_lowercase() + s2;
    let s4 = s1.to_string() + s2;

    // But... this is another way too..
    let s5 = format!("{s1}{s2}");

    dbg!(s5);
}
```