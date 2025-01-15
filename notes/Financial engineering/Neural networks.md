---
title: Neural networks
date created: Thursday, 30th May 2024, 09:44:50
last modified: Friday, 10th January 2025, 04:30:34
area: 
class: 
tags: 
---

pStatQuest with Josh Starmer

AutoML: [[AutoML.canvas|AutoML]]

## Definitions
>A **neural network** is a series of algorithms that attempt to recognize underlying relationships in a set of data through a process that mimics the way the human brain operates. A neural network consists of layers of nodes, also known as **neurons**. These layers include:

1. **Input Layer**: The layer that receives the input data.
2. **Hidden Layers**: Intermediate layers that perform computations and feature transformations.
3. **Output Layer**: The layer that produces the final output of the network.
## Directed Acyclic Graph (DAG) representation

A neural architecture can be represented as a Directed Acyclic Graph (DAG). Let's break this down:

1. **Directed**: The connections (edges) between nodes have a direction, indicating the flow of data.
2. **Acyclic**: No loops/cycles - The graph does not contain any cycles; data flows in one direction without looping back.

> [!NOTE]+ Example of a DAG - entire-based structure
> 2 simplified examples of entire-structured neural architectures.
> * Each **layer** is specified with a different operation, such as 'convolution' and 'max pooling' operations.
> * The **edge** indicates the information flow.
> * The skip-connection operation used in the right example can help explore deeper and more complex neural architectures.
![[Pasted image 20240530095539.png]]

Components of the DAG:

- **Nodes**: Represent feature tensors, which are multi-dimensional arrays of numbers. Each node performs a specific computation or operation.
- **Edges**: Represent the operations applied to the data as it flows from one node to another.
## Formula for computation at any node

The given formula (AutoML A survey of the state-of-the-art) explains the computation at any node $Z_k$ in the DAG.

$$
Z_k = \sum_{i=1}^{N_k} o_i(I_i), \quad o_i \in O
$$
- $Z_k$: The output feature tensor at node $k$.
- $N_k$: The number of incoming edges (indegree) to node $Z_k$.
- $I_i$: The $i$-th input tensor to node $Z_k$.
- $o_i$: The operation applied to $I_i$, selected from a set of candidate operations $O$.
## Operations

The set of candidate operations OOO can include:

- **Convolution**: Applies a filter to the input to extract features.
- **Pooling**: Reduces the dimensionality of the input, keeping the most important information.
- **Activation Functions**: Introduce non-linearity into the model (e.g., ReLU, sigmoid).
- **Skip Connection**: Allows the input to skip certain layers, aiding in training deeper networks.
- **Concatenation**: Combines inputs from multiple nodes.
- **Addition**: Adds inputs from multiple nodes.
## Advanced modules

To enhance model performance, NAS methods often use advanced, human-designed modules as primitive operations:

- **Depth-wise Separable Convolution**: A form of convolution that reduces computational cost and model size.
- **Dilated Convolution**: Expands the receptive field without losing resolution.
- **Squeeze-and-Excitation (SE) Blocks**: Improve the network's sensitivity to important features.
## Search space in NAS

The search space defines all possible neural network architectures that NAS can explore. A well-designed search space should:

- **Exclude Human Bias**: Allow the algorithm to explore architectures that a human designer might not consider.
- **Be Flexible**: Cover a wide variety of potential architectures to ensure the best possible model can be found.
### 1. Entire-structured search space
> stacking a predefined number of nodes

**PROS**: easy to implement
**CONS**:
* deeper= better generalisation ability BUT can be onerous & computationally expensive
* lacks transferability (aka may need a new model for a larger dataset)

![[Pasted image 20240530095539.png]]

Left:

* simplest

Right:

* more complex as it permits arbitrary skip connections to exist btwn the ordered nodes (these nodes have been proven effective in practice)
### 2. Cell-based search space
>Compose of a fixed number of repeating cell structures (cell = motif / block)

To enable the transferability of the generated model, the cell-based search space has been proposed, in which the neural architecture is composed of a fixed num ber of repeating cell structures. This design approach is based on the observation that many well-performing human-designed models are also built by stacking a fixed number of modules.