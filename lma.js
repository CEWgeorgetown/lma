// "use strict";
// TODO: Strict mode requires object destructuring/destructuring the assignments in all function calls
/*
  This is the main javascript file for Chase high-paying middle skills jobs.
  The HTML file index.html is a single-page HTML with tables for CBSAs and programs presenting the data.
  Tables are formatted to show data with and without shortages: CBSAs and providers consists of two tables each.
  One set of tables are for showing data with and another set are for showing data without shortages.
*/

// Naming convention: 
//  camelCase are for pure JS variables; 
//  snake_case and lower case are for values in objects from data processing in .js files 
//  lower case and use of "-" are for HTML elements.
//  all caps are magic numbers for this js program
// Data are represented as JSON arrays of objects in .js files

// CBSA level data with shortages to be passed to DataTable
const allCBSA = [
  { "data": "cbsa_name" },
  { "data": "Occ" },
  {
    "data": "ratio",
    render: $.fn.dataTable.render.number(null, ".", 2, null, null)
  },
  {
    "data": "shortage",
    // defaultContent: NaN,
    defaultContent: 0,
    render: $.fn.dataTable.render.number(",", ".", 0)
    // This converts to strings so it doesn't work
    // render: function (data, type, row) {
    //   if (isNaN(data)) {
    //     return "Not applicable"
    //   } else {
    //     return data
    //   }
    // }
  },
  {
    "data": "num_awards",
    render: $.fn.dataTable.render.number(",", ".", 0)
  },
  {
    "data": "no_tot",
    render: $.fn.dataTable.render.number(",", ".", 0)
  },
  {
    "data": "no_hp",
    render: $.fn.dataTable.render.number(",", ".", 0)
  },
  {
    "data": "no_lp",
    render: $.fn.dataTable.render.number(",", ".", 0)
  }
]

// CBSA level data without shortages to be passed to DataTable
const noshortageCBSA = [
  { "data": "cbsa_name" },
  { "data": "Occ" },
  {
    "data": "ratio",
    render: $.fn.dataTable.render.number(null, null, 2, null, null)
  },
  {
    "data": "num_awards",
    render: $.fn.dataTable.render.number(",", ".", 0)
  },
  {
    "data": "no_tot",
    render: $.fn.dataTable.render.number(",", ".", 0)
  },
  {
    "data": "no_hp",
    render: $.fn.dataTable.render.number(",", ".", 0)
  },
  {
    "data": "no_lp",
    render: $.fn.dataTable.render.number(",", ".", 0)
  }
]

// Function to populate CBSA level tables
function displayCBSA(d, showcolumns, div, ol) {
  /* 
    d: javascript object containing cbsa level data for the table. The full data is cbsa in cbsal.js or a subset from filtering
    showcolumns: which table columns to show - either allCBSA or noshortageCBSA
    div: which div to present the table: either #table-cbsa or #table-cbsa-noshortage 
    ol: number of columns to the left before a vertical line is drawn to divide the table for aesthetic/group purposes
  */

  $(div).DataTable({
    initComplete: function () {
      $(div + " thead select").remove();
      this.api()
        .columns([0, 1])
        .every(function () {
          let column = this;

          // Create select element
          let select = document.createElement("select");
          select.name = "table-filter";
          select.add(new Option("All", ""));
          column.header().append(select);

          // Apply listener for user change in value
          select.addEventListener("change", function () {
            column
              .search(select.value, { exact: true })
              .draw();
          });
          select.addEventListener("click", function (e) {
            e.stopPropagation();
          });

          // Add list of options
          column
            .data()
            .unique()
            .sort()
            .each(function (d, j) {
              select.add(new Option(d));
            });
        });
    },
    lengthMenu: [5, 10, 20, 50],
    layout: {
      bottom2Start: {
        buttons: [
          {
            extend: "collection",
            text: "Export",
            className: "custom-html-collection",
            buttons: ["copy", "csv", "excel", "print"]
          }]
      },
      top2End: null,
      topStart: "search",
      topEnd: "pageLength"
    },
    columnDefs: [{
      targets: ol,
      className: "outlined-left"
    }],
    // responsive: true,
    pageLength: 5,
    destroy: true,
    order: [[0, "asc"], [1, "asc"]],
    data: d,
    "columns": showcolumns
  });
};

// Provider level data with shortages to be passed to DataTable
const allinst = [
  { "data": "cbsa_name" },
  { "data": "Occ" },
  { "data": "name" },
  { "data": "sector" },
  {
    "data": "acert",
    render: $.fn.dataTable.render.number(",", ".", 0)
  },
  {
    "data": "aaas",
    render: $.fn.dataTable.render.number(",", ".", 0)
  },
  {
    "data": "ams",
    render: $.fn.dataTable.render.number(",", ".", 0)
  },
  {
    "data": "achp",
    render: $.fn.dataTable.render.number(",", ".", 0)
  },
  {
    "data": "aahp",
    render: $.fn.dataTable.render.number(",", ".", 0)
  },
  {
    "data": "amhp",
    render: $.fn.dataTable.render.number(",", ".", 0)
  },
  {
    "data": "pcbsa",
    render: function (data, type, row) {
      return parseFloat(Math.round(data * 1000) / 10).toFixed(1) + "%";
    }
  },
  {
    "data": "inc1",
    render: $.fn.dataTable.render.number(",", ".", 0)
  }
]

