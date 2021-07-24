<template>
  <div>
    <a-row type="flex" justify="start" align="middle">
      <a-col :flex="10" style="z-index: 999;">
        <a-row type="flex" justify="start" align="middle" style="width: 550px;">
          <a-col :flex="4">
            <div style="width: 250px;" id="he-plugin-simple"></div>
          </a-col>
          <a-col :flex="0" style="border: 1px solid #a7a7a7;width: 1px;height:40px;"/>
          <a-col :flex="3">
            <a-statistic title="当前时间" :value="date" :value-style="{color:'#335D9D',fontSize:'15px'}"
                         style="margin-left: 30px;width: 250px;"/>
          </a-col>
        </a-row>
      </a-col>
      <a-col :flex="0.2">
        <a-avatar :size="35" icon="user"/>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "Main-Header",
  data() {
    return {
      date: '1900年1月1日星期一 00:00:00',
      time: '',
      timer: '',
      theme: ''
    }
  },
  created() {
    setInterval(() => {
      this.getDate();
    }, 200)
    this.weather();
  },
  methods: {
    getDate() {
      let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
      let time = new Date();
      let year = time.getFullYear();
      let month = time.getMonth() + 1;
      let day = time.getDate();
      let week = weeks[time.getDay()];
      this.getTime();
      this.date = year + '年' + month + '月' + day + "日" + week + "   " + this.time;
    },
    getTime() {
      let time = new Date();
      let hour = time.getHours();
      let minutes = time.getMinutes();
      let seconds = time.getSeconds();
      if (minutes < 10) {
        minutes = '0' + minutes
      }
      if (seconds < 10) {
        seconds = '0' + seconds
      }
      this.time = hour + ":" + minutes + ":" + seconds
    },
    weather() {
      //和风天气插件调用
      window.WIDGET = {
        "CONFIG": {
          "modules": "0124",
          "background": "5",
          "tmpColor": "9FC5E8",
          "tmpSize": "16",
          "cityColor": "434343",
          "citySize": "16",
          "aqiColor": "E6B8AF",
          "aqiSize": "16",
          "weatherIconSize": "24",
          "alertIconSize": "18",
          "padding": "10px 10px 10px 10px",
          "shadow": "0",
          "language": "auto",
          "fixed": "false",
          "vertical": "top",
          "horizontal": "left",
          "key": "d5290ec73e2a421fa3197b364ac2948a"
        }
      };
      (function (d) {
        let c = d.createElement('link')
        c.rel = 'stylesheet'
        c.href = 'https://widget.heweather.net/simple/static/css/he-simple.css?v=1.4.0'
        let s = d.createElement('script')
        s.src = 'https://widget.heweather.net/simple/static/js/he-simple.js?v=1.4.0'
        let sn = d.getElementsByTagName('script')[0]
        sn.parentNode.insertBefore(c, sn)
        sn.parentNode.insertBefore(s, sn)
      })(document);
    }
  }
}
</script>

<style>
#weather-view-he {
  box-shadow: 1px 1px 10px #3e3e3e;
}
</style>
