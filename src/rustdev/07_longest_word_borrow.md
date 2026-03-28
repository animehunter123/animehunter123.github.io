# This comment can be uncommented to get both the slice or heap String version!

```rust
fn main() {
    println!("Enter a sentence, and ill tell you longest word...");
    let mut io_buf = String::new();
    std::io::stdin().read_line(&mut io_buf).expect("io error");

    //let test = "ka jdslgkjas dglkja skgdj alskjg aksjhdglkasjhdg"; // <-- a str slice
    let test = io_buf; // <-- a String
    let mut buf_slice = "";
    for i in test.split_whitespace() {
        if buf_slice.len() < i.len() {
            buf_slice = i;
        }
    }
    println!("ok longest word was... {}", buf_slice);
}
```