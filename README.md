
# translateThenSearch
This is a chrome extension to translate Chinese into English, and then search in English. It can complete this process with one click, and improve your search effect. You can bind shortcut keys or use the right-click menu to trigger this tool.


# 打包方式
```
cd translateThenSearch && zip -r "$OLDPWD/package.zip" . -x .git/\*
```

# 绑定快捷键
访问 chrome://extensions/shortcuts ，绑定一个快捷键。然后google输入框输入中文，按下快捷键，后续步骤自动就完成了。

# 版本迭代记录
## v1.0.1
支持一键把google search输入框中的中文翻译成英文，并自动触发搜索。
唤起该功能的方式：
1. google 搜索框输入中文之后，通过快捷键，一键完成翻译后搜索功能。
2. google 搜索框输入中文之后，光标选中输入框文字，右键菜单，选择”翻译后英文再搜“，一键完成翻译、并搜索。