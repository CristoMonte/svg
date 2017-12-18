# svg

> A Vue.js project

## 参考

> 项目依据https://juejin.im/post/59bb864b5188257e7a427c09

> 参考资料 张鑫旭大大的文章--[未来必热：SVG Sprite技术介绍](http://www.zhangxinxu.com/wordpress/2014/07/introduce-svg-sprite-technology/?spm=a313x.7781069.1998910419.50)

> 还是张鑫旭大大的文章--[SVG精简压缩工具svgo简介](http://www.zhangxinxu.com/wordpress/2016/02/svg-compress-tool-svgo-experience/)

> 以及[svgo官方文档](http://npm.taobao.org/package/svgo)


### 图标使用

  [阿里爸爸的矢量图标库](http://www.iconfont.cn/)
  
  提供了unicode,font-class,symbol三种使用方式，初次使用的时候，我是一个一个下载到本地，并且是png格式的，简直就是血泪史
  
  不说了，不说了，如果项目使用的icon比较多的话，建议在iconfont网站上建立一个自己的project，然后在项目中引入这个project就好了[具体操作步骤](http://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8cf4382a&helptype=code)

刚开始用png的时候真的是难受的，图片在手机适配的时候经常是模糊不清的，自从用了svg后，妈妈再也不用担心适配了，毕竟是矢量图标，一般情况下的放大和缩小

是丝毫不会影响图标质量的

好了，废话说完了，主要是吐槽一下之前使用图标的老土方式


### 正经开始

symbol的第一种矢量方式肯定是引入iconfont的js文件，然后根据类名去使用图标，步骤在上面有，我只想说一下这种方式我遇到的麻烦的地方

就是每次图标在增删改的时候，js文件的hash都会改变，这就导致每次增删改操作你都要去操作，其实真的挺麻烦的

尤其是多人开发的时候，你根本不知道什么时候文件名就改了，这样多人本地开发就很不方便了  

今天所用的方式是将图标存储到本地，直接import使用

这种方式也有不好的地方，就是每个图标都要下载才能使用，我这种懒人是不愿意去寻找图标，下载图标的

但是好处也有，就是避免了多人协作开发的矛盾，也只有这种方式，才存在今天的svg优化

第一种方式的优化我现在是没有发现什么优化方式的，日后发现了，再补充


### 优化来了

神器就是这个东西`svg-sprite-loader`

`webpack`是默认用`url-loader`来处理svg的

```js
  test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
  loader: 'url-loader',
  options: {
    limit: 10000,
    name: utils.assetsPath('img/[name].[hash:7].[ext]')
  }
```

现在我们要使用`svg-sprite-loader`

肯定要先下载咯：

```bash
npm install svg-sprite-loader -d-s
```
  
```js
  ···
  ···
  {
    test: /\.svg$/,
    loader: 'svg-sprite-loader',
    include: [resolve('src/icons')],
    options: {
      symbolId: '[name]'
    }
  },
  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: 'url-loader',
    exclude: [resolve('src/icons')],
    options: {
      limit: 10000,
      name: utils.assetsPath('img/[name].[hash:7].[ext]')
    }
  }
  ···
  ···
```
  
其实主要就是用`webpack`的`exclude`和`include`让`url-loader`不处理icon图标存放的录而是让`svg-sprite-loader`来处理对应目录下的svg

因为你无法保证所以svg都是图标，然后就是压缩优化了`svgo`  

其实很像一个压缩工具，但是这个工作真的很强大，我看了一下，demo中压缩最高的将近50%，很夸张

步骤就不细说了，写这个很费脑力，而且还有项目要写，步骤请参考[svgo官方文档](http://npm.taobao.org/package/svgo)


