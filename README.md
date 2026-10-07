# HOPE CourseNameFix Reloaded

公立はこだて未来大学の Moodle システム「HOPE」で、コースコードを読みやすいコース名へ置き換える Chrome 拡張機能です。

## 機能

- パンくずリストなどに表示される `20XX-10XXXXXXX` 形式のコースコードを正式なコース名へ置換
- タブに表示されるページタイトルもコース名へ置換
- assign、page、forum、questionnaire を含む HOPE 内の全ページに対応
- Moodle が動的に追加した表示にも自動で対応

コース名には、HOPE がコースリンクの `title` 属性へ設定している値を使用します。外部サーバーへの通信や、コース名一覧の同梱は行いません。

## インストール

1. このリポジトリを ZIP 形式でダウンロードして展開するか、`git clone` します。
2. Chrome で `chrome://extensions/` を開きます。
3. 右上の「デベロッパー モード」を有効にします。
4. 「パッケージ化されていない拡張機能を読み込む」を選択します。
5. このリポジトリのフォルダーを指定します。

更新後は `chrome://extensions/` で拡張機能の再読み込みボタンを押し、HOPE のページも再読み込みしてください。

## プライバシー

この拡張機能は、閲覧中の HOPE ページに含まれる情報だけを使用します。閲覧情報や個人情報を外部へ送信しません。

## 謝辞

本プロジェクトは、[Better-HOPE/hope-coursename-fix](https://github.com/Better-HOPE/hope-coursename-fix) のアイデアを基に、現在の HOPE に対応するよう再実装したものです。元プロジェクトの開発者に感謝します。

## ライセンス

[MIT License](LICENSE)