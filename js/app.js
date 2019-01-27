const div = document.querySelector("div");
const headline = document.querySelector("h1");
const btn = document.querySelector("a");
const prevBtn = document.querySelector(".prev");
let prevHeadline;

// Initial load
headline.textContent = "Japan News Headline Generator";
prevBtn.style.display = "none";

// Copy text on click
headline.onclick = function() {
  document.execCommand("copy");
};

headline.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", headline.textContent);
    alert("copied");
  }
});

btn.addEventListener("click", () => {
  prevHeadline = headline.textContent;
  headline.textContent = generate();
  prevBtn.style.display = "block";
});

prevBtn.addEventListener("click", () => {
  headline.textContent = prevHeadline;
});

// Arr randomise function
function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generate() {
  const nouns = [
    "ピース綾部",
    "SMAP",
    "嵐",
    "渡辺ナオミ",
    "アンジャッシュ渡部",
    "松本人志",
    "タモリ",
    "張本勲",
    "勝間和代",
    "国会審議",
    "最高裁",
    "バンクシー",
    "日テレアナウンサー",
    "こんまりさん",
    "西野カナ",
    "キンコン西野",
    "秋元康"
  ];

  const adverbs = [
    "何はともあれ",
    "意外にも",
    "もっともらしく",
    "ファンの期待に応え",
    "仕方がなく",
    "涙の後で",
    "汗混じりに",
    "気合と根性で",
    "プリキュア好きが功を奏し",
    "惜しまれつつ",
    "放送事故寸前!? ",
    "ネット上で",
    "キッパリと",
    "M-1の結果受け"
  ];

  const verbs = [
    "涙",
    "歓喜の声",
    "苦言を呈す",
    "称賛の嵐",
    "称賛の声",
    "豪華ショットを披露",
    "無期限の活動休止へ",
    "祝福の嵐",
    "独特のスタイルを披露",
    "動画に反響",
    "産休宣言",
    "謎が深まるばかり",
    "、「喝！」",
    "反響があつまる",
    "ファンからは悲鳴",
    "変わり果てた姿に唖然",
    "物議を醸す",
    "こだわりを見せる",
    "「自由な生活がしたい」",
    "抗議の電話殺到!?",
    "あすまで大雪警戒",
    "激怒",
    "フジテレビに批判"
  ];

  return `${rando(nouns)}、${rando(adverbs)}${rando(verbs)}`;
}
