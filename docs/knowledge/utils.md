# 工具方法

## 获取token
```js
/**
 * 获取token
 * @returns {string}
 */
export const getToken = () => {
  const ua = window.navigator.userAgent
  const currentToken = ua.indexOf('token:') !== -1 
      ? (window.navigator.userAgent.substring(window.navigator.userAgent.indexOf('token:') + 6)) 
      : localStorage.getItem('token')
  return currentToken
}
```

## 环境检测
```js

```

## 获取地址栏参数search & hash
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

## 环境检测
```js

```

## 环境检测
```js

```
