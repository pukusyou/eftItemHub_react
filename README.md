![logo](https://github.com/pukusyou/eftItemHub_react/blob/master/src/logo.png)
# アプリケーション名
EFT Item Hub
# アプリケーション概要
「[Escape From Tarkov](https://www.escapefromtarkov.com/)」の攻略アプリケーションで下記の機能があります。
- タスクの進行状況を入力することで、今後必要になるアイテム一覧を表示
  - アイテムをクリックすると、アイテムがどのタスクで何個必要か等の詳細画面を表示
  - 詳細画面のタスク名をクリックすることで、そのタスクのWikiページに遷移
- ハイドアウト(Hideout、隠れ家)の進行状況を入力すると、今後必要になるアイテム一覧を表示
  - 設定画面から直近のレベルのみ表示をオンにすることで、次のレベルに必要なアイテムのみを表示
  - アイテムをクリックすると、アイテムがどのハイドアウトで何個必要か等の詳細画面を表示
- トレーダーのレベルを選択することで、購入可能な弾薬データを表示
  - 各項目(ダメージ、貫通等)をクリックすることで並べ替えることが可能
# URL
[https://pukusyou.com/eft/](https://pukusyou.com/eft/)
# 利用方法
サイトにアクセスし、ヘッダーから使用したい機能を選択し、クリック
## [Task](https://pukusyou.com/eft/task/)
1. 各トレーダーの完了しているタスクをすべて選択
   - Saveボタン: ブックマーク名を記入し、保存を押すことで、現在の選択の状況をテンプレートとして保存することが可能
   - Loadボタン: 使用したいブックマークの名前を選択し、読み込みを押すことで、作成したブックマークの選択状況ロードし、反映することが可能
   - Shareボタン: 共有URLが表示されるため、コピーし、そのURLにアクセスすることで選択状況を共有することが可能
2. 決定ボタンをクリック
3. アイテムをクリックすることで詳細情報表示
   - Settingボタン: どの種類のアイテムを表示するか選択することが可能
## [Hideout](https://pukusyou.com/eft/hideout/)
1. ハイドアウトの各施設のレベルをそれぞれ選択
2. 決定ボタンをクリック
3. アイテムをクリックすることで詳細情報表示
   - Settingボタン: 直近のレベルのみ表示するかを切り替えることが可能
## [Ammo](https://pukusyou.com/eft/ammo/)
1. Settingボタンを開く
2. 必要な情報を入力
3. 各列の一番上の表頭をクリックすると、クリックした列を基準に昇順、降順の切り替えが可能
## 目指した課題解決
Escape From Tarkovはゲーム内で得られる情報が限られているため、初心者の方にとって挫折しやすいゲームと考えております。実際、私の周りの友人も最初は熱中していましたが、さまざまなハードルに直面し、途中で離れていく方も多く見受けられました。そのため、一つでもハードルを取り除き、多くの人にプレイしてもらいたいと考えたため、本Webアプリケーションを開発いたしました。

## 技術スタック
- フロントエンド
<p>
  <img src="https://img.shields.io/badge/-JavaScript-F7DF1E.svg?logo=javascript&style=flat&logoColor=black">
  <img src="https://img.shields.io/badge/-React-61DAFB.svg?logo=react&style=flat&logoColor=white">
  <img src="https://img.shields.io/badge/-LocalStorage-005A9C.svg?logo=storage&style=flat&logoColor=white">
</p>

- Webサーバ
<p>
  <img src="https://img.shields.io/badge/-Nginx-009639.svg?logo=nginx&style=flat&logoColor=white">
</p>


