const FileListPlugin = require("./plugins/file-list-plugin");

module.exports = (env) => {
  if (env && env.prod) {
    return {
      mode: "production",
    };
  }
  return {
    mode: "development",
    devtool: "source-map",
    plugins: [new FileListPlugin("资源列表.md")],
  };
};
