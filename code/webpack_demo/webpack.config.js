const path = require("path")
// 这个是需要 解析path 路径
module.exports = {

    // entry 就是主函数入口
    entry: "./main.js",
    // output 是输出路径，path是输出位置，filename是输出名字
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "kk.js"
    },

}