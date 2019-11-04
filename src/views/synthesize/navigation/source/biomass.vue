<template>
  <div>
    <form action enctype="multipart/form-data">
      <input id="file" class="filepath" onchange="changepic(this)" type="file" />
      <br />
      <img src id="show" width="200" />
    </form>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
  changepic() {
        var reads= new FileReader();
        f=document.getElementById('file').files[0];
        reads.readAsDataURL(f);
        reads.οnlοad=function (e) {
            document.getElementById('show').src=this.result;
        };
    }
  }
};
</script>

<style scoped>
</style>
