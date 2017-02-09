var fs = require('fs-extra');
var path = require('path');

var printMessage = require('print-message');


try {
  fs.copySync(path.join(__dirname, 'src', 'theme'), path.join(process.cwd(), 'native-base-theme'));
  printMessage([
    'NativeBase theme has been copied at ' + path.join(process.cwd(), 'native-base-theme'),
    'Here\'s how to theme your app',
    '',
    'import getTheme from \'./native-base-theme\';',
    'export default class ThemeExample extends Component {',
    'render() {',
    '  return (',
    '    <StyleProvider  style={getTheme()}>',
    '      <Container>',
    '        <Content>',
    '          ...',
    '        </Content>',
    '      </Container>',
    '    </StyleProvider>',
    '  );',
    '}',
    '',
    'Head over to the docs(http://docs.nativebase.io/docs/customize/) for detailed information on customization',
  ], {
    color: 'yellow',
    borderColor: 'green',
  });
} catch(err) {
  console.log('Error: ' + err);
}
