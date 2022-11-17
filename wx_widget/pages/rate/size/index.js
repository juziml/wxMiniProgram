Component({
  data: {
    value: [3, 3],
  },

  onChange(e) {
    const { index } = e.currentTarget.dataset;
    const { value } = e.detail;
    this.setData({
      [`value[${index}]`]: value,
    });
  },
});
