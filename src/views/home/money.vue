<template>
  <div>
    <h2 class="main-title"> 我的余额 (￥{{ myfund }}) </h2>
    <div class="filter-container">
      <el-row>
        <el-col :span="3">
          <div class="col-label">时间范围</div>
        </el-col>
        <el-col :span="15">
          <el-date-picker
            v-model="time"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-col>
        <el-col :span="3">
          <el-button type="primary" @click="onSubmit">搜索</el-button> 
        </el-col>
        <el-col :span="3">
          <el-button type="info" @click="onShowAdd">添加</el-button> 
        </el-col>
      </el-row> 
    </div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="accountNumber"
        label="账户编号"
        width="180">
      </el-table-column>
      <!-- <el-table-column
        prop="accountName"
        label="姓名"
        width="180">
      </el-table-column> -->
      <el-table-column
        prop="amount"
        label="充值金额"
        width="180">
      </el-table-column>
      <el-table-column
        prop="bankName"
        label="银行名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="checkTime"
        label="审核时间">
      </el-table-column>
      <el-table-column
        prop="checkUserName"
        label="审核人">
      </el-table-column>
      <el-table-column
        prop="contactMobile"
        label="	联系人">
      </el-table-column>
      <el-table-column
        prop="remark"
        label="备注">
      </el-table-column>
      <el-table-column
        width="200"
        label="操作">
        <template slot-scope="scope">
          <el-button v-if="scope.row.isEdit == 1" @click="onShowAdd(scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="50">
    </el-pagination>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible">

      <el-form label-width="100px" :model="form">
        <el-form-item label="账户名称">
          <el-input v-model="form.accountName"></el-input>
        </el-form-item>
        <el-form-item label="账户编号">
          <el-input v-model="form.accountNumber"></el-input>
        </el-form-item>
        <el-form-item label="充值金额">
          <el-input v-model="form.amount"></el-input>
        </el-form-item>
        <el-form-item label="银行名称">
          <el-input v-model="form.bankName"></el-input>
        </el-form-item>
        <el-form-item label="联系人">
          <el-input v-model="form.contactMobile"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="form.remark"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onAdd">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import * as API from '@/store/api'
  const formObj = {
    accountName: '', //	账户名称	string	
    accountNumber: '', //	账户编号	string	
    amount: '', //充值金额(请自己核实金额,默认取申请金额)	number	
    bankName: '', 	// 银行名称	string	
    contactMobile: '', //	联系人	string	
    remark: ''
  }
  export default {
    name: 'user-info',
    data () {
      return {
        myfund: null,
        tableData: null,
        params: {
          startTime: null,
          endTime: null
        },
        time: null,
        paging: {
          page: 1,
          pageSize: 20,
          total:0
        },
        dialogVisible: false,
        form: {...formObj}
      }
    },
    watch: {
      time(val) {
        if (val.length === 2) {
          this.params.startTime = val[0]
          this.params.endTime = val[1]
        }
      }
    },
    mounted () {
      API.myfund().then(res => {
        this.myfund = res.body.data
      })
      this.load()
    },
    methods: {
      onSubmit() {
        this.paging.page = 1
        this.load()
      },
      load() {
        API.fundList({...this.params, ...this.paging}).then(res => {
          this.tableData = res.body.page.items
          this.paging.total = res.body.page.total
        })
      },
      onShowAdd(obj) {
        if (obj) {
          for (const key in this.form) {
            if (this.form.hasOwnProperty(key)) {
              this.form[key] = obj[key]
            }
          }
          this.form.custId = obj.custId
        }
        this.dialogVisible = true
      },
      onAdd() {
        let request
        if (this.form.custId) {
          request = API.fundUpdate(this.form)
        } else {
          request = API.fundCreate(this.form)
        }
        request.then(res => {
          this.$message('添加成功')
          this.dialogVisible = false
          this.load()
        }).catch(err => {
          this.$message.error('添加失败')
          this.dialogVisible = false
        })
      },
      onCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

