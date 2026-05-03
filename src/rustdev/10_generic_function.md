# This is a function which is GENERIC over type T which MUST IMPLEMENT PARTIALORD

```rust
fn main() {
    let list01 = [1, 2, 4, 6, 3, 77, 3];
    let largest = find_largest(&list01);
    let list02 = ['w', 'u', 't'];
    let largest2 = find_largest(&list02);
    dbg!(largest);
    dbg!(largest2);
}

/* We read this definition as...
 
 “The function largest is generic over some type T.” 
 
 This function has one parameter named list, which is a 
 slice of values of type T. The largest function will 
 return a reference to a value of the same type T. */
fn find_largest<T: std::cmp::PartialOrd>(numlist: &[T]) -> &T {
    let mut largest = &numlist[0];
    for i in numlist {
        if largest < i {
            largest = i;
        }
    }
    largest
}
```