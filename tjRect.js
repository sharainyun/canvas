function tjRect(option){
	this._init(option);
}
tjRect.prototype = {
	_init:function(option){
		this.x = option.x || 0; //矩形左上角的 x 坐标
		this.y = option.y || 0;
		this.width = option.width || 0; //矩形的宽度
		this.height = option.height || 0;
		this.fillStyle = option.fillStyle || "red";
		this.strokeStyle = option.strokeStyle || "red";
		this.lineWidth = option.lineWidth || 1; //矩形描边的宽度
		this.scaleX = option.scaleX || 1;
		this.scaleY = option.scaleY || 1;
		this.rotation = option.rotation || 0; //旋转角度
	},
	render:function(ctx){
		ctx.save();
 
		ctx.beginPath();
		ctx.lineWidth = this.lineWidth;
		ctx.scale(this.scaleX, this.scaleY);
		ctx.rotate(this.rotation*Math.PI/180);
		ctx.rect(this.x, this.y, this.width, this.height);
		ctx.fillStyle = this.fillStyle; 
		ctx.fill();
		ctx.strokeStyle = this.strokeStyle;
		ctx.stroke();
 
		ctx.restore();// 回归到原始的绘制状态
	}
}