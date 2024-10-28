import {equal} from 'node:assert/strict';
import {test} from 'node:test';
import {SitemapWriter} from './index.js';

test('', () => {
    const w = new SitemapWriter();
    w.startDocument()
    w.startURLSet();
    w.writeURL({loc: '/'});
    w.startURL({loc: '/abc'});
    w.writeImage({loc: '/img/1.jpg'});
    w.endURL();
    w.endURLSet();
    w.endDocument();
    
    equal(w.toString(), '<?xml version="1.0"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>/</loc></url><url><loc>/abc</loc><image xmlns="http://www.google.com/schemas/sitemap-image/1.1"><loc>/img/1.jpg</loc></image></url></urlset>');
});
