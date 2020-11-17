<template>
	<view>

<!-- 		<view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30" v-on:click="GoInfo">
			<view class="u-m-r-10">
				<u-avatar :src="pic" ></u-avatar>
			</view>
			<view class="u-flex-1">
				<view class="u-font-18 u-p-b-20">昵称：hzz</view>
			</view>
			<view class="u-m-l-10 u-p-10">
				<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
			</view>
		</view> -->
		

		
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item v-on:click="GoFav" icon="https://static01.imgkr.com/temp/67e7b5e7f4354a88abe52ee462b2cad4.png" title="最近收藏"></u-cell-item>
				<!-- <u-cell-item v-on:click="GoMusic" icon="https://static01.imgkr.com/temp/051b2289d26243cabca90d6bc0042f10.png" title="Cantopop"></u-cell-item> -->
			</u-cell-group>
		</view>
		
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item v-on:click="GoAboutIndex" icon="https://static01.imgkr.com/temp/f74087f586584c04be601814104a16a8.png" title="关于"></u-cell-item>
			</u-cell-group>
		</view>
		
		<u-toast ref="uToast"></u-toast>
	</view>
</template>
</template>

<script>
	export default {
		data() {
			return {
				pic:'https://static01.imgkr.com/temp/58333e3d93d5444f8f308c0fe9dfb9a3.jpg',
				show:true,
			}
		},
		onLoad() {
			
		},
		methods: {
			Tip: function (e) {
				this.$refs.uToast.show({
					type: 'warning',
					title: '敬请期待 😁'
				})
				return false;
			},
			GoAboutIndex: function (e) {
				return uni.navigateTo({
				    url: '../about/index',
					fail: function (e){
						console.log(e)
					}
				});
			},
			GoInfo: function (e) {
				return uni.navigateTo({
				    url: './info',
					fail: function (e){
						console.log(e)
					}
				});
			},
			GoFav: function (e) {
				return uni.navigateTo({
				    url: './fav',
					fail: function (e){
						console.log(e)
					}
				});
			},
			GoMusic: function (e) {
				return uni.navigateTo({
				    url: '../music/music',
					fail: function (e){
						console.log(e)
					}
				});
			}
				
		}
	}
</script>

<style lang="scss">
page{
	background-color: #ededed;
}

.camera{
	width: 54px;
	height: 44px;
	
	&:active{
		background-color: #ededed;
	}
}
.user-box{
	background-color: #fff;
}

#cell-click{
	background-color: rgb(235, 237, 238);
}

</style>
