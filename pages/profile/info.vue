<template>
	<view>
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item v-on:click="chooseAvatar" title="头像"><u-avatar :src="pic" ></u-avatar></u-cell-item>
				<u-cell-item v-on:click="GoName" title="昵称">hzz</u-cell-item>
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
		created() {
			uni.$on('uAvatarCropper', path => {
				this.avatar = path;
				this.pic = path;
				// 可以在此上传到服务端
				// uni.uploadFile({
				// 	url: 'http://192.168.100.17/index.php/index/index/upload',
				// 	filePath: path,
				// 	name: 'file',
				// 	complete: (res) => {
				// 		console.log(res);
				// 	}
				// });
			})
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
			GoName: function (e) {
				return uni.navigateTo({
				    url: './name',
					fail: function (e){
						console.log(e)
					}
				});
			},
			chooseAvatar() {
				this.$u.route({
					url: '/uview-ui/components/u-avatar-cropper/u-avatar-cropper',
					params: {
						// 输出图片宽度，高等于宽，单位px
						destWidth: 300,
						// 裁剪框宽度，高等于宽，单位px
						rectWidth: 200,
						// 输出的图片类型，如果'png'类型发现裁剪的图片太大，改成"jpg"即可
						fileType: 'jpg',
					}
				})
			},
				
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
