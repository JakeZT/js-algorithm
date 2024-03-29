图论的最小生成树问题，就是让你从图中找若干边形成一个边的集合 mst，这些边有以下特性：

1、这些边组成的是一棵树（树和图的区别在于不能包含环）。

2、这些边形成的树要包含所有节点。

3、这些边的权重之和要尽可能小。
首先，Kruskal 算法用到了贪心思想，来满足权重之和尽可能小的问题：

先对所有边按照权重从小到大排序，从权重最小的边开始，选择合适的边加入 mst 集合，这样挑出来的边组成的树就是权重和最小的。

其次，Kruskal 算法用到了 Union-Find 并查集算法，来保证挑选出来的这些边组成的一定是一棵「树」，而不会包含环或者形成一片「森林」：

如果一条边的两个节点已经是连通的，则这条边会使树中出现环；如果最后的连通分量总数大于 1，则说明形成的是「森林」而不是一棵「树」。

那么，本文的主角 Prim 算法是使用什么逻辑来计算最小生成树的呢？

首先，Prim 算法也使用贪心思想来让生成树的权重尽可能小，也就是「切分定理」，这个后文会详细解释。

其次，Prim 算法使用 BFS 算法思想 和 visited 布尔数组避免成环，来保证选出来的边最终形成的一定是一棵树。

Prim 算法不需要事先对所有边排序，而是利用优先级队列动态实现排序的效果，所以我觉得 Prim 算法类似于 Kruskal 的动态过程。
