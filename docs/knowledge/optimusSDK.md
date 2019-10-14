# Optimus-SDK

## 起步
### 介绍
`optimus-sdk`是车主惠APP公众平台向网页开发者提供的基于车主惠内的网页开发工具包。<br>
通过使用`optimus-sdk`,网页开发者可使用原生高德定位、分享、关闭webview等功能。
### 安装
````bash
npm install optimus-sdk
or
yarn add optimus-sdk
````
### 引入
```js
import optimusSDK from 'optimus-sdk'
Vue.use(optimusSDK)
```
### 使用
```vue
<script >
export default {
  mounted () {
    // 关闭webview
    this.$op.close({})
  }
}
</script>
````
## 接口文档
接口名称 | 类型 |  描述  
-|-|-
close | 普通 | 关闭webview |
share | 普通 | 分享 |
telephone | 普通 | 拨打电话 |
getAppVersion | 普通 | 获取APP当前版本号 |
getAMapLoc | 普通 | 获取高德定位信息 |
mapNavi | 普通 | 唤起地图导航 |
login | 普通 | 调起原生登录 |
paySuccess | 普通 | 支付成功回调（H5通知原生支付成功） |
isHaveCameraPermission | 普通 | 校验相机、相册权限 |
wxNativePay | 普通 | 微信转native支付 |
getPopWebViewInfo | 普通 | 获取APP弹层信息 |

::: tip 参数说明
- 所有方法的参数均为对象类型
- 回调方式为Promise类型
- 返回值的`code`参数为数字类型
- `code`值为0是正常情况，其它值均为异常状态
:::

### 关闭webview
#### 语法
::: tip
this.$op.close(obj)
:::

#### 请求参数
参数 | 类型 |  是否必填 | 描述 | 示例值  
-|-|-|-|-|-|-
action | String | 必选 | 刷新父级webview | reload

#### 响应参数
参数 | 类型 |  是否必填 | 描述 | 示例值  
-|-|-|-|-|-|-
code | String | 必选 | 响应状态吗 | '0' | '1'
data | json | 必选 | 响应数据 | {}
msg | String | 必选 | 对应状态提示信息 | 'ok' | '失败'

#### 示例
```vue
<script>
export default {
  mounted () {
    // 关闭webview
    this.$op.close()
    
    // 关闭当前webview并刷新父webview
    this.$op.close({action: 'reload'}).then(res => {
      if (res.code === 0) {
        console.log('关闭当前webview并刷新父webview成功')
      } else {
        console.log(res.msg) // 异常处理
      }
    })
  }
}
</script>
```

### 分享
#### 语法
::: tip
this.$op.share(obj)
:::

#### 请求参数
参数 | 类型 |  是否必填 | 描述 | 示例值  
-|-|-|-|-|-|-
platform | Number | 必选 | 分享平台配置 | 详见platform说明
shareUrl | String | 必选 | 分享网址 | https://www.example.com/sharePage/?shareId=1234
title | String | 必选 | 标题 | 分享标题
des | String | 必选 | 内容简介 | 分享内容文案
imageUrl | String | 必选 | 缩略图地址 | https://www.example.com/img/xxx.jpg
shareType | String | 必选 | 分享类型 | 1.纯文本；2.纯图片；3.网页

::: tip platform说明
1. 微信好友
2. 微信朋友圈
3. 手机QQ
4. QQ空间
5. 复制链接
:::

#### 响应参数
参数 | 类型 |  是否必填 | 描述 | 示例值  
-|-|-|-|-|-|-
code | String | 必选 | 响应状态吗 | '0' ; '1' ; '2'
data | json | 必选 | 响应数据 | {}
msg | String | 必选 | 对应状态提示信息 | '分享成功' ; '未安装应用' ; '分享失败'

#### 示例
```vue
<script>
export default {
  mounted () {
    // 分享到微信
    this.$op.share({
      platform: 1,
      shareUrl: 'https://www.example.com/sharePage/?shareId=1234',
      title: '分享标题',
      des: '分享详细描述',
      imageUrl: 'https://www.example.com/img/xxx.jpg',
      shareType: '3',
    }).then(res => {
      if (res.code === 0) {
        console.log('分享成功')
      } else {
        console.log(res.msg) // 异常处理
      }
    })
  }
}
</script>
```

### 高德定位
#### 语法
::: tip
this.$op.getAMapLoc(obj)
:::

#### 请求参数
参数 | 类型 |  是否必填 | 描述 | 示例值  
-|-|-|-|-|-
- | - | - | - | -

#### 响应参数
参数 | 类型 |  是否必填 | 描述 | 示例值  
-|-|-|-|-|-
code | String | 必选 | 响应状态吗 | '0' | '1'
data | json | 必选 | 响应数据 | {}
latitude | double | 必选 | 经度 | 38.04239800347222
longitude | double | 必选 | 纬度 | 114.51499891493056
country | String | 必选 | 国家 | '中国'
province | String | 必选 | 省 | '河北省'
city | String | 必选 | 市 | '石家庄市'
district | String | 必选 | 城区/县 | '长安区'
street | String | 必选 | 街道 | '中山东路'
address | String | 必选 | 地址描述 | '河北省石家庄市长安区中山东路216号靠近石家庄市人民政府'
cityCode | String | 必选 | 城市编码 | 北京：'010'
adCode | String | 必选 | 区域编码 | '130102'
poiName | String | 必选 | 当前位置POI名称 | '石家庄市人民政府'
aoiName | String | 必选 | 当前位置所处AOI名称 | '石家庄市人民政府'
msg | String | 必选 | 对应状态提示信息 | 'ok' | '失败'

#### 返回值示例
```json
{
    "code": "0",
    "data": {
        "adCode": "130102",
        "address": "河北省石家庄市长安区中山东路216号靠近石家庄市人民政府",
        "aoiName": "石家庄市人民政府",
        "city": "石家庄市",
        "cityCode": "0311",
        "country": "中国",
        "district": "长安区",
        "latitude": 38.04239800347222,
        "longitude": 114.51499891493056,
        "poiName": "石家庄市人民政府",
        "province": "河北省",
        "street": "中山东路"
    },
    "msg": "OK"
}
```

::: tip code状态码:
code | msg |  description  
-|-|-
0 | OK | 定位成功，并返回定位信息。
1 | 缺少定位权限。 | 因缺少定位权限导致定位失败。
2 | 网络不太顺畅，请检查网络连接。 | 定位失败，设备问题-用户设置问题，再次申请定位成功率很小。例如：WIFI功能被关闭同时设置为飞行模式、手机没插sim卡且WIFI功能被关闭
3 | 网络不太顺畅，请检查网络连接。 | 定位失败，因信号差等原因导致失败，再次申请定位成功率比较大。
:::

#### 示例
```vue
<script>
export default {
  mounted () {
    // 获取高德定位信息
    this.$op.getAMapLoc().then(res => {
      if (res.code === 0) {
        console.log('获取定位信息成功')
      } else {
        console.log(res.msg) // 异常处理
      }
    })
  }
}
</script>
```

### 原生跳转


