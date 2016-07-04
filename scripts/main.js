//PatternFly Styles
//Note: No other CSS files are needed regardless of what other JS packages located in patternfly/components that you decide to pull in
require('../less/styles.less');

//jQuery
//execute files in global context with script-loader: https://github.com/webpack/script-loader
require('script!../node_modules/patternfly/node_modules/jquery/dist/jquery.min');

//Bootstrap JS
require('../node_modules/patternfly/node_modules/bootstrap/dist/js/bootstrap.min');

//C3, D3 Charting Libraries
require('script!../node_modules/patternfly/node_modules/c3/c3.min');
require('script!../node_modules/patternfly/node_modules/c3/node_modules/d3/d3.min');

//Datatables, jQuery Grid Component
require('../node_modules/patternfly/node_modules/datatables/media/js/jquery.dataTables.min');
require('../node_modules/patternfly/node_modules/drmonty-datatables-colvis/js/dataTables.colVis');
require('../node_modules/patternfly/node_modules/datatables.net-colreorder/js/dataTables.colReorder');

//PatternFly Custom Componets -  Sidebar, Popovers and Datatables Customizations
//Note: jquery.dataTables.js must occur in the html source before patternfly*.js
require('../node_modules/patternfly/dist/js/patternfly.min.js');

//Moment
require('../node_modules/patternfly/node_modules/moment/min/moment.min');

//Bootstrap Combobox
require('../node_modules/patternfly/node_modules/patternfly-bootstrap-combobox/js/bootstrap-combobox');

//Bootstrap Date Picker
require('../node_modules/patternfly/node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min');

//Bootstrap Date Time Picker - requires Moment
require('../node_modules/patternfly/node_modules/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min');

//Bootstrap Select
require('../node_modules/patternfly/node_modules/bootstrap-select/dist/js/bootstrap-select.min');

//Bootstrap Touchspin
require('../node_modules/patternfly/node_modules/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min');

//Bootstrap Tree View
require('../node_modules/patternfly/node_modules/bootstrap-treeview/dist/bootstrap-treeview.min');

//Google Code Prettify - Syntax highlighting of code snippets
require('../node_modules/patternfly/node_modules/google-code-prettify/bin/prettify.min');

//MatchHeight - Used to make sure dashboard cards are the same height
require('../node_modules/patternfly/node_modules/jquery-match-height/jquery.matchHeight-min');

//Angular Application? You May Want to Consider Pulling Angular-PatternFly And Angular-UI Bootstrap instead of bootstrap.js
//See https://github.com/patternfly/angular-patternfly for more information
