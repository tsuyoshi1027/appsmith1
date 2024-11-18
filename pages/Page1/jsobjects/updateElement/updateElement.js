export default {
	updateElement: () => {
		
		let updatedList = appsmith.store.elementList.map(item => {
			if (item.id === appsmith.store.selectedItem.id) {
				return { ...item, name: renameInput.text }; // 入力された名前で更新
			}
			return item;
		});

		// 更新されたリストを保存
		storeValue("elementList", updatedList);

	}
}