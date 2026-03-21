# hashmap_to_count_word_occurences.rs

Basically a hashmap is a key and value hash table.

The keys are unique, and the rust stdlib is pretty aweseome!!!

Check out this simple prompter app, you give it a sentence and it counts the words... (randomly each time, b/c the HashMap is using Quadratic Probing and SIMD lookup stuff). Really cool stdlib source code! See: [https://doc.rust-lang.org/std/collections/struct.HashMap.html](https://doc.rust-lang.org/std/collections/struct.HashMap.html).

Here is my example, really good practice with my favorite ```std::io::stdin()```

```rust
fn main() {
    println!("give me a sentence, ill count the words");

    let mut buf = String::new();
    std::io::stdin().read_line(&mut buf).expect("read error");

    let mut hash01 = std::collections::HashMap::new();

    for word in buf.split_whitespace() {
        // check this out, its cool. * is basically a C++ pointer!
        *hash01.entry(word).or_insert(0) += 1;
    }

    println!("ok word count is... {:#?}", hash01);
}
```