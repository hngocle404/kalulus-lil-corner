---
title: python
date created: Wednesday, 3rd January 2024, 18:31:16
last modified: Tuesday, 7th January 2025, 03:35:11
area:
  - learning
class: 
tags:
  - python
---

# Python
## Important
### dictionary

```
fruits = {
'apple': 1,
'banana': 3
}
```

if wanna append a new key-value pair: **use \[]**

```
fruits['pineapple'] = 26
```

for looping, make sure to use for **key, value** in **enumerate(\[key1, key2])** or dict.**items()**

`.keys()` = print all keys

`.values()` = print all values

`.items()` = print all keys and values as tuples

merging dictionaries

* dictA`.update`(dictB)
* dictA `|` dict B

nested dictionaries -> use more than 1 []: `nested_dict[name][last_name]`

### list: `[]`

Set hue = x, legend = False for ombre graphs

## Installation

First must go to the Python directory:

```py
cd C:\Users\kalul\AppData\Local\Programs\Python\Python311\Scripts
```

```
pip install pandas numpy seaborn matplotlib ta statsmodels tsfracdiff hmmlearn scikit-learn 
```

```py
# Import necessary libraries
import numpy as np
import pandas as pd
import seaborn as sns
from IPython.display import display
import matplotlib.pyplot as plt

import warnings
warnings.filterwarnings("ignore")
plt.rcParams['figure.figsize'] = (10, 3)
sns.set_theme(style = 'darkgrid', font_scale=0.8, palette='viridis')

import statsmodels.formula.api as smf
```

`rich` = pretty terminal print outs

### Common issue

When import __ as __ -> DLL error, cannot import (happened to matplotlib and seaborn)

-> **Fix**: Window R -> %APPDATA% -> clean all cache

### Virtual environments

In general, it's suggested to use virtual environments (I highly suggest looking at the official [Python documentation](https://docs.python.org/3/library/venv.html)). With this approach, you easily can set up project-specific Python versions (as well as libraries). Easily manageable and the best part: There are lots of tutorials on the internet on how to approach this:

https://www.freecodecamp.org/news/installing-multiple-python-versions-on-windows-using-virtualenv/

## File probing
### File size

```py
import os
import pandas as pd

# Check the file size
file_path = 'data.csv'
file_size = os.path.getsize('data.csv')
print(f'File size: {file_size / (1024 * 1024):.2f} MB')

# Count the number of lines
line_count = sum(1 for line in open('data.csv'))
print(f'Number of lines: {line_count}')

# Load the CSV file into a DataFrame (optional)
df = pd.read_csv(file_path)
```

## Reading files
### Using pd
**CSV**

```
file_path = 'D:/Github/Python/datasets/baby.csv' 
baby = pd.read_csv(file_path)
```

Arguments for read_csv:

 `index_col = "Year"` = set the year column as the index

 `header = 1` = set the 1st row as the header

* `header = None` = remove all headers, columns are numbered 0

 `names = ['cola, colb']` = set column names

 `thousands = ','` = character acting as the thousands separator in numerical values.

 `delimiter/sep = ','`

* `sep = r'\s+'` = if delimiter is white space

**json**
`pd.read_json()`

### Using with open

This approach is more general and can be used for any type of file. You have more control over how you process the content, and it doesn't necessarily assume a tabular structure.

If your data is structured and tabular, and you want to perform data analysis, the pandas methods like `pd.read_json`, `pd.read_csv`, etc., are often more convenient. If you need more flexibility, or if your data is not in a standard tabular format, using `with open` allows you to read and process the content in a more customized way.

```
with open('example.txt', 'r') as file:
content = file.read()
```

**Zip**
Importing zip files
1. import zipfile package
2. file_path
3. folder to extract the files to (extract)
4. with zipfile.ZipFile(file_path, 'r') as my_zip:
	    my_zip.extractall(extract)

