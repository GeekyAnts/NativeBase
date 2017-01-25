var fs=require('fs-extra');
var path=require('path');

var printMessage=require('print-message');


try{
fs.copySync(path.join(__dirname,'dist','src','theme'),path.join(process.cwd(),'native-base-theme'));
printMessage([
'NativeBase theme has been copied at '+path.join(process.cwd(),'native-base-theme'),
'Wrap your app inside <StyleProvider> component imported from native-base to apply your own theme to native-base components',
'Head over to the docs(http://docs.nativebase.io/docs/customize/) for detailed information on customization'],
{
color:'yellow',
borderColor:'green'});

}catch(err){
console.log('Error: '+err);
}
//# sourceMappingURL=ejectTheme.js.map