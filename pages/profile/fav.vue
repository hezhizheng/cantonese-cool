<template>
	<view>
		<uni-list>
			<uni-list-item v-for="(v,k) in Favs" :key="k" ellipsis="2" :title="v" link="reLaunch"  v-on:click="ToFeature(v)" rightText="播放 🔊">
			</uni-list-item>
		</uni-list>
		<view>
			

		</view>
<!-- 		<view>
			<uni-load-more :status="more"></uni-load-more>
		</view> -->
		<u-toast ref="uToast"></u-toast>
	</view>
</template>
</template>

<script>
	export default {
		data() {
			return {
				more: "more",
				Favs: [],
				Url: "/pages/feature/index?txet=",
			}
		},
		
		onLoad() {
			this.getFavs()
		},
		methods: {
			getFavs : function(){
				
				try {
				    const value = uni.getStorageSync('storage_key_fav');
				    if (value) {
						this.Favs = value
				        console.log(value);
				    }
				} catch (e) {
				    this.$refs.uToast.show({
				    	type: 'warning',
				    	title: '获取收藏内容失败'
				    })
				    return false;
				}
				
				console.log("获取当前存储cache22",this.Favs);
			},
			ToFeature: function (e) {
				return uni.reLaunch({
				    url: '../feature/index?text='+e,
					fail: function (e){
						console.log(e)
					}
				});
			},

		}
	}
</script>

<style lang="scss">
	page {
		background-color: #ededed;
	}
</style>
