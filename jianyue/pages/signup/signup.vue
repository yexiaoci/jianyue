<template>
	<view class="container">
		<view class="sign-box">
			<input class="uni-input left" type="number" placeholder="输入手机号" v-model="mobile" required="required" />
		</view>
		<view class="check-code">
		<input class="code" type="number" placeholder="输入验证码" v-model="verifyCode" required="required" />
		<span v-show="sendAuthCode" class="green-btn small-btn right"  @click="getVerifyCode">获取验证码</span>
	    <span v-show="!sendAuthCode" class="count"> <span class="auth_text_blue">{{auth_time}} </span>秒后重新发送</span> 
		</view>
		<button @tap="checkCode" class="green-btn">下一步</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			 sendAuthCode:true,/*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */
             auth_time: 0, /*倒计时 计数器*/
			 mobile: '',
			 verifyCode: '',
			
		};
	},
	onLoad() {},
	methods: {
         getVerifyCode: function() {
			var _this = this;
			uni.request({
				url: this.apiServer + '/user/verify',
				method: 'POST',
				header: { 'content-type': 'application/x-www-form-urlencoded' },
				data: {
					mobile: _this.mobile
				},
				success: res => {
					if (res.data.code === 0) {
						uni.showToast({
							title: '验证码已发送'
						});
						_this.disabled = true;
						console.log(_this.disabled);
					} else {
						uni.showModal({
							title: '提示',
							content: res.data.msg
						});
					}
				}
			}
			);
			
          this.sendAuthCode = false;
            this.auth_time =60;
            var auth_timetimer =  setInterval(()=>{
                this.auth_time--;
                if(this.auth_time<=0){
                    this.sendAuthCode = true;
                    clearInterval(auth_timetimer);
                }
            }, 1000);
		},
		checkCode: function() {
			var _this = this;
			console.log(_this.verifyCode);
			uni.request({
				url: this.apiServer + '/user/check',
				method: 'POST',
				header: { 'content-type': 'application/x-www-form-urlencoded' },
				data: {
					mobile: _this.mobile,
					verifyCode: _this.verifyCode
				},
				success: res => {
					console.log(res.data);
					if (res.data.code === 0) {
						uni.navigateTo({
							url: '../password/password?mobile=' + _this.mobile
						});
					} else {
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

<style>
.sign-box {
	display: flex;
	align-items: center;
}
.left {
	flex: 1 1 70%;
}
.small-btn {
	width: 100px;
	height: 40px;
	font-size: 14px;
}
input {
	height: 50px;
	border-bottom: 1px solid #eee;
	margin-bottom: 5px;
}
.check-code{
	display: flex;
	flex-direction: row;
	align-items: center;
}
.code{
	flex:1 1 50%;
}
.count{
	flex:1 1 40%;
}
</style>