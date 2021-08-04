<template>
  <a-layout-content style="padding: 0 50px">
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>Home</a-breadcrumb-item>
      <a-breadcrumb-item>About</a-breadcrumb-item>
    </a-breadcrumb>
    <a-layout style="padding: 24px 0; background: #fff; width: auto; height: 800px">
      <a-layout class="about-layout-sider" style="align-items: center">
        <a-row>
          <a-space :size="100">
            <a-col :span="8">
              <a-card title="服务器概览" :bordered="false" class="about-card about-card-server">
                <a-card :hoverable="true" class="server-card-l">
                  <p style="position: relative; top: -6px; float: left; margin-right: 25px">服务器1 — [ JAVA-API ]</p>
                  <p class="server-card-font-ip">84.25.121.2</p>
                  <div class="server-state-dot"></div>
                </a-card>
                <a-card :hoverable="true" class="server-card-l">
                  <p style="position: relative; top: -6px; float: left; margin-right: 25px">服务器2 — [ JAVA-API ]</p>
                  <p class="server-card-font-ip">84.25.121.2</p>
                  <div class="server-state-dot-exception"></div>
                </a-card>
                <a-card :hoverable="true" class="server-card-l">
                  <p style="position: relative; top: -6px; float: left; margin-right: 25px">服务器3 — [ JAVA-API ]</p>
                  <p class="server-card-font-ip">84.25.121.2</p>
                  <div class="server-state-dot"></div>
                </a-card>
                <a-card :hoverable="true" class="server-card-l">
                  <p style="position: relative; top: -6px; float: left; margin-right: 25px">服务器3 — [ JAVA-API ]</p>
                  <p class="server-card-font-ip">84.25.121.2</p>
                  <div class="server-state-dot"></div>
                </a-card>
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card title="Api概览" :bordered="false" class="about-card about-card-api">
                <p>Card content</p>
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card title="磁盘概览" :bordered="false" class="about-card about-card-disk">
                <p>Card content</p>
              </a-card>
            </a-col>
          </a-space>
        </a-row>
      </a-layout>
    </a-layout>
  </a-layout-content>
</template>

<style scoped>
.about-layout-sider {
  height: 400px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: white;
}

.about-card {
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  width: 589px;
  height: 270px;
  background-color: #f8f8f8;
}

.about-card-api {
  width: 789px;
}

.about-card-disk {
  width: 789px;
}

.server-card-l {
  height: 35px;
  border-radius: 7px;
  margin-bottom: 10px;
  line-height: 0;
  font-size: 12px;
}

.server-card-font-ip {
  top: -6px;
  position: relative;
  color: #b3b3b3;
}

.server-card-l:hover {
  height: 35px;
  border-radius: 10px;
  background-color: #00bdff;
  left: -3px;
  color: #ffffff;
}

.server-card-l:hover .server-card-font-ip {
  color: #ffffff;
}

.server-state-dot{
  height: 10px;
  width: 10px;
  border: 1px solid #47d700;
  float: right;
  position: relative;
  top: -24px;
  right: -15px;
  border-radius: 5px;
  background-color: #54ff00;
  box-shadow: 0 0 5px 0 rgba(62,255,0,0.5);
}
.server-state-dot-exception{
  height: 10px;
  width: 10px;
  border: 1px solid #d43030;
  float: right;
  position: relative;
  top: -24px;
  right: -15px;
  border-radius: 5px;
  background-color: #ff5733;
  box-shadow: 0 0 5px 0 rgba(255,87,51,0.5);
}

/deep/ .ant-card-head {
  border-bottom: none;
}
</style>
