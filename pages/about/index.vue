<template>
	<view class="content">
		
		<view class="top">
		</view>

		<view class="text-area">
			<view class="text-area">
				<text class="content">CantoneseCool 😎 🍻</text>
			</view>

			<view class="">
				<text class="content">一个能讲广东话的小程序。🔊</text>
			</view>
		</view>

		<view class="text-area-copyright">
			<view class="">
				<text class="content">Copyright © 2020 - {{Year}}</text>
			</view>

			<view style="margin-top: 10rpx;">
				<u-link class="content" href="https://hzz.cool" color="#FF9900">👉 hzz.cool</u-link>
				<u-link style="margin-top: 10rpx;" class="content" href="https://github.com/hezhizheng/cantonese-cool" color="#FF9900" >🐱 github</u-link> 
			</view>
		</view>

	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				Year: new Date().getFullYear(),
			}
		},
		onLoad() {},

		methods: {
			
		},
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

	}

	.top {
		height: 300rpx;
	}

	.content .text-area {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.content .text-area-copyright {
		font-size: 26rpx;
		padding: 18rpx;
	}
</style>
