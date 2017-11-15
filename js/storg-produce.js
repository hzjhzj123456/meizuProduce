   var app=angular.module('meizu',[]);
   app.controller('produce',function($scope){
   		
   		$scope.navlist=['魅族商城','魅族手机','魅蓝手机','魅族声学','智能配件','服务','专卖店','Flyme','社区'];
// 		$scope.produceSmallImglist=['img/cgbj0vl4nsuaykn6aaxrqy-vs1i068.png120x120.jpg',
// 									'img/cgbj0fl4nssaz3vsaav1iddy01s963.png120x120.jpg',
// 									'img/cgbj0vl4nr2alhgkaaykcozywy0564.png120x120.jpg',
// 									'img/cgbj0fl4nreacdcaaakjylidw8w468.png120x120.jpg',
// 								];
// 		$scope.produceBigImglist=['img/cgbj0vl4nsuaykn6aaxrqy-vs1i068.png680x680.jpg',
// 								  'img/Cgbj0Fl4NsSAZ3vsAAV1IdDy01s963.png680x680.jpg',
// 								  'img/cgbj0vl4nr2alhgkaaykcozywy0564.png680x680.jpg',
// 								  'img/cgbj0fl4nreacdcaaakjylidw8w468.png680x680.jpg',
// 							];
// 		$scope.modellist=['全网通公开版','移动定制版'];
// 		$scope.colorlist=[{title:'香槟金',imgTitle:'img/cgbj0vl4oyoaux0oaancx61oezy176.png80x80.png'},
// 						  {title:'静谧黑',imgTitle:'img/cgbj0fl4oyoabicraa2zsl7wnnm117.png80x80.png'},
// 						  {title:'提香红',imgTitle:'img/cgbj0vl4oyoagrtoaajwa8hde5y164.png80x80.png'}
// 		];
		
   		$scope.producelists=[{
   			name:'魅族PRO 7',
   			title:'每日10-12点现货抢购 双瞳如小窗 佳景观历历',
   			model:['全网通公开版','移动定制版'],
   			price:['￥3380.00'],
   			color:[
	   			{
	   				title:'香槟金',
	   				imgTitle:'img/cgbj0vl4oyoaux0oaancx61oezy176.png80x80.png',
	   				bigimg:['img/Cgbj0Fl4OX2AGpY_AANCKEVTTuc964.png680x680.jpg',
	   						'img/Cgbj0Vl4OWuAR8rQAAjkLIL_tF0538.png680x680.jpg',
	   						'img/Cgbj0Vl4OXeAQsR9AAeKXYO0NwI622.png680x680.jpg',
	   						'img/Cgbj0Fl4OXKAIlQ2AANK_mjRcdQ708.png680x680.jpg',
	   					],
	   				smallimg:['img/Cgbj0Fl4OX2AGpY_AANCKEVTTuc964.png120x120.jpg',
		   					  'img/Cgbj0Vl4OWuAR8rQAAjkLIL_tF0538.png120x120.jpg',
		   					  'img/Cgbj0Vl4OXeAQsR9AAeKXYO0NwI622.png120x120.jpg',
		   					  'img/Cgbj0Fl4OXKAIlQ2AANK_mjRcdQ708.png120x120.jpg',
   							],	
	   			},
	   			{
	   				title:'静谧黑',
	   				imgTitle:'img/cgbj0fl4oyoabicraa2zsl7wnnm117.png80x80.png',
	   				bigimg:['img/cgbj0vl4nsuaykn6aaxrqy-vs1i068.png680x680.jpg',
	   						'img/Cgbj0Fl4NsSAZ3vsAAV1IdDy01s963.png680x680.jpg',
	   						'img/cgbj0vl4nr2alhgkaaykcozywy0564.png680x680.jpg',
	   						'img/cgbj0fl4nreacdcaaakjylidw8w468.png680x680.jpg',
	   					],
	   				smallimg:['img/cgbj0vl4nsuaykn6aaxrqy-vs1i068.png120x120.jpg',
	   					      'img/cgbj0fl4nssaz3vsaav1iddy01s963.png120x120.jpg',
	   					      'img/cgbj0vl4nr2alhgkaaykcozywy0564.png120x120.jpg',
	   					      'img/cgbj0fl4nreacdcaaakjylidw8w468.png120x120.jpg',
	   					],
	   			},
	   			{
	   				title:'提香红',
	   				imgTitle:'img/cgbj0vl4oyoagrtoaajwa8hde5y164.png80x80.png',
	   				bigimg:['img/Cgbj0Vl4OXyAQmS9AAKSlCs7XVY618.png680x680.jpg',
	   						'img/Cgbj0Fl4OWuAZ68jAAZbdb543-0423.png680x680.jpg',
	   						'img/Cgbj0Fl4OXeAKD0qAAe2ZLsl7SY627.png680x680.jpg',
	   						'img/Cgbj0Vl4OXGAECLwAAN4WppJgMA388.png680x680.jpg',
	   					],
	   				smallimg:['img/Cgbj0Vl4OXyAQmS9AAKSlCs7XVY618.png680x680.jpg',
	   					      'img/Cgbj0Fl4OWuAZ68jAAZbdb543-0423.png680x680.jpg',
	   					      'img/Cgbj0Fl4OXeAKD0qAAe2ZLsl7SY627.png680x680.jpg',
	   					      'img/Cgbj0Vl4OXGAECLwAAN4WppJgMA388.png680x680.jpg',
	   					],
	   			}
	   	    ],
   			capicaty:['4GB+64GB','4GB+128GB'],
   			count:1
   		},{
   			name:'魅族PRO 7plus',
   			title:'每日10-12点现货抢购 双瞳如小窗 佳景观历历',
   			model:['全网通公开版'],
   			price:['￥3580.00'],
   			color:[
	   			{
	   				title:'月光银',
	   				imgTitle:'pro7/Cgbj0Fl4OdSATStyAAwW-w8XnvQ309.png80x80.png',
	   				bigimg:['pro7/Cgbj0Fl4OcuAC8cNAAzkR_rJfDU808.png680x680.jpg',
	   						'pro7/Cgbj0Fl4ObSAVMSTAAjEHNafmrY919.png680x680.jpg',
	   						'pro7/Cgbj0Fl4OcSAQGI6AAWj1ZSQDVE159.png680x680.jpg',
	   						'pro7/Cgbj0Vl4ObqAfquUAAJqsgonkog358.png680x680.jpg',
	   					],
	   				smallimg:['pro7/Cgbj0Fl4OcuAC8cNAAzkR_rJfDU808.png120x120.jpg',
	   						  'pro7/Cgbj0Fl4ObSAVMSTAAjEHNafmrY919.png120x120.jpg',
	   						  'pro7/Cgbj0Vl4OcSAPu8zAAW76OUI96s487.png120x120.jpg',
	   						  'pro7/Cgbj0Vl4ObqAfquUAAJqsgonkog358.png120x120.jpg',
   							],	
	   			},
	   			{
	   				title:'静谧黑',
	   				imgTitle:'pro7/Cgbj0Vl4OdOAGsDfAAuYs_pyDV0706.png80x80.png',
	   				bigimg:['pro7/Cgbj0Fl4OdKAEqunAAqnVoWyu9Y200.png680x680.jpg',
	   						'pro7/Cgbj0Vl4ObSACZMfAAiaOYYNcNI535.png680x680.jpg',
	   						'pro7/Cgbj0Fl4OcSAQGI6AAWj1ZSQDVE159.png680x680.jpg',
	   						'pro7/Cgbj0Fl4ObqALIXAAAI_06lS7J8810.png680x680.jpg',
	   					],
	   				smallimg:['pro7/Cgbj0Fl4OdKAEqunAAqnVoWyu9Y200.png120x120.jpg',
	   						  'pro7/Cgbj0Vl4ObSACZMfAAiaOYYNcNI535.png120x120.jpg',
	   						  'pro7/Cgbj0Fl4OcSAQGI6AAWj1ZSQDVE159.png120x120.jpg',
	   						  'pro7/Cgbj0Fl4ObqALIXAAAI_06lS7J8810.png120x120.jpg',
	   					],
	   			},
	   			{
	   				title:'倚霞金',
	   				imgTitle:'pro7/Cgbj0Vl4OdqAQ-DMAA1XGkTJcSo199.png80x80.png',
	   				bigimg:['pro7/Cgbj0Vl4OcyAKcgrAA5EUIHK96c982.png680x680.jpg',
	   						'pro7/Cgbj0Vl4ObSAd1njAApvE6uC8G0735.png680x680.jpg',
	   						'pro7/Cgbj0Vl4OcSAPu8zAAW76OUI96s487.png680x680.jpg',
	   						'pro7/Cgbj0Vl4ObqAfquUAAJqsgonkog358.png680x680.jpg',
	   					],
	   				smallimg:['pro7/Cgbj0Vl4OcyAKcgrAA5EUIHK96c982.png120x120.jpg',
	   						  'pro7/Cgbj0Vl4ObSAd1njAApvE6uC8G0735.png120x120.jpg',
	   						  'pro7/Cgbj0Vl4OcSAPu8zAAW76OUI96s487.png120x120.jpg',
	   						  'pro7/Cgbj0Vl4ObqAfquUAAJqsgonkog358.png120x120.jpg',
	   					],
	   			},
	   			{
	   				title:'曜影黑',
	   				imgTitle:'pro7/Cgbj0Fl4OduAN6lZAAoYW04sCAc119.png80x80.png',
	   				bigimg:['pro7/Cgbj0Fl4OdKAEqunAAqnVoWyu9Y200.png680x680.jpg',
	   						'pro7/Cgbj0Fl4ObqATsuxAAWJHm3RDdA503.png680x680.jpg',
	   						'pro7/Cgbj0Fl4OcSAQGI6AAWj1ZSQDVE159.png680x680.jpg',
	   						'pro7/Cgbj0Fl4ObqALIXAAAI_06lS7J8810.png680x680.jpg',
	   					],
	   				smallimg:['pro7/Cgbj0Fl4OdKAEqunAAqnVoWyu9Y200.png120x120.jpg',
	   						  'pro7/Cgbj0Fl4ObqATsuxAAWJHm3RDdA503.png120x120.jpg',
	   						  'pro7/Cgbj0Fl4OcSAQGI6AAWj1ZSQDVE159.png120x120.jpg',
	   						  'pro7/Cgbj0Fl4ObqALIXAAAI_06lS7J8810.png120x120.jpg',
	   					],
	   			},
	   	    ],
   			capicaty:['6GB+64GB'],
   			count:1
   			}
   		];
   		$scope.view={
   			phonename:$scope.producelists[0].name,
   			describe:$scope.producelists[0].title,
   			phonename2:$scope.producelists[1].name,
   			smallimg:$scope.producelists[0].color[1].smallimg,
   			bigimglist:$scope.producelists[0].color[1].bigimg,
   			bigimg:$scope.producelists[0].color[1].bigimg[0],
   			modellist:$scope.producelists[0].model,
   			capacitylist:$scope.producelists[0].capicaty,
   			colorlist:$scope.producelists[0].color,
   			price:$scope.producelists[0].price[0],
   			phonenamelist:$scope.producelists,
   			produceData:$scope.producelists[0],
   			count:$scope.producelists[0].count,
   		}
   		function changeview(produces,$index){
	   			$scope.view={
	   			phonename:produces.name,
	   			describe:produces.title,
	   			smallimg:produces.color[1].smallimg,
	   			bigimglist:produces.color[1].bigimg,
	   			bigimg:produces.color[1].bigimg[0],
	   			modellist:produces.model,
	   			capacitylist:produces.capicaty,
	   			colorlist:produces.color,
	   			price:produces.price[0],
	   			phonenamelist:$scope.producelists,
	   			produceData:produces,
	   			count:produces.count,
   			}
   		}
   		function addborder(target){
   			angular.element(target).parent().parent().find('span').removeClass('active');
   			angular.element(target).parent().addClass('active');
   		}
   		$scope.changeXh=function($event,$index){
   			changeview($scope.producelists[$index],$index);
   			//console.log($event.target);
   			addborder($event.target);
   		}
   		$scope.changeimg=function($event,$index){
   			console.log($event.target);
   			$scope.view.bigimg=$scope.view.bigimglist[$index];
   			angular.element($event.target).parent().parent().parent().find('li').removeClass('active');
   			angular.element($event.target).parent().parent().addClass('active');
   		}
   		$scope.changeli=function($event,$index){
   			//console.log($index);
   			var num=$index+2;
   			console.log(num);
   			$scope.view.smallimg=$scope.view.produceData.color[$index].smallimg;
   			$scope.view.bigimglist=$scope.view.produceData.color[$index].bigimg;
   			$scope.view.bigimg=$scope.view.produceData.color[$index].bigimg[0];
   			angular.element(document.querySelectorAll('.color>span>a')).removeClass('active');
   			angular.element(document.querySelector(`.color>span:nth-child(${num})>a`)).addClass('active');
   		}
   		$scope.changeLx=function($event){
   		    addborder($event.target);
   		}
   		$scope.changecap=function($event){
   			addborder($event.target);
   		}
   		$scope.changecount=function($event,$index){
   			var num=$event.target.dataset.num;
   			console.log(num);
   			if(num==1){
   				if($scope.view.count==5){
   					return
   				}else{
   					$scope.view.count=++$scope.view.produceData.count;
   				}
   			}
   			if(num==2){
   				if($scope.view.count==1){
   					return
   				}else{
   					$scope.view.count=--$scope.view.produceData.count;
   				}
   			}
   		}
   		$scope.img=true;
   		$scope.desibe=false;
   		$scope.question=false;
   		$scope.changetext=function($event,$index){
   			var num=$event.target.dataset.num;
   			if(num==1){
   				$scope.img=true;
   				$scope.desibe=false;
   				$scope.question=false;
   				$scope.imgnone=false;
   				$scope.describenone=true;
   				$scope.questionnone=true;
   			}
   			if(num==2){
   				$scope.img=false;
   				$scope.desibe=true;
   				$scope.question=false;
   				$scope.imgnone=true;
   				$scope.describenone=false;
   				$scope.questionnone=true;
   			}
   			if(num==3){
   				$scope.img=false;
   				$scope.desibe=false;
   				$scope.question=true;
   				$scope.imgnone=true;
   				$scope.describenone=true;
   				$scope.questionnone=false;
   			}
   		}
   });