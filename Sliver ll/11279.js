const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
const n = Number(input[0]); // 개수
const operations = input.slice(1).map(Number); // 트리가 될 값들

const heap = []; // 최대 힙을 배열로 구현

let result = ''; // 출력 결과 문자열

for (let i = 0; i < n; i++) {
  const op = operations[i]; //편하게

  if (op === 0) { // op가 0이였을때는 두가지로 나뉨
    if (heap.length === 0) { // 1. 완전 첫번째
      result += '0\n'; // 배열이 비어있을 때
    } else { // 2.힙 루트노드 출력/삭제
      const max = extractMax(heap); // extractMax는 힙의 최대값을 리턴함과 동시에 pop함
      result += `${max}\n`; // 최대값 저장
    }
  } else { // 그외는 트리 삽입
    insert(heap, op);
  }
}

// 결과 출력
console.log(result.trim())

// 최대 힙에 원소를 추가하는 함수
function insert(heap, x) { //삽입 함수
  heap.push(x); // 일단 힙에 push
  let i = heap.length - 1; // 배열에서 i번째 노드의 부모노드
  while (i > 0 && heap[parent(i)] < heap[i]) { // parent는 부모노드의 인덱스를 return 함
    swap(heap, i, parent(i)); // swap은 위치 바꾸기
    i = parent(i);
  }
}

// 최대 힙에서 최대값을 추출하고 반환하는 함수
function extractMax(heap) {
  const max = heap[0]; // 힙의 최대값
  if(heap.length == 1){
    heap.pop()
    return max
  }else{
    heap[0] = heap.pop(); // 최대값 없애기
    maxHeapify(heap, 0); // 재구성
    return max;
  }
}

// 최대 힙의 특성을 유지하면서 노드를 아래로 내리는 함수
function maxHeapify(heap, i) {
  const l = left(i); // 왼쪽 노드
  const r = right(i); // 오른쪽 노드
  let largest = i;
  if (l < heap.length && heap[l] > heap[largest]) {
    largest = l;
  }
  if (r < heap.length && heap[r] > heap[largest]) {
    largest = r;
  }
  if (largest !== i) {
    swap(heap, i, largest);
    maxHeapify(heap, largest);
  }
}

// 두 인덱스의 원소를 교환하는 함수
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 부모 노드의 인덱스를 반환하는 함수
function parent(i) {
  return Math.floor((i - 1) / 2);
}

// 왼쪽 자식 노드의 인덱스를 반환하는 함수
function left(i) {
  return 2 * i + 1;
}

// 오른쪽 자식 노드의 인덱스를 반환하는 함수
function right(i) {
  return 2 * i + 2;
}
