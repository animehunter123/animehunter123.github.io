# actix_in_a_fn.rs
```rs
// Imports
use actix_web::{App, HttpResponse, HttpServer, web};

// Main function, literally all in one func, this is pretty cool for the lazy!
// There are 2 closures here for actix_web v4 in this example!
#[actix_web::main]
async fn main() {
    println!("Hello, world!");
    HttpServer::new(|| {
        App::new()
            .route("/", web::get().to(|| async {
                HttpResponse::Ok().body("hi, from main() lol!".to_string())
            }))
    })
        .bind("0.0.0.0:80")
        .unwrap()
        .run()
        .await
        .unwrap()
}
```