// Provider level data without shortages to be passed to DataTable
const noshortageinst = [
  { "data": "cbsa_name" },
  { "data": "Occ" },
  { "data": "name" },
  { "data": "sector" },
  {
    "data": "acert",
    render: $.fn.dataTable.render.number(",", ".", 0)
  },
  {
    "data": "aaas",
    render: $.fn.dataTable.render.number(",", ".", 0)
  },
  {
    "data": "ams",
    render: $.fn.dataTable.render.number(",", ".", 0)
  },
  {
    "data": "achp",
    render: $.fn.dataTable.render.number(",", ".", 0)
  },
  {
    "data": "aahp",
    render: $.fn.dataTable.render.number(",", ".", 0)
  },
  {
    "data": "amhp",
    render: $.fn.dataTable.render.number(",", ".", 0)
  },
  {
    "data": "pcbsa",
    render: function (data, type, row) {
      return parseFloat(Math.round(data * 1000) / 10).toFixed(1) + "%";
    }
  }
]

// Function to populate provider level tables
function displayInst(d, showcolumns, div, ol) {
  /* 
  d: javascript object containing provider level data for the table. The full data is cbsa in progs.js or a subset from filtering
  showcolumns: which table columns to show - either allinst or noshortageinst
  div: which div to present the table: either #table-inst or #table-inst-noshortage 
  ol: array of number of columns to the left before a vertical line is drawn to divide the table for aesthetic/group purposes
*/

  $(div).DataTable({
    initComplete: function () {
      $(div + " thead select").remove();
      this.api()
        .columns([0, 1, 2, 3])
        .every(function () {
          let column = this;

          // Create select element
          let select = document.createElement("select");
          select.name = "table-filter";
          select.add(new Option("All", ""));
          column.header().append(select);

          // Apply listener for user change in value
          select.addEventListener("change", function () {
            column
              .search(select.value, { exact: true })
              .draw();
          });
          select.addEventListener("click", function (e) {
            e.stopPropagation();
          });

          // Add list of options
          column
            .data()
            .unique()
            .sort()
            .each(function (d, j) {
              select.add(new Option(d));
            });
        });
    },
    lengthMenu: [5, 10, 20, 50],
    layout: {
      bottom2Start: {
        buttons: [
          {
            extend: "collection",
            text: "Export",
            className: "custom-html-collection",
            buttons: ["copy", "csv", "excel", "print"]
          }]
      },
      top2End: null,
      topStart: "search",
      topEnd: "pageLength"
    },
    columns: [{ width: "20%" }],
    columnDefs: [{
      targets: ol,
      className: "outlined-left"
    }],
    rowCallback: function (row, data) {
      $(row).attr("title", "Click for details");
    },
    pageLength: 5,
    deferRender: true,
    processing: true,
    destroy: true,
    order: [[0, "asc"], [1, "asc"], [2, "asc"], [3, "asc"]],
    data: d,
    "columns": showcolumns
  });
};

// Set Highcharts global options
Highcharts.setOptions({
  lang: {
    thousandsSep: ","
  },
  colors: ["#B9D9EC", "#144175", "#F9A21C", "#266150", "#DE354C"]
});

const OCCS = ["Blue-collar", "Health", "Management", "Protective services", "STEM"];
// Function to create data objects for barcharts using Highcharts library
function getChartData(data, ratio) {
  /*
    data: subset or all CBSAs
    ratio: true = ratio (credentials-to-jobs), false = shortage (annual number of jobs shortage)
    TODO: possible use constants instead of numbers
    returns:
      an array consisting of:
      1. xcat: CBSAs to use for x-axis, can be filtered by user
      2. key-value pairs corresponding to occupation cluster and either ratio or shortage
  */
  let xcat = data.map(function (item) {
    return item.cbsa_name
  });
  // Filter out duplicate CBSA names
  xcat = xcat.filter((val, ind, arr) => arr.indexOf(val) === ind);
  let seriesData = [];
  // Create JSON objects for chart - each object is an occupation
  // The data key contains x and y elements
  // This complicated approach is used because the cbsa names have to line up with the x-axis categories
  // This is because not all CBSAs have the same number of occupations

  // Initialize y-elements to missing
  $.each(OCCS, function (j, value) {
    let series = {
      name: value,
      data: []
    };
    $.each(xcat, function (i, xvalue) {
      series.data.push({ x: i, y: NaN, cbsa: xvalue });
    });
    seriesData.push(series);
  });

  $.each(OCCS, function (j, value) {
    // fill each occupation
    let ydata = data.filter(item => item.Occ == value);
    let sdata = seriesData.filter(item => item.name == value);
    $.each(ydata, function (y, yvalue) {
      $.each(sdata[0].data, function (i, value) {
        if (sdata[0].data[i].cbsa == yvalue.cbsa_name) {
          if (ratio) {
            sdata[0].data[i].y = yvalue.ratio;
          } else if (!ratio) {
            if (yvalue.shortage === undefined) {
              sdata[0].data[i].y = 0;
            } else {
              sdata[0].data[i].y = yvalue.shortage;
            }
          }
        }
      })
    })
  })
  return [xcat, seriesData];
};

