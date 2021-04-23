const {
    override,
    useEslintRc,
    fixBabelImports
} = require('customize-cra');

module.exports = override(
    fixBabelImports('antd', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true // change importing css to less
    }, 'antd'),
    fixBabelImports('ant-design-pro', {
        libraryName: 'ant-design-pro',
        libraryDirectory: 'lib',
        style: true, // change importing css to less
        camel2DashComponentName: false
    }, 'antd-pro'),
    useEslintRc('./.eslintrc.js')
);
