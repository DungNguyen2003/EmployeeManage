<template>
  <tr
    @dblclick="($event) => rowOnDbClick(item)"
    v-for="(item, index) in employees"
    :key="index"
  >
    <td class="check-column"><input type="checkbox" /></td>
    <td>{{ item.EmployeeCode }}</td>
    <td>{{ item.FullName }}</td>
    <td>{{ item.employeeGender }}</td>
    <td>{{ formatDate(item.DateOfBirth) }}</td>
    <td>{{ item.employeePeopleId }}</td>
    <td>{{ item.employeePosition }}</td>
    <td>{{ item.departmentName }}</td>
    <td></td>
    <td></td>
    <td class="feature-column">
      <div class="feature-column__container">
        <span>Sửa</span
        ><button class="btn-fix-info" @click="toggleFixOption(index)">
          <img src="../../assets/icons/Layer2-2.svg" />
        </button>
        <div class="feature-fix-options" v-show="showFixOptions[index]">
          <div class="fix-option">Nhân bản</div>
          <div class="fix-option">Xóa</div>
          <div class="fix-option">Ngừng sử dụng</div>
        </div>
      </div>
    </td>
  </tr>
</template>
<script>
export default {
  created() {
    fetch("https://apidemo.laptrinhweb.edu.vn/api/v1/Employees", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.employees = data;
        console.log(data);
      });
  },
  methods: {
    rowOnDbClick(employee) {
      this.isShowPopup = true;
      this.employeeIdSelected = employee.EmployeeId;
      this.empSelected = employee;
      console.log(this.employeeIdSelected);
      console.log(employee);
    },
    btnAddOnClick() {
      this.isShowPopup = true;
    },

    /**Format ngày tháng
     Author:DungNguyen */
    formatDate(date) {
      try {
        date = new Date(date);
        // lấy ra ngày
        let dateValue = date.getDate();
        // lấy ra tháng
        let monthValue = date.getMonth() + 1;
        // lấy ra năm
        let yearValue = date.getFullYear();
        return `${dateValue}/${monthValue}/${yearValue}`;
      } catch (error) {
        console.log(error);
      }
    },
    /**
     * Toggle fix option
     * Param index of item
     * Author: Dungnguyen(02/03/2023)
     */
    toggleFixOption(index) {
      // hide item
      if (this.showFixOptionIndex !== null) {
        this.showFixOptions[this.showFixOptionIndex] = false;
      }

      if (
        this.showFixOptionIndex == index ||
        this.showFixOptions[index] == true
      ) {
        this.showFixOptions[index] = false;
        this.showFixOptionIndex = null;
      } else {
        this.showFixOptions[index] = true;
        this.showFixOptionIndex = index;
      }
    },
  },
  data() {
    return {
      employees: [],
      isShowOption: false,
      showFixOptions: {},
      showFixOptionIndex: null, // current show option index
      employeeIdSelected: null,
      empSelected: {},
      isShowPopup: false,
    };
  },
};
</script>
