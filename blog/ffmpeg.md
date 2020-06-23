# ffmpeg 下载 ts 文件视频

1. 首先使用 Chrome 打开网页，单击 F12 打开开发者工具
   开始视频播放，在 F12 出来的界面中单击 Network
   在 Network 中有文件列表，检查当中是否存在 m3u8 结尾的文件

2. 如果有 m3u8 结尾的文件，把它的源地址复制下来
   源地址复制下来可能分两段（两个 http），一段是跳转地址，一段是目标地址，将目标地址保留下来即可。
   正确的 m3u8 文件地址大概的样子在下面的命令示例中

3. 按照ffmpeg，Mac直接用

```bash
$ brew install ffmpeg
```

4. 使用以下命令一键下载并自动合成、转码为 mp4
   ffmpeg -i http://xxx.com:8891/1231/index.m3u8 -c copy -bsf:a aac_adtstoasc output.mp4

5. 注意事项
   必须安装 ffmpeg，Linux、Mac 可以使用常规方法安装，Windows 直接去官网下载二进制包直接用、
   当网页中播放的视频流是 ts 格式的时候，本方法适用。
   [下载网页视频并自动合成视频](https://blog.csdn.net/realDonaldTrump/java/article/details/82697757)
