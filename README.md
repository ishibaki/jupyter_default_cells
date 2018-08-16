default_cells
=========

Add default cells to each new notebook. You have to modify this line in the main.js file to change your default cell. For example

`Jupyter.notebook.insert_cell_above('code', 0).set_text("import numpy as np/nimportpandas as pd")`


You can also add another default cell by creating a new line just below :

`Jupyter.notebook.insert_cell_above('code', 1).set_text("from sklearn.meatrics import mean_squared_error")`

**Don't forget to increment 1 if you want more than one extra cell. **
