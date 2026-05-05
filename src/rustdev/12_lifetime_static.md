# Here is a simple app where the func guarantees that the RETURN REF will be VALID AS LONG AS BOTH PARAMETERS ARE VALID


```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}

fn main() {
    println!("The returned reference will be valid as long as both of the parameters are valid.");
    let x = "The returned reference will be valid as long as both of the parameters are valid.";
    let y = "roba ga takaai koucha toka dezaato skon toka ne";

    let i = longest(x, y);
    dbg!(i);
}
```