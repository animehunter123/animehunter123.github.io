# Use Closures instead of matches

With closure:

```rust
use std::fs::File;
use std::io::ErrorKind;
fn main() {
    let greeting_file = File::open("hello.txt").unwrap_or_else(|error| {
        if error.kind() == ErrorKind::NotFound {
            File::create("hello.txt").unwrap_or_else(|error| {
                panic!("Problem creating the file: {error:?}");
            })
        } else {
            panic!("Problem opening the file: {error:?}");
        }
    });
}
```

... which is way better then just nested matches!

```rust
use std::io::ErrorKind;
fn main() {
    let file_result = std::fs::File::open("test.txt");
    // Yuck! Nested Matches!!!
    let file = match file_result {
        Ok(file) => {
            println!("ok we got a file opend yay");
            file
        },
        Err(error) => {
           match error.kind() {
               ErrorKind::NotFound => { println!("ok file waz not there"); panic!("waa1!");},
               _ => { println!("ok some other err was there"); panic!("waa!");},
           } 
        }
    };
    dbg!(file);
}
```