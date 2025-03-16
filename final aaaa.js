(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"final aaaa_atlas_1", frames: [[0,1786,1780,210],[0,667,824,361],[0,0,954,665],[628,1167,600,611],[0,1167,626,617],[956,0,736,537],[1230,1167,626,555],[956,539,626,626]]},
		{name:"final aaaa_atlas_2", frames: [[0,982,1857,412],[982,0,860,874],[0,0,980,980]]},
		{name:"final aaaa_atlas_3", frames: [[0,0,1280,1280]]},
		{name:"final aaaa_atlas_4", frames: [[0,0,1920,1920]]},
		{name:"final aaaa_atlas_5", frames: [[0,934,890,105],[0,726,928,206],[826,0,480,210],[826,212,480,210],[826,424,480,210],[0,0,824,361],[0,363,824,361]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_10 = function() {
	this.initialize(ss["final aaaa_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["final aaaa_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["final aaaa_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["final aaaa_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["final aaaa_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["final aaaa_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["final aaaa_atlas_5"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["final aaaa_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["final aaaa_atlas_5"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["final aaaa_atlas_5"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._61ZhpVj5NzL_AC_SL1000_ = function() {
	this.initialize(ss["final aaaa_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.brownhorsecartoonvector216255801 = function() {
	this.initialize(ss["final aaaa_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.cartoonhappydonkeyvector = function() {
	this.initialize(ss["final aaaa_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.desktop_121c25fda82146ecb7a197d60d4b5e73 = function() {
	this.initialize(ss["final aaaa_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.f9c0a4eebb4b3a91709484ebf680dcdc = function() {
	this.initialize(ss["final aaaa_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.PauseButtonPNGImage = function() {
	this.initialize(ss["final aaaa_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pigcartooncuteswineillustrationvector = function() {
	this.initialize(ss["final aaaa_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.play151523_1280 = function() {
	this.initialize(ss["final aaaa_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.R1 = function() {
	this.initialize(ss["final aaaa_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.R2 = function() {
	this.initialize(ss["final aaaa_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.VACA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("COW2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.R1();
	this.instance.setTransform(0,0,0.233,0.269);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.2778,scaleY:0.3338,x:-14,y:-18},0).wait(1).to({scaleX:0.233,scaleY:0.269,x:0,y:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-18,173.9,185.3);


(lib.titulo2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(1,1);

	this.instance_1 = new lib.CachedBmp_10();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:1.0734,y:-2.8525},0).wait(1).to({scaleY:1.1468,y:-6.705},0).wait(1).to({scaleY:1.2201,y:-10.5575},0).wait(1).to({scaleY:1.2935,y:-14.41},0).wait(1).to({scaleY:1.3669,y:-18.2625},0).wait(1).to({scaleY:1.4403,y:-22.115},0).wait(1).to({scaleY:1.5137,y:-25.9675},0).wait(1).to({scaleY:1.587,y:-29.82},0).wait(1).to({scaleY:1.6604,y:-33.6725},0).wait(1).to({scaleY:1.7338,y:-37.525},0).wait(1).to({scaleY:1.8072,y:-41.3775},0).wait(1).to({scaleY:1.8806,y:-45.23},0).wait(1).to({scaleY:1.954,y:-49.0825},0).wait(1).to({scaleY:2.0273,y:-52.935},0).wait(1).to({scaleY:2.1007,y:-56.7875},0).wait(1).to({scaleY:2.1741,y:-60.64},0).wait(1).to({scaleY:2.2475,y:-64.4925},0).wait(1).to({scaleY:2.3209,y:-68.345},0).wait(1).to({scaleY:2.3942,y:-72.1975},0).wait(1).to({scaleY:2.4676,y:-76.05},0).wait(1).to({scaleY:2.4016,y:-72.5815},0).wait(1).to({scaleY:2.3355,y:-69.113},0).wait(1).to({scaleY:2.2694,y:-65.6444},0).wait(1).to({scaleY:2.2034,y:-62.1759},0).wait(1).to({scaleY:2.1373,y:-58.7074},0).wait(1).to({scaleY:2.0712,y:-55.2388},0).wait(1).to({scaleY:2.0051,y:-51.7703},0).wait(1).to({scaleY:1.9391,y:-48.3018},0).wait(1).to({scaleY:1.873,y:-44.8332},0).wait(1).to({scaleY:1.8069,y:-41.3647},0).wait(1).to({scaleY:1.7409,y:-37.8961},0).wait(1).to({scaleY:1.6748,y:-34.4276},0).wait(1).to({scaleY:1.6087,y:-30.9591},0).wait(1).to({scaleY:1.5427,y:-27.4905},0).wait(1).to({scaleY:1.4766,y:-24.022},0).wait(1).to({scaleY:1.4105,y:-20.5535},0).wait(1).to({scaleY:1.3445,y:-17.0849},0).wait(1).to({scaleY:1.2784,y:-13.6164},0).wait(1).to({scaleY:1.2123,y:-10.1478},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,891,106);


(lib.titulo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(1,1);

	this.instance_1 = new lib.CachedBmp_8();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:1.0268,y:-1.7619},0).wait(1).to({scaleY:1.0536,y:-4.5238},0).wait(1).to({scaleY:1.0804,y:-7.2858},0).wait(1).to({scaleY:1.1073,y:-10.0477},0).wait(1).to({scaleY:1.1341,y:-12.8096},0).wait(1).to({scaleY:1.1609,y:-15.5715},0).wait(1).to({scaleY:1.1877,y:-18.3334},0).wait(1).to({scaleY:1.2145,y:-21.0954},0).wait(1).to({scaleY:1.2413,y:-23.8573},0).wait(1).to({scaleY:1.2681,y:-26.6192},0).wait(1).to({scaleY:1.295,y:-29.3811},0).wait(1).to({scaleY:1.3218,y:-32.143},0).wait(1).to({scaleY:1.3486,y:-34.905},0).wait(1).to({scaleY:1.3754,y:-37.6669},0).wait(1).to({scaleY:1.4022,y:-40.4288},0).wait(1).to({scaleY:1.429,y:-43.1907},0).wait(1).to({scaleY:1.4559,y:-45.9526},0).wait(1).to({scaleY:1.4827,y:-48.7146},0).wait(1).to({scaleY:1.5095,y:-51.4765},0).wait(1).to({scaleY:1.5363,y:-54.2384},0).wait(1).to({scaleY:1.5631,y:-57.0003},0).wait(1).to({scaleY:1.5391,y:-54.5268},0).wait(1).to({scaleY:1.5151,y:-52.0533},0).wait(1).to({scaleY:1.4911,y:-49.5798},0).wait(1).to({scaleY:1.4671,y:-47.1063},0).wait(1).to({scaleY:1.443,y:-44.6328},0).wait(1).to({scaleY:1.419,y:-42.1592},0).wait(1).to({scaleY:1.395,y:-39.6857},0).wait(1).to({scaleY:1.371,y:-37.2122},0).wait(1).to({scaleY:1.347,y:-34.7387},0).wait(1).to({scaleY:1.323,y:-32.2652},0).wait(1).to({scaleY:1.2989,y:-29.7917},0).wait(1).to({scaleY:1.2749,y:-27.3182},0).wait(1).to({scaleY:1.2509,y:-24.8446},0).wait(1).to({scaleY:1.2269,y:-22.3711},0).wait(1).to({scaleY:1.2029,y:-19.8976},0).wait(1).to({scaleY:1.1789,y:-17.4241},0).wait(1).to({scaleY:1.1549,y:-14.9506},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,929,207);


(lib.OBEJA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("sheepbaaingtype01293306");
		playSound("sheepbaaingtype01293306");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.desktop_121c25fda82146ecb7a197d60d4b5e73();
	this.instance.setTransform(0,0,0.2234,0.2379);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.265,scaleY:0.293,x:-13,y:-17},0).wait(1).to({scaleX:0.2234,scaleY:0.2379,x:0,y:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-17,165.9,180.8);


(lib.GALLO = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Gallo");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.R2();
	this.instance.setTransform(0,0,0.2363,0.2351);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.2748,scaleY:0.267,x:-12,y:-10},0).wait(1).to({scaleX:0.2363,scaleY:0.2351,x:0,y:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-10,172.1,167.1);


(lib.CERDO = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("_006135194_prev");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.pigcartooncuteswineillustrationvector();
	this.instance.setTransform(0,0,0.1478,0.1534);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.1723,scaleY:0.186,x:-12,y:-16},0).wait(1).to({scaleX:0.1478,scaleY:0.1534,x:0,y:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12,-16,168.9,182.3);


(lib.CABALLO = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("COW2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.brownhorsecartoonvector216255801();
	this.instance.setTransform(0,0,0.2598,0.2457);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.3098,scaleY:0.2914,x:-15,y:-14},0).wait(1).to({scaleX:0.2598,scaleY:0.2457,x:0,y:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-14,185.9,178.1);


(lib.BURRO = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("https___voicebotsu_es_sound_elrugidodelburro_");
		playSound("https___voicebotsu_es_sound_elrugidodelburro_");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.cartoonhappydonkeyvector();
	this.instance.setTransform(0,0,0.0794,0.081);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.0909,scaleY:0.0966,x:-11,y:-15},0).wait(1).to({scaleX:0.0794,scaleY:0.081,x:0,y:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-15,174.5,185.5);


(lib.btnVolver = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_5();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_6();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,105);


(lib.btnStop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.PauseButtonPNGImage();
	this.instance.setTransform(0,0,0.0835,0.0798);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.0974,x:-6},0).wait(1).to({scaleX:0.0835,x:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,0,83.8,69.8);


(lib.btnSiguiente = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-261.95,-108.85,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(-261.95,-108.85,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(-261.95,-108.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-261.9,-108.8,412,180.5);


(lib.btnPlay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.play151523_1280();
	this.instance.setTransform(0,0,0.0722,0.0644);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.0738,scaleY:0.0754,x:-1,y:-7},0).wait(1).to({scaleX:0.0722,scaleY:0.0644,x:0,y:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-7,94.5,96.6);


(lib.btnPausa = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.PauseButtonPNGImage();
	this.instance.setTransform(0,0,0.1123,0.1095);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.1249,x:-5},0).wait(1).to({scaleX:0.1123,x:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,0,107.4,95.7);


(lib.btnListo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.play151523_1280();
	this.instance.setTransform(0,0,0.0529,0.0528);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.0701,x:-11},0).wait(1).to({scaleX:0.0529,x:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,0,89.7,67.6);


(lib.Escenario2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.btnVolver.on("click",irA2.bind(this));
		
		function irA2(e){
		this.parent.cambiarEscenario (new lib.Escenario1());	
			}
		
		var sonido = new createjs.Sound.play("audioMp3", {loop: -1});
		
		sonido.volume = 0.5;
		
		function detenerSonido() {
		    sonido.stop();
		}
		
		function iniciarSonido() {
		    sonido.play();
		}
		
		this.btnPausa.addEventListener("click", detenerSonido);
		this.btnVolver.addEventListener("click", detenerSonido);
		this.btnPlay.addEventListener("click", iniciarSonido);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// menu
	this.btnVolver = new lib.btnVolver();
	this.btnVolver.name = "btnVolver";
	this.btnVolver.setTransform(726.95,498.4);
	new cjs.ButtonHelper(this.btnVolver, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnVolver).wait(1));

	// Titulo
	this.instance = new lib.titulo2();
	this.instance.setTransform(492.15,51.55,1,1,0,0,0,445.1,52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa_1
	this.btnPausa = new lib.btnPausa();
	this.btnPausa.name = "btnPausa";
	this.btnPausa.setTransform(77.3,568.9,1,1,0,0,0,48.3,47.9);
	new cjs.ButtonHelper(this.btnPausa, 0, 1, 2);

	this.btnPlay = new lib.btnPlay();
	this.btnPlay.name = "btnPlay";
	this.btnPlay.setTransform(181.2,575.2,1,1,0,0,0,46.2,41.2);
	new cjs.ButtonHelper(this.btnPlay, 0, 1, 2);

	this.instance_1 = new lib.GALLO();
	this.instance_1.setTransform(738,386.6,1,1,0,0,0,74,73.6);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2);

	this.instance_2 = new lib.VACA();
	this.instance_2.setTransform(481,392.7,1,1,0,0,0,73,74.7);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2);

	this.instance_3 = new lib.CABALLO();
	this.instance_3.setTransform(210,393,1,1,0,0,0,78,75);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2);

	this.instance_4 = new lib.CERDO();
	this.instance_4.setTransform(739.4,208.2,1,1,0,0,0,72.4,75.2);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2);

	this.instance_5 = new lib.OBEJA();
	this.instance_5.setTransform(484,206.4,1,1,0,0,0,70,73.4);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2);

	this.instance_6 = new lib.BURRO();
	this.instance_6.setTransform(211.2,210.8,1,1,0,0,0,76.2,77.8);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2);

	this.instance_7 = new lib.f9c0a4eebb4b3a91709484ebf680dcdc();
	this.instance_7.setTransform(0,-16,1.3479,1.2832);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.btnPlay},{t:this.btnPausa}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Escenario2, new cjs.Rectangle(0,-16,992.1,689.1), null);


(lib.Escenario1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.btnSiguiente1.on("click",irA2.bind(this));
		
		function irA2(e){
		this.parent.cambiarEscenario (new lib.Escenario2());	
			}
		
		var sonido = new createjs.Sound.play("audioMp3", {loop: 0});
		
		sonido.volume = 0.5;
		
		function detenerSonido() {
		    sonido.stop();
		}
		
		function iniciarSonido() {
		    sonido.play();
		}
		
		this.btnStop.addEventListener("click", detenerSonido);
		this.btnSiguiente1.addEventListener("click", detenerSonido);
		this.btnListo.addEventListener("click", iniciarSonido);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// siguiente
	this.btnSiguiente1 = new lib.btnSiguiente();
	this.btnSiguiente1.name = "btnSiguiente1";
	this.btnSiguiente1.setTransform(810.8,575.6);
	new cjs.ButtonHelper(this.btnSiguiente1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnSiguiente1).wait(1));

	// Titulo
	this.instance = new lib.titulo();
	this.instance.setTransform(479.25,74.8,1,1,0,0,0,464.2,103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa_1
	this.btnListo = new lib.btnListo();
	this.btnListo.name = "btnListo";
	this.btnListo.setTransform(146.9,565.8,1,1,0,0,0,33.9,33.8);
	new cjs.ButtonHelper(this.btnListo, 0, 1, 2);

	this.btnStop = new lib.btnStop();
	this.btnStop.name = "btnStop";
	this.btnStop.setTransform(67.9,534.9,1,1,0,0,0,35.9,34.9);
	new cjs.ButtonHelper(this.btnStop, 0, 1, 2);

	this.instance_1 = new lib._61ZhpVj5NzL_AC_SL1000_();
	this.instance_1.setTransform(3,-14);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EhK/AyAMAAAhj/MCV/AAAMAAABj/g");
	this.shape.setTransform(479,319.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.btnStop},{t:this.btnListo}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Escenario1, new cjs.Rectangle(-1,-27.2,961.9,678.2), null);


// stage content:
(lib.finalaaaa = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var escenario=new lib.Escenario1();
		this.addChild(escenario);
		
		this.cambiarEscenario = function (nuevoEscenario){
			this.addChild(nuevoEscenario);
			this.removeChild(escenario);
			escenario=nuevoEscenario;
			
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: 'AE8A96029B071D4C809117F4124C51F0',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/final aaaa_atlas_1.png", id:"final aaaa_atlas_1"},
		{src:"images/final aaaa_atlas_2.png", id:"final aaaa_atlas_2"},
		{src:"images/final aaaa_atlas_3.png", id:"final aaaa_atlas_3"},
		{src:"images/final aaaa_atlas_4.png", id:"final aaaa_atlas_4"},
		{src:"images/final aaaa_atlas_5.png", id:"final aaaa_atlas_5"},
		{src:"sounds/_006135194_prev.mp3", id:"_006135194_prev"},
		{src:"sounds/audioMp3.mp3", id:"audioMp3"},
		{src:"sounds/COW2.mp3", id:"COW2"},
		{src:"sounds/Gallo.mp3", id:"Gallo"},
		{src:"sounds/https___voicebotsu_es_sound_elrugidodelburro_.mp3", id:"https___voicebotsu_es_sound_elrugidodelburro_"},
		{src:"sounds/sheepbaaingtype01293306.mp3", id:"sheepbaaingtype01293306"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['AE8A96029B071D4C809117F4124C51F0'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;