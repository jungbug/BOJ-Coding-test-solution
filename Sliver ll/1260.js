const fs = require('fs');
const [n, ...arr] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [V,E,S] = n.split(' ').map(v=>+v);
const edge = arr.map(v=>v.split(' ').map(W=>+W))

edge.forEach(v=>{
  if(v[0]>v[1])
  [v[0],v[1]] = [v[1],v[0]]
})
edge.sort((a,b)=>{
  if(a[0]==b[0]){
    return a[1]-b[1]
  }else{
    return a[0]-b[0]
  }
})

class Graph{
  constructor(v){
    this.vertices = v;
    this.edge = 0; 
    this.edgeTo = [];
    this.adj = [];
    this.marked = [];
    this.route=[];
    for(let i =0; i<=this.vertices; i++){
      this.marked[i] = false; 
      this.adj[i] = [];
    }
  }

  addEdge(v,w){
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edge++;
  }

  dfs(v){
    this.marked[v] = true;
    this.route.push(v)
    this.adj[v].forEach(w=>{
      if(!this.marked[w]){
        this.dfs(w);
      }
    })
  }

  bfs(s){
    let q = [];
    this.marked[s] = true;
    q.push(s);
    while(q.length>0){
      let v =q.shift();
      this.route.push(v);
      this.adj[v].forEach(w=>{
        if(!this.marked[w]){
          this.edgeTo[w]=v;
          this.marked[w]=true;
          q.push(w)
        }
      })
    } 
  }
}




let answer = [];
let graph = new Graph(V);
let graph2 = new Graph(V);

edge.forEach(v=>{
  graph.addEdge(v[0],v[1])
  graph2.addEdge(v[0],v[1])
})


graph.dfs(S);
graph2.bfs(S);
answer.push(graph.route.join(' '));
answer.push(graph2.route.join(' '));
console.log(answer.join('\n'));

/////////////////////////////


const input = [];
let graph, visited, result;

const strToNumArr = (str) => str.split(" ").map((numString) => Number(numString));

//입력 받고 결과 출력하는 부분
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
      const [N, M, V] = strToNumArr(input.shift());
      //그래프 배열의 요소 빈 배열로 초기화
      graph = [...Array(N+1)].map(()=>[]);
      //방문 사실 저장할 배열 초기화
      visited = [...Array(N+1)].fill(false);
      
      let v1, v2;
      //그래프 생성
      input.forEach((str)=>{
        [v1, v2] = strToNumArr(str);
        //graph[v1] 배열에 v2 오름차순 맞게 삽입
        insertEdge(v1, v2); 
        //graph[v2] 배열에 v1 오름차순 맞게 삽입
        insertEdge(v2, v1);
      });

      //결과 변수 초기화
      result=[];
      //깊이 우선 탐색
      dfs(V);
      //결과 출력
      console.log(result.join(" "));

      //방문 사실 저장하는 배열 초기화
      visited.fill(false);
      //결과 변수 초기화
      result=[];
      //너비 우선 탐색
      bfs(V);
      //결과 출력
      console.log(result.join(" "));
  });
  
//graph[vFront] 배열이 오름차순을 유지하도록 vBack을 적절한 위치에 삽입
const insertEdge = (vFront, vBack) => {
    let index;
    for(index=0; index<graph[vFront].length; index++){
        //인접한 정점 배열에서 vBack보다 크거나 같은 정점 찾을 때까지 continue
        if(graph[vFront][index]<vBack){
            continue;
        }
		
        //문제에서 두 정점 사이에 여러 개의 간선이 있을 수 있다고 했으므로
        //인접한 정점 배열에 이미 vBack 정점이 있다면 삽입 인덱스에 null 저장
        if(graph[vFront][index]===vBack){
            index=null;
        }
        break;
    }

	//삽입 인덱스가 null이 아니라면 vBack 삽입 인덱스에 삽입
    if(index!==null){
        graph[vFront].splice(index, 0, vBack);
    }
};

//깊이 우선 탐색, 현재 정점 매개변수로 받음
const dfs = (v) => {
	//이미 방문했으면 리턴
    if(visited[v]){
        return;
    }

	//방문 사실 저장
    visited[v]=true;
    //결과 변수에 정점 삽입
    result.push(v);
    //인접한 정점 배열을 차례로 돌며 방문하지 않은 정점 방문
    graph[v].forEach((vertex)=>{
        if(!visited[vertex]){
            dfs(vertex);
        }
    });
};

//너비 우선 탐색, 시작 정점 매개변수로 받음
const bfs = (vStart) => {
	//방문할 정점을 담는 배열
    const willVisit = [vStart];
    let v;
    //방문할 정점이 안 남을 때까지
    while(willVisit.length!==0){
    	//방문할 정점 배열의 첫 번째 원소 삭제 후 저장
        v=willVisit.shift();
        //이미 방문했으면 continue
        if(visited[v]){
            continue;
        }

		//방문 사실 저장
        visited[v]=true;
        //결과 변수에 정점 삽입
        result.push(v);
        //인접한 정점 배열을 차례로 돌며 방문하지 않은 정점을
        //방문할 정점 배열의 끝에 삽입
        graph[v].forEach((vertex)=>{
            if(!visited[vertex]){
                willVisit.push(vertex);
            }
        });
    }
}