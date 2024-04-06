# python环境

## 下载安装python2 + python3
下载 https://www.python.org/downloads/

`win11` 下输入 `python` 自动打开 MicroStore App 安装界面的问题，
● 搜索电脑设置   应用执行别名 , 关闭python.exe python3.exe
● 或者直接删掉 环境变量 C:\Users\xxx\AppData\Local\Microsoft\WindowsApps 
这个环境变量没生效？可以重启电脑


## 环境变量
D:\Python27
D:\Python27\Scripts
D:\Python312
D:\Python312\Scripts

D:\Python27, D:\Python312
目录下的 python.exe 可以删了，保留python2.exe 或 python3.exe使用


## pip共存
```sh
python2 -m pip install --upgrade pip --force-reinstall
python3 -m pip install --upgrade pip --force-reinstall
```
(python3下载pip失败，可能要科学上网)

D:\Python27\Scripts，D:\Python312\Scripts
目录下 pip.exe 可以删了，保留pip2.exe 或 pip3.exe使用

