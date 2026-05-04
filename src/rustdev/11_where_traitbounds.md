THIS IS FROM THE RUST BOOK ORIGINALLY, GOOD TO STUDY AND MEMORIZE

**BASICALLY THAT where keyword I spotted was a trait bound...**


# Multiple Trait Bounds with the + Syntax

We can also specify more than one trait bound. Say we wanted notify to use display formatting as well as summarize on item: We specify in the notify definition that item must implement both Display and Summary. We can do so using the + syntax:

```rust
pub fn notify(item: &(impl Summary + Display)) {
```

The + syntax is also valid with trait bounds on generic types:

```rust
pub fn notify<T: Summary + Display>(item: &T) {
```

With the two trait bounds specified, the body of notify can call summarize and use {} to format item.







THE WHERE KEYWORD IS HERE////



# Clearer Trait Bounds with where Clauses

Using too many trait bounds has its downsides. Each generic has its own trait bounds, so functions with multiple generic type parameters can contain lots of trait bound information between the function’s name and its parameter list, making the function signature hard to read. For this reason, Rust has alternate syntax for specifying trait bounds inside a where clause after the function signature. So, instead of writing this:

```rust
fn some_function<T: Display + Clone, U: Clone + Debug>(t: &T, u: &U) -> i32 {
```

we can use a where clause, like this:

```rust
fn some_function<T, U>(t: &T, u: &U) -> i32
where
    T: Display + Clone,
    U: Clone + Debug,
{
```

This function’s signature is less cluttered: The function name, parameter list, and return type are close together, similar to a function without lots of trait bounds.
