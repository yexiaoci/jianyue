<template>
	<view class="uni-flex uni-column container">
		<input
			class="uni-input"
			type="number"
			placeholder="输入手机号"
			v-model="userDTO.mobile"
			required="required"
		/>
		<input
			class="uni-input"
			password
			type="text"
			placeholder="输入密码"
			v-model="userDTO.password"
			required="required"
		/>
		<button class="green-btn" @tap="signIn(userDTO)">登录</button>
		 <!-- 第三方登录 -->
         <view class="grace-title" style="margin-top:30px;">
            <view class="grace-h5 grace-blod grace-center" style='color:#00C777'>第三方登录</view>
        </view>
        <view class="grace-login-three" style="margin-top:8px;">
            <view class="grace-iconfont icon-weixin"></view>
            <view class="grace-iconfont icon-qq"></view>
            <view class="grace-iconfont icon-weibo"></view>
        </view>
		<navigator url="../signup/signup" class="nav">注册新账号</navigator>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userDTO: {
				mobile: '',
				password: ''
			}
		};
	},
	onLoad() {
	},
	methods: {
		signIn: function(userDTO) {
			var _this = this;
			// console.log(userDTO.mobile + ',' + userDTO.password);
			uni.request({
				url: 'http://localhost:8080/api/user/sign_in',
				method: 'POST',
				data: {
					mobile: userDTO.mobile,
					password: userDTO.password
				},
				header: {
					'content-type': 'application/json'
				},
				success: res => {
					// console.log(res.data.data);
					if (res.data.code == 0) {
						//将用户数据记录在本地存储
						uni.setStorageSync('login_key', {
							userId: res.data.data.id,
							nickname: res.data.data.nickname,
							avatar: res.data.data.avatar,
							token: res.data.data.token,
							login: true
						});
						uni.showToast({
							title: '登录成功'
						});
						uni.switchTab({
							url: '../my/my'
                         });

					}
					//登录失败，弹出各种原因
					else {
						uni.showModal({
							title: '提示',
							content: res.data.msg
						});
					}
				}
			});
		}
	}
};
</script>

<style scoped>
input {
	height: 50px;
	border-bottom: 1px solid #eee;
	margin-bottom: 5px;
}
.nav {
	color: #00b26a;
	margin-top: 15px;
}
</style>