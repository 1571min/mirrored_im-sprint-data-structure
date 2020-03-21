const { LimitedArray, getIndexBelowMaxForKey } = require('./hashTableHelpers');

const HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// 해쉬 테이블 삽입 함수
// 1. 해당 인덱스에 값이 있는 지 없는 지 확인
// 2. 없다면 배열과 배열에 값을 추가해 대입
// 3. 있다면 해당 배열을 순회하면서 undefined에 있는 값에 대입
//const invalidNameAndHeight: [string, number] = ['안희종', 176, 42];
HashTable.prototype.insert = function(k, v) {
  // 카운팅해서 크기 증가할지 결정
  var count = 0;
  this._storage.each(function(ele) {
    if (ele !== undefined) {
      ele.forEach(() => {
        count++;
      });
    }
  });
  if (((count + 1) / this._limit) * 100 > 75) {
    this._limit *= 2;
    let tempStorage = LimitedArray(this._limit);
    this._storage.each(function(ele, idx) {
      tempStorage[idx] = ele;
    });
    this._storage = tempStorage;
  }

  // 튜플형식의 tempEle선언
  const index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) !== undefined) {
    let tempArr = this._storage.get(index);
    let tempEle = [k, v];
    tempArr.push(tempEle);
    this._storage.set(index, tempArr);
  } else {
    let tempArr = [];
    let tempEle = [k, v];
    tempArr.push(tempEle);
    this._storage.set(index, tempArr);
  }
};

HashTable.prototype.retrieve = function(k) {
  const index = getIndexBelowMaxForKey(k, this._limit);
  let tempArr = this._storage.get(index);
  let result = undefined;
  if (tempArr !== undefined) {
    tempArr.forEach(function(ele) {
      if (k === ele[0]) {
        result = ele[1];
      }
    });
  }
  return result;
};

HashTable.prototype.remove = function(k) {
  const index = getIndexBelowMaxForKey(k, this._limit);

  //filter를 이용해서 걸러내고 다시 저장
  let tempArr = this._storage.get(index);
  if (tempArr !== undefined) {
    tempArr = tempArr.filter(function(ele) {
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
  var count = 0;
  this._storage.each(function(ele) {
    if (ele !== undefined) {
      ele.forEach(() => {
        count++;
      });
    }
  });
  if ((count / this._limit) * 100 < 25 && this._limit > 8) {
    this._limit /= 2;
    let tempStorage = LimitedArray(this._limit);
    this._storage.each(function(ele, idx) {
      tempStorage[idx] = ele;
    });
    this._storage = tempStorage;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

module.exports = HashTable;
