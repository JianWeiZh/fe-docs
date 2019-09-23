# 正则 最佳实践

## 车牌号校验
```js
function isLicensePlate(str) {
    return /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/.test(str);
}
// 正确
isLicensePlate('川A123AB')
// 错误
isLicensePlate('川A123456')
```
## 手机号校验
```js
function isMobile(str) {
  return /^1\d{10}$/.test(str)
}
// 正确
isMobile(13488888106)
// 错误
isMobile(23488888106)
```
