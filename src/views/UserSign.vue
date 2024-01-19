<template>
  <div>
    <h2>회원가입 폼</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="name" class="form-label">이름:</label>
        <input
          type="text"
          v-model="formData.userName"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="nickname" class="form-label">별명:</label>
        <input
          type="text"
          v-model="formData.nickname"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="username" class="form-label">아이디:</label>
        <input
          type="text"
          v-model="formData.userId"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">비밀번호:</label>
        <input
          type="password"
          v-model="formData.userPswd"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="confirmPassword" class="form-label">비밀번호 확인:</label>
        <input
          type="password"
          v-model="formData.confirmPassword"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="birthdate" class="form-label">생년월일:</label>
        <input
          type="date"
          v-model="formData.userBirth"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">주소:</label>
        <input
          type="text"
          v-model="formData.userAddress"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="phoneNumber" class="form-label">핸드폰 번호:</label>
        <input
          type="tel"
          v-model="formData.userPhone"
          class="form-control"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">가입하기</button>
    </form>
  </div>
</template>

<script>
import axios from "../axios/index";
export default {
  data() {
    return {
      formData: {
        userName: "",
        nickname: "",
        username: "",
        userPswd: "",
        confirmPassword: "",
        userBirth: "",
        userAddress: "",
        userPhone: "",
      },
    };
  },
  methods: {
    submitForm() {
      // 회원가입 폼 데이터를 서버로 전송
      axios
        .post("/sign", this.formData)

        .then((response) => {
          console.log("회원가입 성공:", response.data);
          // 성공 후의 동작을 정의하세요
        })
        .catch((error) => {
          console.error("회원가입 실패:", error.response.data);
          // 실패 후의 동작을 정의하세요
        });
    },
  },
};
</script>

<style scoped>
/* 필요에 따라 스타일을 추가하세요 */
</style>
