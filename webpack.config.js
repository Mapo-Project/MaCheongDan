const path = require("path");
// css 최적화 플러그인
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// 번들링된 모듈들 참조하는 html 파일 자동 빌드해주는 플러그인
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    main: "./js/main.js",
    character_licensing: "./js/character_licensing.js",
    character: "./js/character.js",
    develop_uxui: "./js/develop_uxui.js",
    event_shooting: "./js/event_shooting.js",
    nextrise: "./js/nextrise.js",
    mapo_creator: "./js/mapo_creator.js",
  },
  output: {
    filename: "[name].[hash].js",
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
    // 중복 코드는 번들로 만듬
    splitChunks: {
      chunks: "all",
    },
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].min.css",
      //   chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
      chunks: ["main"],
      inject: true, // 기본값 true head에 defer로 js script 삽입
    }),
    new HtmlWebpackPlugin({
      filename: "pages/character_licensing.html",
      template: "./pages/character_licensing.html",
      chunks: ["character_licensing"],
    }),
    new HtmlWebpackPlugin({
      filename: "pages/character.html",
      template: "./pages/character.html",
      chunks: ["character"],
    }),
    new HtmlWebpackPlugin({
      filename: "pages/develop_uxui.html",
      template: "./pages/develop_uxui.html",
      chunks: ["develop_uxui"],
    }),
    new HtmlWebpackPlugin({
      filename: "pages/event_shooting.html",
      template: "./pages/event_shooting.html",
      chunks: ["event_shooting"],
    }),
    new HtmlWebpackPlugin({
      filename: "pages/mapo_creator.html",
      template: "./pages/mapo_creator.html",
      chunks: ["mapo_creator"],
    }),
    new HtmlWebpackPlugin({
      filename: "pages/nextrise.html",
      template: "./pages/nextrise.html",
      chunks: ["nextrise"],
    }),
  ],
  performance: { hints: false }, // 빌드파일 용량 제한초과 알림 무시
};
