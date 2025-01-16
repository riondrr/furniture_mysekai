// HTML要素の取得
const furnitureTable = document.getElementById("furnitureTable").querySelector("tbody");
const searchInput = document.getElementById("searchInput");
const tagFilter = document.getElementById("tagFilter");
const tagList = document.getElementById("tagList");
const popup = document.getElementById("popup");
const popupName = document.getElementById("popupName");
const popupImage = document.getElementById("popupImage");
const popupTags = document.getElementById("popupTags");

let activeTags = [];

// 家具データを表示
function renderFurniture(data) {
    furnitureTable.innerHTML = "";
    data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><a href="#" onclick="showPopup('${item.name}')">${item.name}</a></td>
            <td>${item.size}</td>
            <td>${item.category}</td>
        `;
        furnitureTable.appendChild(row);
    });
}

// ポップアップを表示
function showPopup(name) {
    const item = furnitureData.find(f => f.name === name);
    if (item) {
        popupName.textContent = item.name;
        popupImage.src = item.image;

        // タグを個別に四角で囲む
        const tagElements = item.tags.map(tag => `<span class="tag">${tag}</span>`).join(", ");
        popupTags.innerHTML = `タグ: ${tagElements}`;

        popup.classList.remove("hidden");
    }
}


// ポップアップを閉じる
function closePopup() {
    popup.classList.add("hidden");
}

// 検索機能
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filteredData = furnitureData.filter(item =>
        item.name.toLowerCase().includes(query)
    );
    renderFurniture(filteredData);
});

// 絞り込みタグの表示
function toggleTagFilter() {
    tagFilter.classList.toggle("hidden");
    if (!tagList.children.length) {
        // series オブジェクトを使用してタグを生成
        Object.entries(series).forEach(([key, value]) => {
            const label = document.createElement("label");
            label.innerHTML = `<input type="checkbox" value="${key}"> ${value}`;
            tagList.appendChild(label);
        });
    }
}

// 絞り込み適用
function applyTagFilter() {
    const selectedTags = Array.from(tagList.querySelectorAll("input:checked")).map(input => input.value);
    activeTags = selectedTags;

    // series のキーを furnitureData の tags に対応付ける
    const filteredData = furnitureData.filter(item => 
        selectedTags.some(tag => item.tags.includes(getSer(tag))) // getSerを使ってタグをマッチさせる
    );

    renderFurniture(filteredData);
    tagFilter.classList.add("hidden");
}

// 初期表示
renderFurniture(furnitureData);