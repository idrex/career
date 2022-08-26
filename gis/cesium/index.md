## 学习资源

<div class="entry-content"><h1>学习Cesium的过程中，搜了很多资料，多谢那些愿意分享的朋友</h1><p>1.43官方文档，不想自己发布服务的看这里 <a href="http://cesium.xin/cesium/Documentation/" target="_blank" rel="noopener">Documentation</a></p><h3>1.官网 <a href="https://cesiumjs.org/tutorials/">https://cesiumjs.org/tutorials/</a></h3><h3>2.英文的读着费劲的可以来这里</h3><p><a href="http://www.marsgis.cn/cesium/docs/go.html?id=12">http://www.marsgis.cn/cesium/docs/go.html?id=12</a>,这里面还包含一些别的文档，大家可以自己探索探索</p><h3>3.超图</h3><p><a href="http://support.supermap.com.cn:8090/webgl/examples/examples.html#layer">http://support.supermap.com.cn:8090/webgl/examples/examples.html#layer</a>,一份优秀的二次开发作品，其中很多用例做的非常好，用过skyline的朋友可能会看到很多熟悉的功能</p><h3>4.fuckgiser 的原理篇</h3><p><a href="http://www.cnblogs.com/fuckgiser/p/5706842.html">http://www.cnblogs.com/fuckgiser/p/5706842.html</a></p><h3>5.kamijawa 的系列教程</h3><p><a href="https://my.oschina.net/u/1585572">https://my.oschina.net/u/1585572</a></p><h3>6.绿色记忆</h3><p><a href="https://blog.gmem.cc/cesium-study-note">https://blog.gmem.cc/cesium-study-note</a></p><h3>7.kamijawa的博客</h3><p><a href="https://my.oschina.net/u/1585572/blog">https://my.oschina.net/u/1585572/blog</a></p><h3>8.cesium-drawhelper 绘制实例</h3><p><a href="https://github.com/leforthomas/cesium-drawhelper">https://github.com/leforthomas/cesium-drawhelper</a></p><h3>9.skyline-TerraExplorerWeb</h3><p><a href="http://skylineglobe.com/sg/TerraExplorerWeb/TerraExplorer.html">http://skylineglobe.com/sg/TerraExplorerWeb/TerraExplorer.html</a></p><h3>10 模型下载</h3><p>朱峰社区 <a href="http://www.zf3d.com/">http://www.zf3d.com/</a></p><h3>11 基于Webpack的Cesium+Vue应用</h3><p><a href="https://blog.csdn.net/m0_37972557/article/details/79768408">https://blog.csdn.net/m0_37972557/article/details/79768408</a></p><h3>12 cesium plugins</h3><p><a href="http://52.4.31.236/plugins/">http://52.4.31.236/plugins/</a></p><h3>13 Shapefile,&nbsp;GeoJSON,&nbsp;TopoJSON,&nbsp;DBF&nbsp;and&nbsp;CSV&nbsp;files&nbsp;互转</h3><p><a href="https://mapshaper.org/">https://mapshaper.org/&nbsp;</a></p><h3>14&nbsp;cesium中文论坛</h3><p><a href="http://cesiumcn.org/">http://cesiumcn.org/</a></p><h3>15 osgjs</h3><p><a href="https://fav.github.io/forstudy">https://fav.github.io/forstudy</a></p><h3>16 3Blue1Brown 的教学视频，里面很多，强烈推荐线性代数的部分</h3><p><a href="http://space.bilibili.com/88461692/channel/detail?cid=9450">http://space.bilibili.com/88461692/channel/detail?cid=9450</a></p><h3>17. 跃焱邵隼的博客</h3><p><a href="https://www.wellyyss.cn/ysCesium/views/index.html">https://www.wellyyss.cn/ysCesium/views/index.html</a></p><h3>18. 模型下载</h3><p><a href="https://free3d.com/">https://free3d.com/</a></p><h3>未完待续…</h3><p>本篇建议收藏，因为经常会翻开看 ^_^</p></div>
## 天地图服务

全球矢量地图服务

```js
var viewer = new Cesium.Viewer("cesiumContainer", {
  animation: false, //是否显示动画控件
  baseLayerPicker: false, //是否显示图层选择控件
  geocoder: true, //是否显示地名查找控件
  timeline: false, //是否显示时间线控件
  sceneModePicker: true, //是否显示投影方式控件
  navigationHelpButton: false, //是否显示帮助信息控件
  infoBox: true, //是否显示点击要素之后显示的信息
  imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
    url: "http://t0.tianditu.com/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles",
    layer: "tdtVecBasicLayer",
    style: "default",
    format: "image/jpeg",
    tileMatrixSetID: "GoogleMapsCompatible",
    show: false,
  }),
});
```

中文注记服务

```js
viewer.imageryLayers.addImageryProvider(
  new Cesium.WebMapTileServiceImageryProvider({
    url: "http://t0.tianditu.com/cva_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cva&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg",
    layer: "tdtAnnoLayer",
    style: "default",
    format: "image/jpeg",
    tileMatrixSetID: "GoogleMapsCompatible",
  })
);
```

全球影像地图服务

```js
var viewer = new Cesium.Viewer("cesiumContainer", {
  animation: false, //是否显示动画控件
  baseLayerPicker: false, //是否显示图层选择控件
  geocoder: true, //是否显示地名查找控件
  timeline: false, //是否显示时间线控件
  sceneModePicker: true, //是否显示投影方式控件
  navigationHelpButton: false, //是否显示帮助信息控件
  infoBox: true, //是否显示点击要素之后显示的信息
  imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
    url: "http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles",
    layer: "tdtBasicLayer",
    style: "default",
    format: "image/jpeg",
    tileMatrixSetID: "GoogleMapsCompatible",
    show: false,
  }),
});
```

注记服务

```js
viewer.imageryLayers.addImageryProvider(
  new Cesium.WebMapTileServiceImageryProvider({
    url: "http://t0.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg",
    layer: "tdtAnnoLayer",
    style: "default",
    format: "image/jpeg",
    tileMatrixSetID: "GoogleMapsCompatible",
    show: false,
  })
);
```


## Entity

[Cesium 中文 API 文档 v1.72](https://www.wenjiangs.com/docs/cesium-api)
[空间数据可视化之Entity](https://blog.csdn.net/baidu_40393148/article/details/118154819)
[Cesium.js点击事件](https://www.cnblogs.com/-llf/p/10431978.html?ivk_sa=1024320u)
[cesium开发教程集合](https://blog.csdn.net/baidu_40393148/category_11154462.html?spm=1001.2014.3001.5482)
[Cesium实战付费教程](https://blog.csdn.net/xietao20/category_10374498.html)
[专栏](https://xiaozhuanlan.com/gishome-cesium)

## Tools

[坐标系及坐标转换（工具篇）](https://www.jianshu.com/p/5839f615bb94)