// Function to draw barcharts using Highcharts library
function drawChart(data = cbsa, xcat, ratio) {
  /*
    data: subset or all CBSAs
    xcat: subset or all CBSA names
    ratio: true = ratio (credentials-to-jobs), false = shortage (annual number of jobs shortage)
  */
  // h: guesstimate height of chart based on number of CBSAs
  const MAX_CHART_HEIGHT = 5000;
  const GUESS_BAR_HEIGHT = 150;
  let numRows = xcat.length;
  let h = Math.min(numRows * GUESS_BAR_HEIGHT, MAX_CHART_HEIGHT);

  // vertical reference line - only used when showing credentials-to-jobs-ratio
  let refLine = [{
    color: "#000000",
    zIndex: 5,
    width: 2,
    value: 1
  }];

  // Declare elements of chart that need to vary by type: ratio or shortage
  let ref = null; // vertical reference line
  let ttl = null; // chart title
  let pf = null; // point format
  let yf = null; // y-axis format
  let ya = null; // y-axis title
  let mo = null; // mouseover function

  // When ratio is selected, initialize these
  if (ratio) {
    ref = refLine;
    ttl = "Credentials-to-jobs ratio"; // title
    pf = '<td style="padding:0">&nbsp<b>{point.y:.2f}</b></td></tr>'; // point format
    yf = "{value: , .1f}"; // y-axis format
    ya = "Alignment ratio"; // y-axis title
    // Define mouseover function for chart title
    mo = function () {
      const chart = this
      chart.title.on("mouseover", e => {
        chart.titleTooltip = this.renderer.label(
          "Values less than one indicate a shortage in<br> credential production, values greater than <br> one indicate a surplus in credential production,<br> and values equal to one indicate perfect alignment <br> between credential production and occupational<br> demand. See table notes for more details.",
          200,
          150,
          "rectangle"
        )
          .css({
            color: "#FFFFFF",
            fontSize: "10px"
          })
          .attr({
            fill: "rgba(0, 0, 0, 0.75)",
            padding: 8,
            r: 4,
          })
          .add()
          .toFront()
      })

      chart.title.on("mouseout", e => {
        if (chart.titleTooltip) {
          chart.titleTooltip.destroy()
        }
      })
    };
  }
  // When shortage is selected, initialize these
  else if (!ratio) {
    ttl = "Annual credential shortage"; // title
    ref = null; // no vertical reference
    pf = '<td style="padding:0">&nbsp<b>{point.y}</b></td></tr>'; // point format
    yf = "{value: , .0f}"; // y-axis format
    ya = "Annual credential shortage"; // y-axis title
    mo = null // No mouseover necessary
  };

  $("#chart").highcharts({
    title: {
      text: ttl
    },
    chart: {
      type: "bar",
      marginTop: 150,
      height: "100%",
      scrollablePlotArea: {
        minHeight: h,
        scrollPositionX: 1,
      },
      events: {
        load: mo
      }
    },
    yAxis: {
      title: {
        text: ""
      },
      offset: 5,
      opposite: true,
      plotLines: ref,
      labels: {
        format: yf
      }
    },
    xAxis: {
      type: "category",
      title: {
        text: ""
      },
      categories: xcat,
      accessibility: {
        rangeDescription: "CBSA"
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        pf,
      footerFormat: "</table>",
      shared: false,
      useHTML: true
    },
    legend: {
      enabled: true,
      verticalAlign: "top"
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      bar: {
        // pointWidth: 5,
        // pointPadding: 0.1,
        groupPadding: 0.1
      },
      series: {
        dataLabels: {
          enabled: true,
          allowOverlap: true,
          crop: false,
          overflow: "allow",
          formatter: function () {
            if (ttype == 1) {
              return Highcharts.numberFormat(Math.round(this.y * 100) / 100, 2);
            } else {
              return Highcharts.numberFormat(this.y, 0)
            }

          }
        }
      }
    },
    series: data
  })
}

// generic comparison function
let cmp = function (x, y) {
  return x > y ? 1 : x < y ? -1 : 0;
};

// Function to display providers and programs
function displayDetail(d) {
  $("#table-prog").DataTable({
    initComplete: function () {
      $("#table-prog thead select").remove();
      this.api()
        .columns([0, 1, 2])
        .every(function () {
          let column = this;

          // Create select element
          let select = document.createElement("select");
          select.name = "table-filter";
          select.add(new Option("All"));
          column.header().append(select);

          // Apply listener for user change in value
          select.addEventListener("change", function () {
            column
              .search(select.value, { exact: true })
              .draw();
          });
          select.addEventListener("click", function (e) {
            e.stopPropagation();
          });

          // Add list of options
          column
            .data()
            .unique()
            .sort()
            .each(function (d, j) {
              select.add(new Option(d));
            });
        });
    },
    layout: {
      bottom2Start: {
        buttons: [
          {
            extend: "collection",
            text: "Export",
            className: "custom-html-collection",
            buttons: ["copy", "csv", "excel", "print"]
          }]
      },
      top2End: null,
      topStart: "search",
      topEnd: "pageLength"
    },
    // responsive: true,
    pageLength: 10,
    deferRender: true,
    processing: true,
    destroy: true,
    order: [[0, "asc"], [1, "asc"], [2, "asc"], [3, "asc"]],
    data: d,
    "columns": [
      { data: "instn_name" },
      { data: "occ_group" },
      { data: "cip2020title" },
      { data: "num_certs" },
      { data: "num_aas" },
      { data: "num_total" }
    ]
  });
}

function displayCBSADetail(d) {
  $("#table-cbsa-modal").DataTable({
    initComplete: function () {
      $("#table-cbsa-modal thead select").remove();
      this.api()
        .columns([1, 2])
        .every(function () {
          let column = this;

          // Create select element
          let select = document.createElement("select");
          select.name = "table-filter";
          select.add(new Option("All"));
          column.header().append(select);

          // Apply listener for user change in value
          select.addEventListener("change", function () {
            column
              .search(select.value, { exact: true })
              .draw();
          });
          select.addEventListener("click", function (e) {
            e.stopPropagation();
          });

          // Add list of options
          column
            .data()
            .unique()
            .sort()
            .each(function (d, j) {
              select.add(new Option(d));
            });
        });
    },
    layout: {
      bottom2Start: {
        buttons: [
          {
            extend: "collection",
            text: "Export",
            className: "custom-html-collection",
            buttons: ["copy", "csv", "excel", "print"]
          }]
      },
      top2End: null,
      topStart: "search",
      topEnd: "pageLength"
    },
    // responsive: true,
    pageLength: 10,
    deferRender: true,
    processing: true,
    destroy: true,
    order: [[0, "asc"], [1, "asc"], [2, "asc"], [3, "asc"]],
    data: d,
    "columns": [
      { data: "cbsa_name" },
      { data: "occ_group" },
      { data: "cip2020title" },
      { data: "num_certs" },
      { data: "num_aas" },
      { data: "num_total" }
    ]
  });
}

function toggleElements(about, cbsachart, shortage, noshortage, onlycbsa, onlyinst) {
  if (about) {
    $("#nav-abt").css("background-color", "#B9D9EC");
    $("#nav-cbsa").css("background-color", "");
    $("#nav-inst").css("background-color", "");
    $("#about").show();
    $("#all-vis-select").hide();
  } else {
    $("#nav-abt").css("background-color", "");
    $("#about").hide();
  };
  if (cbsachart) {
    $("#chart-col").show();
  } else {
    $("#radio-chart-align").prop("checked", true);
    $("#chart-col").hide();
  }
  if (noshortage) {
    if (onlycbsa) {
      $("#div-tbl-inst-noshortage").hide();
      $("#div-tbl-cbsa-noshortage").show();
    } else if (onlyinst) {
      $("#div-tbl-cbsa-noshortage").hide();
      $("#div-tbl-inst-noshortage").show();
    } else {
      $("#div-tbl-cbsa-noshortage").show();
      $("#div-tbl-inst-noshortage").show();
    }
  } else {
    $("#div-tbl-cbsa-noshortage").hide();
    $("#div-tbl-inst-noshortage").hide();
  };
  if (shortage) {
    if (onlycbsa) {
      $("#div-tbl-inst").hide();
      $("#div-tbl-cbsa").show();
    } else if (onlyinst) {
      $("#div-tbl-cbsa").hide();
      $("#div-tbl-inst").show();
    } else {
      $("#div-tbl-cbsa").show();
      $("#div-tbl-inst").show();
    }
  } else {
    $("#div-tbl-cbsa").hide();
    $("#div-tbl-inst").hide();
  }
}

// This function should only be called once when page loads
function initializeSearchParams() {
  // initialize all cbsas to be checked
  // initialize some cbsas
  // $("#list-cbsa input:checkbox")[1].checked = true;
  // $("#list-cbsa input:checkbox")[8].checked = true;
  // $("#list-cbsa input:checkbox")[23].checked = true;
  // $("#list-cbsa input:checkbox")[31].checked = true;
  // $("#list-occ input:checkbox").prop("checked", true);
  // $("#radio-default").prop("checked", true);

  // $("#list-cbsa-oc input:checkbox")[1].checked = true;
  // $("#list-cbsa-oc input:checkbox")[8].checked = true;
  // $("#list-cbsa-oc input:checkbox")[23].checked = true;
  // $("#list-cbsa-oc input:checkbox")[31].checked = true;
  // $("#list-occ-oc input:checkbox").prop("checked", true);
  // $("#radio-default-oc").prop("checked", true);

  $("#multi-select-list-cbsa input:checkbox")[1].checked = true;
  $("#multi-select-list-cbsa input:checkbox")[8].checked = true;
  $("#multi-select-list-cbsa input:checkbox")[23].checked = true;
  $("#multi-select-list-cbsa input:checkbox")[31].checked = true;
  $("#multi-select-list-occ input:checkbox").prop("checked", true);
}

// function to get data from provider row to show modal data
let dtInst = null; // has to be declared outside in order for it to persist
function showModalData(div) {
  dtInst = $(div).DataTable();
  $(div + " tbody").on("click", "tr", function () {
    let rowData = dtInst.row(this).data();
    let progsToShow = progs.filter(obj => {
      return (obj.cbsa_name == rowData.cbsa_name & obj.instn_name == rowData.name & obj.occ_group == rowData.Occ)
    })
    $("#modal-prog").modal("show");
    displayDetail(progsToShow);
  });
}

// function to get data from CBSA row to show modal data
let dtCBSA = null; // has to be declared outside in order for it to persist
function showCBSAModalData(div) {
  dtCBSA = $(div).DataTable();
  $(div + " tbody").on("click", "tr", function () {
    let rowData = dtCBSA.row(this).data();
    let cbsaToShow = cbsaDtl.filter(obj => {
      return (obj.cbsa_name == rowData.cbsa_name & obj.occ_group == rowData.Occ)
    })
    $("#modal-cbsa").modal("show");
    displayCBSADetail(cbsaToShow);
  });
}

// Values for metro types/alignments
const CBSA_ALL = "0";
const CBSA_SHORTAGE = "1";
const CBSA_NOSHORTAGE = "2";
// Set threshold for shortage
const CONF_INT_VAL = 1;

function getSearchParams() {
  // Check all search parameters for selection
  // 1. Check status of radio button on search tab for all/CBSA with shortages/CBSA with no shortages
  let cbsaType = undefined;
  $("input[name=flexRadiocbsa]:checked").each(function () {
    cbsaType = $(this).val();
  });

  // 2. Check occupation clusters
  let occValues = [];
  $("#list-occ input[type=checkbox]:checked").each(function () {
    occValues.push($(this).next("label").text());
  });

  // 3. Get CBSAs
  let cbsaValues = [];
  $("#list-cbsa input[type=checkbox]:checked").each(function () {
    cbsaValues.push($(this).next("label").text());
  });
  return {
    cbsaType: cbsaType,
    OccValues: occValues,
    CBSAs: cbsaValues
  };
}

function getSearchParamsOC() {
  // Check all search parameters for selection
  // 1. Check status of radio button on search tab for all/CBSA with shortages/CBSA with no shortages
  let cbsaType = undefined;
  $("input[name=flexRadiocbsa-oc]:checked").each(function () {
    cbsaType = $(this).val();
  });

  // 2. Check occupation clusters
  let occValues = [];
  $("#list-occ-oc input[type=checkbox]:checked").each(function () {
    occValues.push($(this).next("label").text());
  });

  // 3. Get CBSAs
  let cbsaValues = [];
  $("#list-cbsa-oc input[type=checkbox]:checked").each(function () {
    cbsaValues.push($(this).next("label").text());
  });
  return {
    cbsaType: cbsaType,
    OccValues: occValues,
    CBSAs: cbsaValues
  };
}

function getSearchParamsVis() {
  // Check all search parameters for selection
  // 1. Check status of radio button on search tab for all/CBSA with shortages/CBSA with no shortages
  let cbsaType = undefined;
  cbsaType = $("#select-alignment-vis :selected").val();

  // 2. Check occupation clusters
  let occValues = [];
  $("#multi-select-list-occ input[type=checkbox]:checked").each(function () {
    occValues.push($(this).next("label").text());
  });

  // 3. Get CBSAs
  let cbsaValues = [];
  $("#multi-select-list-cbsa input[type=checkbox]:checked").each(function () {
    cbsaValues.push($(this).next("label").text());
  });
  return {
    cbsaType: cbsaType,
    OccValues: occValues,
    CBSAs: cbsaValues
  };
}

function getDataForUpdate(vis, oc) {

  // let searchParams = undefined;
  // if (vis) {
  //   searchParams = getSearchParamsVis();
  // } else if (oc) {
  //   searchParams = getSearchParamsOC();
  // } else {
  //   searchParams = getSearchParams();
  // }
  searchParams = getSearchParamsVis();
  let cbsaSubset = [];
  let instSubset = [];
  // let cbsaValues = null;

  cbsaSubset = cbsa.filter(item => searchParams.CBSAs.includes(item.cbsa_name)).filter(item => searchParams.OccValues.includes(item.Occ));

  if (searchParams.cbsaType == CBSA_SHORTAGE) {
    cbsaSubset = cbsaSubset.filter(function (item) {
      return item.ratio < CONF_INT_VAL;
    });
  }
  else if (searchParams.cbsaType == CBSA_NOSHORTAGE) {
    cbsaSubset = cbsaSubset.filter(function (item) {
      return item.ratio >= CONF_INT_VAL;
    });
  };

  // Get institutions
  // if (searchParams.cbsaType != CBSA_ALL) {
  //   cbsaValues = cbsaSubset.map(obj => obj.cbsa_name);
  // }
  instSubset = inst.filter(item => searchParams.CBSAs.includes(item.cbsa_name)).filter(item => searchParams.OccValues.includes(item.Occ));
  if (searchParams.cbsaType == CBSA_SHORTAGE) {
    instSubset = instSubset.filter(obj => {
      return (obj.inc1 > 0 || obj.inc2 > 0); // Shortages on either indicator
    });
  }
  else if (searchParams.cbsaType == CBSA_NOSHORTAGE) {
    instSubset = instSubset.filter(obj => {
      return (obj.inc1 == 0 && obj.inc2 == 0); // Ratios in data that indicate no shortages
    });
  }

  return {
    cbsaType: searchParams.cbsaType,
    cbsaData: cbsaSubset,
    instData: instSubset
  }
}

function checkShortageData(dataarray) {
  // dataarray takes in an array of objects in shortagedata. 
  // In the array, the first element is the xcategory - array index 0
  // The second element (index 1) is an array of occupation and shortage values
  // The key-value pairs are name: name of occupation, and then data followed by the shortage values
  // The fragment currentObject.data.reduce sums up all the shortage values across all occupations
  let sdata = [];
  $.each(dataarray[1], function (index, value) {
    let s = value.data;
    $.each(s, function (index, xvalue) {
      sdata.push(xvalue.y);
    });
  });
  let sum = sdata.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return sum;
}

function dataEdits() {
  // Preprocess CBSA data
  // Zero out values outside 95% CI 
  $.each(cbsa, function (index, obj) {
    obj.ratio = Math.round(obj.ratio * 100) / 100;
    if (obj.ratio >= CONF_INT_VAL) {
      obj.shortage = 0;
    }
  });
  let zvals = cbsa.filter(obj => {
    return obj.ratio >= CONF_INT_VAL && obj.ratio < 1
  });
  // Preprocess institution data
  // Set to zero institutions measure 1 with ratio less than CONF_INT_VAL
  $.each(zvals, function (index, obj1) {
    $.each(inst, function (index, obj2) {
      if (obj1.cbsa_name == obj2.cbsa_name && obj1.Occ == obj2.Occ) {
        obj2.inc1 = 0;
      }
    });
  });
  // Filter out institutions that do not produce awards for an occupation
  inst = inst.filter(obj => {
    return obj.pocc > 0
  });
  // Filter only high paying awards
  inst = inst.filter(obj => {
    return obj.amhp > 0
  })

}

function fillCBSADropdown() {
  cbsa.sort((a, b) => a.cbsa_name > b.cbsa_name);
  let cbsaNames = cbsa.map(function (obj) {
    return obj.cbsa_name
  });

  cbsaNames = ["All metro areas"].concat(Array.from(new Set(cbsaNames)));
  // Create dropdown element and fill 
  let list = $("#list-cbsa");
  $.each(cbsaNames, function (i, value) {
    let li = $("<li class='list-group-item'></li>");
    let input = $("<input class='form-check-input me-2' type='checkbox' value='" + i + "' id='chk-cbsa-" + i + "'>");
    let label = $("<label class='form-check-label' for='chk-cbsa-" + i + "'>" + cbsaNames[i] + "</label>");
    li.append(input, label);
    list.append(li);
  });

  let listoc = $("#list-cbsa-oc");
  $.each(cbsaNames, function (i, value) {
    let li = $("<li class='list-group-item'></li>");
    let input = $("<input class='form-check-input me-2' type='checkbox' value='" + i + "' id='chk-oc-cbsa-" + i + "'>");
    let label = $("<label class='form-check-label' for='chk-oc-cbsa-" + i + "'>" + cbsaNames[i] + "</label>");
    li.append(input, label);
    listoc.append(li);
  });

  let mlist = $("#multi-select-list-cbsa");
  mlist.empty();
  let search = $("<input type='text' id='search-cbsa-vis' placeholder='Search metro area' class='form-control m-2'>");
  mlist.append(search);
  $.each(cbsaNames, function (i, value) {
    let li = $("<li class='list-group-item'></li>");
    let input = $("<input class='form-check-input mx-2' type='checkbox' value='" + i + "' id='mchk-cbsa-" + i + "'>");
    let label = $("<label class='form-check-label' for='mchk-cbsa-" + i + "'>" + value + "</label>");
    li.append(input, label);
    mlist.append(li);
    // let opt = $("<option value='" + i + "' id='mchk-cbsa-" + i + "'>" + value + "</option>");
    // mlist.append(opt);
  });
}

$(document).ready(function () {

  // DATA PREPROCESSING FOR CBSA AND INSTITUTION DATA
  dataEdits();

  // PROCESS FOR CBSA DROPDOWN
  fillCBSADropdown();

  // INITIALIZE PAGE
  initializeSearchParams();
  // Hide all controls, tables, and divs for charts and tables for initial page

  toggleElements(true, false, false, false, false, false);

  // initialize data in case user goes straight to cbsa and provider tabs instead of search tab
  let dataToUse = getDataForUpdate(true, false);
  let ratioData = getChartData(data = dataToUse.cbsaData, ratio = true);
  let shortageData = getChartData(data = dataToUse.cbsaData, ratio = false);

  // Events for HTML buttons
  $("#btn-update-vis").on("click", function () {
    dataToUse = getDataForUpdate(true, false);
    ratioData = getChartData(data = dataToUse.cbsaData, ratio = true);
    shortageData = getChartData(data = dataToUse.cbsaData, ratio = false);
    // trigger click on nav - cbsa instead of running all the relevant functions to show the CBSA tab resuls
    $("#nav-cbsa").trigger("click");
  });
  // "Begin exploring" brings user to search page
  $("#begin").on("click", function () {
    $("#nav-cbsa").trigger("click");
    $("#btn-update-vis").trigger("click");
  });

  // Events for tab navigation
  $("#nav-abt").on("click", function () {
    toggleElements(true, false, false, false, false, false);
  });

  $("#nav-cbsa").on("click", function () {
    // get data to show chart and cbsa tables
    $("#all-vis-select").show();
    $("#nav-cbsa").css("background-color", "#B9D9EC");
    $("#nav-inst").css("background-color", "");

    // Disable shortage radio button for chart
    if (dataToUse.cbsaType == CBSA_NOSHORTAGE) {
      $("#radio-chart-shortage").prop("disabled", true);
    }
    /* In cases where the user selects a combination of occs and cbsas with no shortage, this will 
       be checked by checkShortageData() when the radio button for charting shortages is selected 
    */

    drawChart(data = ratioData[1], xcat = ratioData[0], ttype = true);

    if (dataToUse.cbsaType != CBSA_NOSHORTAGE) {
      toggleElements(false, true, true, false, true, false);
      displayCBSA(dataToUse.cbsaData, showcolumns = allCBSA, div = "#table-cbsa", ol = 5);
      // Processing for pop up when data row is clicked
      showCBSAModalData("#table-cbsa");
    } else {
      toggleElements(false, true, false, true, true, false);
      displayCBSA(dataToUse.cbsaData, showcolumns = noshortageCBSA, div = "#table-cbsa-noshortage", ol = 4);
      // Processing for pop up when data row is clicked
      showCBSAModalData("#table-cbsa-noshortage");
    }
  });
  $("#nav-inst").on("click", function () {
    // get data to show institution tables and provider details in popup
    // showSearchParams(false);
    // showHome(false);
    // showChart(false);

    $("#all-vis-select").show();
    $("#nav-cbsa").css("background-color", "");
    $("#nav-inst").css("background-color", "#B9D9EC");

    if (dataToUse.cbsaType != CBSA_NOSHORTAGE) {
      toggleElements(false, false, true, false, false, true);
      displayInst(dataToUse.instData, showcolumns = allinst, div = "#table-inst", ol = [4, 7, 10]);
      // Processing for pop up when data row is clicked
      showModalData("#table-inst");
    } else {
      toggleElements(false, false, false, true, false, true);
      displayInst(dataToUse.instData, showcolumns = noshortageinst, div = "#table-inst-noshortage", ol = [4, 7, 10]);
      // Processing for pop up when data row is clicked
      showModalData("#table-inst-noshortage");
    }
  });

  // Events for HTML buttons

  // "Update" button gets all the parameters from the search tab and shows the results on the CBSA tab
  // $("#btn-update").on("click", function () {

  //   dataToUse = getDataForUpdate(false, false);
  //   ratioData = getChartData(data = dataToUse.cbsaData, ratio = true);
  //   shortageData = getChartData(data = dataToUse.cbsaData, ratio = false);

  //   // trigger click on nav-cbsa instead of running all the relevant functions to show the CBSA tab resuls
  //   $("#nav-cbsa").trigger("click");
  // });
  // $("#btn-update-oc").on("click", function () {
  //   dataToUse = getDataForUpdate(false, true);
  //   ratioData = getChartData(data = dataToUse.cbsaData, ratio = true);
  //   shortageData = getChartData(data = dataToUse.cbsaData, ratio = false);
  //   // trigger click on nav - cbsa instead of running all the relevant functions to show the CBSA tab resuls
  //   $("#nav-cbsa").trigger("click");
  // });
  // Events for chart radio buttons - triggers chart update
  // $("#radio-chart-align").on("click", function () {
  //   drawChart(data = ratioData[1], xcat = ratioData[0], ttype = true);
  // });
  // $("#radio-chart-shortage").on("click", function () {
  //   let sumcheck = checkShortageData(shortageData);
  //   if (sumcheck > 0) {
  //     drawChart(data = shortageData[1], xcat = shortageData[0], ttype = false);
  //   } else {
  //     drawChart(data = [], xcat = [], ttype = false);
  //   }
  // });

  // Events for dropdown
  $("#multi-select-button-cbsa").on("click", function () {
    $("#multi-select-list-cbsa input:checkbox").change(function () {
      if ($(this).val() == 0) {
        if (!$(this).prop("checked")) {
          $("#multi-select-list-cbsa input:checkbox").prop("checked", false);
        }
        else if ($(this).prop("checked")) {
          $("#multi-select-list-cbsa input:checkbox").prop("checked", true);
        }
      } else {
        $("#mchk-cbsa-0").prop("checked", false);
      }
    })
  });
  $("#multi-select-button-occ").on("click", function () {
    $("#multi-select-list-occ input:checkbox").change(function () {
      if ($(this).val() == 0) {
        if (!$(this).prop("checked")) {
          $("#multi-select-list-occ input:checkbox").prop("checked", false);
        }
        else if ($(this).prop("checked")) {
          $("#multi-select-list-occ input:checkbox").prop("checked", true);
        }
      } else {
        $("#mchk-occ-0").prop("checked", false);
      }
    })
  });

  // Events for search box
  let selection = 0;
  // $("#search-cbsa-input").on("keyup", function () {
  //   let value = $(this).val().toLowerCase();
  //   // filter list as user types
  //   $("#list-cbsa li").filter(function () {
  //     $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  //   });
  //   // toggle to be unchecked for any matches to allow the user to select
  //   if (value.length > 0 & selection == 0) {
  //     $("#list-cbsa input:checkbox").prop("checked", false);
  //     // if user checks a CBSA then flag that a selection has been made
  //     $("#list-cbsa input:checkbox").change(function () {
  //       selection = 1;
  //     })
  //   }
  //   // if nothing has been selected: selection == 0 then check all CBSAs and show all
  //   else if (value.length == 0 & selection == 0) {
  //     $("#list-cbsa input:checkbox").prop("checked", true);
  //   } else if (selection == 1) {
  //     // do nothing - show list with all items
  //   }
  // });
  // $("#search-cbsa-oc").on("keyup", function () {
  //   let value = $(this).val().toLowerCase();
  //   // filter list as user types
  //   $("#list-cbsa-oc li").filter(function () {
  //     $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  //   });
  //   // toggle to be unchecked for any matches to allow the user to select
  //   if (value.length > 0 & selection == 0) {
  //     $("#list-cbsa-oc input:checkbox").prop("checked", false);
  //     // if user checks a CBSA then flag that a selection has been made
  //     $("#list-cbsa-oc input:checkbox").change(function () {
  //       selection = 1;
  //     })
  //   }
  //   // if nothing has been selected: selection == 0 then check all CBSAs and show all
  //   else if (value.length == 0 & selection == 0) {
  //     $("#list-cbsa-oc input:checkbox").prop("checked", true);
  //   } else if (selection == 1) {
  //     // do nothing - show list with all items
  //   }
  // });

  $("#search-cbsa-vis").on("keyup", function (e) {
    // e.stopPropagation();
    // $("#multi-select-button-cbsa").click();

    let value = $(this).val().toLowerCase();
    // filter list as user types
    $("#multi-select-list-cbsa li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
    // toggle to be unchecked for any matches to allow the user to select
    if (value.length > 0 & selection == 0) {
      $("#multi-select-list-cbsa input:checkbox").prop("checked", false);
      // if user checks a CBSA then flag that a selection has been made
      $("#multi-select-list-cbsa input:checkbox").change(function () {
        selection = 1;
      })
    }
    // if nothing has been selected: selection == 0 then uncheck all CBSAs and show all
    else if (value.length == 0 & selection == 0) {
      $("#multi-select-list-cbsa input:checkbox").prop("checked", false);
    } else if (selection == 1) {
      // do nothing - show list with all items
    }
  });

  // Events for checkboxes:
  // Checkboxes are initialized with all boxes checked. If a box is clicked (event changed) then it flips the box:
  // If it is checked then this means the user has unchecked it and it is set to unchecked.
  // If it is unchecked then this means the user has checked it and it is set to checked.

  // If "All metro areas" ("#chk-cbsa-0") in "Select metro area" is checked then all the individual metros are checked
  // If it is unchecked then all the individual metros are unchecked

  // $("#list-cbsa input:checkbox").change(function () {
  //   if ($(this).val() == 0) {
  //     if (!$(this).prop("checked")) {
  //       $("#list-cbsa input:checkbox").prop("checked", false);
  //     }
  //     else if ($(this).prop("checked")) {
  //       $("#list-cbsa input:checkbox").prop("checked", true);
  //     }
  //   } else {
  //     $("#chk-cbsa-0").prop("checked", false);
  //   }
  // });
  // If "All occupations" ("#chk_occ_0") in "Select occupational group(s)" is checked then all the individual occupations are checked
  // If it is unchecked then all the individual occupations are unchecked

  // $("#list-occ input:checkbox").change(function () {
  //   if ($(this).val() == 0) {
  //     if (!$(this).prop("checked")) {
  //       $("#list-occ input:checkbox").prop("checked", false);
  //     }
  //     else if ($(this).prop("checked")) {
  //       $("#list-occ input:checkbox").prop("checked", true);
  //     }
  //   } else {
  //     $("#chk-occ-0").prop("checked", false);
  //   }
  // });

  // $("#list-cbsa-oc input:checkbox").change(function () {
  //   if ($(this).val() == 0) {
  //     if (!$(this).prop("checked")) {
  //       $("#list-cbsa-oc input:checkbox").prop("checked", false);
  //     }
  //     else if ($(this).prop("checked")) {
  //       $("#list-cbsa-oc input:checkbox").prop("checked", true);
  //     }
  //   } else {
  //     $("#chk-oc-cbsa-0").prop("checked", false);
  //   }
  // });

  // $("#list-occ-oc input:checkbox").change(function () {
  //   if ($(this).val() == 0) {
  //     if (!$(this).prop("checked")) {
  //       $("#list-occ-oc input:checkbox").prop("checked", false);
  //     }
  //     else if ($(this).prop("checked")) {
  //       $("#list-occ-oc input:checkbox").prop("checked", true);
  //     }
  //   } else {
  //     $("#chk-oc-occ-0").prop("checked", false);
  //   }
  // });
  // Events for tooltips on table headers
  $('[data-bs-toggle="tooltip"]').each(function () {
    let tooltip = new bootstrap.Tooltip(this);
    // Attach click event to hide tooltip after a delay
    $(this).on("click", function () {
      setTimeout(function () {
        tooltip.hide();
      }, 2000); // Delay in milliseconds
    });
  });
});
