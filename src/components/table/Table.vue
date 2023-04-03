<template>
  <div class="content__body">
    <div class="table-wrapper">
      <TableToolbar></TableToolbar>
      <TableContainer></TableContainer>
    </div>
    <TablePaging></TablePaging>
  </div>
</template>

<script>
import TableContainer from "../../container/table-container/TableContainer.vue";
import TableToolbar from "../table-toolbar/TableToolbar.vue";
import TablePaging from "../table-paging/TablePaging.vue";

export default {
  name: "MisaTable",
  components: {
    TableContainer,
    TableToolbar,
    TablePaging,
  },
};
</script>
