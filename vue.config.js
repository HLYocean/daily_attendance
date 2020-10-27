const colorList = require('./color');

module.exports = {
    configureWebpack: {
        devServer: {
            before(app) {
                app.get('/colorList', function (req, res) {
                    res.json({
                        code: 1,
                        data: colorList
                    });
                });
            },
        }
    }
}
