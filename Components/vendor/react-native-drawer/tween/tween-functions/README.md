# Tween-functions

Robert Penner's tweening functions as used in [React-tween-state](https://github.com/chenglou/react-tween-state) and [React-state-stream](https://github.com/chenglou/react-state-stream).

Penner's original functions uses the change in value rather than final value as parameter. I much prefer the latter, so this is what this library will use.

## API

`tweenFunction.tweenName(currentTime, beginValue, endValue, totalDuration)`

## Example

```js
var tweenFunctions = require('tween-functions');
tweenFunctions.easeInQuad(1, 0, 50, 5); // => 4
```

List of available functions:

- linear
- easeInQuad
- easeOutQuad
- easeInOutQuad
- easeInCubic
- easeOutCubic
- easeInOutCubic
- easeInQuart
- easeOutQuart
- easeInOutQuart
- easeInQuint
- easeOutQuint
- easeInOutQuint
- easeInSine
- easeOutSine
- easeInOutSine
- easeInExpo
- easeOutExpo
- easeInOutExpo
- easeInCirc
- easeOutCirc
- easeInOutCirc
- easeInElastic
- easeOutElastic
- easeInOutElastic
- easeInBack
- easeOutBack
- easeInOutBack
- easeInBounce
- easeOutBounce
- easeInOutBounce
