import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import type { Configuration } from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

const LESSONS = ["225", "242", "245", "247"] as const;

type Lesson = (typeof LESSONS)[number];

const lesson: Lesson = (process.env.LESSON as Lesson) ?? undefined;

if (lesson && !LESSONS.includes(lesson)) {
  throw new Error(`Unknown lesson: ${lesson}`);
}

const config: Configuration = {
  mode: "development",

  entry: lesson
    ? `./src/lessons/${lesson}/index.ts`
    : "./src/code-with-dad/index.ts",

  devtool: "source-map",

  output: {
    filename: "bundle.js",
    path: path.resolve(process.cwd(), "dist"),
    clean: true,
  },

  resolve: {
    extensions: [".ts", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  devServer: {
    static: path.resolve(process.cwd(), "public"),
    open: true,
    port: 3000,
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
      title: `Code с папой. Урок: ${lesson}`,
    }),
  ],
};

export default config;
