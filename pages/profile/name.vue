<template>
	<view class="">
		<u-form :model="model" :rules="rules" ref="uForm" :errorType="errorType">
			<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="account" label-width="120"
			 :label-position="labelPosition" label="昵称" prop="name">
				<u-input :border="border" placeholder="请输入昵称" v-model="model.name" type="text"></u-input>
			</u-form-item>

		</u-form>
		<view class="wrap">

			<u-button @click="submit" size="medium" type="success">保存</u-button>
		</view>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				model: {
					name: '',
				},
				rules: {
					name: [{
							required: true,
							message: '请输入昵称',
							trigger: 'blur',
						},
						{
							min: 2,
							max: 16,
							message: '昵称长度在2到16个字符',
							trigger: ['change', 'blur'],
						},
						// {
						// 	// 此为同步验证，可以直接返回true或者false，如果是异步验证，稍微不同，见下方说明
						// 	validator: (rule, value, callback) => {
						// 		// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
						// 		return this.$u.test.chinese(value);
						// 	},
						// 	message: '姓名必须为中文',
						// 	// 触发器可以同时用blur和change，二者之间用英文逗号隔开
						// 	trigger: ['change', 'blur'],
						// },
						// 异步验证，用途：比如用户注册时输入完账号，后端检查账号是否已存在
						// {
						// 	trigger: ['blur'],
						// 	// 异步验证需要通过调用callback()，并且在里面抛出new Error()
						// 	// 抛出的内容为需要提示的信息，和其他方式的message属性的提示一样
						// 	asyncValidator: (rule, value, callback) => {
						// 		this.$u.post('/ebapi/public_api/index').then(res => {
						// 			// 如果验证出错，需要在callback()抛出new Error('错误提示信息')
						// 			if(res.error) {
						// 				callback(new Error('姓名重复'));
						// 			} else {
						// 				// 如果没有错误，也要执行callback()回调
						// 				callback();
						// 			}
						// 		})
						// 	},
						// }
					],
				},
				errorType: ['message'],
			}
		},
		methods: {
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						// if(!this.model.agreement) return this.$u.toast('请勾选协议');
						console.log('验证通过');
					} else {
						this.$refs.uToast.show({
							type: 'warning',
							title: '验证失败'
						})
						return false;
						console.log('验证失败');
					}
				});
			},
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},

	}
</script>

<style>
	.wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 30rpx;
	}
</style>
