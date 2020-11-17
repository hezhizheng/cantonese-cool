<template>
	<view class="content">
		<image class="logo" src="https://static01.imgkr.com/temp/fbf5d9abd6594d43a4b9d509fef222fd.png"></image>
		<view class="text-area">
			<text class="title">CantoneseCool 😎 🍻</text>
		</view>
		<view class="text-area">
			<text class="title">一个能讲广东话的小程序。🔊</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}


	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
