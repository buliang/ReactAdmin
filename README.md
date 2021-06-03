//
1.引入antd
npm i antd
2.按需打包
npm i react-app-rewired customize-cra babel-plugin-import
3.定义加载配置js config-overrides.js

const {override,fixBabelImports,addLessLoader} = require("customize-cra“)
module.exports = override(
  //根据import 进行按需打包 babel-plugin-import
  fixBabelImports('import',{
    libraryName:'antd',
    libraryDirectory:'es',
    style:'css' //自动打包相关样式
  })
)


  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },