import React from "react";

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://pukusyou.com/eft/</loc></url>
  <url><loc>https://pukusyou.com/eft/task/</loc></url>
  <url><loc>https://pukusyou.com/eft/task/item/</loc></url>
  <url><loc>https://pukusyou.com/eft/hideout/</loc></url>
  <url><loc>https://pukusyou.com/eft/hideout/item/</loc></url>
  <url><loc>https://pukusyou.com/eft/privacy/</loc></url>
  <url><loc>https://pukusyou.com/eft/ammo/</loc></url>
</urlset>`;

const SitemapXml = () => (
    <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>{sitemapXml}</pre>
);

export default SitemapXml;
