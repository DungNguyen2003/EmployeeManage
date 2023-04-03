<template>
  <div class="content">
    <div class="content__header">
      <div class="content__header-name">Nhân viên</div>
      <button
        id="addEmployeeInfo"
        class="btn btn--default btn-add-employee"
        @click="btnAddEmployee"
      >
        Thêm mới nhân viên
      </button>
    </div>
    <!-- <Table></Table> -->
    <div class="content__body">
      <div class="table-wrapper">
        <div class="table__toolbar">
          <div class="table__toolbar-reload">
            <img src="../assets/icons/refresh.png" alt="" />
          </div>
          <div class="table__toolbar-search">
            <input
              type="text"
              class="table__input-search"
              placeholder="Tìm kiếm trong danh sách"
              checked
            />
            <img
              src="../assets/icons/Layer2-1.svg"
              alt=""
              class="table__icon-search"
            />
          </div>
        </div>
        <div class="table-container">
          <table class="table" id="tbEmployeeList">
            <thead>
              <TableHeader></TableHeader>
            </thead>
            <tbody>
              <tr
                @dblclick="($event) => rowOnDbClick(item)"
                v-for="(item, index) in employees"
                :key="index"
              >
                <td class="check-column"><input type="checkbox" /></td>
                <td>{{ item.employeeName }}</td>
                <td>{{ item.employeeCode }}</td>
                <td>{{ item.employeeGender == 1 ? "Nam" : "Nữ" }}</td>
                <td>{{ formatDate(item.employeeBirthday) }}</td>
                <td>{{ item.employeePeopleId }}</td>
                <td>{{ item.employeePosition }}</td>
                <td>{{ item.departmentName }}</td>
                <td></td>
                <td></td>
                <td class="feature-column">
                  <div class="feature-column__container">
                    <span>Sửa</span
                    ><button
                      class="btn-fix-info"
                      @click="toggleFixOption(index)"
                    >
                      <img src="../assets/icons/Layer2-2.svg" />
                    </button>
                    <div
                      class="feature-fix-options"
                      v-show="showFixOptions[index]"
                    >
                      <div class="fix-option">Nhân bản</div>
                      <div class="fix-option">Xóa</div>
                      <div class="fix-option">Ngừng sử dụng</div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <TablePaging></TablePaging>
    </div>
  </div>
  <!-- Form chi tiet -->
  <EmployeeDetail
    v-if="isShowPopup"
    @hideMe="onCloseFormDetail"
    :employeeId="employeeIdSelected"
    :employeeInput="empSelected"
  ></EmployeeDetail>
</template>

<script>
import TableHeader from "../components/table-header/TableHeader.vue";
import EmployeeDetail from "../view/employee/EmployeeDetail.vue";
import TablePaging from "../components/table-paging/TablePaging.vue";

// import Table from "../components/table/Table.vue";
export default {
  name: "TheMain",
  components: { EmployeeDetail, TableHeader, TablePaging },
  props: ["name"],
  created() {
    fetch("https://localhost:7082/api/Employees/")
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
    btnAddEmployee() {
      this.isShowPopup = true;
    },
    onCloseFormDetail() {
      this.isShowPopup = false;
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
      isShowPopup: false,
      employees: [],
      isShowOption: false,
      showFixOptions: {},
      showFixOptionIndex: null, // current show option index
      employeeIdSelected: null,
      empSelected: {},
    };
  },
};
</script>

<style scoped></style>
