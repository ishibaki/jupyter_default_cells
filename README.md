# default_cells

Add default cells to each new jupyter notebook.

[Latest](https://github.com/ishibaki/jupyter_default_cells)

## How to use

You have to modify this line in the `main.js` file to change your default cell.  
For example:

`Jupyter.notebook.insert_cell_above('code', 0).set_text("import numpy as np\nimportpandas as pd")`

You can also add another default cell by creating a new line just below:

`Jupyter.notebook.insert_cell_above('code', 1).set_text("from sklearn.meatrics import mean_squared_error")`

**Don't forget to increment 1 if you want more than one extra cell.**

## How to install

Put me in `/usr/local/share/jupyter/nbextensions/default_cells` in Mac OS.  
If you use other OS, you can search the path in your terminal by:

```
python -c "from jupyter_core.paths import jupyter_path; print(jupyter_path())"
```

**Note!!**  
**`default_cells` requires `jupyter-contrib-nbextensions`**

## Example

Example `.ipynb` file is available [here](./example_default_cell.ipynb).

![](./media/sample_movie.gif)

## Reference

[stack overflow](https://stackoverflow.com/questions/36194865/configure-a-first-cell-by-default-in-jupyter-notebooks)
