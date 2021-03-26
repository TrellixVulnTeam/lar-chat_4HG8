import token from './token'
import config from './config'
const ws_conn = function () {
	let user_id = uni.getStorageSync('userInfo')['id'];
	
	let wsUrl = config.wsUrl+`?token=${token.getToken()}&user_id=${user_id}`;
	
	
	
	
	



uni.connectSocket({
    url: wsUrl,
    header: {
        'content-type': 'application/json'
    },
    protocols: ['protocol1'],
    method: 'GET',
	success : function () {
		
	},
	fail : function () {
		
	},
	complete : function () {
		
	}
});

uni.onSocketOpen(function (res) {
  console.log('WebSocket连接已打开！');
});

uni.onSocketError(function (res) {
  console.log('WebSocket连接打开失败，请检查！');
});

uni.onSocketMessage(function (res) {
  console.log('收到服务器内容：' + res.data);
});

uni.onSocketClose(function (res) {
  console.log('WebSocket 已关闭！');
});

}

export {ws_conn}
