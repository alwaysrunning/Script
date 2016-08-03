# Scripte

1. seniorSprite 高级精灵动画

	var senSprite=new seniorSprite($(".jerry"),  // 精灵动画对象
	
	       	"jerry/",  // 每一帧图片所在的文件
	
	       	function(){		// 执行完之后的回调
			
			        setTimeout(function(){	
				          console.log("succuss")
			        },3000)
			        
			    }
			    
		  );
	
	senSprite.setAni(); // 启动精灵动画


2. sprite 精灵动画

	var start1=new Sprite($('.start1'), {
	
                fps: 1,   //   每秒多少帧
                
                frames: 2,  //  总共有多少帧
                
                vertical: true,  //  图片位移是竖直方向还是水平方向
                
                iteration: 'infinite'  // 是否无限循环
                
        }); 
        
        start1.play(); // 启动动画
