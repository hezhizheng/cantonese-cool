<template>
	<view>
		<view class="content">

			<view class="hader">
				<u-icon name="volume" color="#FF9900" size="28"></u-icon>
			</view>

			<view class="uni-textarea">
				<textarea v-model="AudioText" maxlength="-1" @blur="bindTextAreaBlur" placeholder="这里输要读的文字或[[pin1 yin1]]（粤语用[[jyut6 ping3]]）" />
				</view>
			
			<view>
				<u-button v-on:click="playAudio" class="custom-style" shape="circle" :ripple="true" type="success" size="medium">朗读 </u-button>
			</view>
			
			<view v-if="showResult" class="show-result">
				<view class="u-card-wrap">
					<u-card :title="title" :padding="padding" :border="border">
						<view class="" slot="body"> 
							<view class="">
								<view  class="u-body-item">
									<!-- u-body-item u-flex u-border-bottom u-col-between u-p-t-0 -->
									<text>{{readText}} \n {{readTextPinyin}}</text>
								</view>
								<view  class="favBtn">
									<uni-fav :checked="favChecked" class="" circle="true"  bg-color-checked="#FF9900" @click="onFavClick"></uni-fav>
								</view>
							</view>
						</view>
					</u-card>
				</view>
			</view>
		</view>
		
		
		<!-- <u-toast ref="uToast"></u-toast> -->
	</view>
	
</template>

<script>
	import uniFav from '@/components/uni-fav/uni-fav.vue'
	
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = false;
	
	
	
	export default {
		data() {
			return {
				title: '朗读内容',
				padding: 20,
				bottomSlot: true,
				border: true,
				AudioText: "",
				showResult: false,
				readText: "",
				readTextPinyin: "",
				favChecked: false,
				favs: [],
			}
		},
		components: {uniFav},
		
		onShow(option){
			// console.log('254354',option);
			this.readText = "";
			this.readTextPinyin = "";
			// this.AudioText = "";
			this.showResult = false;
		},
		onLoad(option) {
			console.log(option);
			
			if ( option.hasOwnProperty("text") && option.text != "" )
			{
				
				this.AudioText = option.text;
				this.playAudio()
				
				try {
				    const getFav = uni.getStorageSync('storage_key_fav');
				    if (getFav) {
						this.favs = getFav
						
						if ( this.favs.indexOf(option.text) >= 0 )
						{
							console.log("获取收藏内容失败222",);
							this.favChecked = true
						}
						
				    }
				} catch (e) {
					console.log("获取收藏内容失败");
				}
			}
			
		},
		methods: {
			bindTextAreaBlur: function (e) {
				console.log(e.detail.value)
				//this.AudioText = e.detail.value
			},
			playAudio : function(e) {
				let t = this.AudioText;
				
				if (t=="")
				{
					this.$refs.uToast.show({
						type: 'warning',
						title: '请输入要朗读的文字'
					})
					return false;
				}
				
				this.readText = "";
				this.readTextPinyin = "";
				
				innerAudioContext.src = 'http://120.24.87.124/cgi-bin/ekho2.pl?cmd=SPEAK&voice=EkhoCantonese&speedDelta=0&pitchDelta=-10&volumeDelta=0&text='+t;
				innerAudioContext.play()
				innerAudioContext.onPlay(() => {
				  console.log('开始播放  ');
				});
				innerAudioContext.onError((res) => {
				  console.log(res.errMsg);
				  console.log(res.errCode);
				});
				
				uni.request({
				    url: 'https://hzz.cool/eguidedog.php',
				    data: {
				        text: t,
				  //       cmd: "GETPHONSYMBOLS",
				  //       voice: "EkhoCantonese",
				  //       speedDelta: "0",
				  //       pitchDelta: "0",
				  //       volumeDelta: "0",
										  // callback: "OX.AJAST.__callbacks__.callback1"
				    },
				 
				    success: (res) => {
				        console.log(res.data);
						  this.readText = t
						  this.readTextPinyin = res.data.replace(/OX.AJAST.__callbacks__.callback1/,"")
						  this.showResult = true;
				    }
				});
				
				
				var new_cache = uni.getStorageSync('storage_key_fav')
				
				if ( new_cache.length > 0 )
				{
					if ( new_cache.indexOf(t) >= 0 )
					{
						this.favChecked = true
					}else{
						this.favChecked = false;
					}
				}else{
					this.favChecked = false;
				}
				
				
				
			},
			
			onFavClick: function() {
				
				let text = this.readText
				
				
				if (this.favChecked === true)
				{
					console.log("取消收藏");
					
					let un_fav = this.favs.filter(function(item) {
					  return item != text
					});
									
					uni.setStorageSync('storage_key_fav',un_fav)
					
					this.favChecked = false
				}else{
					console.log("收藏");
					
					if (this.favs.indexOf(text) < 0)
					{
						console.log("1111111111");
						if ( this.favs.length >= 50 )
						{console.log("222222");
							this.favs.shift()
						}
						
						this.favs.push(text)
					}
					uni.setStorageSync('storage_key_fav',this.favs)
					
					this.favChecked = true
				}
				
			}
		}
	}
</script>

<style>

     .content{
		 display:flex;
		 justify-content:center;
		 align-items:center;
		 flex-direction: column;
	 }
	
	.uni-textarea textarea {
		border: 1px solid  #E4E7ED;
		font-size: 16px;
		margin: 10px;
		padding: 5px;
		width: 650rpx;
	}
	
	.u-body-item {
			font-size: 32rpx;
			color: #333;
			padding: 20rpx 10rpx;
		}
		
		.favBtn {
			display: flex;
			justify-content: flex-end;
		}

</style>
