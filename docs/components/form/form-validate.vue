<template>
  <div>
    <c-col>
      <c-form :rules="descriptor" :model="data" ref="formRef">
        <c-form-item
          prop="name"
          label="Name"
          required
          :trigger="['change', 'input', 'blur']"
        >
          <c-input v-model="data.name"></c-input>
        </c-form-item>
        <c-form-item prop="pwd" label="Password" required :trigger="['input']">
          <c-input input-type="password" v-model="data.pwd"></c-input>
        </c-form-item>
        <c-form-item
          ref="itemRef"
          prop="checkPwd"
          label="Check Password"
          :trigger="['input']"
          required
        >
          <c-input input-type="password" v-model="data.checkPwd"></c-input>
        </c-form-item>
        <c-form-item>
          <c-button type="primary" @click="submit(formRef)">Submit</c-button>
        </c-form-item>
      </c-form>
    </c-col>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import asyncValidator from 'async-validator'
import { reactive } from 'vue'
import type { Rules } from 'async-validator'

const formRef = ref()
const itemRef = ref()

const nameValidator = (rule: any, name: string, callback: any) => {
  if (name === 'Siji') {
    callback()
  } else {
    callback(new Error('名字错误'))
  }
}

const passValidator = (rule: any, value: string, callback: any) => {
  if (value !== '') {
    formRef.value?.validateField('checkPwd')
    callback()
  } else {
    callback()
  }
}

const checkValidator = (rule: any, value: string, callback: any) => {
  if (value == data.pwd) {
    callback()
  } else {
    callback(new Error('Passwords are Different'))
  }
}

const descriptor: Rules = {
  name: [
    {
      required: true,
      message: '请填写名字'
    },
    {
      min: 5,
      max: 10,
      message: '长度为5-10'
    }
  ],
  pwd: [
    { required: true, message: '请填写密码' },
    { validator: passValidator }
  ],
  checkPwd: [
    { required: true, message: '请填写密码' },
    { validator: checkValidator }
  ]
}

const validator = new asyncValidator(descriptor)
const data = reactive({
  name: 'Siji',
  pwd: '',
  checkPwd: ''
})

const submit = (formEl) => {
  if (!formEl) return

  formEl
    .validate()
    .then((res) => {
      console.log(res)

      console.log('success')
    })
    .catch((err) => {
      console.log(err)

      console.log('failed')
    })
}
</script>