```py
import zipfile
zip_file_path = 'D:/Github/Python/data100/4homework/hw02A/data.zip'
extracted_dir = 'D:/Github/Python/data100/4homework/hw02A'

with zipfile.ZipFile(zip_file_path, 'r') as my_zip:
    my_zip.extractall(extracted_dir)

# 'r' = read mode
```

### Reading all csv files using glob

```py
files = glob.glob('../data/forex_light/*.csv')
forex = pd.DataFrame() 
content = [] 
for i in files: 
    df = pd.read_csv(i, index_col='Date', header=0)
    content.append(df) 
  
forex = pd.concat(content, axis = 1) 
forex.dropna(inplace=True)
forex.index = pd.to_datetime(forex.index)
forex
```

==Advanced: os and zipfile: hw2_foodsafety==

## Other useful add ons

`data.convert_dtypes()` ([documentation](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.convert_dtypes.html)) conveniently converts data to the most appropriate type

`data.drop_na()` ([documentation](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.dropna.html))

`data.rename(columns={'old': 'new', 'old2': 'new2'})`

## Basics
### Counting, indexing, subsetting etc.
**Counting unique values and put into a data frame**
`value_counts().reset_index()`

**Sort by any column**
`data.sort_values(by = 'col')`
* Select column A from 'data' and sort by counts, descending
`data['A'].value_counts().sort_values(ascending=False).reset_index()`

**Creating an empty column for now**
`data['column'] = None`

