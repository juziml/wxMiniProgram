const PICKER_KEY = {
    CITY_TITLE: 'cityTitle',
    YEAR_SEASONS_TITLE: 'yearSeasonsTitle',
    DATE_TITLE: 'dateTitle',
};
Page({
    data: {
        PICKER_KEY,
        [`${PICKER_KEY.CITY_TITLE}Visible`]: false,
        [`${PICKER_KEY.YEAR_SEASONS_TITLE}Visible`]: false,
        [`${PICKER_KEY.DATE_TITLE}Visible`]: false,
        citys: [
            { label: '北京', value: '北京' },
            { label: '上海', value: '上海' },
            { label: '广州', value: '广州' },
            { label: '深圳', value: '深圳' },
            { label: '成都', value: '成都' },
        ],
        years: [
            { label: '2021年', value: '2021' },
            { label: '2020年', value: '2020' },
            { label: '2019年', value: '2019' },
        ],
        months: Array.from(new Array(12), (_, index) => ({
            label: `${index + 1}月`,
            value: index + 1,
        })),
        days: Array.from(new Array(31), (_, index) => ({ label: `${index + 1}日`, value: index + 1 })),
        seasons: [
            { label: '春', value: '春' },
            { label: '夏', value: '夏' },
            { label: '秋', value: '秋' },
            { label: '冬', value: '冬' },
        ],
        [`${PICKER_KEY.CITY_TITLE}Value`]: [],
        [`${PICKER_KEY.YEAR_SEASONS_TITLE}Value`]: [],
        [`${PICKER_KEY.DATE_TITLE}Value`]: [],
    },
    joinArray(array) {
        return array.join('-');
    },
    onClickPicker(e) {
        var _a;
        const { key } = (_a = e === null || e === void 0 ? void 0 : e.currentTarget) === null || _a === void 0 ? void 0 : _a.dataset;
        this.setData({
            [`${key}Visible`]: true,
        });
    },
    onColumnChange(e) {
        console.log('picker pick:', e);
    },
    onPickerChange(e) {
        var _a;
        const { key } = (_a = e === null || e === void 0 ? void 0 : e.currentTarget) === null || _a === void 0 ? void 0 : _a.dataset;
        console.log('picker change:', e.detail);
        this.setData({
            [`${key}Visible`]: false,
            [`${key}Value`]: e.detail.value,
            [`${key}CurrentValue`]: this.joinArray(e.detail.value),
        });
    },
    onPickerCancel(e) {
        var _a;
        const { key } = (_a = e === null || e === void 0 ? void 0 : e.currentTarget) === null || _a === void 0 ? void 0 : _a.dataset;
        console.log(e, '取消');
        console.log('picker1 cancel:');
        this.setData({
            [`${key}Visible`]: false,
        });
    },
});

//# sourceMappingURL=picker.js.map
