var fs = require("fs");

try {
  data = fs.readFileSync("./data/data.json", "utf-8");
} catch (error) {
  fs.writeFileSync("./data/data.json", "", "utf-8");
}

data = data.toString();
parsed_data = JSON.parse(data);
console.log(parsed_data);
