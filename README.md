# Scripte

      var senSprite=new seniorSprite($(".jerry"),  // 精灵动画对象

       		"jerry/",  // 每一帧图片所在的文件

       		function(){		// 执行完之后的回调
			
			        setTimeout(function(){	
				          console.log("succuss")
			        },3000)
			        
			    }
			    
		  );

      senSprite.setAni(); // 启动精灵动画
