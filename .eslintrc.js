module.exports = {
  "extends": "airbnb",
  "plugins": [
      "react"
  ],
  rules: {
    "semi": [2, "never"],
    "comma-dangle": [0, "never"],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true, "optionalDependencies": false, "peerDependencies": false}]
  }
};
