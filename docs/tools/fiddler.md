# Fiddler

## 简介
任何浏览器、系统或平台的免费Web调试代理。[官网](https://www.telerik.com/fiddler)

## 功能
#### 抓包工具
#### 反向代理
#### 请求断点调试（请求、响应）

## 使用场景
### 监控接口请求，验证数据正确性
### 通过修改请求参数，接口返回值修改数据进行调试
### 线上代码debug （将线上代码映射到本地），通过本地代码验证线上错误
### https代理服务器

## 起步
### 下载安装：
[https://www.telerik.com/download/fiddler](https://www.telerik.com/download/fiddler)
### 相关文件：
::: tip
链接：[https://pan.baidu.com/s/1yZbb8LSKaYyVK2nTDUdLiQ](https://pan.baidu.com/s/1yZbb8LSKaYyVK2nTDUdLiQ)<br>
提取码：rsfh
:::
### 基本配置
##### STEP1:
![step1](./assets/img/fiddler/step1.png)
##### STEP2:
![step2](./assets/img/fiddler/step2.png)
##### STEP3:
![step3](./assets/img/fiddler/step3.png)
##### STEP4:
![step4](./assets/img/fiddler/step4.png)

## 插件
### Stave
- 下载地址：[Stave](https://code.google.com/archive/p/stave/)
- 安装方式：
::: tip
执行 `FiddlerStaveSet.exe`<br>
OR<br>
将`Stave.dll` 文件复制Fiddler安装目录的Scripts 文件夹<br>
C:\Program Files (x86)\Fiddler4\Scripts<br>

**注意**：重启Fiddler
:::
## 实战应用
### 手机抓包
##### 1、查看本机IP
![showIP](./assets/img/fiddler/showIP.png)

##### 2、通过手机浏览器访问  
  http://yourIP:8888 (ps: http://10.1.6.110:8888)

##### 3、安装证书  
![installCertificate](./assets/img/fiddler/installCertificate.png)

##### 4、设置网络代理
> 设置》无线局域网》Aibao》点击》配置代理》手动》设置服务器IP、端口》存储
::: tip 提示
Android部分机型需要长按进入设置代理界面
:::

#### iOS
::: tip 提示
1、设置》通用》扫描文件与设备管理》DO_NOT_TRUST_FiddlerRoot》安装  
2、设置》通用》关于本机》证书信任设置》DO_NOT_TRUST_FiddlerRoot》开启
:::

#### Android
::: tip 提示
请使用系统默认浏览器下载,否则系统可能无法识别证书<br>
启用证书，机型差异较大请自行百度
:::

### 断点调试
#### 全局断点
![breakPoint](./assets/img/fiddler/breakPoint.png)
#### 单点请求前
```bash
// 响应断点
bpu url

// 取消断点
bpu 回车
```
#### 单点请求后
```bash
// 响应断点
bpafter url

// 取消断点
bpafter 回车
```

### 异常处理
::: tip Fiddle 开启后不能上网
1. 修改ie代理设置 不勾选代理
2. Fiddler>>tools>>options>>connections>>Act as system proxy on startup 去掉勾选
:::

### 参考文章
- [https://www.cnblogs.com/tugenhua0707/p/4623317.html](https://www.cnblogs.com/tugenhua0707/p/4623317.html)
- [https://www.cnblogs.com/yoyoketang/p/6778006.html](https://www.cnblogs.com/yoyoketang/p/6778006.html)
