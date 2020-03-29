const { LimitedArray, getIndexBelowMaxForKey } = require('./hashTableHelpers');

const HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

//limit와 storage를 받아서 새롭게 만들어 복사 하는 함수
function makeNewStorage(storage, limit) {
  let tempStorage = LimitedArray(limit);
  storage.each(function(ele, idx) {
    tempStorage[idx] = ele;
  });
  return tempStorage;
}

function countElement(storage) {
  let count = 0;
  storage.each(ele => {
    if (ele !== undefined) {
      count += ele.length;
    }
  });
  return count;
}

// 튜플형식의 tempEle선언
//index생성이 limit의 영향을 받기 때문에 카운팅 후 삽입
HashTable.prototype.insert = function(k, v) {
  // 카운팅해서 resize 구현
  if (this._size + 1 > this._limit * 0.75) {
    this._limit *= 2;
    this._storage = makeNewStorage(this._storage, this._limit);
  }

  const index = getIndexBelowMaxForKey(k, this._limit);
  let tempArr = this._storage.get(index) || [];
  tempArr.push([k, v]);
  this._storage.set(index, tempArr);
  this._size += 1;
};

HashTable.prototype.retrieve = function(k) {
  const index = getIndexBelowMaxForKey(k, this._limit);
  let tempArr = this._storage.get(index);
  let result = undefined;
  if (tempArr !== undefined) {
    tempArr.forEach(ele => {
      if (k === ele[0]) {
        result = ele[1];
      }
    });
  }
  return result;
};

// filter를 이용해서 걸러내고 다시 저장
HashTable.prototype.remove = function(k) {
  const index = getIndexBelowMaxForKey(k, this._limit);
  let tempArr = this._storage.get(index);
  if (tempArr !== undefined) {
    tempArr = tempArr.filter(ele => {
      if (k === ele[0]) {
        return false;
      }
      return true;
    });
    if (tempArr.length === 0) {
      this._storage.set(index, undefined);
    } else {
      this._storage.set(index, tempArr);
    }
  }

  // 카운팅해서 resize 구현
  let count = countElement(this._storage);
  if ((count / this._limit) * 100 < 25 && this._limit > 8) {
    this._limit /= 2;
    this._storage = makeNewStorage(this._storage, this._limit);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

module.exports = HashTable;
