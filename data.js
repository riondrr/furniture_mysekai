// カテゴリ配列
const categories = ["一般", "小物", "壁掛け", "ディスプレイ", "ぬいぐるみ", "キャンバス", "壁", "床", "ラグ", "家", "道", "カラータイル", "柵"];
const units = ["バーチャル・シンガー", "Leo/need", "MORE MORE JUMP！", "Vivid BAD SQUAD", "ワンダーランズ×ショウタイム", "25時、ナイトコードで。"];
const series = {
    "Park": "公園",
    "Garden": "ガーデン",
    "Natural": "ナチュラル",
    "Simple": "シンプルポップキッチン",
    "Clean": "クリーンパウダールーム",
    "Japanese": "素朴な和室",
    "Kids": "キッズルーム",
    "Casual": "カジュアル",
    "Cute": "キュート",
    "French": "フレンチスタイル",
    "Training": "トレーニングルーム",
    "Music": "音楽スタジオ",
    "Event": "イベント会場",
    "Game": "ゲームセンター",
    "Picnic": "ぽかぽかなピクニック",
    "Astronomer": "天文学者の研究室",
    "ln": "きらめく流星ルーム",
    "mmj": "かがやくクローバールーム",
    "vbs": "鮮やかなユニゾンルーム",
    "wxs": "はじけるクラウンルーム",
    "ng": "ひび割れたハートルーム",
    "vs": "はじまりのメロディルーム",
    "Moon": "月が見える旅館",
    "Camp": "旅人のキャンプ",
    "tile": "カラータイル",
    "Thunder": "雷神祭",
    "Sports":"スポーツ"
};
// キーワードでシリーズ名を取得する
function getSer(keyword) {
    return series[keyword] || "シリーズが見つかりません";
}

//キャラクター名
const characters = ["", "星乃一歌", "天馬咲希", "望月穂波", "日野森志歩",
    "花里みのり", "桐谷遥", "桃井愛莉", "日野森雫",
    "小豆沢こはね", "白石杏", "東雲彰人", "青柳冬弥",
    "天馬司", "鳳えむ", "草薙寧々", "神代類",
    "宵崎奏", "朝比奈まふゆ", "東雲絵名", "暁山瑞希",
    "初音ミク", "鏡音リン", "鏡音レン", "巡音ルカ", "MEIKO", "KAITO"];

