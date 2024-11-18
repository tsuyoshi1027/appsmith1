export default {
	saveElement: () => {

		// 現在のリストを取得
		let currentList = appsmith.store.elementList || [];

		// 重量と価値の入力を取得
		let updatedList = currentList.map(item => {

			let weightInputName = 'weightInput_${item.id}'
			let valueInputName = 'valueInput_${item.id}'

			if (item.id === appsmith.store.elementList.id) {
				return {
					...item,
					weight: parseFloat(this[weightInputName].text) || 0, // 重量の入力値
					value: parseFloat(this[valueInputName].text) || 0    // 価値の入力値
				};
			}
			return item;
		});

		// 更新されたリストをstoreに保存
		storeValue("elementList", updatedList);

		// 確認のためのアラート（オプション）
		showAlert("要素が更新されました");

	}
}