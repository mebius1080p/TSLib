# TypeScript ライブラリ
- TypeScript でのテストコード付き
- nyc によるカバレッジ機能付き
- 使わなくなったモジュールもある……
- mocha はまだ es2015 の import に対応していないらしいので、tsconfig の module は commonjs になっている
- ビルドする際は、global に webpack, webpack-cli を入れておく
- webpack 4 での動作を確認している