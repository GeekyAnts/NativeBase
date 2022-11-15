const t = require('@babel/types');
const p = require('@babel/parser');

module.exports = function ({ types: t }) {
  return {
    visitor: {
      Program(path) {
        const filePath = this.file.opts.filename;

        console.log(filePath, 'file path here');
        // if (
        //   filePath.includes('/node_modules/native-base/lib/module/index.js')
        // ) {
        //   path.traverse({
        //     ImportDeclaration(importPath) {
        //       importPath.insertBefore([
        //         t.importDeclaration(
        //           [
        //             t.importSpecifier(
        //               t.identifier('init'),
        //               t.identifier('init')
        //             ),
        //           ],
        //           t.stringLiteral('./core/ResolvedStyleMap')
        //         ),
        //         t.expressionStatement(
        //           t.callExpression(t.identifier('init'), [
        //             astify(bundle.resolvedStyledMap),
        //           ])
        //         ),
        //       ]);
        //       importPath.stop();
        //     },
        //   });
        // } else {
        //   path.traverse({
        //     ImportDeclaration(importPath) {
        //       if (importPath.node.source.value === 'native-base') {
        //         if (importPath.node.specifiers) {
        //           importPath.node.specifiers.map((specifier) => {
        //             if (specifier.imported) {
        //               componentsList[specifier.imported.name] = true;
        //             } else {
        //               componentsList['allImport'] = true;
        //             }
        //           });
        //         }
        //       }
        //     },
        //   });
        //   path.traverse({
        //     JSXOpeningElement(jsxOpeningElementPath) {
        //       if (
        //         Object.keys(componentsList).includes(
        //           jsxOpeningElementPath.node.name.name
        //         )
        //       ) {
        //         if (
        //           jsxOpeningElementPath.node.name.name === 'NativeBaseProvider'
        //         ) {
        //           if (jsxOpeningElementPath.node.attributes) {
        //             jsxOpeningElementPath.node.attributes.push(
        //               createJSXAttributeNode(
        //                 'providerId',
        //                 uniqueId('nbBootTime-')
        //               )
        //             );
        //           } else {
        //             jsxOpeningElementPath.node.attributes = [
        //               createJSXAttributeNode(
        //                 'providerId',
        //                 uniqueId('nbBootTime-')
        //               ),
        //             ];
        //           }
        //         } else {
        //           const attrs = jsxOpeningElementPath.node.attributes;
        //           const componentAttrs = {};
        //           attrs.map((attr) => {
        //             if (
        //               ['colorScheme', 'variant', 'size'].includes(
        //                 attr.name.name
        //               )
        //             ) {
        //               componentAttrs[attr.name.name] = attr.value.value;
        //             }
        //           });
        //           if (!isEmptyObj(componentAttrs)) {
        //             updateComponentMap(
        //               jsxOpeningElementPath.node.name.name,
        //               componentAttrs
        //             );
        //           }
        //         }
        //       }
        //     },
        //   });
        // }
        // bundle.generateBuildTimeMap('web', componentsMap);
      },
    },
  };
};
