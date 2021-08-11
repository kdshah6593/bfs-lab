function bfs(rootNode, vertices, edges){
    rootNode.distance = 0
    const queue = [rootNode]
    const visited = []
    while(!queue.length == 0){
        let firstNode = queue.shift()
        let adjacents = findAdjacent(firstNode.name, vertices, edges)
        markDistanceAndPredecessor(firstNode, adjacents)
        for (const adjacent of adjacents){
            queue.push(adjacent)
        }
        visited.push(firstNode)
    }
    return visited
}

function findAdjacent(vertexName, vertices, edges){
    const filteredEdges = edges.filter(edge => edge[0] === vertexName || edge[1] === vertexName ).flat()
    const filteredVertices = filteredEdges.filter(edge => edge !== vertexName)
    const adjacents = []

    for (let i = 0; i < filteredVertices.length; i++) {
        if (vertices.find(vertex => vertex.name === filteredVertices[i] && vertex.distance === null)) {
            adjacents.push(vertices.find(vertex => vertex.name === filteredVertices[i] && vertex.distance === null))
        }
    }
    return adjacents
}

function markDistanceAndPredecessor(node, adjacentNodes){
    for (let i = 0; i < adjacentNodes.length; i++){
        adjacentNodes[i].distance = node.distance + 1
        adjacentNodes[i].predecessor = node
    }
    return adjacentNodes
}