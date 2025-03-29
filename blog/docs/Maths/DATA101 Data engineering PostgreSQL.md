---
title: DATA101 Data engineering PostgreSQL
date created: Monday, 9th October 2023, 00:25:45
last modified: Monday, 6th January 2025, 13:50:10
area:
  - learning
class: technology
tags:
  - database
---
# Data101. Data engineering UCBerkeley
>**Course notes**: https://data101.org/notes/overview.html
**Schedule**: https://data101.org/sp24/

## Week 1. Data engineering and SQL overview

| Content            | Link                                                                                                                         | Status |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------- | ------ |
| Lecture 1          | [Lec1](https://docs.google.com/presentation/d/1XK9LbdbCfoLmVLN94tE3WT4FB4raOOv_m1oTG-yjLJk/edit#slide=id.g24f26c19f5f_0_141) | Done   |
| Lecture 2          | [Lec2](https://docs.google.com/presentation/d/1VLYLsBZMQGxyV097DBLVpWnybaQNygj_MCfyP3UbvoI/edit#slide=id.g278a9687a11_0_788) | Done   |
| Worksheet          | [worksheet](https://drive.google.com/file/d/1AQgvJuX1J1fFYFtRnSwTuVqzqA61dbcn/view)                                          | Done   |
| Worksheet solution | [solution](https://drive.google.com/file/d/1M9VsTZUr8Oe46jRgtNarOV0hYyHtOhjb/view)                                           | Done   |
| Jupyter notebook   | [nb](https://data101.org/sp24/resources/assets/lectures/lec02/lec02.html)                                                    | Done   |
| Course notes PDF   | [pdf](https://drive.google.com/file/d/1bqiD3WNLbAjQxsyLR5E4snpbKgthfk-D/view)                                                | Done   |
| MD notes           | [link](https://data101.org/notes/2-relational_algebra/extended.html)                                                         | Done   |

---
### 0. Why data engineer

> [!quote]- Why learn data engineering?
![[Pasted image 20241011150544.png|centre|60%]] ![[Pasted image 20241011150614.png|centre|60%]] ![[Pasted image 20241011150643.png|centre|60%]] ![[Pasted image 20241011150737.png|centre|60%]]

Major frameworks: [FirstMark | 2024 MAD (ML/AI/Data) Landscape](https://mad.firstmark.com/)

| ==Code-centric==                                                                                                                                                                                                      | ==Query-centric==                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Main Storage API is files**<br>AWS S3, Azure File Storage, Google Cloud Storage, HDFS, …                                                                                                                            | **Main Storage API is tables**<br>Snowflake, BigQuery, Redshift, Azure Synapse, Teradata (founded 1979, still relevant!!)                                                 |
| **Libraries in general-purpose programming languages, lots of separation**<br> - Spark (Scala/Java) for batch processing<br> - Ad hoc code (Python/pandas) for exploration<br> - Metadata tracked in a separate store | **One language/paradigm for (almost) everything**<br>- Batch: SQL<br>- Interactive: SQL<br>- Metadata auto-tracked in database<br>- Other bytestream data stored in files |

We're gonna be taking the **query centric** approach

* based on **relational algebra (RA)** and **relational calculus (RC)**
* RA is procedural, RC is declarative (not algos but outputs, in contrast to )

**SQL**
* **declarative**: in contrast to general purpose languages like C which are often imperative
* **abstraction**: no overfitting of code to whatever task at hand

![[Pasted image 20241017021421.png|centre|50%]]

---
### 3. Relational algrebra

Query execution has its foundation in Relational Algebra, which shares some of its concepts with Set Theory.

• Let A and B be sets where A = {1, 2, 3, 4, 5} and B = {2, 3, 4, 5, 6}.

• Let R and S be bags where R = {1, 1, 1, 2, 2, 4, 4}, and S = {2, 3, 3, 3, 4, 4}.

> [!example] ==Union== Write out A ∪ B and R ∪ S.
> 1. A ∪ B = {1, 2, 3, 4, 5, 6}
> 2. R ∪ S = {1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4}
>

Union contains ALL elements **including duplicates**.

> [!example] ==Union== Write out A ∪ B and R ∪ S.
> - A ∪ B = {1, 2, 3, 4, 5, 6}
> - R ∪ S = {1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4}
>
> Union contains ALL elements **including duplicates**.

> [!example] ==Union== Write out A ∪ B and R ∪ S.
A ∪ B = {1, 2, 3, 4, 5, 6}
R ∪ S = {1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4}
Union contains ALL elements **including duplicates**.


> ==Union== Write out A ∪ B and R ∪ S.
> 1. A ∪ B = {1, 2, 3, 4, 5, 6}
> 2. R ∪ S = {1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4}
>

Union contains ALL elements **including duplicates**.

> ==Union== Write out A ∪ B and R ∪ S.
> - A ∪ B = {1, 2, 3, 4, 5, 6}
> - R ∪ S = {1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4}
>
> Union contains ALL elements **including duplicates**.


> ==Union== Write out A ∪ B and R ∪ S.
A ∪ B = {1, 2, 3, 4, 5, 6}
R ∪ S = {1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4}
Union contains ALL elements **including duplicates**.
#### Primitive RA Operations

Relational algebra (RA) has **six** primitive operators, upon which all other complex operators are formed:

**Unary**
1. Projection
2. Selection
3. Renaming

**Binary**

4. Product
5. Union
6. Difference

>**Unary operators** = each **operator** `f` takes as input **1 operand relation** `R` with **schema** $(B_1,…,B_m)$ and outputs an **output relation `f(R)`**. The output relation can be unnamed.

>**Projection** (`SELECT`) - selecting the desired columns, discard the rest
>$$\pi_{A_1, A_2, \dots, A_n}(R)$$
- If the relation (table) $R$ has attributes (columns) ${B_1, B_2, ..., B_m}$, projection selects a subset ${A_1, A_2, ..., A_n}$ where $n≤m$.
- The projection operator outputs a relation that contains the tuples of the input relation $R$, but restricted to set of attributes ${A1,…,An}$.

==e.g== Imagine a table with information about students: student_id, name, age, GPA; if you project onto only the `name` and `GPA` columns, your output will be a new table that only shows the names and GPAs of the students:

$$\pi_{name, GPA}(students)$$

>**Selection** (`WHERE`) - selecting the desired rows, discard the rest
>$$\sigma_C(R)$$
* The selection operator outputs a relation that contains the tuples of input relation $R$ that satisfy the row condition $C$.
* The row condition is defined to contain attributes with boolean expressions: $=$, $>$, $<$, $!=$, AND ($\wedge$), OR ($\vee$), NOT ($!$), etc.
* Because selection is a row filter, the input and output schema **share the same schema**, with set of attributes $\{B_1, \dots, B_m\}$.

==e.g== You only want to see students whose GPA > 3.0. This is selection: we filter rows based on the given condition. $$\sigma_{GPA>3.0}(students)$$

>**Renaming** (`AS`) - the renaming operator outputs a relation with the same data as the input relation, but with renamed attributes and/or relation name. $$\rho_{S(A_1, \dots, A_m)}(R)$$equivalently $$\rho_{S(B_{i_1}\rightarrow A_1, \dots, B_{i_n} \rightarrow A_n)}(R)$$
- The number of attributes, m therefore stays consistent across the input and output relation, and the data in tuples does not change.

==e.g== Imagine a table with the columns first_name and last_name. You want to rename them to given_name and family_name for clarity:

$$\rho_{\text{given\_name} \rightarrow \text{first\_name}, \text{family\_name} \rightarrow \text{last\_name}}(\text{students})$$

==Example of unary operations==

Suppose that we have two relations with the following schema:

* $\text{titles(title\_id, type, primary\_title, runtime\_minutes)}$
* $\text{people(person\_id, name, born, died)}$
1. $\pi_{\text{title\_id, primary\_title}}(\text{titles})$ outputs a relation with tuples of $\text{titles}$ that are restricted to the attributes $\text{title\_id}$ and $\text{primary\_title}$. In other words, we "drop" the other attributes $\text{type}$ and $\text{runtime\_minutes}$.
2. $\sigma_{\text{born} > 1980}(\text{people})$ outputs a relation with tuples of $\text{people}$ that satisfy the condition where $\text{born} > 1980$.
3. $\rho_{\text{persons(person\_id, name, birth, death)}}(\text{people})$ outputs a relation named $\text{persons}$ that has the tuples of $\text{people}$ but renames attributes $\text{born}$ and $\text{died}$ to $\text{birth}$ and $\text{death}$, respectively, and keeps $\text{person\_id}$ and $\text{name}$ unchanged.
4. $\rho_{\text{persons}(\text{born} \rightarrow \text{birth}, \text{died} \rightarrow \text{death}}(\text{people})$ does the same as the previous example but is more concise.

> **Binary operators** = each **operator** `f` takes as input **2 operand relations** `R1` and `R2` with **schemas** $(B_1, \dots, B_m)$ and $(C_1, \dots, C_n)$ and outputs an **output relation `f(R1, R2)`**. The output relation can be unnamed.

>**Product** (or Cross Product, Cartesian Product) = outputs a relation that is the **Cartesian product** of the two input relations $R_1$ and $R_2$. (or Cross Product, Cartesian Product), $R_1 \times R_2$.
>$$R_1 \times R_2$$
- The output relation will contain all possible combinations of tuples from $R_1$ and $R_2$, resulting in a relation with a schema that combines the attributes of both input relations.

==e.g== If we have two relations:

$R_1$ (with schema $\{A, B\}$):

- A: 1, B: X
- A: 2, B: Y

$R_2$ (with schema $\{C, D\}$):

- C: 3, D: P
- C: 4, D: Q

The product $R_1 \times R_2$ results in:

- A: 1, B: X, C: 3, D: P
- A: 1, B: X, C: 4, D: Q
- A: 2, B: Y, C: 3, D: P
- A: 2, B: Y, C: 4, D: Q

>**Union** = outputs a relation that **combines** the tuples from both input relations $R_1$ and $R_2$.
>$$R_1 \cup R_2$$
- The output relation includes all unique tuples from both relations. The input relations must have the same schema (same attributes).

==e.g== Consider the two relations:

$R_1$:

- id: 1, name: Alice
- id: 2, name: Bob

$R_2$:

- id: 2, name: Bob
- id: 3, name: Charlie

The union $R_1 \cup R_2$ results in:

- id: 1, name: Alice
- id: 2, name: Bob
- id: 3, name: Charlie

Notice that Bob appears only once in the output, as the union operator **removes duplicates**.

>**Difference** = outputs a relation containing tuples that are in the first relation $R_1$ but not in the second relation $R_2$.
>$$$R_1 - R_2$$
- Like the union operator, the input relations must have the same schema.

==e.g.== If we have:

$R_1$:

- id: 1, name: Alice
- id: 2, name: Bob

$R_2$:

- id: 2, name: Bob
- id: 3, name: Charlie

The difference $R_1 - R_2$ results in:

- id: 1, name: Alice
#### Derived RA operations
>**Intersection** = set intersection of rows in R1 and R2 (union+difference)
>$$R_1 \cap R_2$$

>**Join** = special cases of Cartesian products & unary operators.

>**Theta join** = outputs a relation that joins two relations such that each row satisfies the condition $\theta$
$$R_1 \bowtie_{\theta} R_2 = \sigma_{\theta}( R_1 \times R_2)$$

Because it is defined with a cross product, the output schema distinguishes common attributes $A_i$ in $R_1$ and $B_j$ in $R_2$ as $R_1.A_i$ and $R_2.B_j$, respectively.

>**Equi join** = special case of the theta join, where $\theta$ is an "equality condition," i.e., contains only boolean expressions involving equality ($=$) and logical AND ($\wedge$).

>**Natural join** - outputs a relation that joins the two input relations $R_1$ and $R_2$ such that rows are matched on common attributes and removes duplicate attributes in the output relation schema
>$$R_1 \bowtie R_2$$
1. cross product of $R_1$ and $R_2$.
2. selection with equality condition $\theta$, where $\theta$ filters out rows for which shared attributes do *not* have matching values. In other words, *for each* attribute pair $R_1.A_i, R_2.B_j$ where $A_i$ in $R_1$ and $B_j$ in $R_2$ have the same attribute name ("common attributes"), only keep the tuple if its values for $R_1.A_i$ and $R_2.B_j$ match.
3. Rename one set of common attributes back to their original name, e.g., $R_1.A_i$ is renamed to $A_i$ for each $A_i = B_j$.
4. Drop the other set of common attributes, e.g., drop $R_2.B_j$

==e.g== natural join: suppose we have the two relations

* $\text{crew(tid, pid, c, j)}$
* $\text{people(pid, n, b, d)}$

The natural join of crew and people would then satisfy:

$$\text{crew} \bowtie \text{people} = \pi_{\text{tid, pid, c, j, n, b, d}}\bigl(\rho_{\text{crew.pid} \rightarrow \text{pid}} \bigl( \sigma_{\text{crew.pid = people.pid}} (\text{crew} \times \text{people}) \bigr) \bigr)$$.

In special cases, the natural join reduces to other operators.

==e.g== Suppose we have the 3 relations:

$$R(A, B), S(A, B), T(C, D)$$

Then \
$$R \bowtie S = R \cap S$$and

$$R \bowtie T = R \times T$$

#### Converting from SQL query to relational algebra

```
SELECT a1, a2, …, an, agg1(d1), agg2(d2), …, aggp(dp)
FROM R1, R2, …, Rk
WHERE C
GROUP BY b1, b2, …, bm
HAVING H
```

We could write the SQL order of execution of the above query using extended relational algebra as follows:

$$\pi_{list} \biggl( \sigma_H \biggl( \gamma_{b1, \dots, bm, agg1(d1), \dots, aggp(dp)} \bigl( \sigma_C (R1 \times \dots Rk ) \bigr) \biggr) \biggr)$$

* $list$ - the list of expressions in `SELECT`, ==e.g== $a1, \dots, an, agg1(d1), \dots, aggp(dp)$
* $agg1(d1), \dots aggp(dp)$ - aggregation functions on specific attributes $d1, \dots, dp$ in the cross product of $R1 \times \dots \times Rk$,
* $a1, \dots, an$ - a subset of the grouped attributes $b1, \dots, bm$.

### 4. Data engineering
#### ETL
>**Extract**: Scrape raw data from all the source systems, e.g., transactions, sensors, log files, experiments, tables, bytestreams, …
**Transform**: Apply a series of rules or functions, wrangle data into schema(s)/format(s)
**Load**: Load data into a data storage solution
#### ELT

Load without doing a lot of transformation, with transformations done in SQL. Faster to get going, and more scalable, but requires more **data warehousing** knowledge (& may be more expensive).

* newer (e.g., the **Snowflake** approach)
#### ET

For **data lakes** - No need to “manage” data

* Data is dumped in cheaply and massaged as needed for various use-cases
* Usually code-centric (**Spark**)
#### Data warehouse vs. data lakes

Essentially we have 2 extremes:

**Data Warehouse**, ~1990s `ETL`
* “Single source of truth”: A central, organized repository of data used for analytics throughout an enterprise.
* Design the uber-schema up-front of all of the rectangular tables you’d ever want.
* **Extract** from trusted sources
* **Transform** to warehouse schema using custom tools
* **Load** data warehouse
* Old school ETL solution: Informatica

**Data Lake**, ~2010s `ELT`
* Emerged during Hadoop/Spark revolution
* “Landing zone”: unconstrained storage for any and all data
* Data is then analyzed on demand
* **Extract** into files/storage
* **Load** into storage (easy!)
* **Transform** on demand for any use.
* Create new files in the lake, catalog files as they go for reuse
* Often code-centric

New term: -> Data **Lakehouse**

## Week 2. Relational model and algebra

| Content          | Link                                                                                                                         | Status |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------ |
| Lecture 3        | [Lec3](https://docs.google.com/presentation/d/1kff-8_-2OFhiaLrG98HW2tcapxc177AKqu_25IYwGUo/edit#slide=id.g240aa56c3be_0_84)  | Done   |
| Lecture 4        | [Lec4](https://docs.google.com/presentation/d/1tbShn0AWi9LyeUZXGsACpo0vXZ-sk0Dt40Xt6_5JX-4/edit#slide=id.g240c89794b3_0_987) | Done   |

---
