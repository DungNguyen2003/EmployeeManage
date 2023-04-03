<template>
  <div class="table-container">
    <table class="table" id="tbEmployeeList">
      <thead>
        <TableHeader></TableHeader>
      </thead>
      <tbody>
        <TableBody></TableBody>
      </tbody>
    </table>
  </div>
</template>

<script>
import TableBody from "../../components/table-body/TableBody.vue";
import TableHeader from "../../components/table-header/TableHeader";

export default {
  name: "TableContainer",
  components: { TableBody, TableHeader },
};
</script>
<style scoped>
@import url(./tablecontainer.css);
</style>
