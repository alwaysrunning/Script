(function(w,undefined){
	function CSS3Sprite(element,options){
		this.element = element;
		this.defaults = {
			fps : 5,
			frames: 0,
			vertical: true,
			iteration: 'infinite',
			mode : 'image'
		};
		this.options = $.extend({},this.defaults,options);
		this.keyframeCounter = 0;
		this.kName = this.getUniqueKeyFrameName();
		this.width = this.element.width();
		this.height = this.element.height();
		this.actionTime = this.options.frames/this.options.fps;
		this.iteration = this.options.iteration || "";
		this.init();
	}

	CSS3Sprite.prototype.init = function(){
		var self = this;
		if(this.options.vertical){
			var kf = "@-webkit-keyframes" + " " + self.kName + " { from {background-position:0% 0%;} to {background-position:0% -" + self.height * self.options.frames + "px;}}";
		}else{
			var kf = "@-webkit-keyframes" + " " + self.kName + " { from {background-position:0% 0%;} to {background-position:-" + self.width * self.options.frames + "px 0%; }}";
		} 
    	$("style").append(kf) 
        self.element.on('webkitAnimationEnd' , function(){
        	self.element.css('-webkit-animation' ,"");
        });
	}

	CSS3Sprite.prototype.getUniqueKeyFrameName=function(){
        ++this.keyframeCounter;
        return "CSS3Animation"+this.keyframeCounter;
	}
    CSS3Sprite.prototype.pause = function(){
    	this.element.css('-webkit-animation-play-state','paused');
    }
	CSS3Sprite.prototype.play = function(){
		 var self = this;
		 var value = self.kName+' '+self.actionTime +'s steps('+self.options.frames+', end) ' + self.options.iteration;
		 self.element.css('-webkit-animation' ,value);
	}
	CSS3Sprite.prototype.destory = function(){
		this.element.off('webkitAnimationEnd')
		this.element.css('-webkit-animation' ,"");
	}

	w.Sprite = CSS3Sprite;

})(window)
