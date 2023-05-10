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
              v-model="searchQuery"
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
              <tr v-for="(item, index) in searchEmployees" :key="index">
                <td class="check-column"><input type="checkbox" /></td>
                <td>{{ item.employeeCode }}</td>
                <td>{{ item.employeeName }}</td>
                <td>{{ item.employeeGender == 1 ? "Nam" : "Nữ" }}</td>
                <td>{{ formatDate(item.employeeBirthday) }}</td>
                <td>{{ item.employeePeopleId }}</td>
                <td>{{ item.employeePosition }}</td>
                <td>{{ item.departmentName }}</td>
                <td>{{ item.employeeMobilePhoneNumber }}</td>
                <td>{{ item.employeeBankNumber }}</td>
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
                      <div
                        class="fix-option"
                        @click="($event) => employeeDuplicate(item)"
                      >
                        Nhân bản
                      </div>
                      <div
                        class="fix-option"
                        @click="($event) => deleteEmployee(item.employeeId)"
                      >
                        Xóa
                      </div>
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
      });
  },
  methods: {
    /**
     * Duplicate an employee
     * param: an employee
     * author: DungNguyen(1/4/2023)
     */
    employeeDuplicate(employee) {
      this.isShowPopup = true;
      this.employeeIdSelected = employee.EmployeeId;
      this.empSelected = employee;
    },
    /**
     * Show popup
     * Author: DungNguyen
     */
    btnAddEmployee() {
      this.isShowPopup = true;
      this.empSelected = {};
    },
    onCloseFormDetail() {
      this.isShowPopup = false;
    },
    /**Format ngày tháng
     * Param: date
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
    /**
     * delete an employee
     * Param id of employee
     * Author: Dungnguyen(03/04/2023)
     */
    deleteEmployee(id) {
      alert("Ấn OK để xóa");
      fetch(`https://localhost:7082/api/Employees/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.text())
        .then((data) => {
          console.log(data);
          alert("Xóa thành công, reload lại trang để hiển thị kết quả mới");
        })
        .catch((err) => {
          console.log(err);
          alert("Xóa không thành công, có lỗi xảy ra");
        });
    },
  },
  computed: {
    searchEmployees() {
      const query = this.searchQuery.toLowerCase();
      return this.employees.filter((employee) => {
        let employeeCode = employee.employeeCode || "";
        let employeeName = employee.employeeName || "";
        employeeCode = employeeCode.toLowerCase();
        employeeName = employeeName.toLowerCase();
        return employeeCode.includes(query) || employeeName.includes(query);
      });
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
      searchQuery: "",
    };
  },
};
</script>

<style scoped></style>
