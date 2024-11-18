export default {
	deleteElementList: () => {

		// 現在のリストを取得
		let currentList = appsmith.store.elementList || [];

		let updatedList = appsmith.store.elementList.filter(item => item.id !== appsmith.store.selectedItem.id);

		// 要素番号を更新
		updatedList = updatedList.map((item, index) => {
			return {
				...item,
				id: index + 1 // 1から始まる番号を設定
			};
		});

		// 更新されたリストを保存
		storeValue("elementList", updatedList);

		// モーダルを閉じる
		closeModal("renameAndDeletePage");
	}
}