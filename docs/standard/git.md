# Git 规范

## 分支含义说明
::: tip
- dev `开发主分支`
- dev-server `开发自测分支` ***仅用于开发自测，不允许直接修改此分支***
- test-server `测试分支` ***开发人员不允许操作***
- release-server `生产环境分支` ***上线分支，开发人员不允许操作***
:::

## 分支命名规范
::: tip
- 紧急修复分支 `hotfix/dev_修复内容`
- 功能迭代分支 `feature/dev_功能名称`
- 提测分支 `feature/release_YYYY-MM-DD`
:::

## 

## 新建功能分支规范
::: tip
1. 切换到生产环境分支 `release-server` 获取最新代码 `git pull`
2. 本地 `release-server` 分支和 `origin/release-server` 分支进行比对 **确保是最新分支**
3. `New Branch` ps: feature/dev_movie
4. 使用该分支进行开发、自测
:::

## 新建提测分支规范
::: tip
1. 切换到生产环境分支 `release-server` 获取最新代码 `git pull`
2. 本地 `release-server` 分支和 `origin/release-server` 分支进行比对 **确保是最新分支**
3. `New Branch` ps: feature/release_YYYY-MM-DD
4. 使用该分支和开发分支进行比对看差异是否影响到其他功能，<br>
如无影响，直接从开发分支merge到当前分支既可以
5. 若比对后影响其他功能，则需要手动合并当前迭代功能代码
6. 确认无误后，从该提测分支merge到开发分支，**确保两个分支此时代码一致**
7. 将提测分支合并到dev-server进行自测、演示
8. 通过自测或演示更后新提测wiki文档，通知测试同学进行测
9. 中间有代码修改都在开发分支进行修改，验证无误合并到提测分支
:::

## 代码提交规范
::: tip
1. 不要频繁的无效提交，确保提交代码不影响其他功能
2. 提交注释要描述清楚，实现了什么功能、修复了哪些bug
3. 提交代码前一定要review本次提交内容，不允许有写死的代码、debug、alert、<br> 
调试console等提交
:::

## 自测规范
::: tip
1. 使用开发分支进行本地开发、联调
2. 将开发分支合并到dev-server进行全流程自测
3. 完成自测，达到提测标准合并到提测分支
:::

## 版本命名规范
::: tip X.Y.Z(又称 Major.Minor.Patch)
- X 表示主版本号，当 API 的兼容性变化时，X 需递增。
- Y 表示次版本号，当增加功能时(不影响 API 的兼容性)，Y 需递增。
- Z 表示修订号，当做 Bug 修复时(不影响 API 的兼容性)，Z 需递增。
:::
