export default {
	// 入力値をリストに追加する関数
	addElementToList: () => {
		
		// 現在の入力値を取得
		let newElement = Input1.text;
		if (!newElement) {
        showAlert("入力が必要です", "error");
        return;
    }
		
		// 現在のリストを取得（リストがなければ空の配列）
		let currentList = appsmith.store.elementList || [];
		
		// リスト内に同じ値が存在するか確認
    let isDuplicate = currentList.some(item => item.name === newElement);
    if (isDuplicate) {
        showAlert("同じ値が既に存在します", "error");
        return; // 同じ値が存在する場合、処理を中断
    }
		
		// 新しい要素をリストに追加
		currentList.push({ id: currentList.length + 1, name: newElement });
		
		// 更新されたリストを store に保存
		storeValue("elementList", currentList);
		
		//inputウィジェットの値をクリア
		resetWidget("Input1");
	}
}