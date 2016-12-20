var easingTypes = require('tween-functions');

module.exports = function(config) {
	return new Tween(config);
};

function Tween(config){
	this._rafLoop = this._rafLoop.bind(this);
	this.terminate = this.terminate.bind(this);

	this._t0 = Date.now();
	this._config = config;
	this._rafLoop();
}

Tween.prototype._rafLoop = function() {
	if (this._break){ return; }

	var {duration, start, end, easingType} = this._config;
	var now = Date.now();
	var elapsed = now - this._t0;

	if (elapsed >= duration){
		this._config.onFrame(end);
		this._config.onEnd();
		return;
	}

	var tweenVal = easingTypes[easingType](elapsed, start, end, duration);
	this._config.onFrame(tweenVal);

	requestAnimationFrame(this._rafLoop);
};

Tween.prototype.terminate = function(){
	this._break = true;
};