**Creating a subset of data**
`subset = data[data[column] < 345]`
`data.loc['row', 'col']`
* Similar to R but in R no need for .loc
* Can use `iloc[]` too -> for key difference [[data100 - UC Berkeley#^38e665]]

**Creating a 3rd column as the mean/sum/diff of other columns**
`data['col 3'] = data[['col 1', 'col 2']].mean(axis=1, skipna=True)`
* We MUST specify axis = 1/0 since without it -> axis = 0
* `axis = 0` = apply column to column (default)
* `axis = 1` = apply row to row
* see ==12_deflategate.ipynb==

**Copy()**
Everytime you create a subset, include `.copy()` if you want to avoid changing the og data set.

**Dropping a column**
`.drop('col', axis = 1)` = default is axis = 0 which drops a row (rmb 0 = row, 1 = column)
Or we can just type out `axis = "columns"` or `axis = "rows"`

**Create a new column filled with NA**
`data['new column'] = None`

**Naming 1 single column**
Use `columns = ['name]`

```
df_ssn = pd.DataFrame(
    ['data'],
    columns = ['SSN'])
```

### Loops
**if continue** = move onto the next iteration

```py
for strategy_parameters_value in itertools.product(
    *strategy_parameters_values):
    
    strategy_params = dict(
        zip(strategy_parameters_keys, 
            strategy_parameters_value))

    if (strategy_params['fast_window'] == 
        strategy_parameters['fast_window'][0] and 
        strategy_params['slow_window'] == 
        strategy_parameters['slow_window'][0]) or \
       (strategy_params['fast_window'] == 
        strategy_parameters['fast_window'][1] and 
        strategy_params['slow_window'] == 
        strategy_parameters['slow_window'][1]) or \
       (strategy_params['fast_window'] == 
        strategy_parameters['fast_window'][2] and 
        strategy_params['slow_window'] == 
        strategy_parameters['slow_window'][2]) or \
       (strategy_params['fast_window'] == 
        strategy_parameters['fast_window'][3] and 
        strategy_params['slow_window'] == 
        strategy_parameters['slow_window'][3]):

        strategy_sides = determine_strategy_side(prices, 
            **strategy_params)
    else:
        continue
```

### Data frame attributes
**Mode**
`data['col'].mode()[0]` = \[0] specifies the first mode
### Displaying simulation results and plot
* Def the function WITHOUT the input

Outside the function

* Ask for input
* results = function()
* display(results.head())
* sns.plot

==Example==

```py
def simulated_difference_of_means(dataset):

	"""Returns: Difference between mean birthweights of babies of smokers 
	and non-smokers after shuffling labels n times"""
	
	data = []
	
	for i in range(1, rep + 1):
		# Shuffling
	  dataset['Shuffled Maternal Smoker'] = dataset['Maternal Smoker'] \
			.sample(frac=1).reset_index(drop=True)
	  # Find dim
	  dim = difference_of_means(dataset, 'Shuffled Maternal Smoker')
	  # Update to results table
		data.append({
				'Stimulation': i,
				'Difference of mean': dim
		})
		
	df_data = pd.DataFrame(data)
	return df_data

# input
rep = int(input('Enter the number of repetitions: '))
# call function & display data frame result
df_data = simulated_difference_of_means(births_subset)
display(df_data.head())
sns.histplot(data = df_data, x = 'Difference of mean')
```

### NA

To quickly remove na

`gdp = gdp[~gdp.isna()]`

### groupby

Basic syntax: `dataframe.groupby['gender']('frequency').mean()`. We can

**add more groupby criteria**: ==e.g. not just by gender but also by age==
>df.groupby(**\['gender', 'age']**)\['frequency'].mean()
* key: the use of **\[]** when more than 1 element is passed to the \()

**add more groupby metrics of interest**:
>df.groupby('gender')\[\['frequency', 'count']].agg(**\['mean', 'max']**)
### Subsetting

To quickly select rows of this df that is also available in another: `A[A.index.isin(B.index)]`

```
Y_common = Y[Y.index.isin(Y_fracdiff.index)]
```

### Merge, join, append

Add columns to existing df (usu for features)

`dfa = dfa.join`(dfb, on = 'Date')

### Numpy and maths
**creating an array**

```py
emission_prob = np.array([
    [0.3, 0.5, 0.2], 
    [0.1, 0.5, 0.4]   
])
```

>The first number controls the row, second number controls the columns (like dataframes)
To print the entire first row: `emission_prob[0, :]`        # array(\[0.3, 0.5, 0.2])

**np.linspace**(1, 100, 77)
Print out 77 evenly spaced numbers from 1 to 100
### Classes, methods etc.

> A **class** in Python is like a blueprint for creating objects (instances). It defines a set of attributes (variables) and methods (functions) that the objects created from the class will have.

Think of a class as a **template** for creating something. For example, if you have a `Car` class, it might define that every car has attributes like `color`, `make`, and `model`, and methods like `drive()` and `stop()`.

```py
class Car:
    def __init__(self, color, make, model):
        self.color = color
        self.make = make
        self.model = model

    def drive(self):
        print(f"The {self.color} {self.make} {self.model} is driving.")

    def stop(self):
        print(f"The {self.color} {self.make} {self.model} has stopped.")
```

Here, `Car` is a class. It defines:

- **Attributes**: `color`, `make`, `model`
- **Methods**: `drive()`, `stop()

>An **object** is an instance of a class. When you create an object from a class, it’s like creating a specific item from a blueprint.

```py
my_car = Car("red", "Toyota", "Corolla"
```

Here, `my_car` is an **object** of the `Car` class. It has its own specific values for `color`, `make`, and `model`.

>A **method** is a function that is defined inside a class and operates on instances of that class. Methods are used to define the behaviors of the objects created from the class.

```py
my_car.drive()
```

This calls the `drive()` method on the `my_car` object, making it print `"The red Toyota Corolla is driving."`.

```py
def __init__(self, color, make, model):
    self.color = color
    self.make = make
    self.model = model
```

In the `Car` class, `__init__` sets the initial values for `color`, `make`, and `model` when a new `Car` object is created.

>**Inheritance** allows one class to inherit the attributes and methods of another class. The new class (child) can add new attributes and methods or override existing ones from the parent class.

```
class ElectricCar(Car):
    def charge(self):
        print(f"The {self.color} {self.make} {self.model} is charging.")
```

ElectricCar is a **subclass** of Car. It inherits all the attributes and methods of `Car` and adds a new method, `charge()`.

>An **abstract class** is a class that cannot be instantiated on its own and is meant to be a base class for other classes. It often contains abstract methods, which are methods that are declared but contain no implementation. The **subclasses** of the abstract class must implement these abstract methods.
>In other words, an abstract class is the **MOTHER OF EVERYTHING**

In Python, abstract classes are created using the `ABC` module, and abstract methods are marked with the `@abstractmethod` decorator.

```py
from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def sound(self):
        pass

class Dog(Animal):
    def sound(self):
        return "Bark"

my_dog = Dog()
print(my_dog.sound())  # Outputs: Bark
```

Here, `Animal` is an abstract class, and `sound()` is an abstract method that must be implemented by any non-abstract subclass like `Dog`.

Now onto the more complicated stuffs:

>The **factory pattern** is a design pattern that deals with the creation of objects. A factory class or method is responsible for creating objects without specifying the exact class of the object that will be created. It’s useful when you want to abstract the creation process of objects, especially when the object creation involves some complexity.

```py
class AnimalFactory:
    @staticmethod
    def create_animal(animal_type):
        if animal_type == "dog":
            return Dog()
        elif animal_type == "cat":
            return Cat()
        else:
            return None

my_pet = AnimalFactory.create_animal("dog")
print(my_pet.sound())  # Outputs: Bark
```

Here, `AnimalFactory` is a factory class that creates instances of `Dog` or `Cat` based on input.

>A **controller** is a class that manages the interaction between different parts of a program. It doesn’t handle the core logic itself but instead orchestrates the different pieces, making sure they work together.


> [!quote] summary
> different types of classes
>- **Abstract Classes** are at the top, defining the structure.
>- **Concrete Classes** implement these abstract classes.
>- **Factory and Controller Classes** operate at the same level as concrete classes:
>	- **Factory Classes** are responsible for creating objects (like concrete classes).
>	- **Controller Classes** manage the workflow, using objects created by the factory.
>	- **Methods and Attributes** are at the bottom, as the actual code and data that define the behavior of classes.

## Models

https://scikit-learn.org/stable/modules/classes.html#module-sklearn.metrics

### A. Preprocessing
>from sklearn.preprocessing import ___
>**fit_transform(data)**
#### 1. Polynomial features & overfitting

`from sklearn.preprocessing import PolynomialFeatures` | for > linear models

1. Initialise model using `PolynomialFeatures`

```
rolypoly = PolynomialFeatures(degree = 8, include_bias = False)
```

2. Fit model using `fit_transform`

```
transformed = rolypoly.fit_transform(data[["column1", "column2", "column3"]])
```

Rmb in econometrics, we could add higher than linear terms,

1. **Linear (Degree 1)**: $ax+b$
2. **Quadratic (Degree 2)**: $ax^2+bx+c$
3. **Cubic (Degree 3)**: $ax^3+bx^2+cx+d$
4. **Quartic (Degree 4)**: $ax^4+bx^3+cx^2+dx+e$
5. **Quintic (Degree 5)**: $ax^5+bx^4+cx^3+dx^2+ex+f$
6. **Sextic (Degree 6)**: $ax^6+bx^5+cx^4+dx^3+ex^2+fx+g$
7. **Septic (Degree 7)**: $ax^7+bx^6+cx^5+dx^4+ex^3+fx^2+gx+h$
8. **Octic (Degree 8)**: $ax^8+bx^7+cx^6+dx^5+ex^4+fx^3+gx^2+hx+i$
9. **Nonic (Degree 9)**: $ax^9+bx^8+cx^7+dx^6+ex^5+fx^4+gx^3+hx^2+ix+j$
10. **Decic (Degree 10)**: $ax^{10}+bx^9+cx^8+dx^7+ex^6+fx^5+gx^4+hx^3+ix^2+jx+k$

For degrees higher than ten, the naming often simply uses the ordinal number followed by "-ic" or "-degree polynomial," such as:

- **11th-degree polynomial** or **Undecic**
- **12th-degree polynomial** or **Duodecic**

```
X["hp^3"] = df["hp"]**3   # cubic, fit a model with order 3
X["hp^4"] = df["hp"]**4
```

```
# short hand for X and y (defining them in fit)

# Fit a model with order 3
hp3_model = lm.LinearRegression()
hp3_model.fit(X[["hp", "hp^2", "hp^3"]], vehicles["mpg"])
hp3_model_predictions = hp3_model.predict(X[["hp", "hp^2", "hp^3"]])

# Fit a model with order 4
hp4_model = lm.LinearRegression()
hp4_model.fit(X[["hp", "hp^2", "hp^3", "hp^4"]], vehicles["mpg"])
hp4_model_predictions = hp4_model.predict(X[["hp", "hp^2", "hp^3", "hp^4"]])
```

The problem is **model complexity** - the more features we have, the lower values of training error. In fact, it is a mathematical fact that if we create a polynomial model with degree $n-1$, we can *perfectly* model a set of $n$ points. For example, a set of 5 points can be perfectly modeled by a degree 4 model.

![[Pasted image 20240514160502.png|center|70%]]

However, obviously there's gonna be a trade-off: **higher test error**. The model has **overfit** to the data used to train it. It has essentially "memorized" the six datapoints used during model fitting, and does not generalize well to new data.

Complex models tend to be more sensitive to the data used to train them. The **variance** of a model refers to its tendency to vary depending on the training data used during model fitting. It turns out that our degree-5 model has very high model variance. If we randomly sample new sets of datapoints to use in training, the model varies erratically.

![[under_over_fitting.png |center|40%]]

#### 2. Standard scaling

Scaling adjusts the range of features to a predefined scale, which can be either standardization or normalisation. When values = on vastly different scales -> skew models -> must adjust the ranges etc

>[!note]
>**Standardisation** = rescales features to have a mean of 0 and a standard deviation of 1.
>* Standardisation is useful when the features have different scales, and you want to give them equal weight in the model. It is particularly beneficial for algorithms that assume Gaussian distributions, such as linear regression and logistic regression.
>
>**Normalisation** rescales features to a fixed range
>* range is usu 0 to 1
>* Normalization preserves the shape of the original distribution while bringing the values into a similar numerical range. It is useful when the scale of the features is not known and might vary widely.
>* e.g. min max scaler

>[!note]
>**Standardisation** = rescales features to have a mean of 0 and a standard deviation of 1.
>* Standardisation is useful when the features have different scales, and you want to give them equal weight in the model. It is particularly beneficial for algorithms that assume Gaussian distributions, such as linear regression and logistic regression.
>
>**Normalisation** rescales features to a fixed range
>* range is usu 0 to 1
>* Normalization preserves the shape of the original distribution while bringing the values into a similar numerical range. It is useful when the scale of the features is not known and might vary widely.
>
>e.g. min max scaler

```py
from sklearn.preprocessing import StandardScaler
fit.transform
```

**Use cases**
* before regularisation

> [!warning] We do NOT scale y_train, only



### B. Model selection
>from sklearn.model_selection import ___
>**fit(x_train, y_train)**
#### 1. Train test split

`from sklearn.model_selection import train_test_split`

y_train contains the target output corresponding to X_train values

```py
Age    Sex       Disease
----  ------ |  ---------
  
  X_train    |   y_train   )
                           )
 5       F   |  A Disease  )
 15      M   |  B Disease  ) 
 23      M   |  B Disease  ) training
 39      M   |  B Disease  ) data
 61      F   |  C Disease  )
 55      M   |  F Disease  )
 76      F   |  D Disease  )
 88      F   |  G Disease  )
