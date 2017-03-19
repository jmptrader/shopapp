<template>
  <div class=''>
    <div class="app-relative app-bottom-margin  app-bbox app-padding app-bg-white">
      <textarea name="" id="" class="app-textarea app-color-dark " placeholder="输入文字" v-model='message' ></textarea>
      <span class="app-absolute app-r-b app-color-main">{{ message.length }}／100</span>
    </div>
    <div v-for="(img,index) in imgArr" class='app-upload app-relative'>
      <div class="app-hover app-absolute"></div>
      <i class="ui-icon-close-progress app-absolute app-color-main app-r-t" @click = 'delImg(index)'></i>
      <img :src="img.src" alt="" class="app-img">
    </div>
    <div class="app-upload-img app-ccenter app-bottom-margin app-relative">
      <p class="app-relative app-font-middle">点击上传图片</p>
      <input type="file" v-on:change="addImg" class='app-input-file app-absolute app-0-0'>
    </div>

    <div class="app-padding-20" >
      <button class="ui-btn-lg app-bg-main app-color-dark  app-top-padding" @click = " submitInfo">
          发布
      </button>
    </div>
    
  </div>
</template>
<script>
import router from '../router'
import axios from 'axios'
export default {
  data () {
    return {
      message:'',
      imgArr: [],
    }
  },
  created: function () {
      this.$store.commit('changeIndexConf', {
        isFooter: true,
        isHeader: true,
        isSearch: false,
        title: '发布'
      })
  },
  methods:{
    submitInfo: function () {
      if (this.message.length > 100) {
        alert('字数不能超过100！')
      }else if(this.message.length === 0 && this.imgArr.length === 0){
        alert('发布内容不能为空')
      }else{

        let i=0,len = this.imgArr.length,urlArr=[];
        for(i;i<len;i++){
          urlArr.push(encodeURIComponent(this.imgArr[i].src.substring(23)));
        }

        let memberId = localStorage.getItem('memberId');
        let url = this.$store.state.comm.apiUrl + 'data.json';
        
        axios.get(url)
        .then(function (res) {
          if(res.data.status === 1){
            alert('发布成功')
            router.push('/my/publish')
          }else{
            console.log(res.message);
          }
        })
        .catch(function (error) {
          console.log(error);
        })
      }
    },
  	addImg: function (event) {
      let self = this
      if (self.imgArr.length < 2) {
        var file = event.target.files[0]
        if (!/image\/\w+/.test(file.type)) {
          console.log('文件必须为图片！')
          return false;
        }
        var reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function (e) {
          self.imgArr.push({src: this.result})
        }
      } else {
        console.log('一次最多只能上传2张图片！')
      }
    },
    delImg (index){
        this.imgArr.splice(index,1);
    }
  },
  components:{
  }
}
</script>

