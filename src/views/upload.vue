<template>
  <div class="upload">
    <el-upload
      class="upload-demo"
      drag
      action="http://localhost:8102/upload/image"
      multiple
      :file-list="fileList"
      :before-upload="beforeupload"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>

</template>

<script>
export default {
  name: 'upload',
  data () {
    return {
      fileName: ''
      // fileList: [
      //   { name: this.fileName, url: 'http://localhost:8102/upload/image' },
      //   { name: this.fileName, url: 'http://localhost:8102/upload/image' }
      // ]
    }
  },
  methods: {
    beforeupload (file) {
      this.fileName = file.name
      console.log(file.name)
    }
  }
}
</script>

<style scoped>

</style>
