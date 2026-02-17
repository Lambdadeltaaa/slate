# Slate
A minimal New Tab / Home Screen for browsers.  
Heavily inspired by [clear-morning](https://github.com/SaltyAom/clear-morning) in layouts & features; though all code is written from scratch.

![Example Image](https://github.com/user-attachments/assets/8090700a-fb51-4347-868f-698baa306c5c)

Feature list:
- Clock + Weather Widget
- Commands + Bookmark Pins
- Google Search Suggestion


## Setup
1. Download the latest release from the [Releases](https://github.com/Lambdadeltaaa/slate/releases/latest) tab. (zip folder contains `index.html` & `background.jpg`)
2. Extract the zip folder and keep both `index.html` and `background.jpg` in the same folder.
3. Point your browser's home page configs to index.html 

    - **Chromium**: Settings -> Appearance -> Show Home Button ✓ -> file://{path_to_index.html}
    - **Safari**: Settings -> General -> Homepage -> Set to Current Page -> file://{path_to_index.html}


## Search Bar
By default, it uses Google Search.  
To commands/shortcuts, type the command name + space, then your query.

Example:
```
claude rewrite my codebase in TS    // starts new conversation with claude using given query
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

You can self deploy it yourself, then modify the fetch URL to your deployed API in `index.html`.  
See [`search-hint/BUILD.md`](search-hint/BUILD.md) for source code and build instructions.


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
All code is contained within `index.html`. Fill free to modify it yourself.