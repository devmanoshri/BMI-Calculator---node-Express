const fs = require('fs');
console.log(__dirname);

fs.readFile('test/mono/read_node.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
