---
title: Electron
group:
  title: 移动&桌面应用
  order: 10
---

### 声音播放
```js
// this.localAudio = window.speechSynthesis;
    // this.audioService = new SpeechSynthesisUtterance()
    // this.audioService.text = '中国对测试打发撒旦发射点阿斯顿发顺丰大撒旦发生发射点阿迪斯发书法大赛得分'
    // this.audioService.lang = 'zh-CN'
    // this.audioService.volume = '1'
    // this.audioService.pitch = 1
    // this.audioService.rate = 1
    // this.localAudio.speak(this.audioService)
    var wordSpeaker = {
      _synth: null,
      _msg: null,
      // 0-2,声音的尖锐程度
      pitch: 1,
      //0-3,声音播放速率
      rate: 1,

      Speak: function (words) {
        if (words == null) {
          return;
        }
        if (this._synth == null) {
          this._synth = window.speechSynthesis;
        }

        if (this._msg == null) {
          this._msg = new SpeechSynthesisUtterance();
        }
        this._msg.lang = "zh-CN";
        this._msg["rate"] = this.rate;
        this._msg["pitch"] = this.pitch;
        this._msg["text"] = words;

        this._synth.speak(this._msg);
      },

      Stop: function () {
        if (this._synth == null) {
          return;
        }

        this._synth.cancel();
      },
    };
    wordSpeaker.Speak("微信收款19.99元");
```