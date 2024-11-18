export default {
	getElementList: () => {
    return appsmith.store.selectedItem || [];
	}
}