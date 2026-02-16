#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const qaPath = path.join(root, 'QA.json');
const outDir = path.join(root, 'libraries');

function writeJson(file, data) {
  fs.writeFileSync(path.join(outDir, file), JSON.stringify(data, null, 2) + '\n');
}

function main() {
  const qa = JSON.parse(fs.readFileSync(qaPath, 'utf8'));
  fs.mkdirSync(outDir, { recursive: true });

  writeJson('mvp.json', qa.mvp);
  writeJson('country_library.json', qa.country_library);
  writeJson('major_library.json', qa.major_library);
  writeJson('return_to_china_module.json', qa.return_to_china_module);
  writeJson('future_backlog.json', qa.future_backlog);
  writeJson('meta_and_taxonomy.json', {
    meta: qa.meta,
    taxonomy: qa.taxonomy,
    reserved_scaffold: qa.reserved_scaffold
  });

  console.log('Split complete: libraries/*.json updated');
}

main();
