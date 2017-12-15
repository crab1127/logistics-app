<template>
    <form class="mail">
        <div>
            <label for="">{{ $t('mail.fjd') }}</label>
            <el-input></el-input>
        </div>
        <div>
            <label for="">{{ $t('mail.sjd') }}</label>
            <el-input></el-input>
        </div>
        <div>
            <label for="">{{ $t('mail.zl') }}&nbsp;&nbsp;&nbsp;</label>
            <el-input></el-input>KG &nbsp;
            <label for="">{{ $t('mail.cd') }} </label>
            <el-input></el-input>CM
        </div>
        <div>
            <label for="">{{ $t('mail.kd') }}&nbsp;&nbsp;&nbsp;</label>
            <el-input></el-input>CM &nbsp;
            <label for="">{{ $t('mail.gd') }} </label>
            <el-input></el-input>CM
        </div>
        <!-- <div>
            <span>{{ $t('mail.tjzl') }}</span>
        </div> -->
        <div>
            <el-button type="primary">{{ $t('mail.ljgs') }}</el-button>
            <el-button type="text" icon="plus">{{ $t('mail.tjbg') }}</el-button>
        </div>
    </form>
</template>

<script>
export default {
  name: 'mail'
}
</script>

<style scoped>
.mail > div {
  display: flex;
  margin: 8px 0;
  align-items: center;
}
.mail .el-input {
  margin-left: 10px;
  flex: 1;
}
</style>


