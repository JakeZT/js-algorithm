// 判断有向图是否存在环
// 什么时候无法修完所有课程？当存在循环依赖的时候。
// 看到依赖问题，首先想到的就是把问题转化成「有向图」这种数据结构，只要图中存在环，那就说明存在循环依赖。
// 如果发现这幅有向图中存在环，那就说明课程之间存在循环依赖，肯定没办法全部上完；反之，如果没有环，那么肯定能上完全部课程。
// graph[s]是一个列表，存储着节点s所指向的节点。
// 注意图中并不是所有节点都相连，所以要用一个 for 循环将所有节点都作为起点调用一次 DFS 搜索算法。
// 记录一次 traverse 递归经过的节点

// ==
namespace LeetCode207 {
	function buildGraph(numCourses: number, prerequisites: number[][]) {
		// 图中共有 numCourses 个节点
		let graph: number[][] = new Array(numCourses).fill(0).map((v) => [])
		for (let edge of prerequisites) {
			let from = edge[1]
			let to = edge[0]
			graph[from].push(to)
		}
		// 修完课程 from 才能修课程 to
		// 在图中添加一条从 from 指向 to 的有向边
		return graph
	}

	// 记录图中是否有环
	function canFinish(numCourses: number, prerequisites: number[][]): boolean {
		let hasCycle = false
		let graph: number[][] = buildGraph(numCourses, prerequisites)
		const visited = new Array(numCourses).fill(false) // 记录遍历过的节点，防止走回头路
		const onPath = new Array(numCourses).fill(false)

		const traverse = (graph: number[][], s: number) => {
			if (onPath[s]) {
				hasCycle = true // 出现环
			}
			if (visited[s] || hasCycle) {
				// 如果已经找到了环，也不用再遍历了
				return
			}
			// 前序遍历代码位置
			visited[s] = true
			onPath[s] = true
			for (let t of graph[s]) {
				traverse(graph, t)
			}
			// 后序遍历代码位置
			onPath[s] = false
		}
		for (let i = 0; i < numCourses; i++) {
			// 遍历图中的所有节点
			traverse(graph, i)
		}
		// 只要没有循环依赖可以完成所有课程
		return !hasCycle
	}

	canFinish(2, [[1, 0]])
}

/* 
如果一个节点有多个边怎么办，答用bfs，hashmap的值用来存储所有出度的终点，循环到没有出度的点时，把它加进答案list里。
 */
