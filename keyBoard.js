/**
 * 
 * @author Nagy Gergely info@nagygergely.eu
 * @url https://github.com/chpdesign/keyBoard
 * @version 0.1
 * 
 */
function keyBoard(target) {
	if (typeof (target) == 'undefined') {
		target = document;
	}
	var _this = this;
	var keyboard = {
		key : undefined,
		keyCode : undefined,
		event : undefined,
		lastEvent : undefined,
		shift : false,
		ctrl : false,
		alt : false
	};
	var keys = {
		shift : 16,
		ctrl : 17,
		alt : 18
	};
	this.events = {
		KeyDown : 'KeyDown',
		KeyUp : 'KeyUp',
		KeyPress : 'KeyPress'
	};
	var actions = {
		KeyDown : {},
		KeyUp : {},
		KeyPress : {}
	};
	this.addEvent = function(type, callback) {
		var id = new Date().getTime();
		actions[type][id] = callback;
		return id;
	};
	this.removeEvent = function(type, id) {
		delete actions[type][id];
	};
	var keyUp = function(event) {
		var key = (typeof event.which == "number") ? event.which
				: event.keyCode;
		keyboard.keyCode = key;
		keyboard.key = String.fromCharCode((96 <= key && key <= 105) ? key - 48
				: key);
		keyboard.event = _this.events.KeyUp;
		keyboard.lastEvent = event;
		keyboard.shift = (key == keys.shift);
		keyboard.ctrl = (key == keys.ctrl);
		keyboard.alt = (key == keys.alt);
		for ( var id in actions.KeyUp) {
			actions.KeyUp[id].apply(target, [ keyboard, event ]);
		}
	};
	var keyDown = function(event) {
		var key = (typeof event.which == "number") ? event.which
				: event.keyCode;
		keyboard.keyCode = key;
		keyboard.key = String.fromCharCode((96 <= key && key <= 105) ? key - 48
				: key);
		keyboard.event = _this.events.KeyDown;
		keyboard.lastEvent = event;
		keyboard.shift = (key == keys.shift);
		keyboard.ctrl = (key == keys.ctrl);
		keyboard.alt = (key == keys.alt);
		for ( var id in actions.KeyDown) {
			actions.KeyDown[id].apply(target, [ keyboard, event ]);
		}
	};
	var keyPress = function(event) {
		var key = event.keyCode;
		var key = (typeof event.which == "number") ? event.which
				: event.keyCode;
		keyboard.keyCode = key;
		keyboard.key = String.fromCharCode((96 <= key && key <= 105) ? key - 48
				: key);
		keyboard.event = _this.events.KeyPress;
		keyboard.lastEvent = event;
		keyboard.shift = (key == keys.shift);
		keyboard.ctrl = (key == keys.ctrl);
		keyboard.alt = (key == keys.alt);
		for ( var id in actions.KeyPress) {
			actions.KeyPress[id].apply(target, [ keyboard, event ]);
		}
	};
	this.getLast = function() {
		return keyboard;
	};
	target.addEventListener('keydown', keyDown, false);
	target.addEventListener('keyup', keyUp, false);
	target.addEventListener('keypress', keyPress, false);
};
