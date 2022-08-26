module.exports = {
  ...require('eslint-config-mantine/.prettierrc.js'),
  importOrder: ['^@/(.*)$', '^[./]'],
  importOrderSeparation: true,
};
