# Slate
A minimal New Tab / Home Screen for browsers.  
Heavily inspired by [clear-morning](https://github.com/SaltyAom/clear-morning) in layouts & features; though all code is written from scratch.

![Example Image](https://github.com/user-attachments/assets/8090700a-fb51-4347-868f-698baa306c5c)

Feature list:
- Clock + Weather Widget
- Commands + Bookmark Pins
- Google Search Suggestion


## Setup
1. Download `index.html` and `background.jpg` (keep both in same folder)  
2. Point your browser's home page configs -> index.html  
    - **Chromium**: Settings -> Appearance -> Show Home Button ✓ -> file://{where_u_store_the_html_page}
    - **Safari**: Settings -> General -> Homepage -> Set to Current Page -> file://{where_u_store_the_html_page}


## Search Bar
By default, it uses Google Search.  
To commands/shortcuts, type the command name + space, then your query.

Example:
```
claude rewrite my codebase in TS // starts new conversation with Claude with given query
```

### Available Commands
- `yt` - Youtube search
- `gh` - Direct link to github (`github.com/{query}`)
- `gpt` - Start new conversation with ChatGPT
- `claude` - Start new conversation with Claude
- `<number>` - Opens bookmarked pin (max 10)
- `:<port_number>` - Opens `localhost:{port_number}` 

### Search Suggestion
The API endpoint is basically just a reverse proxy for google search.  
By default it is using `https://search-hint.lambdadelta.workers.dev/` hosted on Cloudflare Workers.  
Feel free to self deploy it, see [`search-hint/BUILD.md`](search-hint/BUILD.md) for source code and build instructions.


## How to Customise
### Change Background
Replace `background.jpg` with your own image (keep the same filename)

### Add Pinned Bookmarks (Max 10)
1. Open index.html
2. Inside `<section id="pin">`, paste:
```
<a href="https://example.com" class="pin-item">
    <!-- Replace SVG with any icon you want -->
    <svg>
        <!-- your icon -->
    </svg>
</a>
```

### Others
You can modify `index.html` however as you like.