// 家具データ
const furnitureData = [
    //タグを押したらそのタグを検索欄に入れる
    //一般///////////////////////////////////////////////////////////

    {
        name: "きらめく流星のチェスト",
        size: "2x2",
        category: categories[0],
        tags: ["きらめく流星のチェスト", units[1], getSer("ln")],
        image: ""
    },

    {
        name: "きらめく流星のベッド",
        size: "4x6",
        category: categories[0],
        tags: ["きらめく流星のベッド", units[1], getSer("ln")],
        image: ""
    },

    {
        name: "きらめく流星のテーブル",
        size: "2x2",
        category: categories[0],
        tags: ["きらめく流星のテーブル", units[1], getSer("ln")],
        image: ""
    },

    {
        name: "きらめく流星のチェア",
        size: "2x2",
        category: categories[0],
        tags: ["きらめく流星のチェア", units[1], getSer("ln")],
        image: ""
    },

    {
        name: "きらめく流星のシェルフ",
        size: "2x2",
        category: categories[0],
        tags: ["きらめく流星のシェルフ", units[1], getSer("ln")],
        image: ""
    },

    {
        name: "きらめく流星のソファ",
        size: "4x2",
        category: categories[0],
        tags: ["きらめく流星のソファ", units[1], getSer("ln")],
        image: ""
    },

    {
        name: "きらめく流星のローテーブル",
        size: "2x2",
        category: categories[0],
        tags: ["きらめく流星のローテーブル", units[1], getSer("ln")],
        image: ""
    },

    {
        name: "きらめく流星の本棚",
        size: "3x2",
        category: categories[0],
        tags: ["きらめく流星の本棚", units[1], getSer("ln")],
        image: "image.png"
    },

    {
        name: "かがやくクローバーのチェスト",
        size: "2x2",
        category: categories[0],
        tags: ["かがやくクローバーのチェスト", units[2], getSer("mmj")],
        image: ""
    },

    {
        name: "かがやくクローバーのベッド",
        size: "4x6",
        category: categories[0],
        tags: ["かがやくクローバーのベッド", units[2], getSer("mmj")],
        image: ""
    },

    {
        name: "かがやくクローバーのテーブル",
        size: "2x2",
        category: categories[0],
        tags: ["かがやくクローバーのテーブル", units[2], getSer("mmj")],
        image: ""
    },

    {
        name: "かがやくクローバーのチェア",
        size: "2x2",
        category: categories[0],
        tags: ["かがやくクローバーのチェア", units[2], getSer("mmj")],
        image: ""
    },

    {
        name: "かがやくクローバーのシェルフ",
        size: "2x2",
        category: categories[0],
        tags: ["かがやくクローバーのシェルフ", units[2], getSer("mmj")],
        image: ""
    },

    {
        name: "かがやくクローバーのソファ",
        size: "4x2",
        category: categories[0],
        tags: ["かがやくクローバーのソファ", units[2], getSer("mmj")],
        image: ""
    },

    {
        name: "かがやくクローバーのローテーブル",
        size: "2x2",
        category: categories[0],
        tags: ["かがやくクローバーのローテーブル", units[2], getSer("mmj")],
        image: ""
    },

    {
        name: "かがやくクローバーの本棚",
        size: "3x2",
        category: categories[0],
        tags: ["かがやくクローバーの本棚", units[2], getSer("mmj")],
        image: "image.png"
    },

    {
        name: "鮮やかなユニゾンのチェスト",
        size: "2x2",
        category: categories[0],
        tags: ["鮮やかなユニゾンのチェスト", units[3], getSer("vbs")],
        image: ""
    },

    {
        name: "鮮やかなユニゾンのベッド",
        size: "4x6",
        category: categories[0],
        tags: ["鮮やかなユニゾンのベッド", units[3], getSer("vbs")],
        image: ""
    },

    {
        name: "鮮やかなユニゾンのテーブル",
        size: "2x2",
        category: categories[0],
        tags: ["鮮やかなユニゾンのテーブル", units[3], getSer("vbs")],
        image: ""
    },

    {
        name: "鮮やかなユニゾンのチェア",
        size: "2x2",
        category: categories[0],
        tags: ["鮮やかなユニゾンのチェア", units[3], getSer("vbs")],
        image: ""
    },

    {
        name: "鮮やかなユニゾンのシェルフ",
        size: "2x2",
        category: categories[0],
        tags: ["鮮やかなユニゾンのシェルフ", units[3], getSer("vbs")],
        image: ""
    },

    {
        name: "鮮やかなユニゾンのソファ",
        size: "4x2",
        category: categories[0],
        tags: ["鮮やかなユニゾンのソファ", units[3], getSer("vbs")],
        image: ""
    },

    {
        name: "鮮やかなユニゾンのローテーブル",
        size: "2x2",
        category: categories[0],
        tags: ["鮮やかなユニゾンのローテーブル", units[3], getSer("vbs")],
        image: ""
    },

    {
        name: "鮮やかなユニゾンの本棚",
        size: "3x2",
        category: categories[0],
        tags: ["鮮やかなユニゾンの本棚", units[3], getSer("vbs")],
        image: "image.png"
    },

    {
        name: "はじけるクラウンのチェスト",
        size: "2x2",
        category: categories[0],
        tags: ["はじけるクラウンのチェスト", units[4], getSer("wxs")],
        image: ""
    },

    {
        name: "はじけるクラウンのベッド",
        size: "4x6",
        category: categories[0],
        tags: ["はじけるクラウンのベッド", units[4], getSer("wxs")],
        image: ""
    },

    {
        name: "はじけるクラウンのテーブル",
        size: "2x2",
        category: categories[0],
        tags: ["はじけるクラウンのテーブル", units[4], getSer("wxs")],
        image: ""
    },

    {
        name: "はじけるクラウンのチェア",
        size: "2x2",
        category: categories[0],
        tags: ["はじけるクラウンのチェア", units[4], getSer("wxs")],
        image: ""
    },

    {
        name: "はじけるクラウンのシェルフ",
        size: "2x2",
        category: categories[0],
        tags: ["はじけるクラウンのシェルフ", units[4], getSer("wxs")],
        image: ""
    },

    {
        name: "はじけるクラウンのソファ",
        size: "4x2",
        category: categories[0],
        tags: ["はじけるクラウンのソファ", units[4], getSer("wxs")],
        image: ""
    },

    {
        name: "はじけるクラウンのローテーブル",
        size: "2x2",
        category: categories[0],
        tags: ["はじけるクラウンのローテーブル", units[4], getSer("wxs")],
        image: ""
    },

    {
        name: "はじけるクラウンの本棚",
        size: "3x2",
        category: categories[0],
        tags: ["はじけるクラウンの本棚", units[4], getSer("wxs")],
        image: "image.png"
    },

    {
        name: "ひび割れたハートのチェスト",
        size: "2x2",
        category: categories[0],
        tags: ["ひび割れたハートのチェスト", units[5], getSer("ng")],
        image: ""
    },

    {
        name: "ひび割れたハートのベッド",
        size: "4x6",
        category: categories[0],
        tags: ["ひび割れたハートのベッド", units[5], getSer("ng")],
        image: ""
    },

    {
        name: "ひび割れたハートのテーブル",
        size: "2x2",
        category: categories[0],
        tags: ["ひび割れたハートのテーブル", units[5], getSer("ng")],
        image: ""
    },

    {
        name: "ひび割れたハートのチェア",
        size: "2x2",
        category: categories[0],
        tags: ["ひび割れたハートのチェア", units[5], getSer("ng")],
        image: ""
    },

    {
        name: "ひび割れたハートのシェルフ",
        size: "2x2",
        category: categories[0],
        tags: ["ひび割れたハートのシェルフ", units[5], getSer("ng")],
        image: ""
    },

    {
        name: "ひび割れたハートのソファ",
        size: "4x2",
        category: categories[0],
        tags: ["ひび割れたハートのソファ", units[5], getSer("ng")],
        image: ""
    },

    {
        name: "ひび割れたハートのローテーブル",
        size: "2x2",
        category: categories[0],
        tags: ["ひび割れたハートのローテーブル", units[5], getSer("ng")],
        image: ""
    },

    {
        name: "ひび割れたハートの本棚",
        size: "3x2",
        category: categories[0],
        tags: ["ひび割れたハートの本棚", units[5], getSer("ng")],
        image: "image.png"
    },

    {
        name: "はじまりのメロディのチェスト",
        size: "2x2",
        category: categories[0],
        tags: ["はじまりのメロディ", units[0], getSer("vs")],
        image: ""
    },

    {
        name: "はじまりのメロディのベッド",
        size: "4x6",
        category: categories[0],
        tags: ["はじまりのメロディのベッド", units[0], getSer("vs")],
        image: ""
    },

    {
        name: "はじまりのメロディのテーブル",
        size: "2x2",
        category: categories[0],
        tags: ["はじまりのメロディのテーブル", units[0], getSer("vs")],
        image: ""
    },

    {
        name: "はじまりのメロディのチェア",
        size: "2x2",
        category: categories[0],
        tags: ["はじまりのメロディのチェア", units[0], getSer("vs")],
        image: ""
    },

    {
        name: "はじまりのメロディのシェルフ",
        size: "2x2",
        category: categories[0],
        tags: ["はじまりのメロディのシェルフ", units[0], getSer("vs")],
        image: ""
    },

    {
        name: "はじまりのメロディのソファ",
        size: "4x2",
        category: categories[0],
        tags: ["はじまりのメロディのソファ", units[0], getSer("vs")],
        image: ""
    },

    {
        name: "はじまりのメロディのローテーブル",
        size: "2x2",
        category: categories[0],
        tags: ["はじまりのメロディのローテーブル", units[0], getSer("vs")],
        image: ""
    },

    {
        name: "はじまりのメロディの本棚",
        size: "3x2",
        category: categories[0],
        tags: ["はじまりのメロディの本棚", units[0], getSer("vs")],
        image: "image.png"
    },

    {
        name: "木の作業テーブル",
        size: "3x2",
        category: categories[0],
        tags: ["木の作業テーブル", "作業テーブル"],
        image: ""
    },

    {
        name: "石の作業テーブル",
        size: "3x2",
        category: categories[0],
        tags: ["石の作業テーブル", "作業テーブル"],
        image: ""
    },

    {
        name: "近未来の作業テーブル",
        size: "3x2",
        category: categories[0],
        tags: ["近未来の作業テーブル", "作業テーブル"],
        image: ""
    },

    {
        name: "木のヘンカンマシン",
        size: "2x2",
        category: categories[0],
        tags: ["木のヘンカンマシン", "ヘンカンマシン"],
        image: ""
    },

    {
        name: "石のヘンカンマシン",
        size: "2x2",
        category: categories[0],
        tags: ["石のヘンカンマシン", "ヘンカンマシン"],
        image: ""
    },

    {
        name: "アイアンのヘンカンマシン",
        size: "2x2",
        category: categories[0],
        tags: ["アイアンのヘンカンマシン", "ヘンカンマシン"],
        image: ""
    },

    {
        name: "近未来のヘンカンマシン",
        size: "2x2",
        category: categories[0],
        tags: ["近未来のヘンカンマシン", "ヘンカンマシン"],
        image: ""
    },

    {
        name: "コンポーネントオーディオ",
        size: "3x2",
        category: categories[0],
        tags: ["コンポーネントオーディオ", "ミュージックプレイヤー"],
        image: ""
    },

    {
        name: "岩",
        size: "2x2",
        category: categories[0],
        tags: ["岩"],
        image: "image.png"
    },

    {
        name: "石",
        size: "2x2",
        category: categories[0],
        tags: ["石"],
        image: "image.png"
    },

    {
        name: "草の生えた石",
        size: "2x2",
        category: categories[0],
        tags: ["草の生えた石"],
        image: "image.png"
    },

    {
        name: "低木",
        size: "2x2",
        category: categories[0],
        tags: ["低木","グリーン"],
        image: "image.png"
    },

    {
        name: "ナチュラルなチェスト",
        size: "2x2",
        category: categories[0],
        tags: ["ナチュラルなチェスト", getSer("Natural"), "チェスト"],
        image: ""
    },

    {
        name: "ナチュラルなベッド",
        size: "4x6",
        category: categories[0],
        tags: ["ナチュラルなベッド", getSer("Natural")],
        image: ""
    },

    {
        name: "ナチュラルなフロアライト",
        size: "2x2",
        category: categories[0],
        tags: ["ナチュラルなフロアライト", getSer("Natural"),"照明"],
        image: ""
    },

    {
        name: "ナチュラルな2人掛けソファ",
        size: "4x2",
        category: categories[0],
        tags: ["ナチュラルな2人掛けソファ", getSer("Natural")],
        image: ""
    },

    {
        name: "ナチュラルな1人掛けソファ",
        size: "2x2",
        category: categories[0],
        tags: ["ナチュラルな1人掛けソファ", getSer("Natural")],
        image: ""
    },//

    {
        name: "ナチュラルなダイニングテーブル",
        size: "4x2",
        category: categories[0],
        tags: ["ナチュラルなダイニングテーブル", getSer("Natural")],
        image: ""
    },

    {
        name: "ナチュラルなダイニングチェア",
        size: "4x2",
        category: categories[0],
        tags: ["ナチュラルなダイニングチェア", getSer("Natural")],
        image: ""
    },

    {
        name: "ナチュラルな本棚",
        size: "2x2",
        category: categories[0],
        tags: ["ナチュラルな本棚", getSer("Natural")],
        image: ""
    },

    {
        name: "ナチュラルなクローゼット",
        size: "3x2",
        category: categories[0],
        tags: ["ナチュラルなクローゼット", getSer("Natural")],
        image: ""
    },

    {
        name: "ナチュラルなスツール",
        size: "2x2",
        category: categories[0],
        tags: ["ナチュラルなスツール", getSer("Natural")],
        image: ""
    },

    {
        name: "ナチュラルなドレッサー",
        size: "2x2",
        category: categories[0],
        tags: ["ナチュラルなドレッサー", getSer("Natural"), "アバターチェンジ"],
        image: ""
    },

    {
        name: "ナチュラルなローテーブル",
        size: "4x2",
        category: categories[0],
        tags: ["ナチュラルなローテーブル", getSer("Natural")],
        image: ""
    },

    {
        name: "ナチュラルな液晶テレビ",
        size: "4x2",
        category: categories[0],
        tags: ["ナチュラルな液晶テレビ", getSer("Natural")],
        image: ""
    },

    {
        name: "調理台",
        size: "3x2",
        category: categories[0],
        tags: ["調理台", getSer("Simple")],
        image: ""
    },

    {
        name: "コンロ",
        size: "3x2",
        category: categories[0],
        tags: ["コンロ", getSer("Simple")],
        image: ""
    },

    {
        name: "シンク",
        size: "3x2",
        category: categories[0],
        tags: ["シンク", getSer("Simple")],
        image: ""
    },

    {
        name: "冷蔵庫",
        size: "2x2",
        category: categories[0],
        tags: ["冷蔵庫", getSer("Simple")],
        image: ""
    },

    {
        name: "カッティングボード",
        size: "3x2",
        category: categories[0],
        tags: ["カッティングボード", getSer("Simple")],
        image: ""
    },

    {
        name: "洗面台",
        size: "2x2",
        category: categories[0],
        tags: ["洗面台", getSer("Clean")],
        image: ""
    },

    {
        name: "洗濯機",
        size: "2x2",
        category: categories[0],
        tags: ["洗濯機", getSer("Clean")],
        image: ""
    },//

    {
        name: "ハンディ掃除機",
        size: "1x1",
        category: categories[0],
        tags: ["ハンディ掃除機",getSer("Clean")],
        image: "image.png"
    },

    {
        name: "ガーデンの素朴な花壇",
        size: "2x1",
        category: categories[0],
        tags: ["ガーデンの素朴な花壇", getSer("Garden")],
        image: ""
    },

    {
        name: "ガーデンの素朴な花壇/ポピー",
        size: "2x1",
        category: categories[0],
        tags: ["ガーデンの素朴な花壇/ポピー", getSer("Garden")],
        image: ""
    },

    {
        name: "ガーデンの素朴な花壇/コスモス",
        size: "2x1",
        category: categories[0],
        tags: ["ガーデンの素朴な花壇/コスモス", getSer("Garden")],
        image: ""
    },

    {
        name: "ガーデンの素朴な花壇/ラベンダー",
        size: "2x1",
        category: categories[0],
        tags: ["ガーデンの素朴な花壇/ラベンダー", getSer("Garden")],
        image: ""
    },

    {
        name: "ガーデンのパラソルテーブル",
        size: "2x2",
        category: categories[0],
        tags: ["ガーデンのパラソルテーブル", getSer("Garden")],
        image: ""
    },

    {
        name: "ガーデンのアイアンチェア",
        size: "2x2",
        category: categories[0],
        tags: ["ガーデンのアイアンチェア", getSer("Garden")],
        image: ""
    },

    {
        name: "ガーデンのベンチ",
        size: "4x2",
        category: categories[0],
        tags: ["ガーデンのベンチ", getSer("Garden")],
        image: ""
    },

    {
        name: "ガーデンのラティスプランター",
        size: "2x1",
        category: categories[0],
        tags: ["ガーデンのラティスプランター", getSer("Garden")],
        image: ""
    },

    {
        name: "ガーデンのラティスプランター/ポピー",
        size: "2x1",
        category: categories[0],
        tags: ["ガーデンのラティスプランター/ポピー", getSer("Garden")],
        image: ""
    },

    {
        name: "ガーデンのラティスプランター/コスモス",
        size: "2x1",
        category: categories[0],
        tags: ["ガーデンのラティスプランター/コスモス", getSer("Garden")],
        image: ""
    },

    {
        name: "ガーデンのラティスプランター/ラベンダー",
        size: "2x1",
        category: categories[0],
        tags: ["ガーデンのラティスプランター/ラベンダー", getSer("Garden")],
        image: ""
    },

    {
        name: "ガーデンのツールシェルフ",
        size: "3x2",
        category: categories[0],
        tags: ["ガーデンのツールシェルフ", getSer("Garden")],
        image: ""
    },

    {
        name: "ガーデンカート",
        size: "2x3",
        category: categories[0],
        tags: ["ガーデンカート", getSer("Garden")],
        image: ""
    },

    {
        name: "ガーデンカート/ポピー",
        size: "2x3",
        category: categories[0],
        tags: ["ガーデンカート/ポピー", getSer("Garden")],
        image: ""
    },

    {
        name: "ガーデンカート/コスモス",
        size: "2x3",
        category: categories[0],
        tags: ["ガーデンカート/コスモス", getSer("Garden")],
        image: ""
    },

    {
        name: "ガーデンカート/ラベンダー",
        size: "2x3",
        category: categories[0],
        tags: ["ガーデンカート/ラベンダー", getSer("Garden")],
        image: ""
    },//

    {
        name: "ガーデンのステップラダー",
        size: "2x2",
        category: categories[0],
        tags: ["ガーデンのステップラダー", getSer("Garden")],
        image: ""
    },

    {
        name: "ブランコ",
        size: "8x5",
        category: categories[0],
        tags: ["ブランコ", getSer("Park")],
        image: ""
    },

    {
        name: "すべり台",
        size: "2x8",
        category: categories[0],
        tags: ["すべり台", getSer("Park")],
        image: ""
    },

    {
        name: "くまのスプリング遊具",
        size: "2x2",
        category: categories[0],
        tags: ["くまのスプリング遊具", getSer("Park")],
        image: ""
    },

    {
        name: "砂場",
        size: "5x5",
        category: categories[0],
        tags: ["砂場", getSer("Park")],
        image: ""
    },

    {
        name: "シーソー",
        size: "6x2",
        category: categories[0],
        tags: ["シーソー", getSer("Park")],
        image: ""
    },

    {
        name: "公園のベンチ",
        size: "4x2",
        category: categories[0],
        tags: ["公園のベンチ", getSer("Park")],
        image: ""
    },

    {
        name: "公園の時計",
        size: "1x1",
        category: categories[0],
        tags: ["公園の時計", getSer("Park")],
        image: ""
    },

    {
        name: "公園の噴水",
        size: "8x8",
        category: categories[0],
        tags: ["公園の噴水", getSer("Park")],
        image: ""
    },

    {
        name: "鉄棒",
        size: "6x1",
        category: categories[0],
        tags: ["鉄棒", getSer("Park")],
        image: ""
    },

    {
        name: "公園のタイヤ",
        size: "2x1",
        category: categories[0],
        tags: ["公園のタイヤ", getSer("Park")],
        image: ""
    },

    {
        name: "回転ジャングルジム",
        size: "6x6",
        category: categories[0],
        tags: ["回転ジャングルジム", getSer("Park")],
        image: ""
    },

    {
        name: "クラシックな街灯",
        size: "1x1",
        category: categories[0],
        tags: ["公園の街灯", getSer("Park"), "照明"],
        image: ""
    },

    {
        name: "土管",
        size: "5x4",
        category: categories[0],
        tags: ["土管", getSer("Park")],
        image: ""
    },//

    {
        name: "和風の素朴な鏡台",
        size: "3x2",
        category: categories[0],
        tags: ["和風の素朴な鏡台", getSer("Japanese"),"アバターチェンジ"],
        image: ""
    },

    {
        name: "和風の素朴なちゃぶ台",
        size: "2x2",
        category: categories[0],
        tags: ["和風の素朴なちゃぶ台", getSer("Japanese")],
        image: ""
    },

    {
        name: "和風の素朴な布団",
        size: "4x5",
        category: categories[0],
        tags: ["和風の素朴な布団", getSer("Japanese")],
        image: ""
    },

    {
        name: "和風の素朴なテレビ",
        size: "2x2",
        category: categories[0],
        tags: ["和風の素朴なテレビ", getSer("Japanese")],
        image: ""
    },

    {
        name: "和風の素朴な戸棚",
        size: "3x2",
        category: categories[0],
        tags: ["和風の素朴な戸棚", getSer("Japanese")],
        image: ""
    },

    {
        name: "和風の素朴な黒電話",
        size: "1x2",
        category: categories[0],
        tags: ["和風の素朴な黒電話", getSer("Japanese")],
        image: ""
    },//

    {
        name: "キッズルームのカラフルチェスト",
        size: "2x2",
        category: categories[0],
        tags: ["キッズルームのカラフルチェスト", getSer("Kids"),"チェスト"],
        image: ""
    },

    {
        name: "キッズルームのくまさんベッド",
        size: "4x6",
        category: categories[0],
        tags: ["キッズルームのくまさんベッド", getSer("Kids")],
        image: ""
    },

    {
        name: "キッズルームのテーブル",
        size: "3x3",
        category: categories[0],
        tags: ["キッズルームのテーブル", getSer("Kids")],
        image: ""
    },

    {
        name: "キッズルームのチェア",
        size: "2x2",
        category: categories[0],
        tags: ["キッズルームのチェア", getSer("Kids")],
        image: ""
    },

    {
        name: "キッズルームの絵本棚",
        size: "2x2",
        category: categories[0],
        tags: ["キッズルームの絵本棚", getSer("Kids")],
        image: ""
    },

    {
        name: "キッズルームのおもちゃ箱",
        size: "2x2",
        category: categories[0],
        tags: ["キッズルームのおもちゃ箱", getSer("Kids")],
        image: ""
    },

    {
        name: "キッズルームの木馬",
        size: "2x1",
        category: categories[0],
        tags: ["キッズルームの木馬", getSer("Kids")],
        image: ""
    },

    {
        name: "キッズルームの汽車のおもちゃ",
        size: "3x4",
        category: categories[0],
        tags: ["キッズルームの汽車のおもちゃ", getSer("Kids")],
        image: ""
    },

    {
        name: "カジュアルなチェスト",
        size: "2x2",
        category: categories[0],
        tags: ["カジュアルなチェスト", getSer("Casual"), "チェスト"],
        image: "image.png"
    },

    {
        name: "カジュアルなベッド",
        size: "4x6",
        category: categories[0],
        tags: ["カジュアルなベッド", getSer("Casual")],
        image: ""
    },

    {
        name: "カジュアルな学習机",
        size: "4x3",
        category: categories[0],
        tags: ["カジュアルな学習机", getSer("Casual")],
        image: "image.png"
    },

    {
        name: "カジュアルな本棚",
        size: "2x2",
        category: categories[0],
        tags: ["カジュアルな本棚", getSer("Casual")],
        image: "image.png"
    },

    {
        name: "カジュアルなハンガーラック",
        size: "3x2",
        category: categories[0],
        tags: ["カジュアルなハンガーラック", getSer("Casual")],
        image: "image.png"
    },//

    {
        name: "カジュアルな学習椅子",
        size: "2x2",
        category: categories[0],
        tags: ["カジュアルな学習椅子", getSer("Casual")],
        image: "image.png"
    },

    {
        name: "キュートなチェスト",
        size: "2x2",
        category: categories[0],
        tags: ["キュートなチェスト", getSer("Cute"), "チェスト"],
        image: ""
    },

    {
        name: "キュートなドレッサー",
        size: "2x2",
        category: categories[0],
        tags: ["キュートなドレッサー", getSer("Cute"), "アバターチェンジ"],
        image: ""
    },

    {
        name: "キュートなベッド",
        size: "4x6",
        category: categories[0],
        tags: ["キュートなベッド", getSer("Cute")],
        image: ""
    },

    {
        name: "キュートなローテーブル",
        size: "2x2",
        category: categories[0],
        tags: ["キュートなローテーブル", getSer("Cute")],
        image: ""
    },

    {
        name: "キュートなクッション",
        size: "2x2",
        category: categories[0],
        tags: ["キュートなクッション", getSer("Cute")],
        image: ""
    },

    {
        name: "キュートなワードローブ",
        size: "3x2",
        category: categories[0],
        tags: ["キュートなワードローブ", getSer("Cute")],
        image: ""
    },

    {
        name: "キュートなフロアライト",
        size: "2x2",
        category: categories[0],
        tags: ["キュートなフロアライト", getSer("Cute"), "照明"],
        image: ""
    },

    {
        name: "キュートなリボンチェア",
        size: "2x2",
        category: categories[0],
        tags: ["キュートなリボンチェア", getSer("Cute")],
        image: ""
    },

    {
        name: "フレンチスタイルのチェスト",
        size: "2x2",
        category: categories[0],
        tags: ["フレンチスタイルのチェスト", getSer("French"), "チェスト"],
        image: ""
    },

    {
        name: "フレンチスタイルの姿見",
        size: "2x2",
        category: categories[0],
        tags: ["フレンチスタイルの姿見", getSer("French"), "アバターチェンジ"],
        image: ""
    },

    {
        name: "フレンチスタイルのベッド",
        size: "4x6",
        category: categories[0],
        tags: ["フレンチスタイルのベッド", getSer("French")],
        image: ""
    },

    {
        name: "フレンチスタイルのラウンドテーブル",
        size: "4x4",
        category: categories[0],
        tags: ["フレンチスタイルのラウンドテーブル", getSer("French")],
        image: ""
    },

    {
        name: "フレンチスタイルのソファ",
        size: "4x2",
        category: categories[0],
        tags: ["フレンチスタイルのソファ", getSer("French")],
        image: ""
    },

    {
        name: "フレンチスタイルの本棚",
        size: "3x2",
        category: categories[0],
        tags: ["フレンチスタイルの本棚", getSer("French")],
        image: ""
    },

    {
        name: "フレンチスタイルのシェルフ",
        size: "2x2",
        category: categories[0],
        tags: ["フレンチスタイルのシェルフ", getSer("French")],
        image: ""
    },

    {
        name: "フレンチスタイルのポールハンガー",
        size: "2x2",
        category: categories[0],
        tags: ["フレンチスタイルのポールハンガー", getSer("French")],
        image: ""
    },

    {
        name: "ウォーターサーバー",
        size: "1x1",
        category: categories[0],
        tags: ["ウォーターサーバー",getSer("Training")],
        image: "image.png"
    },

    {
        name: "ヨガマット",
        size: "5x3",
        category: categories[0],
        tags: ["ヨガマット", getSer("Training")],
        image: ""
    },

    {
        name: "バランスボール",
        size: "2x2",
        category: categories[0],
        tags: ["バランスボール", getSer("Training")],
        image: ""
    },

    {
        name: "ランニングマシン",
        size: "2x4",
        category: categories[0],
        tags: ["ランニングマシン", getSer("Training")],
        image: ""
    },

    {
        name: "2人用ランニングマシン",
        size: "6x4",
        category: categories[0],
        tags: ["2人用ランニングマシン", getSer("Training")],
        image: ""
    },

    {
        name: "フィットネスバイク",
        size: "2x2",
        category: categories[0],
        tags: ["フィットネスバイク", getSer("Training")],
        image: ""
    },

    {
        name: "ダンベル",
        size: "2x2",
        category: categories[0],
        tags: ["ダンベル", getSer("Training")],
        image: ""
    },

    {
        name: "シンセサイザー",
        size: "4x2",
        category: categories[0],
        tags: ["シンセサイザー", getSer("Music"), "楽器"],
        image: ""
    },

    {
        name: "エレキギター",
        size: "2x2",
        category: categories[0],
        tags: ["エレキギター", getSer("Music"), "楽器"],
        image: ""
    },

    {
        name: "エレキベース",
        size: "2x2",
        category: categories[0],
        tags: ["エレキベース", getSer("Music"), "楽器"],
        image: ""
    },

    {
        name: "ドラムセット",
        size: "5x4",
        category: categories[0],
        tags: ["ドラムセット", getSer("Music"), "楽器"],
        image: ""
    },

    {
        name: "アンプ",
        size: "2x2",
        category: categories[0],
        tags: ["アンプ", getSer("Music"), "楽器"],
        image: ""
    },

    {
        name: "スタンドマイク",
        size: "1x1",
        category: categories[0],
        tags: ["スタンドマイク", getSer("Music"), "楽器"],
        image: ""
    },

    {
        name: "ホワイトボード",
        size: "4x2",
        category: categories[0],
        tags: ["ホワイトボード", getSer("Event")],
        image: ""
    },//

    {
        name: "折りたたみ会議テーブル",
        size: "4x2",
        category: categories[0],
        tags: ["折りたたみ会議テーブル", getSer("Event")],
        image: ""
    },

    {
        name: "クレーンゲーム",
        size: "7x4",
        category: categories[0],
        tags: ["クレーンゲーム", getSer("Game")],
        image: ""
    },

    {
        name: "ゲームセンターの椅子",
        size: "2x2",
        category: categories[0],
        tags: ["ゲームセンターの椅子", getSer("Game")],
        image: ""
    },

    {
        name: "プリシ",
        size: "11x6",
        category: categories[0],
        tags: ["プリシ", getSer("Game")],
        image: ""
    },

    {
        name: "CHUNITHM",
        size: "3x3",
        category: categories[0],
        tags: ["CHUNITHM", getSer("Game")],
        image: ""
    },//

    {
        name: "ぷよぷよeスポーツ",
        size: "2x2",
        category: categories[0],
        tags: ["ぷよぷよeスポーツ", getSer("Game")],
        image: ""
    },

    {
        name: "アンスリウム",
        size: "1x1",
        category: categories[0],
        tags: ["アンスリウム", "グリーン"],
        image: ""
    },

    {
        name: "モンステラ",
        size: "1x1",
        category: categories[0],
        tags: ["モンステラ", "グリーン"],
        image: ""
    },

    {
        name: "ユッカ",
        size: "1x1",
        category: categories[0],
        tags: ["ユッカ", "グリーン"],
        image: ""
    },

    {
        name: "ぽかぽかなピクニックの木の箱テーブル",
        size: "2x2",
        category: categories[0],
        tags: ["ぽかぽかなピクニックの木の箱テーブル", getSer("Picnic")],
        image: ""
    },

    {
        name: "ぽかぽかなピクニックの自転車",
        size: "3x1",
        category: categories[0],
        tags: ["ぽかぽかなピクニックの自転車", getSer("Picnic")],
        image: ""
    },

    {
        name: "ぽかぽかなピクニックの切り株",
        size: "2x2",
        category: categories[0],
        tags: ["ぽかぽかなピクニックの切り株", getSer("Picnic")],
        image: ""
    },

    {
        name: "ぽかぽかなピクニックのチェア",
        size: "2x2",
        category: categories[0],
        tags: ["ぽかぽかなピクニックのチェア", getSer("Picnic")],
        image: ""
    },

    {
        name: "ぽかぽかなピクニックのツリー",
        size: "4x4",
        category: categories[0],
        tags: ["ぽかぽかなピクニックのツリー", getSer("Picnic")],
        image: ""
    },

    {
        name: "月が見える旅館の用箪笥",
        size: "2x2",
        category: categories[0],
        tags: ["月が見える旅館の用箪笥", getSer("Moon"), "チェスト"],
        image: ""
    },

    {
        name: "月が見える旅館の座卓",
        size: "4x2",
        category: categories[0],
        tags: ["月が見える旅館の座卓", getSer("Moon")],
        image: ""
    },

    {
        name: "月が見える旅館の座椅子",
        size: "2x2",
        category: categories[0],
        tags: ["月が見える旅館の座椅子", getSer("Moon")],
        image: ""
    },

    {
        name: "月が見える旅館の布団",
        size: "4x5",
        category: categories[0],
        tags: ["月が見える旅館の布団", getSer("Moon")],
        image: ""
    },

    {
        name: "月が見える旅館の茶箪笥",
        size: "2x2",
        category: categories[0],
        tags: ["月が見える旅館の茶箪笥", getSer("Moon")],
        image: ""
    },

    {
        name: "月が見える旅館の行灯",
        size: "1x1",
        category: categories[0],
        tags: ["月が見える旅館の行灯", getSer("Moon"),"照明"],
        image: ""
    },

    {
        name: "月が見える旅館の屏風",
        size: "6x1",
        category: categories[0],
        tags: ["月が見える旅館の屏風", getSer("Moon")],
        image: ""
    },

    {
        name: "雷神祭の和太鼓",
        size: "3x3",
        category: categories[0],
        tags: ["雷神祭の和太鼓", getSer("Thunder"),"楽器"],
        image: ""
    },

    {
        name: "雷神祭の提灯",
        size: "5x2",
        category: categories[0],
        tags: ["雷神祭の提灯", getSer("Thunder")],
        image: ""
    },

    {
        name: "雷神祭のおめん屋台",
        size: "5x2",
        category: categories[0],
        tags: ["雷神祭のおめん屋台", getSer("Thunder")],
        image: ""
    },

    {
        name: "雷神祭のわたがし屋台",
        size: "5x2",
        category: categories[0],
        tags: ["雷神祭のわたがし屋台", getSer("Thunder")],
        image: ""
    },

    {
        name: "雷神祭の灯篭",
        size: "2x1",
        category: categories[0],
        tags: ["雷神祭の灯篭", getSer("Thunder"),"照明"],
        image: ""
    },

    {
        name: "雷神祭の池",
        size: "8x12",
        category: categories[0],
        tags: ["雷神祭の池", getSer("Thunder")],
        image: ""
    },

    {
        name: "雷神祭の狐像/右向き",
        size: "2x2",
        category: categories[0],
        tags: ["雷神祭の狐像/右向き", getSer("Thunder")],
        image: ""
    },

    {
        name: "雷神祭の鳥居",
        size: "8x2",
        category: categories[0],
        tags: ["雷神祭の鳥居", getSer("Thunder")],
        image: ""
    },

    {
        name: "雷神祭の縁台",
        size: "6x2",
        category: categories[0],
        tags: ["雷神祭の縁台", getSer("Thunder")],
        image: ""
    },

    {
        name: "雷神祭の狐像/左向き",
        size: "2x2",
        category: categories[0],
        tags: ["雷神祭の狐像/左向き", getSer("Thunder")],
        image: ""
    },

    {
        name: "天文学者の研究室のチェスト",
        size: "2x2",
        category: categories[0],
        tags: ["天文学者の研究室のチェスト", getSer("Astronomer"),"チェスト"],
        image: ""
    },

    {
        name: "天文学者の研究室の天体望遠鏡",
        size: "2x3",
        category: categories[0],
        tags: ["天文学者の研究室の天体望遠鏡", getSer("Astronomer")],
        image: ""
    },

    {
        name: "天文学者の研究室の天蓋つきベッド",
        size: "4x7",
        category: categories[0],
        tags: ["天文学者の研究室の天蓋つきベッド", getSer("Astronomer")],
        image: ""
    },

    {
        name: "天文学者の研究室の椅子",
        size: "2x2",
        category: categories[0],
        tags: ["天文学者の研究室の椅子", getSer("Astronomer")],
        image: ""
    },

    {
        name: "天文学者の研究室の巻紙入りの箱",
        size: "1x1",
        category: categories[0],
        tags: ["天文学者の研究室の巻紙入りの箱", getSer("Astronomer")],
        image: ""
    },//

    {
        name: "天文学者の研究室の机",
        size: "4x2",
        category: categories[0],
        tags: ["天文学者の研究室の机", getSer("Astronomer")],
        image: ""
    },

    {
        name: "旅人のキャンプのテント",
        size: "6x6",
        category: categories[0],
        tags: ["旅人のキャンプのテント", getSer("Camp")],
        image: ""
    },

    {
        name: "旅人のキャンプのアウトドアチェア",
        size: "2x2",
        category: categories[0],
        tags: ["旅人のキャンプのアウトドアチェア", getSer("Camp")],
        image: ""
    },

    {
        name: "旅人のキャンプの薪",
        size: "2x1",
        category: categories[0],
        tags: ["旅人のキャンプの薪", getSer("Camp")],
        image: ""
    },

    {
        name: "旅人のキャンプの雪だるま",
        size: "2x2",
        category: categories[0],
        tags: ["旅人のキャンプの雪だるま", getSer("Camp")],
        image: ""
    },

    {
        name: "旅人のキャンプのアウトドアボックス",
        size: "3x1",
        category: categories[0],
        tags: ["旅人のキャンプのアウトドアボックス", getSer("Camp")],
        image: ""
    },//

    {
        name: "旅人の焚き火料理",
        size: "3x3",
        category: categories[0],
        tags: ["旅人の焚き火料理", getSer("Camp")],
        image: ""
    },

    {
        name: "旅人のキャンプのリュック",
        size: "2x2",
        category: categories[0],
        tags: ["旅人のキャンプのリュック", getSer("Camp")],
        image: ""
    },

    {
        name: "旅人のキャンプのアウトドアテーブル",
        size: "4x2",
        category: categories[0],
        tags: ["旅人のキャンプのアウトドアテーブル", getSer("Camp")],
        image: ""
    },

    {
        name: "あの日のジャングルジム",
        size: "5x5",
        category: categories[0],
        tags: ["あの日のジャングルジム", units[1]],
        image: "image.png"
    },

    {
        name: "配信用カメラ",
        size: "2x2",
        category: categories[0],
        tags: ["配信用カメラ", units[2]],
        image: "image.png"
    },

    {
        name: "ぷよぷよ通",
        size: "6x5",
        category: categories[0],
        tags: ["ぷよぷよ通", units[3]],
        image: "image.png"
    },

    {
        name: "ネネロボのオブジェ",
        size: "2x2",
        category: categories[0],
        tags: ["ネネロボのオブジェ", units[4]],
        image: "image.png"
    },

    {
        name: "いつものファミレス席",
        size: "7x5",
        category: categories[0],
        tags: ["いつものファミレス席", units[5]],
        image: "image.png"
    },

    {
        name: "サッカーボール",
        size: "1x1",
        category: categories[0],
        tags: ["サッカーボール", getSer("Sports")],
        image: ""
    },

    {
        name: "バスケットボール",
        size: "1x1",
        category: categories[0],
        tags: ["バスケットボール", getSer("Sports")],
        image: ""
    },

    {
        name: "テニスラケットバッグ",
        size: "不明",
        category: categories[0],
        tags: ["テニスラケットバッグ", getSer("Sports")],
        image: ""
    },

    {
        name: "卓球台",
        size: "4x6",
        category: categories[0],
        tags: ["卓球台", getSer("Sports")],
        image: ""
    },

    {
        name: "バドミントンラケット",
        size: "不明",
        category: categories[0],
        tags: ["バドミントンラケット", getSer("Sports")],
        image: ""
    },

    {
        name: "野球バットとグローブ",
        size: "2x1",
        category: categories[0],
        tags: ["野球バットとグローブ", getSer("Sports")],
        image: ""
    },

    {
        name: "グランドライト",
        size: "1x1",
        category: categories[0],
        tags: ["グランドライト", "照明"],
        image: ""
    },

    //小物///////////////////////////////////////////////////////////


    {
        name: "きらめく流星のテーブルライト",
        size: "1x1",
        category: categories[1],
        tags: ["きらめく流星のテーブルライト", units[1], "照明", getSer("ln")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "かがやくクローバーのテーブルライト",
        size: "1x1",
        category: categories[1],
        tags: ["かがやくクローバーのテーブルライト", units[2], "照明", getSer("mmj")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "鮮やかなユニゾンのテーブルライト",
        size: "1x1",
        category: categories[1],
        tags: ["鮮やかなユニゾンのテーブルライト", units[3], "照明", getSer("vbs")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "はじけるクラウンのテーブルライト",
        size: "1x1",
        category: categories[1],
        tags: ["はじけるクラウンのテーブルライト", units[4], "照明", getSer("wxs")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "ひび割れたハートのテーブルライト",
        size: "1x1",
        category: categories[1],
        tags: ["ひび割れたハートのテーブルライト", units[5], "照明", getSer("ng")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "はじまりのメロディのテーブルライト",
        size: "1x1",
        category: categories[1],
        tags: ["はじまりのメロディのテーブルライト", units[0], "照明", getSer("vs")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "シンプルな手帳",
        size: "1x1",
        category: categories[1],
        tags: ["シンプルな手帳", "マイセカイ情報"],
        image: "image.png"
    },

    {
        name: "革のシステム手帳",
        size: "1x1",
        category: categories[1],
        tags: ["革のシステム手帳", "マイセカイ情報"],
        image: "image.png"
    },

    {
        name: "レコードプレーヤー",
        size: "2x2",
        category: categories[1],
        tags: ["レコードプレーヤー", "ミュージックプレーヤー"],
        image: "image.png"
    },

    {
        name: "蓄音機",
        size: "2x2",
        category: categories[1],
        tags: ["蓄音機","ミュージックプレイヤー"],
        image: "image.png"
    },

    {
        name: "シンプルなノートパソコン",
        size: "2x2",
        category: categories[1],
        tags: ["シンプルなノートパソコン", "ひみつのおみせ"],
        image: "image.png"
    },

    {
        name: "シンプルなデスクトップパソコン",
        size: "2x2",
        category: categories[1],
        tags: ["シンプルなデスクトップパソコン", "ひみつのおみせ"],
        image: "image.png"
    },

    {
        name: "調味料ラック",
        size: "2x1",
        category: categories[1],
        tags: ["調味料ラック", getSer("Simple")],
        image: "image.png"
    },

    {
        name: "積み重なった食器",
        size: "2x2",
        category: categories[1],
        tags: ["積み重なった食器", getSer("Simple")],
        image: "image.png"
    },

    {
        name: "コーヒーメーカー",
        size: "1x1",
        category: categories[1],
        tags: ["コーヒーメーカー", getSer("Simple")],
        image: "image.png"
    },

    {
        name: "ポップアップトースター",
        size: "1x1",
        category: categories[1],
        tags: ["ポップアップトースター", getSer("Simple")],
        image: "image.png"
    },

    {
        name: "オーブンレンジ",
        size: "2x2",
        category: categories[1],
        tags: ["オーブンレンジ", getSer("Simple")],
        image: "image.png"
    },

    {
        name: "野菜バスケット",
        size: "1x1",
        category: categories[1],
        tags: ["野菜バスケット", getSer("Simple")],
        image: "image.png"
    },//

    {
        name: "歯ブラシとコップ",
        size: "1x1",
        category: categories[1],
        tags: ["歯ブラシとコップ",getSer("Clean")],
        image: "image.png"
    },

    {
        name: "ドライヤー",
        size: "1x1",
        category: categories[1],
        tags: ["ドライヤー",getSer("Clean")],
        image: "image.png"
    },

    {
        name: "ガーデンのブリキじょうろ",
        size: "2x1",
        category: categories[1],
        tags: ["ガーデンのブリキじょうろ", getSer("Garden")],
        image: "image.png"
    },

    {
        name: "バケツとスコップ",
        size: "1x1",
        category: categories[1],
        tags: ["バケツとスコップ", getSer("Park")],
        image: "image.png"
    },

    {
        name: "和風の素朴なやかん",
        size: "1x1",
        category: categories[1],
        tags: ["和風の素朴なやかん", getSer("Japanese")],
        image: "image.png"
    },

    {
        name: "和風の素朴な急須",
        size: "1x1",
        category: categories[1],
        tags: ["和風の素朴な急須", getSer("Japanese")],
        image: "image.png"
    },

    {
        name: "和風の素朴な招き猫",
        size: "1x1",
        category: categories[1],
        tags: ["和風の素朴な招き猫", getSer("Japanese")],
        image: "image.png"
    },

    {
        name: "キッズルームのミニカー",
        size: "1x1",
        category: categories[1],
        tags: ["キッズルームのミニカー", getSer("Kids")],
        image: "image.png"
    },

    {
        name: "キッズルームのびっくり箱",
        size: "1x1",
        category: categories[1],
        tags: ["キッズルームのびっくり箱", getSer("Kids")],
        image: "image.png"
    },

    {
        name: "キッズルームの積み木",
        size: "1x1",
        category: categories[1],
        tags: ["キッズルームの積み木", getSer("Kids")],
        image: "image.png"
    },

    {
        name: "カジュアルな卓上鏡",
        size: "1x1",
        category: categories[1],
        tags: ["カジュアルな卓上鏡", getSer("Casual")],
        image: "image.png"
    },

    {
        name: "カジュアルなデスクライト",
        size: "1x1",
        category: categories[1],
        tags: ["カジュアルなデスクライト", getSer("Casual"), "照明"],
        image: "image.png"
    },

    {
        name: "カジュアルな携帯ゲーム機",
        size: "1x1",
        category: categories[1],
        tags: ["カジュアルな携帯ゲーム機", getSer("Casual")],
        image: "image.png"
    },

    {
        name: "カジュアルなRCカー",
        size: "2x2",
        category: categories[1],
        tags: ["カジュアルなRCカー", getSer("Casual")],
        image: "image.png"
    },

    {
        name: "カジュアルな目覚まし時計",
        size: "1x1",
        category: categories[1],
        tags: ["カジュアルな目覚まし時計", getSer("Casual")],
        image: "image.png"
    },//

    {
        name: "カジュアルな読みかけの漫画",
        size: "2x2",
        category: categories[1],
        tags: ["カジュアルな読みかけの漫画", getSer("Casual")],
        image: "image.png"
    },

    {
        name: "キュートなメイクボックス",
        size: "1x1",
        category: categories[1],
        tags: ["キュートなメイクボックス", getSer("Cute")],
        image: "image.png"
    },

    {
        name: "キュートな香水",
        size: "1x1",
        category: categories[1],
        tags: ["キュートな香水", getSer("Cute")],
        image: "image.png"
    },

    {
        name: "フレンチスタイルのテーブルライト",
        size: "1x1",
        category: categories[1],
        tags: ["フレンチスタイルのテーブルライト", getSer("French"), "照明"],
        image: "image.png"
    },

    {
        name: "フレンチスタイルのフラワーベース",
        size: "1x1",
        category: categories[1],
        tags: ["フレンチスタイルのフラワーベース", getSer("French")],
        image: "image.png"
    },

    {
        name: "フレンチスタイルのアロマキャンドル",
        size: "1x1",
        category: categories[1],
        tags: ["フレンチスタイルのアロマキャンドル", getSer("French")],
        image: "image.png"
    },

    {
        name: "フレンチスタイルのティーセット",
        size: "2x1",
        category: categories[1],
        tags: ["フレンチスタイルのティーセット", getSer("French")],
        image: "image.png"
    },//

    {
        name: "フレンチスタイルのファッション誌",
        size: "2x2",
        category: categories[1],
        tags: ["フレンチスタイルのファッション誌", getSer("French")],
        image: "image.png"
    },

    {
        name: "腹筋ローラー",
        size: "2x1",
        category: categories[1],
        tags: ["腹筋ローラー",getSer("Training")],
        image: "image.png"
    },

    {
        name: "ヘッドホン",
        size: "2x2",
        category: categories[1],
        tags: ["ヘッドホン",getSer("Music")],
        image: "image.png"
    },

    {
        name: "山積みのCD",
        size: "1x1",
        category: categories[1],
        tags: ["山積みのCD", getSer("Music")],
        image: "image.png"
    },

    {
        name: "ぽかぽかなピクニックのサンドイッチボックス",
        size: "1x1",
        category: categories[1],
        tags: ["ぽかぽかなピクニックのサンドイッチボックス", getSer("Picnic")],
        image: "image.png"
    },

    {
        name: "ぽかぽかなピクニックのバスケット",
        size: "1x1",
        category: categories[1],
        tags: ["ぽかぽかなピクニックのバスケット", getSer("Picnic")],
        image: "image.png"
    },

    {
        name: "ぽかぽかなピクニックのお弁当箱",
        size: "2x2",
        category: categories[1],
        tags: ["ぽかぽかなピクニックのお弁当箱", getSer("Picnic")],
        image: "image.png"
    },

    {
        name: "ぽかぽかなピクニックの水筒",
        size: "1x1",
        category: categories[1],
        tags: ["ぽかぽかなピクニックの水筒", getSer("Picnic")],
        image: "image.png"
    },//

    {
        name: "ぽかぽかなピクニックのフルーツジュース瓶",
        size: "1x1",
        category: categories[1],
        tags: ["ぽかぽかなピクニックのフルーツジュース瓶", getSer("Picnic")],
        image: "image.png"
    },

    {
        name: "ぽかぽかなピクニックの花かご",
        size: "1x1",
        category: categories[1],
        tags: ["ぽかぽかなピクニックの花かご", getSer("Picnic")],
        image: "image.png"
    },

    {
        name: "月が見える旅館の盆栽",
        size: "2x1",
        category: categories[1],
        tags: ["月が見える旅館の盆栽", getSer("Moon"), "グリーン"],
        image: "image.png"
    },//

    {
        name: "月が見える旅館の花瓶",
        size: "1x1",
        category: categories[1],
        tags: ["月が見える旅館の花瓶", getSer("Moon")],
        image: "image.png"
    },

    {
        name: "天文学者の研究室の鏡",
        size: "1x1",
        category: categories[1],
        tags: ["天文学者の研究室の鏡", getSer("Astronomer"),"アバターチェンジ"],
        image: "image.png"
    },

    {
        name: "天文学者の研究室の天球儀",
        size: "2x2",
        category: categories[1],
        tags: ["天文学者の研究室の天球儀", getSer("Astronomer")],
        image: "image.png"
    },

    {
        name: "天文学者の研究室のテーブルライト",
        size: "1x1",
        category: categories[1],
        tags: ["天文学者の研究室のテーブルライト", getSer("Astronomer"), "照明"],
        image: "image.png"
    },//

    {
        name: "天文学者の研究室の積み重なった本",
        size: "1x1",
        category: categories[1],
        tags: ["天文学者の研究室の積み重なった本", getSer("Astronomer")],
        image: "image.png"
    },

    {
        name: "旅人のキャンプのランタン",
        size: "1x1",
        category: categories[1],
        tags: ["旅人のキャンプのランタン", getSer("Camp"), "照明"],
        image: "image.png"
    },

    {
        name: "旅人のキャンプのケトル",
        size: "1x1",
        category: categories[1],
        tags: ["旅人のキャンプのケトル", getSer("Camp")],
        image: "image.png"
    },

    {
        name: "エケベリア",
        size: "1x1",
        category: categories[1],
        tags: ["エケベリア", "グリーン"],
        image: "image.png"
    },

    {
        name: "ASTRO FESジオラマ あんスタver.",
        size: "4x2",
        category: categories[1],
        tags: ["ASTRO FESジオラマ あんスタver.", "コラボ","あんさんぶるスターズ！！コラボ"],
        image: "image.png"
    },

    //壁掛け///////////////////////////////////////////////////////////

    {
        name: "きらめく流星の窓",
        size: "2x4",
        category: categories[2],
        tags: ["きらめく流星の窓", units[1], getSer("ln")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "きらめく流星の壁掛け時計",
        size: "2x2",
        category: categories[2],
        tags: ["きらめく流星の壁掛け時計", units[1], getSer("ln")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "かがやくクローバーの窓",
        size: "2x4",
        category: categories[2],
        tags: ["かがやくクローバーの窓", units[2], getSer("mmj")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "かがやくクローバーの壁掛け時計",
        size: "2x2",
        category: categories[2],
        tags: ["かがやくクローバーの壁掛け時計", units[2], getSer("mmj")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "鮮やかなユニゾンの窓",
        size: "2x4",
        category: categories[2],
        tags: ["鮮やかなユニゾンの窓", units[3], getSer("vbs")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "鮮やかなユニゾンの壁掛け時計",
        size: "2x2",
        category: categories[2],
        tags: ["鮮やかなユニゾンの壁掛け時計", units[3], getSer("vbs")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "はじけるクラウンの窓",
        size: "2x4",
        category: categories[2],
        tags: ["はじけるクラウンの窓", units[4], getSer("wxs")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "はじけるクラウンの壁掛け時計",
        size: "2x2",
        category: categories[2],
        tags: ["はじけるクラウンの壁掛け時計", units[4], getSer("wxs")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "ひび割れたハートの窓",
        size: "2x4",
        category: categories[2],
        tags: ["ひび割れたハートの窓", units[5], getSer("ng")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "ひび割れたハートの壁掛け時計",
        size: "2x2",
        category: categories[2],
        tags: ["ひび割れたハートの壁掛け時計", units[5], getSer("ng")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "はじまりのメロディの窓",
        size: "2x4",
        category: categories[2],
        tags: ["はじまりのメロディの窓", units[0], getSer("vs")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "はじまりのメロディの壁掛け時計",
        size: "2x2",
        category: categories[2],
        tags: ["はじまりのメロディの壁掛け時計", units[0], getSer("vs")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "ナチュラルな窓",
        size: "2x2",
        category: categories[2],
        tags: ["ナチュラルな窓", getSer("Natural")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "ナチュラルな壁掛け時計",
        size: "2x2",
        category: categories[2],
        tags: ["ナチュラルな壁掛け時計", getSer("Natural")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "キッチンウォールシェルフ",
        size: "3x3",
        category: categories[2],
        tags: ["キッチンウォールシェルフ", getSer("Simple")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "キッチンツールフック",
        size: "3x2",
        category: categories[2],
        tags: ["キッチンツールフック", getSer("Simple")],
        image: "images/kagayaku_clover_clock.png"
    },//

    {
        name: "キッチン吊戸棚",
        size: "3x2",
        category: categories[2],
        tags: ["キッチン吊戸棚", getSer("Simple")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "和風の素朴な窓",
        size: "4x3",
        category: categories[2],
        tags: ["和風の素朴な窓", getSer("Japanese")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "和風の素朴な掛け軸",
        size: "2x4",
        category: categories[2],
        tags: ["和風の素朴な掛け軸", getSer("Japanese")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "和風の素朴な壁掛け古時計",
        size: "2x2",
        category: categories[2],
        tags: ["和風の素朴な壁掛け古時計", getSer("Japanese")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "キッズルームのくまさん窓",
        size: "4x3",
        category: categories[2],
        tags: ["キッズルームのくまさん窓", getSer("Kids")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "キッズルームの絵",
        size: "3x2",
        category: categories[2],
        tags: ["キッズルームの絵", getSer("Kids")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "カジュアルな窓",
        size: "4x3",
        category: categories[2],
        tags: ["カジュアルな窓", getSer("Casual")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "カジュアルなポスター",
        size: "2x2",
        category: categories[2],
        tags: ["カジュアルなポスター", getSer("Casual")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "カジュアルなリュック",
        size: "1x2",
        category: categories[2],
        tags: ["カジュアルなリュック", getSer("Casual")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "キュートな窓",
        size: "2x3",
        category: categories[2],
        tags: ["キュートな窓", getSer("Cute")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "キュートな壁掛け時計",
        size: "2x2",
        category: categories[2],
        tags: ["キュートな壁掛け時計", getSer("Cute")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "キュートなウォールシェルフ",
        size: "2x2",
        category: categories[2],
        tags: ["キュートなウォールシェルフ", getSer("Cute")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "フレンチスタイルの窓",
        size: "4x5",
        category: categories[2],
        tags: ["フレンチスタイルの窓", getSer("French")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "フレンチスタイルの壁掛け時計",
        size: "2x2",
        category: categories[2],
        tags: ["フレンチスタイルの壁掛け時計", getSer("French")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "フレンチスタイルの猫のアート",
        size: "2x2",
        category: categories[2],
        tags: ["フレンチスタイルの猫のアート", getSer("French")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "エアコン",
        size: "4x2",
        category: categories[2],
        tags: ["エアコン", getSer("Training")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "トレーニングルームの鏡",
        size: "4x5",
        category: categories[2],
        tags: ["トレーニングルームの鏡", getSer("Training")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "アイビー",
        size: "1x2",
        category: categories[2],
        tags: ["アイビー", "グリーン"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "シュガーバイン",
        size: "1x2",
        category: categories[2],
        tags: ["シュガーバイン", "グリーン"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "天文学者の研究室の窓",
        size: "4x5",
        category: categories[2],
        tags: ["天文学者の研究室の窓", getSer("Astronomer")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "月が見える旅館の窓",
        size: "12x5",
        category: categories[2],
        tags: ["月が見える旅館の窓", getSer("Moon")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "月が見える旅館の掛け軸",
        size: "2x5",
        category: categories[2],
        tags: ["月が見える旅館の掛け軸", getSer("Moon")],
        image: "images/kagayaku_clover_clock.png"
    },

    //ディスプレイ///////////////////////////////////////////////////////////

    {
        name: "立てかけスタンド/低",
        size: "1x1~",
        category: categories[3],
        tags: ["立てかけスタンド/低", "グッズ"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "立てかけスタンド/中",
        size: "1x1~",
        category: categories[3],
        tags: ["立てかけスタンド/中", "グッズ"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "立てかけスタンド/高",
        size: "1x1~",
        category: categories[3],
        tags: ["立てかけスタンド/高", "グッズ"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "じか置きスタンド/低",
        size: "1x1~",
        category: categories[3],
        tags: ["じか置きスタンド/低", "グッズ"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "じか置きスタンド/中",
        size: "1x1~",
        category: categories[3],
        tags: ["じか置きスタンド/中", "グッズ"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "じか置きスタンド/高",
        size: "1x1~",
        category: categories[3],
        tags: ["じか置きスタンド/高", "グッズ"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "貼り付けボード",
        size: "1x1~",
        category: categories[3],
        tags: ["貼り付けボード", "グッズ"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "レコードボード",
        size: "1x1~",
        category: categories[3],
        tags: ["レコードボード", "グッズ"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "称号スタンド",
        size: "2x1",
        category: categories[3],
        tags: ["称号スタンド", "グッズ"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "称号ボード",
        size: "2x1",
        category: categories[3],
        tags: ["称号ボード", "グッズ"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "フォトフレーム",
        size: "1x1",
        category: categories[3],
        tags: ["フォトフレーム", "グッズ"],
        image: "images/kagayaku_clover_clock.png"
    },

    //ぬいぐるみ///////////////////////////////////////////////////////////

    {
        name: "キッズルームのぞうのぬいぐるみ",
        size: "1x1",
        category: categories[4],
        tags: ["キッズルームのぞうのぬいぐるみ", getSer("Kids")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "カジュアルなビーグル犬のぬいぐるみ",
        size: "1x1",
        category: categories[4],
        tags: ["カジュアルなビーグル犬のぬいぐるみ", getSer("Casual")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "キュートなうさぎのぬいぐるみ",
        size: "1x1",
        category: categories[4],
        tags: ["キュートなうさぎのぬいぐるみ", getSer("Cute")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "フレンチスタイルのくまのぬいぐるみ",
        size: "2x2",
        category: categories[4],
        tags: ["フレンチスタイルのくまのぬいぐるみ", getSer("French")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "一歌のぬいぐるみ/S",
        size: "1x1",
        category: categories[4],
        tags: ["一歌のぬいぐるみ/S", characters[1]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "一歌のぬいぐるみ/M",
        size: "1x1",
        category: categories[4],
        tags: ["一歌のぬいぐるみ/M", characters[1]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "一歌のぬいぐるみ/L",
        size: "2x2",
        category: categories[4],
        tags: ["一歌のぬいぐるみ/L", characters[1]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "咲希のぬいぐるみ/S",
        size: "1x1",
        category: categories[4],
        tags: ["咲希のぬいぐるみ/S", characters[2]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "咲希のぬいぐるみ/M",
        size: "1x1",
        category: categories[4],
        tags: ["咲希のぬいぐるみ/M", characters[2]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "咲希のぬいぐるみ/L",
        size: "2x2",
        category: categories[4],
        tags: ["咲希のぬいぐるみ/L", characters[2]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "穂波のぬいぐるみ/S",
        size: "1x1",
        category: categories[4],
        tags: ["穂波のぬいぐるみ/S", characters[3]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "穂波のぬいぐるみ/M",
        size: "1x1",
        category: categories[4],
        tags: ["穂波のぬいぐるみ/M", characters[3]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "穂波のぬいぐるみ/L",
        size: "2x2",
        category: categories[4],
        tags: ["穂波のぬいぐるみ/L", characters[3]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "志歩のぬいぐるみ/S",
        size: "1x1",
        category: categories[4],
        tags: ["志歩のぬいぐるみ/S", characters[4]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "志歩のぬいぐるみ/M",
        size: "1x1",
        category: categories[4],
        tags: ["志歩のぬいぐるみ/M", characters[4]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "志歩のぬいぐるみ/L",
        size: "2x2",
        category: categories[4],
        tags: ["志歩のぬいぐるみ/L", characters[4]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "みのりのぬいぐるみ/S",
        size: "1x1",
        category: categories[4],
        tags: ["みのりのぬいぐるみ/S", characters[5]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "みのりのぬいぐるみ/M",
        size: "1x1",
        category: categories[4],
        tags: ["みのりのぬいぐるみ/M", characters[5]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "みのりのぬいぐるみ/L",
        size: "2x2",
        category: categories[4],
        tags: ["みのりのぬいぐるみ/L", characters[5]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "遥のぬいぐるみ/S",
        size: "1x1",
        category: categories[4],
        tags: ["遥のぬいぐるみ/S", characters[6]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "遥のぬいぐるみ/M",
        size: "1x1",
        category: categories[4],
        tags: ["遥のぬいぐるみ/M", characters[6]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "遥のぬいぐるみ/L",
        size: "2x2",
        category: categories[4],
        tags: ["遥のぬいぐるみ/L", characters[6]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "愛莉のぬいぐるみ/S",
        size: "1x1",
        category: categories[4],
        tags: ["愛莉のぬいぐるみ/S", characters[7]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "愛莉のぬいぐるみ/M",
        size: "1x1",
        category: categories[4],
        tags: ["愛莉のぬいぐるみ/M", characters[7]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "愛莉のぬいぐるみ/L",
        size: "2x2",
        category: categories[4],
        tags: ["愛莉のぬいぐるみ/L", characters[7]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "雫のぬいぐるみ/S",
        size: "1x1",
        category: categories[4],
        tags: ["雫のぬいぐるみ/S", characters[8]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "雫のぬいぐるみ/M",
        size: "1x1",
        category: categories[4],
        tags: ["雫のぬいぐるみ/M", characters[8]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "雫のぬいぐるみ/L",
        size: "2x2",
        category: categories[4],
        tags: ["雫のぬいぐるみ/L", characters[8]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "こはねのぬいぐるみ/S",
        size: "1x1",
        category: categories[4],
        tags: ["こはねのぬいぐるみ/S", characters[9]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "こはねのぬいぐるみ/M",
        size: "1x1",
        category: categories[4],
        tags: ["こはねのぬいぐるみ/M", characters[9]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "こはねのぬいぐるみ/L",
        size: "2x2",
        category: categories[4],
        tags: ["こはねのぬいぐるみ/L", characters[9]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "杏のぬいぐるみ/S",
        size: "1x1",
        category: categories[4],
        tags: ["杏のぬいぐるみ/S", characters[10]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "杏のぬいぐるみ/M",
        size: "1x1",
        category: categories[4],
        tags: ["杏のぬいぐるみ/M", characters[10]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "杏のぬいぐるみ/L",
        size: "2x2",
        category: categories[4],
        tags: ["杏のぬいぐるみ/L", characters[10]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "彰人のぬいぐるみ/S",
        size: "1x1",
        category: categories[4],
        tags: ["彰人のぬいぐるみ/S", characters[11]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "彰人のぬいぐるみ/M",
        size: "1x1",
        category: categories[4],
        tags: ["彰人のぬいぐるみ/M", characters[11]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "彰人のぬいぐるみ/L",
        size: "2x2",
        category: categories[4],
        tags: ["彰人のぬいぐるみ/L", characters[11]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "冬弥のぬいぐるみ/S",
        size: "1x1",
        category: categories[4],
        tags: ["冬弥のぬいぐるみ/S", characters[12]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "冬弥のぬいぐるみ/M",
        size: "1x1",
        category: categories[4],
        tags: ["冬弥のぬいぐるみ/M", characters[12]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "冬弥のぬいぐるみ/L",
        size: "2x2",
        category: categories[4],
        tags: ["冬弥のぬいぐるみ/L", characters[12]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "司のぬいぐるみ/S",
        size: "1x1",
        category: categories[4],
        tags: ["司のぬいぐるみ/S", characters[13]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "司のぬいぐるみ/M",
        size: "1x1",
        category: categories[4],
        tags: ["司のぬいぐるみ/M", characters[13]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "司のぬいぐるみ/L",
        size: "2x2",
        category: categories[4],
        tags: ["司のぬいぐるみ/L", characters[13]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "えむのぬいぐるみ/S",
        size: "1x1",
        category: categories[4],
        tags: ["えむのぬいぐるみ/S", characters[14]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "えむのぬいぐるみ/M",
        size: "1x1",
        category: categories[4],
        tags: ["えむのぬいぐるみ/M", characters[14]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "えむのぬいぐるみ/L",
        size: "2x2",
        category: categories[4],
        tags: ["えむのぬいぐるみ/L", characters[14]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "寧々のぬいぐるみ/S",
        size: "1x1",
        category: categories[4],
        tags: ["寧々のぬいぐるみ/S", characters[15]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "寧々のぬいぐるみ/M",
        size: "1x1",
        category: categories[4],
        tags: ["寧々のぬいぐるみ/M", characters[15]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "寧々のぬいぐるみ/L",
        size: "2x2",
        category: categories[4],
        tags: ["寧々のぬいぐるみ/L", characters[15]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "類のぬいぐるみ/S",
        size: "1x1",
        category: categories[4],
        tags: ["類のぬいぐるみ/S", characters[16]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "類のぬいぐるみ/M",
        size: "1x1",
        category: categories[4],
        tags: ["類のぬいぐるみ/M", characters[16]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "類のぬいぐるみ/L",
        size: "2x2",
        category: categories[4],
        tags: ["類のぬいぐるみ/L", characters[16]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "奏のぬいぐるみ/S",
        size: "1x1",
        category: categories[4],
        tags: ["奏のぬいぐるみ/S", characters[17]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "奏のぬいぐるみ/M",
        size: "1x1",
        category: categories[4],
        tags: ["奏のぬいぐるみ/M", characters[17]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "奏のぬいぐるみ/L",
        size: "2x2",
        category: categories[4],
        tags: ["奏のぬいぐるみ/L", characters[17]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "まふゆのぬいぐるみ/S",
        size: "1x1",
        category: categories[4],
        tags: ["まふゆのぬいぐるみ/S", characters[18]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "まふゆのぬいぐるみ/M",
        size: "1x1",
        category: categories[4],
        tags: ["まふゆのぬいぐるみ/M", characters[18]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "まふゆのぬいぐるみ/L",
        size: "2x2",
        category: categories[4],
        tags: ["まふゆのぬいぐるみ/L", characters[18]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "絵名のぬいぐるみ/S",
        size: "1x1",
        category: categories[4],
        tags: ["絵名のぬいぐるみ/S", characters[19]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "絵名のぬいぐるみ/M",
        size: "1x1",
        category: categories[4],
        tags: ["絵名のぬいぐるみ/M", characters[19]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "絵名のぬいぐるみ/L",
        size: "2x2",
        category: categories[4],
        tags: ["絵名のぬいぐるみ/L", characters[19]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "瑞希のぬいぐるみ/S",
        size: "1x1",
        category: categories[4],
        tags: ["瑞希のぬいぐるみ/S", characters[20]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "瑞希のぬいぐるみ/M",
        size: "1x1",
        category: categories[4],
        tags: ["瑞希のぬいぐるみ/M", characters[20]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "瑞希のぬいぐるみ/L",
        size: "2x2",
        category: categories[4],
        tags: ["瑞希のぬいぐるみ/L", characters[20]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "ミクのぬいぐるみ/S",
        size: "1x1",
        category: categories[4],
        tags: ["ミクのぬいぐるみ/S", characters[21]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "ミクのぬいぐるみ/M",
        size: "1x1",
        category: categories[4],
        tags: ["ミクのぬいぐるみ/M", characters[21]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "ミクのぬいぐるみ/L",
        size: "2x2",
        category: categories[4],
        tags: ["ミクのぬいぐるみ/L", characters[21]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "リンのぬいぐるみ/S",
        size: "1x1",
        category: categories[4],
        tags: ["リンのぬいぐるみ/S", characters[22]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "リンのぬいぐるみ/M",
        size: "1x1",
        category: categories[4],
        tags: ["リンのぬいぐるみ/M", characters[22]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "リンのぬいぐるみ/L",
        size: "2x2",
        category: categories[4],
        tags: ["リンのぬいぐるみ/L", characters[22]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "レンのぬいぐるみ/S",
        size: "1x1",
        category: categories[4],
        tags: ["レンのぬいぐるみ/S", characters[23]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "レンのぬいぐるみ/M",
        size: "1x1",
        category: categories[4],
        tags: ["レンのぬいぐるみ/M", characters[23]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "レンのぬいぐるみ/L",
        size: "2x2",
        category: categories[4],
        tags: ["レンのぬいぐるみ/L", characters[23]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "ルカのぬいぐるみ/S",
        size: "1x1",
        category: categories[4],
        tags: ["ルカのぬいぐるみ/S", characters[24]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "ルカのぬいぐるみ/M",
        size: "1x1",
        category: categories[4],
        tags: ["ルカのぬいぐるみ/M", characters[24]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "ルカのぬいぐるみ/L",
        size: "2x2",
        category: categories[4],
        tags: ["ルカのぬいぐるみ/L", characters[24]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "MEIKOのぬいぐるみ/S",
        size: "1x1",
        category: categories[4],
        tags: ["MEIKOのぬいぐるみ/S", characters[25]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "MEIKOのぬいぐるみ/M",
        size: "1x1",
        category: categories[4],
        tags: ["MEIKOのぬいぐるみ/M", characters[25]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "MEIKOのぬいぐるみ/L",
        size: "2x2",
        category: categories[4],
        tags: ["MEIKOのぬいぐるみ/L", characters[25]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "KAITOのぬいぐるみ/S",
        size: "1x1",
        category: categories[4],
        tags: ["KAITOのぬいぐるみ/S", characters[26]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "KAITOのぬいぐるみ/M",
        size: "1x1",
        category: categories[4],
        tags: ["KAITOのぬいぐるみ/M", characters[26]],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "KAITOのぬいぐるみ/L",
        size: "2x2",
        category: categories[4],
        tags: ["KAITOのぬいぐるみ/L", characters[26]],
        image: "images/kagayaku_clover_clock.png"
    },

    //キャンバス///////////////////////////////////////////////////////////

    {
        name: "壁掛けキャンバス/S",
        size: "1x1",
        category: categories[5],
        tags: ["壁掛けキャンバス/S", "グッズ"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "壁掛けキャンバス/M",
        size: "3x3",
        category: categories[5],
        tags: ["壁掛けキャンバス/M", "グッズ"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "壁掛けキャンバス/L",
        size: "5x3",
        category: categories[5],
        tags: ["壁掛けキャンバス/L", "グッズ"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "卓上ミニキャンバス/S",
        size: "1x1",
        category: categories[5],
        tags: ["卓上ミニキャンバス/S", "グッズ"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "卓上ミニキャンバス/M",
        size: "1x1",
        category: categories[5],
        tags: ["卓上ミニキャンバス/M", "グッズ"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "卓上ミニキャンバス/L",
        size: "2x1",
        category: categories[5],
        tags: ["卓上ミニキャンバス/L", "グッズ"],
        image: "images/kagayaku_clover_clock.png"
    },

    //壁///////////////////////////////////////////////////////////

    {
        name: "きらめく流星の壁紙",
        size: "-",
        category: categories[6],
        tags: ["きらめく流星の壁紙", units[1], getSer("ln")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "かがやくクローバーの壁紙",
        size: "-",
        category: categories[6],
        tags: ["かがやくクローバーの壁紙", units[2], getSer("mmj")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "鮮やかなユニゾンの壁紙",
        size: "-",
        category: categories[6],
        tags: ["鮮やかなユニゾンの壁紙", units[3], getSer("vbs")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "はじけるクラウンの壁紙",
        size: "-",
        category: categories[6],
        tags: ["はじけるクラウンの壁紙", units[4], getSer("wxs")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "ひび割れたハートの壁紙",
        size: "-",
        category: categories[6],
        tags: ["ひび割れたハートの壁紙", units[5], getSer("ng")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "はじまりのメロディの壁紙",
        size: "-",
        category: categories[6],
        tags: ["はじまりのメロディの壁紙", units[0], getSer("vs")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "ナチュラルな壁紙",
        size: "-",
        category: categories[6],
        tags: ["ナチュラルな壁紙", getSer("Natural")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "シンプルポップキッチンの壁紙",
        size: "-",
        category: categories[6],
        tags: ["シンプルポップキッチンの壁紙", getSer("Natural")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "クリーンパウダールームの壁紙",
        size: "-",
        category: categories[6],
        tags: ["クリーンパウダールームの壁紙", getSer("Clean")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "和風の素朴な壁紙",
        size: "-",
        category: categories[6],
        tags: ["和風の素朴な壁紙", getSer("Japanese")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "キッズルームの壁紙",
        size: "-",
        category: categories[6],
        tags: ["キッズルームの壁紙", getSer("Kids")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "カジュアルな壁紙",
        size: "-",
        category: categories[6],
        tags: ["カジュアルな壁紙", getSer("Casual")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "キュートな壁紙",
        size: "-",
        category: categories[6],
        tags: ["キュートな壁紙", getSer("Cute")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "フレンチスタイルの壁紙",
        size: "-",
        category: categories[6],
        tags: ["フレンチスタイルの壁紙", getSer("French")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "スタジオの壁紙",
        size: "-",
        category: categories[6],
        tags: ["スタジオの壁紙", getSer("Music")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "月が見える旅館の壁紙",
        size: "-",
        category: categories[6],
        tags: ["月が見える旅館の壁紙", getSer("Moon")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "天文学者の研究室の壁紙",
        size: "-",
        category: categories[6],
        tags: ["天文学者の研究室の壁紙", getSer("Astronomer")],
        image: "images/kagayaku_clover_clock.png"
    },

    //床///////////////////////////////////////////////////////////

    {
        name: "きらめく流星の床",
        size: "-",
        category: categories[7],
        tags: ["きらめく流星の床", units[1], getSer("ln")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "かがやくクローバーの床",
        size: "-",
        category: categories[7],
        tags: ["かがやくクローバーの床", units[2], getSer("mmj")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "鮮やかなユニゾンの床",
        size: "-",
        category: categories[7],
        tags: ["鮮やかなユニゾンの床", units[3], getSer("vbs")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "はじけるクラウンの床",
        size: "-",
        category: categories[7],
        tags: ["はじけるクラウンの床", units[4], getSer("wxs")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "ひび割れたハートの床",
        size: "-",
        category: categories[7],
        tags: ["ひび割れたハートの床", units[5], getSer("ng")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "はじまりのメロディの床",
        size: "-",
        category: categories[7],
        tags: ["はじまりのメロディの床", units[0], getSer("vs")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "ナチュラルな床",
        size: "-",
        category: categories[7],
        tags: ["ナチュラルな床", getSer("Natural")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "シンプルポップキッチンの床",
        size: "-",
        category: categories[7],
        tags: ["シンプルポップキッチンの床", getSer("Natural")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "クリーンパウダールームの床",
        size: "-",
        category: categories[7],
        tags: ["クリーンパウダールームの床", getSer("Clean")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "和風の素朴な畳",
        size: "-",
        category: categories[7],
        tags: ["和風の素朴な畳", getSer("Japanese")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "キッズルームの床",
        size: "-",
        category: categories[7],
        tags: ["キッズルームの床", getSer("Kids")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "カジュアルな床",
        size: "-",
        category: categories[7],
        tags: ["カジュアルな床", getSer("Casual")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "キュートの床",
        size: "-",
        category: categories[7],
        tags: ["キュートの床", getSer("Cute")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "フレンチスタイルの床",
        size: "-",
        category: categories[7],
        tags: ["フレンチスタイルの床", getSer("French")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "スタジオの床",
        size: "-",
        category: categories[7],
        tags: ["スタジオの床", getSer("Music")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "月が見える旅館の畳",
        size: "-",
        category: categories[7],
        tags: ["月が見える旅館の畳", getSer("Moon")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "天文学者の研究室の床",
        size: "-",
        category: categories[7],
        tags: ["天文学者の研究室の床", getSer("Astronomer")],
        image: "images/kagayaku_clover_clock.png"
    },

    //ラグ///////////////////////////////////////////////////////////

    {
        name: "きらめく流星のラグ",
        size: "6x6",
        category: categories[8],
        tags: ["きらめく流星のラグ", units[1], getSer("ln")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "かがやくクローバーのラグ",
        size: "6x6",
        category: categories[8],
        tags: ["かがやくクローバーのラグ", units[2], getSer("mmj")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "鮮やかなユニゾンのラグ",
        size: "6x6",
        category: categories[8],
        tags: ["鮮やかなユニゾンのラグ", units[3], getSer("vbs")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "はじけるクラウンのラグ",
        size: "6x6",
        category: categories[8],
        tags: ["はじけるクラウンのラグ", units[4], getSer("wxs")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "ひび割れたハートのラグ",
        size: "6x6",
        category: categories[8],
        tags: ["ひび割れたハートのラグ", units[5], getSer("ng")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "はじまりのメロディのラグ",
        size: "6x6",
        category: categories[8],
        tags: ["はじまりのメロディのラグ", units[0], getSer("vs")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "足ふきマット",
        size: "2x2",
        category: categories[8],
        tags: ["足ふきマット",getSer("Clean")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "カジュアルなチェッカー柄ラグ",
        size: "8x8",
        category: categories[8],
        tags: ["カジュアルなチェッカー柄ラグ", getSer("Casual")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "キュートなラグ",
        size: "6x6",
        category: categories[8],
        tags: ["キュートなラグ", getSer("Cute")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "フレンチスタイルのハートラグ",
        size: "8x8",
        category: categories[8],
        tags: ["フレンチスタイルのハートラグ", getSer("French")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "ぽかぽかなピクニックのレジャーシート",
        size: "7x5",
        category: categories[8],
        tags: ["ぽかぽかなピクニックのレジャーシート", getSer("Picnic")],
        image: "images/kagayaku_clover_clock.png"
    },


    //家///////////////////////////////////////////////////////////

    {
        name: "きらめく流星の家",
        size: "12x12",
        category: categories[9],
        tags: ["きらめく流星の家", units[1], getSer("ln")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "かがやくクローバーの家",
        size: "12x12",
        category: categories[9],
        tags: ["かがやくクローバーの家", units[2], getSer("mmj")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "鮮やかなユニゾンの家",
        size: "12x12",
        category: categories[9],
        tags: ["鮮やかなユニゾンの家", units[3], getSer("vbs")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "はじけるクラウンの家",
        size: "12x12",
        category: categories[9],
        tags: ["はじけるクラウンの家", units[4], getSer("wxs")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "ひび割れたハートの家",
        size: "12x12",
        category: categories[9],
        tags: ["ひび割れたハートの家", units[5], getSer("ng")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "はじまりのメロディの家",
        size: "12x12",
        category: categories[9],
        tags: ["はじまりのメロディの家", units[0], getSer("vs")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "ナチュラルな家",
        size: "12x12",
        category: categories[9],
        tags: ["ナチュラルな家", getSer("Natural")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "和風の素朴な家",
        size: "12x12",
        category: categories[9],
        tags: ["和風の素朴な家", getSer("Japanese")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "ぽかぽかなピクニックの家",
        size: "12x12",
        category: categories[9],
        tags: ["ぽかぽかなピクニックの家", getSer("Picnic")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "月が見える旅館",
        size: "12x12",
        category: categories[9],
        tags: ["月が見える旅館", getSer("Moon")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "天文学者の研究室の家",
        size: "14x12",
        category: categories[9],
        tags: ["天文学者の研究室の家", getSer("Astronomer")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "旅人のキャンプのログハウス",
        size: "12x14",
        category: categories[9],
        tags: ["旅人のキャンプのログハウス", getSer("Camp")],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "雷神祭の家",
        size: "12x12",
        category: categories[9],
        tags: ["雷神祭の家", getSer("Thunder")],
        image: "images/kagayaku_clover_clock.png"
    },

    //道///////////////////////////////////////////////////////////

    {
        name: "土の道",
        size: "2x2",
        category: categories[10],
        tags: ["土の道"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "石畳の道",
        size: "2x2",
        category: categories[10],
        tags: ["石畳の道"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "レンガの道",
        size: "2x2",
        category: categories[10],
        tags: ["レンガの道"],
        image: "images/kagayaku_clover_clock.png"
    },

    //カラータイル///////////////////////////////////////////////////////////

    {
        name: "カラータイル/レッド",
        size: "2x2",
        category: categories[11],
        tags: [getSer("tile"), "カラータイル/レッド"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "カラータイル/オレンジ",
        size: "2x2",
        category: categories[11],
        tags: [getSer("tile"), "カラータイル/オレンジ"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "カラータイル/ライトオレンジ",
        size: "2x2",
        category: categories[11],
        tags: [getSer("tile"), "カラータイル/ライトオレンジ"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "カラータイル/イエロー",
        size: "2x2",
        category: categories[11],
        tags: [getSer("tile"), "カラータイル/イエロー"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "カラータイル/ライトグリーン",
        size: "2x2",
        category: categories[11],
        tags: [getSer("tile"), "カラータイル/ライトグリーン"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "カラータイル/グリーン",
        size: "2x2",
        category: categories[11],
        tags: [getSer("tile"), "カラータイル/グリーン"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "カラータイル/ブルーグリーン",
        size: "2x2",
        category: categories[11],
        tags: [getSer("tile"), "カラータイル/ブルーグリーン"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "カラータイル/ライトブルー",
        size: "2x2",
        category: categories[11],
        tags: [getSer("tile"), "カラータイル/ライトブルー"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "カラータイル/ブルー",
        size: "2x2",
        category: categories[11],
        tags: [getSer("tile"), "カラータイル/ブルー"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "カラータイル/バイオレット",
        size: "2x2",
        category: categories[11],
        tags: [getSer("tile"), "カラータイル/バイオレット"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "カラータイル/パープル",
        size: "2x2",
        category: categories[11],
        tags: [getSer("tile"), "カラータイル/パープル"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "カラータイル/ピンク",
        size: "2x2",
        category: categories[11],
        tags: [getSer("tile"), "カラータイル/ピンク"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "カラータイル/クリーム",
        size: "2x2",
        category: categories[11],
        tags: [getSer("tile"), "カラータイル/クリーム"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "カラータイル/ベージュ",
        size: "2x2",
        category: categories[11],
        tags: [getSer("tile"), "カラータイル/ベージュ"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "カラータイル/ライトブラウン",
        size: "2x2",
        category: categories[11],
        tags: [getSer("tile"), "カラータイル/ライトブラウン"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "カラータイル/ブラウン",
        size: "2x2",
        category: categories[11],
        tags: [getSer("tile"), "カラータイル/ブラウン"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "カラータイル/ホワイト",
        size: "2x2",
        category: categories[11],
        tags: [getSer("tile"), "カラータイル/ホワイト"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "カラータイル/ライトグレー",
        size: "2x2",
        category: categories[11],
        tags: [getSer("tile"), "カラータイル/ライトグレー"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "カラータイル/グレー",
        size: "2x2",
        category: categories[11],
        tags: [getSer("tile"), "カラータイル/グレー"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "カラータイル/ブラック",
        size: "2x2",
        category: categories[11],
        tags: [getSer("tile"), "カラータイル/ブラック"],
        image: "images/kagayaku_clover_clock.png"
    },

    //柵///////////////////////////////////////////////////////////

    {
        name: "シンプルな木の柵",
        size: "2x2",
        category: categories[12],
        tags: ["シンプルな木の柵"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "洋風な木の柵",
        size: "2x2",
        category: categories[12],
        tags: ["洋風な木の柵"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "アイアンのガーデニングフェンス",
        size: "2x2",
        category: categories[12],
        tags: ["アイアンのガーデニングフェンス"],
        image: "images/kagayaku_clover_clock.png"
    },

    {
        name: "生け垣",
        size: "2x2",
        category: categories[12],
        tags: ["生け垣", "グリーン"],
        image: "images/kagayaku_clover_clock.png"
    },

];