'use strict';


var tweenFunctions={
linear:function linear(t,b,_c,d){
var c=_c-b;
return c*t/d+b;
},
easeInQuad:function easeInQuad(t,b,_c,d){
var c=_c-b;
return c*(t/=d)*t+b;
},
easeOutQuad:function easeOutQuad(t,b,_c,d){
var c=_c-b;
return-c*(t/=d)*(t-2)+b;
},
easeInOutQuad:function easeInOutQuad(t,b,_c,d){
var c=_c-b;
if((t/=d/2)<1){
return c/2*t*t+b;
}else{
return-c/2*(--t*(t-2)-1)+b;
}
},
easeInCubic:function easeInCubic(t,b,_c,d){
var c=_c-b;
return c*(t/=d)*t*t+b;
},
easeOutCubic:function easeOutCubic(t,b,_c,d){
var c=_c-b;
return c*((t=t/d-1)*t*t+1)+b;
},
easeInOutCubic:function easeInOutCubic(t,b,_c,d){
var c=_c-b;
if((t/=d/2)<1){
return c/2*t*t*t+b;
}else{
return c/2*((t-=2)*t*t+2)+b;
}
},
easeInQuart:function easeInQuart(t,b,_c,d){
var c=_c-b;
return c*(t/=d)*t*t*t+b;
},
easeOutQuart:function easeOutQuart(t,b,_c,d){
var c=_c-b;
return-c*((t=t/d-1)*t*t*t-1)+b;
},
easeInOutQuart:function easeInOutQuart(t,b,_c,d){
var c=_c-b;
if((t/=d/2)<1){
return c/2*t*t*t*t+b;
}else{
return-c/2*((t-=2)*t*t*t-2)+b;
}
},
easeInQuint:function easeInQuint(t,b,_c,d){
var c=_c-b;
return c*(t/=d)*t*t*t*t+b;
},
easeOutQuint:function easeOutQuint(t,b,_c,d){
var c=_c-b;
return c*((t=t/d-1)*t*t*t*t+1)+b;
},
easeInOutQuint:function easeInOutQuint(t,b,_c,d){
var c=_c-b;
if((t/=d/2)<1){
return c/2*t*t*t*t*t+b;
}else{
return c/2*((t-=2)*t*t*t*t+2)+b;
}
},
easeInSine:function easeInSine(t,b,_c,d){
var c=_c-b;
return-c*Math.cos(t/d*(Math.PI/2))+c+b;
},
easeOutSine:function easeOutSine(t,b,_c,d){
var c=_c-b;
return c*Math.sin(t/d*(Math.PI/2))+b;
},
easeInOutSine:function easeInOutSine(t,b,_c,d){
var c=_c-b;
return-c/2*(Math.cos(Math.PI*t/d)-1)+b;
},
easeInExpo:function easeInExpo(t,b,_c,d){
var c=_c-b;
return t==0?b:c*Math.pow(2,10*(t/d-1))+b;
},
easeOutExpo:function easeOutExpo(t,b,_c,d){
var c=_c-b;
return t==d?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;
},
easeInOutExpo:function easeInOutExpo(t,b,_c,d){
var c=_c-b;
if(t===0){
return b;
}
if(t===d){
return b+c;
}
if((t/=d/2)<1){
return c/2*Math.pow(2,10*(t-1))+b;
}else{
return c/2*(-Math.pow(2,-10*--t)+2)+b;
}
},
easeInCirc:function easeInCirc(t,b,_c,d){
var c=_c-b;
return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;
},
easeOutCirc:function easeOutCirc(t,b,_c,d){
var c=_c-b;
return c*Math.sqrt(1-(t=t/d-1)*t)+b;
},
easeInOutCirc:function easeInOutCirc(t,b,_c,d){
var c=_c-b;
if((t/=d/2)<1){
return-c/2*(Math.sqrt(1-t*t)-1)+b;
}else{
return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;
}
},
easeInElastic:function easeInElastic(t,b,_c,d){
var c=_c-b;
var a,p,s;
s=1.70158;
p=0;
a=c;
if(t===0){
return b;
}else if((t/=d)===1){
return b+c;
}
if(!p){
p=d*0.3;
}
if(a<Math.abs(c)){
a=c;
s=p/4;
}else{
s=p/(2*Math.PI)*Math.asin(c/a);
}
return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;
},
easeOutElastic:function easeOutElastic(t,b,_c,d){
var c=_c-b;
var a,p,s;
s=1.70158;
p=0;
a=c;
if(t===0){
return b;
}else if((t/=d)===1){
return b+c;
}
if(!p){
p=d*0.3;
}
if(a<Math.abs(c)){
a=c;
s=p/4;
}else{
s=p/(2*Math.PI)*Math.asin(c/a);
}
return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;
},
easeInOutElastic:function easeInOutElastic(t,b,_c,d){
var c=_c-b;
var a,p,s;
s=1.70158;
p=0;
a=c;
if(t===0){
return b;
}else if((t/=d/2)===2){
return b+c;
}
if(!p){
p=d*(0.3*1.5);
}
if(a<Math.abs(c)){
a=c;
s=p/4;
}else{
s=p/(2*Math.PI)*Math.asin(c/a);
}
if(t<1){
return-0.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;
}else{
return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*0.5+c+b;
}
},
easeInBack:function easeInBack(t,b,_c,d,s){
var c=_c-b;
if(s===void 0){
s=1.70158;
}
return c*(t/=d)*t*((s+1)*t-s)+b;
},
easeOutBack:function easeOutBack(t,b,_c,d,s){
var c=_c-b;
if(s===void 0){
s=1.70158;
}
return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;
},
easeInOutBack:function easeInOutBack(t,b,_c,d,s){
var c=_c-b;
if(s===void 0){
s=1.70158;
}
if((t/=d/2)<1){
return c/2*(t*t*(((s*=1.525)+1)*t-s))+b;
}else{
return c/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+b;
}
},
easeInBounce:function easeInBounce(t,b,_c,d){
var c=_c-b;
var v;
v=tweenFunctions.easeOutBounce(d-t,0,c,d);
return c-v+b;
},
easeOutBounce:function easeOutBounce(t,b,_c,d){
var c=_c-b;
if((t/=d)<1/2.75){
return c*(7.5625*t*t)+b;
}else if(t<2/2.75){
return c*(7.5625*(t-=1.5/2.75)*t+0.75)+b;
}else if(t<2.5/2.75){
return c*(7.5625*(t-=2.25/2.75)*t+0.9375)+b;
}else{
return c*(7.5625*(t-=2.625/2.75)*t+0.984375)+b;
}
},
easeInOutBounce:function easeInOutBounce(t,b,_c,d){
var c=_c-b;
var v;
if(t<d/2){
v=tweenFunctions.easeInBounce(t*2,0,c,d);
return v*0.5+b;
}else{
v=tweenFunctions.easeOutBounce(t*2-d,0,c,d);
return v*0.5+c*0.5+b;
}
}};


module.exports=tweenFunctions;
//# sourceMappingURL=index.js.map