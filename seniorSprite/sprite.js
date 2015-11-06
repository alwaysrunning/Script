(function(w,undefined){
	var spriteAni = function(obj,path,callback){
		this.ResourcePath = path;
		this.obj = obj;
		var xhr = new XMLHttpRequest();
		xhr.open("GET",this.ResourcePath+'app.json',false);
		xhr.send(null);
		try{
           this.data = eval("(" + xhr.responseText + ")");

		}catch(e){
           console.log("error " + e);
		}
		this.callback = callback;
		this.curFPS = 0;
		this.imageList = this.data.List;
		this.FPScount = this.imageList.length;
		this.FPS = 10;
		this.loop = 4;
		this.curLoop = 1;
		this.timer = null;
		this.init();
	}

	spriteAni.prototype.init = function(){
		this.cutInit();
		this.curFPS++ ;
	}
    spriteAni.prototype.cutInit = function(){
    	var self = this;
    	this.obj.append("<img  src='" + this.ResourcePath + this.imageList[0].Name + "' style='width:100%;height:100%;position:absolute;'  />");
    }
    spriteAni.prototype.cutAni = function(){
        var self = this;
        this.obj.find("img").attr("src",this.ResourcePath+self.imageList[self.curFPS].Name);
        self.curFPS++;
    }
    spriteAni.prototype.stop = function(){
    	clearTimeout(this.timer);
    }
    spriteAni.prototype.setAni = function(){
    	var self = this;

    	function anti(){        
    	    if(self.curFPS>=self.FPScount){
                if(self.loop>0){
                	if(self.curLoop>=self.loop){
                	    self.callback && self.callback();
                	    return ;
                	}else{
                		self.curLoop++;
                        self.curFPS = 0;
                        timer();
                        
                	}            	    
                }else{
                	self.curFPS = 0;
                    timer();
                }
    	    }else{
                timer();
    	    }
    	}
    	function timer(){
    		self.timer = setTimeout(function(){
    			self.cutAni();
    			anti();
    		},1000/self.FPS)
    	}
    	anti();
    }
    w.seniorSprite = spriteAni;
})(window)