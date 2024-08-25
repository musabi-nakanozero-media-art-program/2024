$(document).ready(function() {
    $.getJSON('./js/data.json', function(data) {
        // JSONデータの配列をループ
        $.each(data, function(index, item) {
            // メインの正方形の画像がある場合のみ生成
            var keyVisual = item.keyvisual ? `<img src="./img/${item.keyvisual}" alt="メイン画像" class="main-images">` : '';

            // 小さな正方形の画像がある場合のみ生成
            var subVisual1 = item.subvisual01 ? `<img src="./img/${item.subvisual01}" alt="サブビジュアル1">` : '';
            var subVisual2 = item.subvisual02 ? `<img src="./img/${item.subvisual02}" alt="サブビジュアル2">` : '';
            var subVisual3 = item.subvisual03 ? `<img src="./img/${item.subvisual03}" alt="サブビジュアル3">` : '';
            var subVisual4 = item.subvisual04 ? `<img src="./img/${item.subvisual04}" alt="サブビジュアル4">` : '';

            // HTMLのtableに追加する新しい行を生成
            var tableRow = `
                <tr class="art-table-row">
                    <td class="left-column">
                        <div class="key-visual">
                            ${keyVisual}
                        </div>
                        <div class="sub-visuals">
                            ${subVisual1}
                            ${subVisual2}
                            ${subVisual3}
                            ${subVisual4}
                        </div>
                    </td>
                    <td class="right-column">
                        <p><span class="school">${item.school} ${item.department} ${item.seminar}</span></p>                  
                        <p><span class="creator">${item.name}</span></p>
                        <p>
                            <span class="title">${item.title}</span>
                            <span class="duration">(${Math.floor(item.videoduration / 60)}分${item.videoduration % 60}秒)</span>
                        </p>
                        <p> </p><br/>
                        <p class="othercredits">${item.othercredits}</p>
                        <p> </p>
                        <br />
                        <p>${item.description}</p>
                    </td>              
                </tr>
            `;
            // 生成した行をtableに追加
            $('.art-table').append(tableRow);
        });
    });
});
