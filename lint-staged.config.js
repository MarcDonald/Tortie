module.exports = {
  '*.{js,ts,tsx,jsx}': [
    'eslint --fix -c .eslintrc.js --ext',
    'prettier -c .prettierrc.js --write',
  ],
};
