// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
    return this.collection.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
    return Math.ceil(this.collection.length / this.itemsPerPage);
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
    var itemsPerPage = this.itemsPerPage,
      itemCount = this.itemCount(),
      pageCount = this.pageCount();

    if (pageIndex >= pageCount || pageIndex < 0) return -1;
    return this.collection.slice(pageIndex * itemsPerPage, itemCount).splice(0, itemsPerPage).length;
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
    if (itemIndex == 0 && this.itemCount() > 0) return 0;
    if (itemIndex > this.itemCount() || itemIndex < 0) return -1;
    return itemIndex > this.colection ? -1 : Math.ceil(itemIndex / this.itemsPerPage) - 1;
}


function isPrime(num) {
    if (num < 0) return false;
    if (num == 2) return true;
    if (num % 2 == 0 || num == 1) return false;
    var algo = num < 10 ? num : Math.floor(num / 2);
    for (i = algo; i > 1 ; i--) {
        if (num % i == 0 && num != i) return false;
    }
    return true;
}