module.exports = () => {
  return {
    customValidators: {
      lengthIsGreaterThan(value, num) {
        return value.length >= num
      }
    }
  }
}
