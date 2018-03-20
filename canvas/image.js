(function() {

/**
 * @class イメージクラス
 */
SY.Animation.Canvas.Image = SY.extend(SY.Animation.Canvas, function(){
	SY.Animation.Canvas.apply(this, arguments);

	var _ctx = this._elem.getContext("2d");

	var _this = this;

	var _x = 0;
	var _y = 0;
	var _src = '';
	var _img = null;

	this.__defineSetter__('src', function(src) {
		if ( _src != src ) {
			_src = src;

			_img = new Image();
			_img.src = _src;
			_img.onload = function() {
				draw();
			};
		}
	});
	this.__defineSetter__('x', function(x) {
		_x = x;
		draw();
	});
	this.__defineSetter__('y', function(y) {
		_y = y;
		draw();
	});

	var draw = function() {
		_ctx.drawImage(_img, _x, _y);
	}

});

})();
