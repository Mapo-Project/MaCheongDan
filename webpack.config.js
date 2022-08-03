const path = require("path");
// css 최적화 플러그인
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// 번들링된 모듈들 참조하는 html 파일 자동 빌드해주는 플러그인
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    // home: ["./home.js", "./home.scss"],
    // account: ["./account.js", "./account.scss"],
    main: "./js/main.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // 안쓰는 빌드파일 삭제
    assetModuleFilename: "asset/[hash][ext][query]",
  },
  // 디버깅 쉽게 해줌
  devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // 사진파일 모듈화
      //   {
      //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //     type: "asset/resource",
      //   },
      //   // 폰트 모듈화
      //   {
      //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
      //     type: "asset/resource",
      //   },
      // html 모듈화
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      //   title: "마포 청년 일자리 사업단",
      filename: "index.html",
      template: "./index.html",
      inject: true, // 기본값 true head에 defer로 js script 삽입
    }),
  ],
  performance: { hints: false }, // 빌드파일 용량 제한초과 알림 무시
};
