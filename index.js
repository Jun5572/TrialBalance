// モジュールをインポート
const express = require('express');
const app = express();

// 指定されたURLパス（'/'）でHTTP GET　リクエストにのみ応答
app.get('/', (req, res) => {
  res.send('Hello, World!')
});

//8000番ポートでHTTPリクエストを待機するサーバー（app）を作成し、サーバーをテストするために使用できるブラウザーURLを説明するメッセージをコンソールに出力
app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});