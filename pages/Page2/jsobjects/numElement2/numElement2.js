export default {
	numStore: () => {
		
		storeValue("appsmith.store.elementList.weight", `weightInput_${appsmith.store.id}`);
    storeValue("appsmith.store.elementList.value", `valueInput_${appsmith.store.id}`);

		let currentList = appsmith.store.elementList || [];

		let updatedList = currentList.map(item => {
			// 各ウィジェットの名前にアクセスして値を取得
			let weightValue = parseFloat(appsmith.store[`weightInput_${appsmith.store.id}`]) || 0;
			let valueValue = parseFloat(appsmith.store[`valueInput_${appsmith.store.id}`]) || 0;

			// リストのアイテムを更新
			return {
				...item,
				weight: weightValue,
				value: valueValue
			};
		});
		
		storeValue("currentList", updatedList);
	}
}