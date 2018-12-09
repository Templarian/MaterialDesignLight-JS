const util = require('@mdi/util');

const meta = util.getMetaLight(true);

const find = /(\-\w)/g;
const convert =  function(matches){
  return matches[1].toUpperCase();
};

const lines = meta.map(icon => {
  let name = icon.name.replace(find, convert);
  name = `${name[0].toUpperCase()}${name.slice(1)}`;
  return `export const mdil${name}: string = "${icon.path}";`;
});

const output = `// Material Design Icons v${util.getVersionLight()}\n${lines.join('\n')}`;

util.write("mdil.ts", output);