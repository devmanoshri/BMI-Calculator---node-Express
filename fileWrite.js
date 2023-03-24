//const fs = require('fs');

//const content =
// 'Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.';

// fs.writeFile('test/mono/write_node.txt', content, (err) => {
//   if (err) {
//     console.error(err);
//   }
//   // file written successfully
// });

const fs = require('fs/promises');

async function example() {
  try {
    const content = 'Some content!';
    await fs.writeFile('test/mono/write_node.txt', content);
  } catch (err) {
    console.log(err);
  }
}
example();
