<template>
  <div id="formDetail" class="popup">
    <form @submit.prevent="addEmployee" class="popup-form">
      <button class="popup__button" @click="onCloseFormDetail()"></button>
      <div class="popup__header">
        <div class="popup__header-text">Thêm mới nhân viên</div>
        <form class="check-type">
          <input
            type="radio"
            name="type"
            class="customer-type"
            value="Là khách hàng"
          />Là khách hàng
          <input
            type="radio"
            name="type"
            class="provider-type"
            value="Là nhà cung cấp"
          />Là nhà cung cấp
        </form>
      </div>
      <div class="popup__body-top">
        <div class="popup__body-left">
          <div class="m-row m-flex m-col-gap-8">
            <!-- <div class="input-wrapper">
              <label for="employeeCode"
                ><span>Mã NV </span><span class="required">*</span></label
              >
              <input
                type="text"
                name=""
                id="employeeCode"
                class="input--required"
                placeholder="Mã NV"
                v-model="employeeCode"
              />
            </div> -->
            <m-input
              label="Mã NV"
              v-model="employeeCode"
              :required="true"
              placeholder="Nhập mã nhân viên"
            ></m-input>
            <div class="input-wrapper input-wrapper--full-width">
              <!-- <label for="employeeName"
                ><span>Họ tên </span> <span class="required">*</span></label
              >
              <input
                type="text"
                name=""
                id="employeeName"
                class="input--required"
                placeholder="Họ và tên"
                v-model="employeeName"
              />
            </div> -->
              <m-input
                label="Họ tên"
                v-model="employeeName"
                :required="true"
                placeholder="Nhập họ và tên "
              ></m-input>
            </div>
          </div>
          <div class="m-row m-flex m-col-gap-8">
            <div class="input-wrapper input-wrapper--full-width">
              <label for="employeePosition"
                ><span>Đơn vị </span> <span class="required">*</span></label
              >
              <select
                v-model="departmentName"
                name=""
                id="popup__select__position"
              >
                <option value="Phòng nhân sự">Phòng nhân sự</option>
                <option value="Phòng kỹ thuật">Phòng kỹ thuật</option>
                <option value="Phòng kinh doanh">Phòng kinh doanh</option>
              </select>
            </div>
          </div>
          <div class="m-row m-flex m-col-gap-8">
            <div class="input-wrapper input-wrapper--full-width">
              <label for="employeeRole">Chức danh</label>
              <input
                type="text"
                name=""
                id="employeeRole"
                class=""
                placeholder="Chức danh làm việc"
                v-model="employeePosition"
              />
            </div>
          </div>
        </div>
        <div class="popup__body-right">
          <div class="m-row m-flex m-col-gap-16">
            <div class="input-wrapper">
              <label for="employeeBirthday"
                ><span>Ngày sinh </span> <span class="required">*</span></label
              >
              <input
                type="date"
                name=""
                id="employeeBirthday"
                class="input--required"
                v-model="employeeBirthday"
              />
            </div>
            <div class="input-wrapper">
              <label for="genderEmployeeCode"
                ><span>Giới tính </span> <span class="required">*</span></label
              >
              <form action="" class="input__gender-form">
                <div class="check-gender-wrap">
                  <input
                    type="radio"
                    name="gender"
                    id="genderEmployeeCode"
                    value="1"
                    v-model="employeeGender"
                  />Nam
                </div>
                <div class="check-gender-wrap">
                  <input
                    type="radio"
                    name="gender"
                    id="genderEmployeeCode"
                    value="0"
                    v-model="employeeGender"
                  />Nữ
                </div>
                <div class="check-gender-wrap">
                  <input
                    type="radio"
                    name="gender"
                    id="genderEmployeeCode"
                    value="Khác"
                    v-model="employeeGender"
                  />Khác
                </div>
              </form>
            </div>
          </div>
          <div class="m-row m-flex m-col-gap-8">
            <div class="input-wrapper input-wrapper--full-width">
              <label for="employeePeopleId"
                ><span>Số CCCD </span> <span class="required">*</span></label
              >
              <input
                name=""
                id="employeePeopleId"
                class="input--required"
                placeholder="Số căn cước công dân"
                v-model="employeePeopleId"
              />
            </div>
            <div class="input-wrapper">
              <label for="employeePeopleIdDate"
                ><span>Ngày cấp </span> <span class="required">*</span></label
              >
              <input
                type="datetime"
                name=""
                id="employeePeopleIdDate"
                class="input--required"
                v-model="employeePeopleIdDate"
              />
            </div>
          </div>
          <div class="m-row m-flex m-col-gap-8">
            <div class="input-wrapper input-wrapper--full-width">
              <label for="employeePeopleIdLocation"
                ><span>Nơi cấp </span> <span class="required">*</span></label
              >
              <input
                name=""
                id="employeePeopleIdLocation"
                class="input--required"
                placeholder="Nơi cấp căn cước công dân"
                v-model="employeePeopleIdLocation"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="popup__body-bottom">
        <div class="m-row m-flex m-col-gap-8">
          <div class="input-wrapper input-wrapper--full-width">
            <label for="employeeAddress"
              ><span>Địa chỉ </span> <span class="required">*</span></label
            >
            <input
              type="text"
              name=""
              id="employeeAddress"
              class="input--required"
              placeholder="Địa chỉ"
            />
          </div>
        </div>
        <div class="m-row m-flex m-col-gap-8">
          <div class="input-wrapper input-wrapper--full-width">
            <label for="employeeMobilePhoneNumber"
              ><span>Số ĐT di động </span>
              <span class="required">*</span></label
            >
            <input
              type="text"
              name=""
              id="employeeMobilePhoneNumber"
              class="input--required"
              placeholder="Số điện thoại"
              v-model="employeeMobilePhoneNumber"
            />
          </div>
          <div class="input-wrapper input-wrapper--full-width">
            <label for="employeeLandlinePhoneNumber"
              ><span>Số ĐT cố định </span>
            </label>
            <input
              type="text"
              name=""
              id="employeeLandlinePhoneNumber"
              class=""
              placeholder="Số điện thoại cố định"
            />
          </div>
          <div class="input-wrapper">
            <label for="employeeEmail"
              ><span>Email </span> <span class="required">*</span></label
            >
            <input
              type="email"
              name=""
              id="employeeEmail"
              class="input--required"
              placeholder="example@gmail.com"
              v-model="employeeEmail"
            />
          </div>
        </div>
        <div class="m-row m-flex m-col-gap-8">
          <div class="input-wrapper input-wrapper--full-width">
            <label for="employeeBankNumber"
              ><span>Số TK ngân hàng </span>
              <span class="required">*</span></label
            >
            <input
              type="text"
              name=""
              id="employeeBankNumber"
              class="input--required"
              placeholder="Số TK ngân hàng"
              v-model="employeeBankNumber"
            />
          </div>
          <div class="input-wrapper input-wrapper--full-width">
            <label for="employeeBankName"
              ><span>Tên ngân hàng </span>
              <span class="required">*</span></label
            >
            <input
              type="text"
              name=""
              id="employeeBankName"
              class="input--required"
              placeholder="Tên ngân hàng"
            />
          </div>
          <div class="input-wrapper">
            <label for="employeeBankBranch"
              ><span>Chi nhánh </span> <span class="required">*</span></label
            >
            <input
              name=""
              id="employeeBankBranch"
              class="input--required"
              placeholder="Chi nhánh ngân hàng"
            />
          </div>
        </div>
      </div>
      <div class="popup__footer">
        <div class="footer__right">
          <button id="btnStore" class="btn">Cất</button>
          <button type="submit" class="btn btn--default">Cất và thêm</button>
        </div>
        <div class="footer__left">
          <!-- <button class="btn">Huy</button> -->
          <button @click="onCloseFormDetail" id="btnCancel" class="btn">
            Hủy
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "EmployeeDetail",
  props: ["employeeId", "employeeInput"],
  created() {
    // Lưu trữ dữ liệu ban đầu (trước khi bị chỉnh sửa)
    this.dataOld = JSON.stringify(this.employeeInput);

    // Chuyển dữ liệu từ props sang data:
    this.employee = this.employeeInput;

    // Lấy data về:
    if (this.employeeId) {
      fetch(
        `https://apidemo.laptrinhweb.edu.vn/api/v1/Employees/${this.employeeId}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.employee = data;
        });
    }
  },
  methods: {
    btnCloseOnClick() {
      // Kiểm tra dữ liệu đã thay đổi hay chưa
      const dataNew = JSON.stringify(this.employee);
      console.log(dataNew);
      console.log(this.dataOld);

      if (dataNew != this.dataOld) {
        alert("Bạn đã thay đổi dữ liệu, có muốn xóa không?");
      }
      // this.hideFunction();
      this.$emit("hideMe");
    },
    /**
     * Ẩn form
     * Author: DungNguyen(02/03/2023)
     */
    onCloseFormDetail() {
      this.$emit("hideMe");
    },
    /**
     * Add employee info to database
     * Author: Dungnguyen (02/03/2023)
     */
    addEmployee() {
      fetch("https://localhost:7082/api/Employees/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          employeeCode: this.employeeCode,
          employeeName: this.employeeName,
          employeeGender: this.genderEmployeeCode,
          employeeBirthday: this.employeeBirthday,
          employeePosition: this.employeePosition,
          employeePeopleId: this.employeePeopleId,
          employeePeopleIdLocation: this.employeePeopleIdLocation,
          employeeMobilePhoneNumber: this.employeeMobilePhoneNumber,
          employeeEmail: this.employeeEmail,
          employeeBankNumber: this.employeeBankNumber,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          this.employees = data;
        })
        .catch((error) => {
          console.log(error);
          console.log(this.employeeBirthday);
        });
    },
  },
  data() {
    return {
      employeeCode: "",
      employeeName: "",
      employeeBirthday: "",
      employeeGender: "",
      employeePosition: "",
      employeePeopleId: "",
      employeePeopleIdDate: "",
      employeePeopleIdLocation: "",
      departmentName: "",
      employeeMobilePhoneNumber: "",
      employeeEmail: "",
      employeeBankNumber: "",
      employees: [],
      employee: {},
      dataOld: null,
    };
  },
};
</script>
