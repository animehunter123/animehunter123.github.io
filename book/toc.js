// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="MAINPAGE.html">mainpage</a></li><li class="chapter-item expanded "><a href="webdev/webdev.html"><strong aria-hidden="true">1.</strong> webdev</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="webdev/how-to-use-googlefonts.html"><strong aria-hidden="true">1.1.</strong> how-to-use-googlefonts</a></li></ol></li><li class="chapter-item expanded "><a href="rustdev/rustdev.html"><strong aria-hidden="true">2.</strong> rustdev</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="rustdev/01_basic_rust_notes.html"><strong aria-hidden="true">2.1.</strong> basic_rust_notes.md</a></li><li class="chapter-item expanded "><a href="rustdev/02_borrow_only_once.html"><strong aria-hidden="true">2.2.</strong> borrow_only_once.rs</a></li><li class="chapter-item expanded "><a href="rustdev/03_celc_to_fahr.html"><strong aria-hidden="true">2.3.</strong> celc_to_fahr.rs</a></li><li class="chapter-item expanded "><a href="rustdev/04_encode_a_msg_via_closure_anonfunc.html"><strong aria-hidden="true">2.4.</strong> encode_a_msg.rs</a></li><li class="chapter-item expanded "><a href="rustdev/05_iflet.html"><strong aria-hidden="true">2.5.</strong> if_let.rs</a></li><li class="chapter-item expanded "><a href="rustdev/06_hashmap_notes.html"><strong aria-hidden="true">2.6.</strong> hashmap_notes.rs</a></li><li class="chapter-item expanded "><a href="rustdev/07_longest_word_borrow.html"><strong aria-hidden="true">2.7.</strong> longest_word_borrow_heap.rs</a></li><li class="chapter-item expanded "><a href="rustdev/08_concatenate_a_str.html"><strong aria-hidden="true">2.8.</strong> concatenate_a_str.rs</a></li><li class="chapter-item expanded "><a href="rustdev/09_closures_instead_of_matches.html"><strong aria-hidden="true">2.9.</strong> closures_instead_of_matches.md</a></li><li class="chapter-item expanded "><a href="rustdev/10_generic_function.html"><strong aria-hidden="true">2.10.</strong> generic_function.md</a></li><li class="chapter-item expanded "><a href="rustdev/11_where_traitbounds.html"><strong aria-hidden="true">2.11.</strong> where_traitbounds.md</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
