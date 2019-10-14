# 工具方法

## 获取token
```js
/**
 * 获取token
 * @returns {string}
 */
export const getToken = () => {
  const ua = window.navigator.userAgent
  return (ua.indexOf('token:') !== -1 && ua.substring(ua.indexOf('token:') + 6)) || localStorage.getItem('token')
}
```

## 环境检测
```js

```

## 获取地址栏参数search & hash
```js

```

## 获取url中的路由信息
```js
/**
 * 
 * @param url
 * @param mode
 * @param prefix
 * @return {*}
 */
export const getRoutePathByUrlString = (url, mode = 'hash', prefix = '') => {
  return url
}
```

## 环境检测
```js

```

## 环境检测
```js

```

## 环境检测
```js

```

## 环境检测
```js

```

## 环境检测
```js

```

## 环境检测
```js

```