-------------|------------
   
  X_test     |    y_test

 63      M   |  C Disease  )
 46      F   |  C Disease  ) test
 28      M   |  B Disease  ) data
 33      F   |  B Disease  )
```

We **fit** the model on **X_train** and **y_train**: `lalala.fit(X_train, y_train)`

We **predict** on **X_test**: `lalala.predict(X_test)`

To get the **accuracy score**: `lalala.score` (general purpose, which returns `r2_score` for regression model and `accuracy_score` for classification model)

* for training accuracy score: `lalala.score(X_train, y_train)`
* test_score = lalala`.score(X_test, y_test)`

**Argument: `stratify = True`**
With shuffling, random order. You can stratify by defining the number of samples by class, when splitting, to stay proportional

```py
from sklearn.model_selection import train_test_split
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, 
                                                    test_size=0.2, 
                                                    random_state=100, 
                                                    shuffle=True)
```

#### 2. One-hot encoder

It is essentially creating dummy variables (January = 0/1, February = 0/1, etc creating 11 dummy variables `from sklearn.preprocessing import OneHotEncoder`

![[ohe.png | center]]

==step 1== initialise a one hot encoder (ohe) object.

```
ohe = OneHotEncoder()
```

==step 2== fit the encoder onto the column needs encoding (categorical column)

```
ohe.fit(df[['column']])
```

==step 3== transform the categorical column using `transform` and `get_feature_names_out`

```
encoded_array = ohe.transform(df[['column]]).toarray()
encoded_df = pd.DataFrame(encoded_array, columns = ohe.get_feature_names_out())
```

==step 4== rejoin with the full X dataframe, drop the categorical column

```
X = X_raw.join(encoded_df).drop(columns = 'day')
```

### C. Models
>import sklearn.linear_model as ___
#### 1. Linear regression

==step 1== **Model initialisation** - initialise an instance of the model class, in this case, `LinearRegression()`

```
import sklearn.linear_model as lalalalalala
my_model = lalalalalala.LinearRegression()
```

==step 2== **Train the model using `.fit`**

BTS, sklearn will run gradient descent to determine the optimal model params -> save these model params to our model instance for future use

>All sklearn model classes include a `.fit` method, which takes 2 inputs:
>1. **the design matrix / predictor vars / independent vars (X)**
>2. **the target variable / predicted (y)**

.fit expects to receive 2D data thus it should be dataframe\[\['column']], not dataframe\[\'column']

```
my_model.fit(X, Y)
```

==step 3== necessary methods

`.intercept_` = intercept

> [!NOTE] Quick way to extract the coefficients
> [theta_1, theta_2, ...], $theta_0$ = model_h \.coef_, model_h \.intercept_

`.coef_` = all x coefficients

`.predict` = predicted y

> [!success] Short form (1 line)
modelll = LinearRegression().fit(AQS, PA)
#### 2. Regularisation

Essentially they are linear regression but with shrinkage (LinearRegression = regularisation = 0)

> [!warning]+ Must standardise data before regularisation

**L1 regularisation (LASSO)**

```
lasso_model_scaled = lm.Lasso(alpha=0.1)
lasso_model_scaled.fit(X_train_standardized, Y_train)
lasso_model_scaled.coef_
```

**L2 regularisation (RIDGE)**

```
ridge_model = lm.Ridge(alpha=0.1)
ridge_model.fit(X_train_standardized, Y_train)
ridge_model.coef_
```

### D. Cross validation

cross validation score: `from sklearn.model_selection import cross_val_score`

kfold: `from sklearn.model_selection import KFold`

1. Initialise cross validation method

```py
cross_val_model = KFold(
	n_splits = 888,
	random_state = None,
	shuffle = False)
```

2. (optional) identify train and test indices

```py
# cross_val_model.split(X)

for train_idx, valid_idx in kf.split(X_train):
    split_X_train, split_X_valid = X_train.iloc[train_idx], X_train.iloc[valid_idx]
    split_y_train, split_y_valid = y_train.iloc[train_idx], y_train.iloc[valid_idx]
```

3. (optional) to visualise the folds

```py
for i, (train_index, test_index) in enumerate(kf.split(X)):
    print(f"Fold {i}:")
    print(f"  Train: index={train_index}")
    print(f"  Test:  index={test_index}")
```

4. model fit and calculating mean error for each fold

```py
ML_model = LinearRegression()
scores = cross_val_score(ML_model, X, y, scoring = 'accuracy' cv = cross_val_model, n_jobs = -1)
print('Accuracy: %.3f (%.3f)' % (mean(scores), std(scores)))
```

```py
# before looping over each train/test index
validation_errors = []

# in each loop
moddell.fit(X_train, y_train)
error = ...
validation_errors.append(error)

# outside of loop
mean_error_loops = np.mean(validation_errors)
```

**Methods**
kalulu`.get_n_splits(X)` - generate indices to split data into training and test set
## visualisation

Add `;` to remove unnecessary text lines when drawing using sns (on the same line as sns lines not at the end of the code block on a separate line)

Use `sns.countplot` instead of barplots when you don't have the variable name for one of the axes (which is most of the time)

### graph styling

```
import seaborn as sns
import pandas as pd
sns.set(font_scale=1.5)
import matplotlib.pyplot as plt
import numpy as np
from sklearn import linear_model
from sklearn.metrics import mean_squared_error
from sklearn.metrics import mean_absolute_error
import plotly.graph_objects as go
import plotly.express as px
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression

def adjust_fontsize(size=None):
    SMALL_SIZE = 8
    MEDIUM_SIZE = 10
    BIGGER_SIZE = 12
    if size != None:
        SMALL_SIZE = MEDIUM_SIZE = BIGGER_SIZE = size

    plt.rc('font', size=SMALL_SIZE)          # controls default text sizes
    plt.rc('axes', titlesize=SMALL_SIZE)     # fontsize of the axes title
    plt.rc('axes', labelsize=MEDIUM_SIZE)    # fontsize of the x and y labels
    plt.rc('xtick', labelsize=SMALL_SIZE)    # fontsize of the tick labels
    plt.rc('ytick', labelsize=SMALL_SIZE)    # fontsize of the tick labels
    plt.rc('legend', fontsize=SMALL_SIZE)    # legend fontsize
    plt.rc('figure', titlesize=BIGGER_SIZE)  # fontsize of the figure title

plt.style.use('fivethirtyeight')
sns.set_context("talk")
sns.set_theme()
adjust_fontsize(size=20)
%matplotlib inline

import warnings
warnings.filterwarnings('ignore')
```

### helper functions

Plot distribution bar charts

```py
def plot_dist(dist_df,
                      xname="x", pname="P(X = x)", varname="X",
                      save=False):
    """
    Plot a distribution from a distribution table.
    Single-variate.
    """
    plt.bar(dist_df[xname], dist_df[pname])
    plt.ylabel(pname)
    plt.xlabel(xname)
    plt.title(f"Distribution of ${varname}$")
    plt.xticks(sorted(dist_df[xname].unique()))
    if save:
        fig = plt.gcf()
        fig.patch.set_alpha(0.0)
        plt.savefig(f"dist{varname}.png", bbox_inches = 'tight');
```

Simulate random samples

```py
def simulate_samples(df, xname="x", pname="P(X = x)", size=1):
    return np.random.choice(
                df[xname], # Draw from these choiecs
                size=size, # This many times
                p=df[pname]) # According to this distribution
```

### subplots

```py
fig, ax = plt.subplots(1, 3, figsize=(12, 3))

# looping 

predictions_dict = {0:hp2_model_predictions, 1:hp3_model_predictions, 2:hp4_model_predictions}

for i in predictions_dict:
    ax[i].scatter(vehicles["hp"], vehicles["mpg"], edgecolor="white", lw=0.5)
    ax[i].plot(vehicles["hp"], predictions_dict[i], "tab:red")
    ax[i].set_title(f"Model with order {i+2}")
    ax[i].set_xlabel("hp")
    ax[i].set_ylabel("mpg")
    ax[i].annotate(f"MSE: {np.round(mse(vehicles['mpg'], predictions_dict[i]), 3)}", (120, 40))

plt.subplots_adjust(wspace=0.3);
```

```py
fig, ax = plt.subplots(ncols=2)
sns.histplot(tips['tip'], bins=20, stat="proportion", ax=ax[0])
sns.histplot(tips['tip']/tips['total_bill'], bins=20, stat="proportion", ax=ax[1])
```

## Finance

> [!NOTE] Finding percentage change / return of strategy
>
>1. Long way = t1 / t0 - 1
>```

spy['returns'] = spy['close'].shift(21) / spy['close'] - 1

>```
>2. Short way
>```

spy['return'] = spy.close.shift(-21).pct_change(21)

spy['strategy_return'] = spy['return'].mul(spy.signal_momentum_high)

>```

## Dataframe

`df1.equals(df2)` to check if 2 dataframes are equal

**To join/merge/append new columns**
1. join
2. merge (more general and versatile)

**To display all column names in a pretty way**
Instead of df.columns:

```
display(Markdown('\n'.join(fr'{i + 1}. {c}'.replace('$', r'\$') for i, c in enumerate(wb.columns))))
```

## Multiprocessing
**Joblib parallel**: In rough terms, it spawns multiple Python processes and handles each part of the iterable in a separate process. Then it joins everything at the end. ==see backtesting paper - n_jobs==

Examples:

```py
results = Parallel(n_jobs=n_jobs)(
	delayed(FUNCTION)(FUNCTION ARGUMENTS)
	for random_state_value in random_states
)
```

```py
path_data = Parallel(n_jobs=n_jobs)(
	delayed(train_test_single_estimator)(
		deepcopy(single_estimator), train_indices, test_indices
	) for train_indices, test_indices in self._single_split(single_data)
)
```

```py
results = Parallel(n_jobs=n_jobs)(
	delayed(performance_evaluation)(
		np.concatenate([partitions[i] for i in train_indices], axis=0),
		np.concatenate([partitions[i] for i in partition_indices 
						if i not in train_indices], axis=0),
		n_strategies, 
		metric, 
		risk_free_return
	) 
	for train_indices in partition_combinations_indices
)
```

## Pipeline

`from sklearn.pipeline import Pipeline`

Example: fitting polynomial model 18 times

```py
def fit_model_dataset(degree):
    pipelined_model = Pipeline([
        ('polynomial_transformation', 'PolynomialFeatures(degree)),
	    ('linear_regression', lm.LinearRegression())
	])
	pipelined_model.fit(X_train[['hp']], Y_train)
	return mean_squared_error(Y_value, pipelined_model.predict(X_value[['hp']]))
```

## Miscellaneous

### simple boolean, if xyz, prints 1

```py
ins['Missing score'] = ins['score'] == -1
OR
ins['Missing score'] = (ins['score'] == -1)
```

### replace

If I have a table called wine, class column:

-> To know how many unique values there are in class: `wine['class'].unique()`

-> To replace all values not 1 into 0: **wine\['class']**`.apply(lambda x: 1 if x == 1 else 0)`

### Normalise = True[True]

value_counts(normalize=True)

-> convert counts to proportions

value_counts(normalize=True)[True]

-> only show the True results

### :.2f

= display to 2 decimal places

`relevant_attributes = movies[['Title', 'Genre'] + attribute_columns]`

table then some extra columns = use plus sign

### For codes spanning multiple lines

Use either:

* \ every line end OR
* () on the RHS of equation
* wrap all with ' '

Line code > 80 -> use **single quotes** to wrap each line:

```py
print(f'The predicted genre for the movie "{train_set.loc[235, "Title"].title()}"'
      f' is: {predicted_genre.loc[0, "Genre"].upper()}.')
```

```py
k = int(input("Enter k: "))
if isinstance(k, int) and k > 0:
    predicted_genre = knn_classification(train_set.loc[235], train_set).reset_index()
    print(f'The predicted genre for the movie "{train_set.loc[235, "Title"].title()}"'
          f' is: {predicted_genre.loc[0, "Genre"].upper()}.')
else:
    print("Invalid input. Please enter a valid integer for k.")
```

### in paths work unless it's followed by n

```py
pd.read_csv("data\nst-est2019-01.csv") # would NOT work cos \n
```

Solution: add `r` at the front -> indicates that it's a raw string, and backslashes will be treated as literal characters.

```py
pd.read_csv("data/nst-est2019-01.csv")
```

Or simply use a forward slash /

### np.searchsorted

`numpy.searchsorted(a, v, side='left', sorter=None)`
