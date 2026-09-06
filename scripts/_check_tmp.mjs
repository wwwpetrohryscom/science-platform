import fs from 'node:fs';
import matter from 'gray-matter';
const base='/Users/agent/science-platform-clone/content';
const rel='biology/taxonomy/the-tree-of-life-and-domains.md';
const locales=['en','fr','es','de','pt','ru'];
const proseOnly=t=>t.replace(/```[\s\S]*?```/g,' ').replace(/`[^`\n]+`/g,' ').replace(/!\[[^\]]*\]\([^)]*\)/g,' ').replace(/\[([^\]]*)\]\([^)]*\)/g,'$1').replace(/https?:\/\/\S+/g,' ');
const NUMBER=/\d{1,3}(?:[.,    ]\d{3})+(?:[.,]\d+)?|\d+(?:[.,]\d+)?/g;
function splitSources(raw){const {content}=matter(raw);const m=content.match(/^##\s+Sources[\s\S]*/im);return {prose:m?content.slice(0,m.index):content,sources:m?m[0]:''};}
for(const l of locales){
  const raw=fs.readFileSync(`${base}/${l}/${rel}`,'utf8');
  const g=matter(raw); const p=splitSources(raw);
  const heads=(p.prose.match(/^#{2,6}\s+.*$/gm)||[]);
  const paras=p.prose.split(/\n{2,}/).map(s=>s.trim()).filter(Boolean);
  const urls=[...raw.matchAll(/\[[^\]]*\]\((https?:\/\/[^)\s]+)\)/g)].map(m=>m[1]);
  const srcItems=(p.sources.match(/^\s{0,3}(?:[-*+]|\d{1,2}[.)])\s+/gm)||[]).length;
  const nums=(proseOnly(p.prose).replace(/^\s{0,3}\d{1,2}[.)]\s+/gm,' ').match(NUMBER)||[]);
  const title=String(g.data.title||''), ex=String(g.data.excerpt||''), mt=g.data.metaTitle?String(g.data.metaTitle):null;
  console.log(`### ${l}`);
  console.log(` title len=${[...title].length} | metaTitle=${mt===null?'(none)':'len '+[...mt].length}`);
  console.log(` excerpt len=${[...ex].length}`);
  console.log(` _bodyHash=${g.data._bodyHash===undefined?'absent':g.data._bodyHash}`);
  console.log(` headings=${heads.length} paras=${paras.length} srcItems=${srcItems} urls=${urls.length}`);
  console.log(` heads: ${heads.map(h=>h.match(/^#+/)[0]).join(' ')}`);
  console.log(` nums: ${nums.join(' ')}`);
  console.log(` urlhash=${urls.join('|').length} ${JSON.stringify(urls)===undefined?'':''}`);
  fs.writeFileSync(`/tmp/urls_${l}.txt`, urls.join('\n'));
}
