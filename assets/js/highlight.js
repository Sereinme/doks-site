import hljs from 'highlight.js/lib/core';

import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';
import xml from 'highlight.js/lib/languages/xml';
import ini from 'highlight.js/lib/languages/ini';
import yaml from 'highlight.js/lib/languages/yaml';
import markdown from 'highlight.js/lib/languages/markdown';
import latex from 'highlight.js/lib/languages/latex';
import cpp from 'highlight.js/lib/languages/cpp';
import python from 'highlight.js/lib/languages/python';
import verilog from 'highlight.js/lib/languages/verilog';
import shell from 'highlight.js/lib/languages/shell';
import asciidoc from 'highlight.js/lib/languages/asciidoc';
import scss from 'highlight.js/lib/languages/scss';
import powershell from 'highlight.js/lib/languages/powershell';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('ini', ini);
hljs.registerLanguage('toml', ini);
hljs.registerLanguage('yaml', yaml);
hljs.registerLanguage('markdown', markdown);
hljs.registerLanguage('latex', latex);
hljs.registerLanguage('cpp', cpp);
hljs.registerLanguage('python', python);
hljs.registerLanguage('verilog', verilog);
hljs.registerLanguage('shell', shell);
hljs.registerLanguage('asciidoc', asciidoc);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('powershell', powershell);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('pre code:not(.language-mermaid)').forEach((block) => {
    hljs.highlightElement(block);
  });
});
