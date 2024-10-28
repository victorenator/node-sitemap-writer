import {ok} from 'node:assert';
import XMLWriter from 'xml-writer';

export class SitemapWriter extends XMLWriter {

    constructor(ident, writer) {
        super(ident, writer);
        XMLWriter.call(this, ident, writer);
    }
    
    startURLSet() {
        return this.startElement('urlset').writeAttribute('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');
    }
    
    endURLSet() {
        return this.endElement();
    }
    
    startURL(uri) {
        ok(uri);
        ok(uri.loc);
        
        this.startElement('url');
        this.writeElement('loc', uri.loc);
        if (uri.lastmod) {
            this.writeElement('lastmod', uri.lastmod);
        }
        if (uri.changefreq) {
            this.writeElement('changefreq', uri.changefreq);
        }
        if (uri.priority) {
            this.writeElement('priority', uri.priority);
        }
        
        return this;
    }
    
    endURL() {
        return this.endElement();
    }
    
    writeURL(uri) {
        return this.startURL(uri).endURL();
    }
    
    startImage(img) {
        ok(img);
        ok(img.loc);
        
        this.startElement('image').writeAttribute('xmlns', 'http://www.google.com/schemas/sitemap-image/1.1');
        this.writeElement('loc', img.loc);
        if (img.caption) {
            this.writeElement('caption', img.caption);
        }
        if (img.geo_location) {
            this.writeElement('geo_location', img.geo_location);
        }
        if (img.title) {
            this.writeElement('title', img.title);
        }
        if (img.license) {
            this.writeElement('license', img.license);
        }
        
        return this;
    }
    
    endImage() {
        return this.endElement();
    }
    
    writeImage(img) {
        return this.startImage(img).endImage();
    }
}

export class SitemapIndexWriter extends XMLWriter {

    constructor(ident, writer) {
        super(ident, writer);
        XMLWriter.call(this, ident, writer);
    }
    
    startSitemapIndex() {
        return this.startElement('sitemapindex').writeAttribute('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');
    }
    
    endSitemapIndex() {
        return this.endElement();
    }
    
    startSitemap(sitemap) {
        ok(sitemap);
        ok(sitemap.loc);
        
        this.startElement('sitemap');
        this.writeElement('loc', sitemap.loc);
        if (sitemap.lastmod) {
            this.writeElement('lastmod', sitemap.lastmod);
        }
        
        return this;
    }
    
    endSitemap() {
        return this.endElement();
    }
    
    writeSitemap(sitemap) {
        return this.startSitemap(sitemap).endSitemap();
    }
}
