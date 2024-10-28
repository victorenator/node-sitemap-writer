# SitemapWriter for Node.js  
Based on XMLWriter (https://github.com/Inist-CNRS/node-xml-writer)


## Installation
```bash
npm install sitemap-daemon
```

## Example
```js
import {SitemapWriter} from 'sitemap-writer'

const w = new SitemapWriter();
w.startDocument()
  w.startURLSet();
    w.writeURL({loc: '/'});
    w.startURL({loc: '/abc'});
      w.writeImage({loc: '/img/1.jpg'});
    w.endURL();
  w.endURLSet();
w.endDocument();

console.log('sitemap: %s', w.toString());
```
