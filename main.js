define([
    'base/js/namespace'
], function(
    Jupyter
) {
    function load_ipython_extension() {
      if (Jupyter.notebook.get_cells().length===1){
   //do your thing
        Jupyter.notebook.insert_cell_above('code', 0).set_text("\
# Scientific libraries\n\
import scipy\n\
import numpy as np\n\
import pandas as pd\n\
\n\
# Graphic libraries\n\
import matplotlib as mpl\n\
import matplotlib.pyplot as plt\n\
# import japanize_matplotlib\n\
# import seaborn as sns\n\
# import holoviews as hv\n\
# from bokeh.io import output_notebook\n\
# output_notebook()\n\
# from bokeh.io import show\n\
%matplotlib inline\n\
%config InlineBackend.figure_formats = {'png', 'retina'}\n\
\n\
# Statistical libraries\n\
# import statsmodels.stats as stats\n\
# import statsmodels.stats.multicomp as multi\n\
# import statsmodels.formula.api as smf\n\
# import scikit_posthocs as sp\n\
\n\
# Other libraries\n\
# import re\n\
# from datetime import datetime\n\
# import collections\n\
\n\
# Creating alias for magic commands\n%alias_magic t time");
        //Jupyter.notebook.insert_cell_above('code', 1).set_text("import something")
      }
    }
    return {
        load_ipython_extension: load_ipython_extension
    };
});
