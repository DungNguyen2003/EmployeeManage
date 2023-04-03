<template>
  <div class="table__paging">
    <div class="table__paging-left">Total: 4 records</div>
    <div class="table_paging_right">
      <select name="" id="">
        <option value="1">20 bản ghi trên 1 trang</option>
        <option value="3">15 bản ghi trên 1 trang</option>
        <option value="2">10 bản ghi trên 1 trang</option>
      </select>
      <div class="pagination">
        <span class="pagination-btn pagination-btn--disabled">Trước</span>
        <span class="page-number page-number-current">1</span>
        <span class="page-number">2</span>
        <span class="page-number">3</span>
        <span>...</span>
        <span class="page-number">10</span>
        <span class="pagination-btn">Sau</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
@import url(./tablepaging.css);
</style>
