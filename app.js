// サンプルコード: お店のアイコンをクリックしたときに詳細画面を表示する機能
document.getElementById("map").addEventListener("click", () => {
  document.getElementById("shop-details").classList.remove("hidden");
  document.getElementById("favorite").classList.remove("hidden"); // この行を追加
});

// サンプルコード: 詳細画面の閉じるボタンをクリックしたときに詳細画面を非表示にする機能
document.getElementById("close-details").addEventListener("click", () => {
  document.getElementById("shop-details").classList.add("hidden");
  document.getElementById("favorite").classList.add("hidden"); // この行を追加
});


// サンプルコード: 検索ボタンをクリックしたときに検索結果を表示する機能
document.getElementById("search").querySelector("button").addEventListener("click", () => {
  const results = [
    { name: "お店A", address: "住所A" },
    { name: "お店B", address: "住所B" },
    { name: "お店C", address: "住所C" },
  ];

  const ul = document.querySelector("#search-results ul");
  ul.innerHTML = "";

  for (const result of results) {
    const li = document.createElement("li");
    li.textContent = `${result.name} (${result.address})`;
    ul.appendChild(li);
  }

  document.getElementById("search-results").classList.remove("hidden");
});

// サンプルコード: 検索結果の閉じるボタンをクリックしたときに検索結果を非表示にする機能
document.getElementById("close-results").addEventListener("click", () => {
  document.getElementById("search-results").classList.add("hidden");
});


// サンプルコード: お店の詳細画面で待ち時間を報告するためのフォームを表示する機能
document.getElementById("wait-time").addEventListener("click", () => {
  document.getElementById("wait-time-report").classList.remove("hidden");
});

// サンプルコード: 待ち時間報告フォームの閉じるボタンをクリックしたときにフォームを非表示にする機能
document.getElementById("close-report").addEventListener("click", () => {
  document.getElementById("wait-time-report").classList.add("hidden");
});

// サンプルコード: 待ち時間報告フォームの報告ボタンをクリックしたときに報告を処理する機能
document.getElementById("submit-report").addEventListener("click", () => {
  const minutes = document.getElementById("minutes").value;
  console.log(`待ち時間が報告されました: ${minutes}分`);
  // ここでAPIに待ち時間を送信してデータベースに保存する処理を実装する
  document.getElementById("wait-time-report").classList.add("hidden");
});

// サンプルコード: お気に入りボタンをクリックしたときにお気に入り登録・解除を切り替える機能
document.getElementById("favorite").addEventListener("click", (event) => {
  const button = event.currentTarget;
  const isFavorited = button.classList.toggle("favorited");

  if (isFavorited) {
    button.textContent = "お気に入り解除";
    // ここでAPIにお気に入り登録情報を送信する処理を実装する
  } else {
    button.textContent = "お気に入り登録";
    // ここでAPIにお気に入り解除情報を送信する処理を実装する
  }
});

// サンプルコード: ページを読み込んだときにお気に入り状態をチェックする機能
window.addEventListener("load", () => {
  // ここでAPIからお気に入り情報を取得して、お気に入り状態を更新する処理を実装する
  // 例えば、お気に入り登録済みの場合は、お気に入りボタンの文字を「お気に入り解除」に変更し、
  // お気に入り状態を表すCSSクラス「favorited」を付与するなどの処理を行う
});


