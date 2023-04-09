document.getElementById("map").addEventListener("click", () => {
  document.getElementById("shop-details").classList.remove("hidden");
  document.getElementById("favorite").classList.remove("hidden");
});

document.getElementById("close-details").addEventListener("click", () => {
  document.getElementById("shop-details").classList.add("hidden");
  document.getElementById("favorite").classList.add("hidden");
});

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

document.getElementById("close-results").addEventListener("click", () => {
  document.getElementById("search-results").classList.add("hidden");
});

document.getElementById("wait-time").addEventListener("click", () => {
  document.getElementById("wait-time-report").classList.remove("hidden");
});

document.getElementById("close-report").addEventListener("click", () => {
  document.getElementById("wait-time-report").classList.add("hidden");
});

document.getElementById("submit-report").addEventListener("click", () => {
  const minutes = document.getElementById("minutes").value;
  console.log(`待ち時間が報告されました: ${minutes}分`);
  document.getElementById("wait-time-report").classList.add("hidden");
});

document.getElementById("favorite").addEventListener("click", (event) => {
  const button = event.currentTarget;
  const isFavorited = button.classList.toggle("favorited");

  if (isFavorited) {
    button.textContent = "お気に入り解除";
  } else {
    button.textContent = "お気に入り登録";
  }
});

window.addEventListener("load", () => {
  // お気に入り情報の取得や状態の更新処理を実装
});

function initMap() {
  const mapOptions = {
    center: { lat: 35.6895, lng: 139.6917 }, // 東京の緯度経度を中心に設定
    zoom: 12 // ズームレベル
  };

  const map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
