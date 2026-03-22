# if_let.rs

In rust you can do if condition

```rust
fn main() {
    let condition = true;
    let condition = false;
    let condition = 12414214 + 2412; // Bad b/c IFLET needs a BOOL!
    let number = if condition { 5 } else { 6 };

    println!("The value of number is: {number}");
}
```

Or...

```rust
fn main() {
    let letter: Option<i32> = None;
    if let Some(i) = letter {
        println!("Matched {:?}!", i);
    } else {
        println!("No number, using letter instead!");  // This runs
    }
}
```


Or with a ENUM!!!!!!

```rust
#[derive(Debug)]
enum Foo {
    Bar,
    Baz,
    Qux(u32),
}

fn main() {
    let c = Foo::Qux(100);
    if let Foo::Qux(value) = c {
        println!("c is {}", value);  // Outputs: c is 100
    }
}

```