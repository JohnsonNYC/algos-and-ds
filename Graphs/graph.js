// Graph is a collection of nodes and connection between those nodes
// Trees are graph except there is only on path from a given node to another 

// Undirected graph : Have edges that do not have direction 
// Directed Graph: Have edges with direction

//Unweight Graph: Has no magnitude assoicate with edge (or connection line)
//Weighted Graph; Has magnitutde assoicated with edges 

// Adjacency Matrix : Array 
  //-Takes up more space
  //-Slower to Iterate over all edges
  //-Faster to lookup specific edges

// Adjaceny List : Key value pair  ex: A: ["B", "F"]; √
  //-Can take up less space(in sparse graphs)
  //-Faster to iterate over all edges 
  //-Can be slower to lookup specific edge


  class Graph {
    constructor(){
      this.adjacencyList = {};
    }

    // Adding a node with no error handling 
    addVertex(vertex){
      if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    // Adding an edge w no error handling 
    addEdge(vertex1, vertex2){
      this.adjacencyList[vertex1].push(vertex2)
      this.adjacencyList[vertex2].push(vertex1)
    }

    // Removing and edge 
    removeEdge(vertex1, vertex2){
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)
    }

    removeVertex(vertex){
      while(this.adjacencyList[vertex].length){
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
      }

      delete this.adjacencyList[vertex]
    }
  }

  var g = new Graph();

  g.addVertex("Dallas");
  g.addVertex("Tokyo");
  g.addVertex("Aspen");
  g.addVertex("Los Angeles");
  g.addVertex("Hong Kong");

  g.addEdge("Dallas","Tokyo")
  g.addEdge("Dallas","Aspen")
  g.addEdge("Hong Kong","Tokyo")
  g.addEdge("Hong Kong","Dallas")
  g.addEdge("Los Angeles","Hong Kong")
  g.addEdge("Los Angeles","Aspen")
  
  g.removeEdge("Dallas","Tokyo")
  g.removeVertex("Hong Kong")
  console.log(g.adjacencyList);