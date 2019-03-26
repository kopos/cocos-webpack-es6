const path = require('path');

module.exports = env => {
    let config = {
        entry: ['./src/app.js'],
        output: {
            filename: 'bundle.js',
            path: path.join(__dirname, 'public'),
            libraryTarget: 'var',
            library: 'game'
        },
        module: {
            rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"],
                    plugins: ["@babel/plugin-transform-runtime"]
                }
            }
          }]
        },
        externals: {
            cc: 'cc',
            cp: 'cp'
        }
    };

    if (env === "production") {
        // Production config
        config.mode = "production";
        config.devtool = "source-map";
    } else {
        // Development config
        config.mode = "development";
        config.devtool = "eval-source-map";
        config.devServer = {
            contentBase: path.join(__dirname, "public"),
            publicPath: "public/",
            useLocalIp: true,
            open: false,
            openPage: "index.html",
            host: "0.0.0.0",
            port: 8080
        };
    }

    return config;
};
