import fs from "fs";
import path from "path";

function readDirRecur(folder, callback) {
  fs.readdir(folder, function (err, files) {
    let count = 0;
    const checkEnd = function () {
      ++count == files.length && callback();
    };

    files.forEach(function (file) {
      const fullPath = folder + "/" + file;

      fs.stat(fullPath, function (err, stats) {
        if (stats.isDirectory()) {
          return readDirRecur(fullPath, checkEnd);
        } else {
          /*not use ignore files*/
          if (file[0] != ".") {
            fileList.push(fullPath);
          }
          checkEnd();
        }
      });
    });

    //为空时直接回调
    files.length === 0 && callback();
  });
}

var fileList = [];
const timeStart = new Date();
const filePath = path.resolve("static/sx");
readDirRecur(filePath, function (filePath) {
  console.log("done", new Date() - timeStart); //done 3
  console.log(fileList); //打印出目录下的所有文件
});
