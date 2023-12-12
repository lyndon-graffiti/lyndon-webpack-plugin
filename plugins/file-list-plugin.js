module.exports = class FileListPlugin {
  constructor(filename = "filelist.txt") {
    this.filename = filename;
  }

  apply(compiler) {
    compiler.hooks.emit.tap("file-list-plugin", (compilation) => {
      console.log("assets", compilation.assets);
      let content = "";
      const fileList = [];

      for (let key in compilation.assets) {
        content = `【${key}】
大小：${compilation.assets[key].size() / 1000}KB`;
        fileList.push(content);
      }

      const str = fileList.join("\n\n");

      compilation.assets[this.filename] = {
        source() {
          return str;
        },
        size() {
          return str.length;
        },
      };
    });
  }
};
