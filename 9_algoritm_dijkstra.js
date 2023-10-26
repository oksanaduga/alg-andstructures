// Поиск кратчайшего пути в графе

const graph = {}
graph.a = {b: 2, c: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g = {}

function shortPath(graph, start, end) {
  const costs = {}; // { b: 2, c: 1, d: 6, e: 2 }
  const processed = [];
  let neighbors = {};

  Object.keys(graph).forEach(node => {
      if (node !== start) {
          let value = graph[start][node];
          costs[node] = value || 1000000;
      }
  })

  let node = findNodeLowestCost(costs, processed); // c

  while (node) { // while not undefined
    const cost = costs[node]; // 1, 2
    neighbors = graph[node]; // { d: 5, e: 2 } { f: 7 }

    Object.keys(neighbors).forEach(neighbor => {
      let newCost = cost + neighbors[neighbor]; // d: 1 + 5

      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
      }
    })

    processed.push(node);

    node = findNodeLowestCost(costs, processed);
  }
  return costs;
}

function findNodeLowestCost(costs, processed) {
  let lowestCost = 1000000;

  let lowestNode;

  Object.keys(costs).forEach(node => {
    let cost = costs[node];

    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  })

  return lowestNode;
}

console.log(shortPath(graph, 'a', 'g'));
// { b: 2, c: 1, d: 6, e: 3, f: 4, g: 5 }