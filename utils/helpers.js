module.exports = {
  format_date: (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  },
  is_empty: (array) => {
    if (array.length === 0) {
      return true;
    }
    return false;
  }
};