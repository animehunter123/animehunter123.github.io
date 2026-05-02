# hashmap_to_count_word_occurences.rs

NOTE ```The bottom of this file has a really good hashmap with vector in it example!!!```

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

For fun, in python this woulda beeen...

```python
sentence = "apple banana apple cherry banana apple"
word_counts = {}

for word in sentence.split():
    word_counts[word] = word_counts.get(word, 0) + 1
```







# IMPORTANT: The book had this excersize at the end of chapter 8, and its really good to do over and over to practice...

Using a hash map and vectors, create a text interface to allow a user to add employee names to a department in a company; for example, “Add Sally to Engineering” or “Add Amir to Sales.” Then, let the user retrieve a list of all people in a department or all people in the company by department, sorted alphabetically.


Example code that needs to be refactored, but at least works:

```rust
#[allow(unused_variables)]
use std::collections::HashMap;

fn main() {
    println!("This app will create a hashmap... Get ready!");
    let mut hashmap01 : HashMap<String, Vec<String>> = HashMap::new();
    let mut buf = String::new();
    loop {
        println!(
            r#"
Main Menu:
1. Add Employee to a Department
2. Print the Hash
3. Print empl in a specific dept...
4. Exit
            "#
        );
        std::io::stdin().read_line(&mut buf).expect("read errorrr");
        let choice: u8 = buf.trim().parse().expect("parse errrorr..");
        match choice {
            1 => { add_to_hashmap(&mut hashmap01) },
            2 => { dbg!(&hashmap01);  },
            3 => { print_emp_from_selected_dept(&mut hashmap01); },
            _ => { println!("try again... ")},
        }
        buf.clear();
    }
}

fn print_emp_from_selected_dept(hashmap01 : &mut HashMap<String,Vec<String>>) {
    let mut buf = String::new();
    println!("Enter a department...");
    std::io::stdin().read_line(&mut buf).expect("coudlnt read dept..");
    let dept = buf.trim();

    match hashmap01.get(dept) {
        Some(names) => {
            println!("found these people...");
            println!("{names:?}");
        },
        None => {
            println!("no people found");
        }
    }
}

fn add_to_hashmap (hashmap01 : &mut HashMap<String,Vec<String>> ) {
    let mut buf = String::new();
    println!("enter dept...");
    std::io::stdin().read_line(&mut buf).expect("couldnt read dept");
    let dept = buf.clone();
    buf.clear();
    println!("enter name...");
    std::io::stdin().read_line(&mut buf).expect("couldnt read name");
    let name = buf.clone().trim().to_string();
    match hashmap01.get(&dept.trim().to_string()) {
        Some(names) => { 
            let mut new_names = names.clone();
            new_names.push(name);
            hashmap01.insert(dept.trim().to_string(), new_names);
        }
        None => {
            let mut new_names = Vec::new();
            new_names.push(name);
            hashmap01.insert(dept.trim().to_string(), new_names);
        },
    }
}
```