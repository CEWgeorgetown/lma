var allCBSA = [
  { "data": "cbsa_name" },
  { "data": "Occ" },
  {
    "data": "ratio",
    render: $.fn.dataTable.render.number(null, '.', 2, null, null)
  },
  {
    "data": "shortage",
    // defaultContent: NaN,
    defaultContent: 0,
    render: $.fn.dataTable.render.number(',', '.', 0)
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
    render: $.fn.dataTable.render.number(',', '.', 0)
  },
  {
    "data": "no_tot",
    render: $.fn.dataTable.render.number(',', '.', 0)
  },
  {
    "data": "no_hp",
    render: $.fn.dataTable.render.number(',', '.', 0)
  },
  {
    "data": "no_lp",
    render: $.fn.dataTable.render.number(',', '.', 0)
  }
]
var noshortageCBSA = [
  { "data": "cbsa_name" },
  { "data": "Occ" },
  {
    "data": "ratio",
    render: $.fn.dataTable.render.number(null, null, 2, null, null)
  },
  {
    "data": "num_awards",
    render: $.fn.dataTable.render.number(',', '.', 0)
  },
  {
    "data": "no_tot",
    render: $.fn.dataTable.render.number(',', '.', 0)
  },
  {
    "data": "no_hp",
    render: $.fn.dataTable.render.number(',', '.', 0)
  },
  {
    "data": "no_lp",
    render: $.fn.dataTable.render.number(',', '.', 0)
  }
]
function displayCBSA(d, showcolumns = allCBSA, div = '#table-cbsa', ol = 5) {

  $(div).DataTable({
    initComplete: function () {
      $(div + ' thead select').remove();
      this.api()
        .columns([0, 1])
        .every(function () {
          let column = this;

          // Create select element
          let select = document.createElement('select');
          select.add(new Option('All'));
          column.header().append(select);

          // Apply listener for user change in value
          select.addEventListener('change', function () {
            column
              .search(select.value, { exact: true })
              .draw();
          });
          select.addEventListener('click', function (e) {
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
            extend: 'collection',
            text: 'Export',
            className: 'custom-html-collection',
            buttons: ['copy', 'csv', 'excel', 'print']
          }]
      },
      top2End: null,
      topStart: 'search',
      topEnd: 'pageLength'
    },
    columnDefs: [{
      targets: ol,
      className: "outlined-left"
    }],
    // responsive: true,
    // scrollX: true,
    pageLength: 10,
    destroy: true,
    order: [[0, "asc"], [1, "asc"]],
    data: d,
    "columns": showcolumns
  });
};
var allinst = [
  { "data": "cbsa_name" },
  { "data": "Occ" },
  { "data": "name" },
  { "data": "sector" },
  {
    "data": "acert",
    render: $.fn.dataTable.render.number(',', '.', 0)
  },
  {
    "data": "aaas",
    render: $.fn.dataTable.render.number(',', '.', 0)
  },
  {
    "data": "ams",
    render: $.fn.dataTable.render.number(',', '.', 0)
  },
  {
    "data": "achp",
    render: $.fn.dataTable.render.number(',', '.', 0)
  },
  {
    "data": "aahp",
    render: $.fn.dataTable.render.number(',', '.', 0)
  },
  {
    "data": "amhp",
    render: $.fn.dataTable.render.number(',', '.', 0)
  },
  {
    "data": "pcbsa",
    render: function (data, type, row) {
      return parseFloat(Math.round(data * 1000) / 10).toFixed(1) + '%';
    }
  },
  {
    "data": "inc1",
    render: $.fn.dataTable.render.number(',', '.', 0)
  }
]
var noshortageinst = [
  { "data": "cbsa_name" },
  { "data": "Occ" },
  { "data": "name" },
  { "data": "sector" },
  {
    "data": "acert",
    render: $.fn.dataTable.render.number(',', '.', 0)
  },
  {
    "data": "aaas",
    render: $.fn.dataTable.render.number(',', '.', 0)
  },
  {
    "data": "ams",
    render: $.fn.dataTable.render.number(',', '.', 0)
  },
  {
    "data": "achp",
    render: $.fn.dataTable.render.number(',', '.', 0)
  },
  {
    "data": "aahp",
    render: $.fn.dataTable.render.number(',', '.', 0)
  },
  {
    "data": "amhp",
    render: $.fn.dataTable.render.number(',', '.', 0)
  },
  {
    "data": "pcbsa",
    render: function (data, type, row) {
      return parseFloat(Math.round(data * 1000) / 10).toFixed(1) + '%';
    }
  }
]
function displayInst(d, showcolumns = allinst, div = '#table-inst', ol = [4, 7, 10]) {
  $(div).DataTable({
    initComplete: function () {
      $(div + ' thead select').remove();
      this.api()
        .columns([0, 1, 2, 3])
        .every(function () {
          let column = this;

          // Create select element
          let select = document.createElement('select');
          select.add(new Option('All'));
          column.header().append(select);

          // Apply listener for user change in value
          select.addEventListener('change', function () {
            column
              .search(select.value, { exact: true })
              .draw();
          });
          select.addEventListener('click', function (e) {
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
            extend: 'collection',
            text: 'Export',
            className: 'custom-html-collection',
            buttons: ['copy', 'csv', 'excel', 'print']
          }]
      },
      top2End: null,
      topStart: 'search',
      topEnd: 'pageLength'
    },
    columns: [{ width: '20%' }],
    columnDefs: [{
      targets: ol,
      className: "outlined-left"
    }],
    // responsive: true,
    // scrollX: true,
    rowCallback: function (row, data) {
      $(row).attr('title', 'Click for details');
    },
    pageLength: 10,
    deferRender: true,
    processing: true,
    destroy: true,
    order: [[0, "asc"], [1, "asc"], [2, "asc"], [3, "asc"]],
    data: d,
    "columns": showcolumns
  });
};
Highcharts.setOptions({
  lang: {
    thousandsSep: ','
  },
  chart: {
    style: {
      fontFamily: 'Open Sans'
    }
  }
});
function GetChartData(data, varval) {
  var xcat = data.map(function (item) {
    return item.cbsa_name
  });
  xcat = xcat.filter((val, ind, arr) => arr.indexOf(val) === ind);
  var occupationCategories = {
    'Blue-collar': { name: 'Blue-collar', data: [] },
    'Health': { name: 'Health', data: [] },
    'Management': { name: 'Management', data: [] },
    'Protective services': { name: 'Protective services', data: [] },
    'STEM': { name: 'STEM', data: [] }
  };
  $.each(data, function (i, value) {
    var category = occupationCategories[value.Occ];
    if (category) {
      if (varval == 1) {
        category.data.push(value.ratio);
      }
      else if (varval == 2) {
        if (value.shortage === undefined) {
          category.data.push(0);
        }
        else {
          category.data.push(value.shortage);
        }
      }
    }
  });
  return [xcat, (Object.values(occupationCategories))]
};
function drawChart(data = cbsa, xcat, ttype = 1, h = 5000) {
  var refLine = [{
    color: '#000000',
    zIndex: 5,
    width: 2,
    value: 1
  }];
  var anno = [{
    labelOptions: {
      overflow: 'none',
      backgroundColor: 'white',
      distance: 5,
      shape: 'connector'
    },
    labels: [{
      point: {
        x: -0.4,
        y: 1,
        xAxis: 0,
        yAxis: 0
      },
      text: 'No shortage'
    }]
  }]
  if (ttype == 1) {
    ref = refLine;
    ann = null;
    ttl = "Credentials-to-jobs ratio";
    pf = '<td style="padding:0"><b>{point.y:.2f}</b></td></tr>';
    yf = '{value: , .1f}';
    ya = 'Alignment ratio';
    mo = function () {
      const chart = this
      chart.title.on('mouseover', e => {
        chart.titleTooltip = this.renderer.label(
          'Values less than one indicate a shortage in<br> credential production, values greater than <br> one indicate a surplus in credential production,<br> and values equal to one indicate perfect alignment <br> between credential production and occupational<br> demand. See table notes for more details.',
          200,
          150,
          'rectangle'
        )
          .css({
            color: '#FFFFFF',
            fontSize: "10px"
          })
          .attr({
            fill: 'rgba(0, 0, 0, 0.75)',
            padding: 8,
            r: 4,
          })
          .add()
          .toFront()
      })

      chart.title.on('mouseout', e => {
        if (chart.titleTooltip) {
          chart.titleTooltip.destroy()
        }
      })
    };
  }
  else if (ttype == 2) {
    ttl = "Annual credential shortage";
    ann = null;
    ref = null;
    pf = '<td style="padding:0"><b>{point.y}</b></td></tr>';
    yf = '{value: , .0f}';
    ya = 'Annual credential shortage';
    mo = null
  };

  $("#chart").highcharts({
    title: {
      text: ttl
    },
    chart: {
      type: 'bar',
      marginTop: 150,
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
        text: ''
      },
      offset: 5,
      opposite: true,
      plotLines: ref,
      labels: {
        format: yf
      }
    },
    xAxis: {
      type: 'category',
      title: {
        text: ''
      },
      categories: xcat,
      accessibility: {
        rangeDescription: 'CBSA'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        pf,
      footerFormat: '</table>',
      shared: false,
      useHTML: true
    },
    legend: {
      enabled: true,
      verticalAlign: 'top'
    },
    credits: {
      enabled: false
    },
    annotations: ann,
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
function getOccVariables(occluster) {
  // This function returns a subset of variables that match the occupation cluster
  // It is intended for use with a data set with wide format. 
  // The returned array is to be used by getDataByOcc()
  var names_to_get = Array.from(new Set(cbsa.flatMap(obj =>
    Object.keys(obj).filter(key => key.includes(occluster))
  )));
  names_to_get = ['cbsa_name'].concat(names_to_get);
  // console.log(names_to_get);
  return names_to_get;
}
function getDataByOcc(occvars) {
  // This function returns a subset of data that match the occupation cluster from getOccVariables()
  // It is intended for use with a data set with wide format
  var cbsa_subset = cbsa.map(obj => {
    var newobj = {};
    occvars.forEach(key => {
      newobj[key] = obj[key]
    })
    return newobj;
  });
  return cbsa_subset;
}
// generic comparison function
var cmp = function (x, y) {
  return x > y ? 1 : x < y ? -1 : 0;
};
function displayDetail(d) {
  $("#table-prog").DataTable({
    initComplete: function () {
      $('#table-prog thead select').remove();
      this.api()
        .columns([0, 1, 2])
        .every(function () {
          let column = this;

          // Create select element
          let select = document.createElement('select');
          select.add(new Option('All'));
          column.header().append(select);

          // Apply listener for user change in value
          select.addEventListener('change', function () {
            column
              .search(select.value, { exact: true })
              .draw();
          });
          select.addEventListener('click', function (e) {
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
            extend: 'collection',
            text: 'Export',
            className: 'custom-html-collection',
            buttons: ['copy', 'csv', 'excel', 'print']
          }]
      },
      top2End: null,
      topStart: 'search',
      topEnd: 'pageLength'
    },
    // responsive: true,
    // scrollX: true,
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
$(document).ready(function () {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  // fetch('cbsal.json')
  //   .then(response => response.json())
  //   .then(cbsa => console.log(cbsa))
  //   .catch(error => console.error('Error fetching JSON:', error));

  var cbsa_subset;
  var inst_subset;
  var val_ratio;
  var tab_cert = 0;
  var tab_inst = 0;
  var updateChart = [];
  var radio_align = 1;
  var radio_shortage = 0;
  // var chartData;
  var h;
  // Zero out values outside 95% CI 
  $.each(cbsa, function (index, obj) {
    obj.ratio = Math.round(obj.ratio * 100) / 100;
    if (obj.ratio >= 0.93) {
      obj.shortage = 0;
    }
  });
  var z = cbsa.filter(obj => {
    return obj.ratio >= 0.93 && obj.ratio < 1
  });
  // Modify institutions measure 1 with ratio less than 0.93
  $.each(z, function (index, obj1) {
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
  // dynamically sort and fill dropdown for CBSA
  cbsa.sort((a, b) => a.cbsa_name > b.cbsa_name);
  // cbsa.sort(function (a, b) {
  //   return cmp(
  //     [cmp(a.cbsa_name, b.cbsa_name), -cmp(a.Occ, b.Occ)],
  //     [cmp(b.cbsa_name, a.cbsa_name), -cmp(b.Occ, a.Occ)]
  //   );
  // });
  var cbsa_names = cbsa.map(function (obj) {
    return obj.cbsa_name
  });

  cbsa_names = ['All metro areas'].concat(Array.from(new Set(cbsa_names)));
  var list = $("#list_cbsa");
  $.each(cbsa_names, function (i, value) {
    var li = $("<li class='list-group-item'></li>");
    var input = $("<input class='form-check-input me-2' type='checkbox' value='" + i + "' id='chk_cbsa_" + i + "'>");
    var label = $("<label class='form-check-label'>" + cbsa_names[i] + "</label>");
    li.append(input, label);
    list.append(li);
  });

  $("#tbl_cbsa_noshortage").hide();
  $("#tbl_inst_noshortage").hide();
  $("#list_cbsa input:checkbox").prop('checked', true);
  $("#list_occ input:checkbox").prop('checked', true);
  $("#radio_default").prop("checked", true);
  $("#radio_chart_align").prop("checked", true);
  // chartData = GetChartData(cbsa, 1);
  // drawChart(chartData[1], chartData[0]);
  // displayCBSA(cbsa);
  $("#chart-col").hide();
  $("#tbl_cbsa").hide();
  $("#tbl_inst").hide();
  $("#search-params").hide();
  $("#about").show();
  $("#navAbt").css("background-color", "aquamarine");

  $("#begin").on('click', function () {
    $("#navSearch").attr('style', 'background-color: aquamarine');
    $("#navCBSA").css("background-color", "");
    $("#navInst").css("background-color", "");
    $("#navAbt").css("background-color", "");
    $("#search-params").show();
    $("#all-vis").hide();
    $("#about").hide();
  });
  $("#radio_chart_align").on('click', function () {
    radio_align = 1;
    radio_shortage = 0;
    chartData = GetChartData(cbsa_subset, 1);
    drawChart(data = chartData[1], xcat = chartData[0], ttype = 1, h = h);
  });
  $("#radio_chart_shortage").on('click', function () {
    radio_shortage = 1;
    radio_align = 0;
    chartData = GetChartData(cbsa_subset, 2);
    drawChart(data = chartData[1], xcat = chartData[0], ttype = 2, h = h);
  });
  $("#navSearch").on('click', function () {
    $("#navSearch").attr('style', 'background-color: aquamarine');
    $("#navCBSA").css("background-color", "");
    $("#navInst").css("background-color", "");
    $("#navAbt").css("background-color", "");
    $("#search-params").show();
    $("#all-vis").hide();
    $("#about").hide();
  });

  var selection = 0;
  $("#search-cbsa-input").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#list_cbsa li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
    if (value.length > 0 & selection == 0) {
      $("#list_cbsa input:checkbox").prop('checked', false);
      $("#list_cbsa input:checkbox").change(function () {
        selection = 1;
        // $("#search-cbsa-input").val('')
      })
    }
    else if (value.length == 0 & selection == 0) {
      $("#list_cbsa input:checkbox").prop('checked', true);
    } else if (selection == 1) {
      // do nothing? Show list with selected item
      // already implemented by on keyup above?
    }
  });

  $("#list_cbsa input:checkbox").change(function () {
    if ($(this).val() == 0) {
      if (!$(this).prop('checked')) {
        $("#list_cbsa input:checkbox").prop('checked', false);
      }
      else if ($(this).prop('checked')) {
        $("#list_cbsa input:checkbox").prop('checked', true);
      }
    } else {
      $("#chk_cbsa_0").prop('checked', false);
    }
  });
  $("#list_occ input:checkbox").change(function () {
    if ($(this).val() == 0) {
      if (!$(this).prop('checked')) {
        $("#list_occ input:checkbox").prop('checked', false);
      }
      else if ($(this).prop('checked')) {
        $("#list_occ input:checkbox").prop('checked', true);
      }
    } else {
      $("#chk_occ_0").prop('checked', false);
    }
  });

  // var provdtl;
  function getDataForUpdate() {
    $("#search-params").hide();
    // Check status of radio button
    $("input[name=flexRadiocbsa]:checked").each(function () {
      // console.log($(this).val());
      val_ratio = $(this).val();
    });

    // Get occupation clusters
    var occ_values = [];
    $("#list_occ input[type=checkbox]:checked").each(function () {
      occ_values.push($(this).next('label').text());
    });

    // Get CBSAs
    var cbsa_values = [];
    $("#list_cbsa input[type=checkbox]:checked").each(function () {
      cbsa_values.push($(this).next('label').text());
    });
    cbsa_subset = cbsa.filter(item => cbsa_values.includes(item.cbsa_name)).filter(item => occ_values.includes(item.Occ));

    if (val_ratio == "0") {
      $("#radio_chart_shortage").attr('disabled', false);
    }
    else if (val_ratio == "1") {
      $("#radio_chart_shortage").attr('disabled', false);
      cbsa_subset = cbsa_subset.filter(function (item) {
        return item.ratio < 0.93;
      })
    }
    else if (val_ratio == "2") {
      $("#radio_chart_shortage").attr('disabled', true);
      cbsa_subset = cbsa_subset.filter(function (item) {
        return item.ratio >= 0.93;
      })
    };

    // Get institutions
    if (val_ratio != "0") {
      cbsa_values = cbsa_subset.map(obj => obj.cbsa_name);
    }
    inst_subset = inst.filter(item => cbsa_values.includes(item.cbsa_name)).filter(item => occ_values.includes(item.Occ));
    if (val_ratio == "1") {
      // inst_subset = inst_subset.filter(obj => obj.inc1 > 0 );
      inst_subset = inst_subset.filter(obj => {
        return (obj.inc1 > 0 || obj.inc2 > 0);
      });
    }
    else if (val_ratio == "2") {
      // inst_subset = inst_subset.filter(obj => obj.inc1 > 0 );
      inst_subset = inst_subset.filter(obj => {
        return (obj.inc1 == 0 && obj.inc2 == 0);
      });
    }

    var chartsubData;
    var t;
    if (radio_align == 1) {
      var t = 1;
      chartsubData = GetChartData(cbsa_subset, 1)
      var forChart = chartsubData[1].filter(obj => {
        var value = obj.data;
        return Array.isArray(value) && value.length > 0;
      });
    }
    else if (radio_shortage == 1) {
      var t = 2;
      chartsubData = GetChartData(cbsa_subset, 2)
      var forChart = chartsubData[1].filter(obj => {
        var value = obj.data;
        return Array.isArray(value) && value.length > 0;
      });
    }
    var l = chartsubData[0].length;
    h = Math.min(l * 150, 5000);
    updateChart = [chartsubData[0], forChart];
    drawChart(data = updateChart[1], xcat = updateChart[0], ttype = t, h = h);
  };
  var tinst;
  var tinst_ns;
  function displayUpdatedData() {
    if (val_ratio != "2" && tab_cert == 1) {
      $('#tbl_cbsa_noshortage').hide();
      $("#tbl_inst").hide();
      $("#tbl_inst_noshortage").hide();
      $('#tbl_cbsa').show();
      displayCBSA(cbsa_subset);
    } else if (val_ratio == "2" && tab_cert == 1) {
      $('#tbl_cbsa').hide();
      $("#tbl_inst").hide();
      $("#tbl_inst_noshortage").hide();
      $('#tbl_cbsa_noshortage').show();
      displayCBSA(cbsa_subset, showcolumns = noshortageCBSA, div = '#table-cbsa-noshortage', ol = 4);
    } else if (val_ratio != "2" && tab_inst == 1) {
      $('#tbl_cbsa').hide();
      $('#tbl_cbsa_noshortage').hide();
      $("#tbl_inst_noshortage").hide();
      $("#tbl_inst").show();
      displayInst(inst_subset);
      tinst = $('#table-inst').DataTable();
      $('#table-inst tbody').on('click', 'tr', function () {
        var rowData = tinst.row(this).data();
        // console.log(rowData.name);
        var progs_to_show = progs.filter(obj => {
          return (obj.instn_name == rowData.name & obj.occ_group == rowData.Occ)
        })
        // console.log(progs_to_show);
        $("#modal-prog").modal('show');
        displayDetail(progs_to_show);
      });
    } else if (val_ratio == "2" && tab_inst == 1) {
      $('#tbl_cbsa').hide();
      $('#tbl_cbsa_noshortage').hide();
      $("#tbl_inst").hide();
      $("#tbl_inst_noshortage").show();
      displayInst(inst_subset, showcolumns = noshortageinst, div = '#table-inst-noshortage', ol = [4, 7, 10]);
      tinst_ns = $('#table-inst-noshortage').DataTable();
      $('#table-inst-noshortage tbody').on('click', 'tr', function () {
        var rowData = tinst_ns.row(this).data();
        // console.log(rowData.name);
        var progs_to_show = progs.filter(obj => {
          return (obj.instn_name == rowData.name & obj.occ_group == rowData.Occ)
        })
        // console.log(progs_to_show);
        $("#modal-prog").modal('show');
        displayDetail(progs_to_show);
      });

    }
  };

  $("#btn_update").on("click", function () {
    $("#navCBSA").attr('style', 'background-color: aquamarine');
    $("#navSearch").css('background-color', "");
    $("#navInst").css("background-color", "");
    getDataForUpdate();
    tab_cert = 1;
    $("#all-vis").show();
    $("#chart-col").show();
    displayUpdatedData();
  });

  $("#navAbt").on('click', function () {
    $("#search-params").hide();
    $("#about").show();
    $("#navAbt").css('background-color', "aquamarine");
    $("#navCBSA").css("background-color", "");
    $("#navSearch").css('background-color', "");
    $("#navInst").css("background-color", "");
    $("#all-vis").hide();
  });
  $("#navInst").on('click', function () {
    tab_inst = 1;
    tab_cert = 0;
    $("#about").hide();
    $("#navInst").attr('style', 'background-color: aquamarine');
    $("#navSearch").css('background-color', "");
    $("#navCBSA").css("background-color", "");
    $("#navAbt").css("background-color", "");
    $("#all-vis").show();
    $("#chart-col").hide();
    $("#tbl_cbsa").hide();
    getDataForUpdate();
    displayUpdatedData();
    //   if (val_ratio != "2") {
    //     $('#tbl_cbsa').hide();
    //     $('#tbl_cbsa_noshortage').hide();
    //     $("#tbl_inst_noshortage").hide();
    //     $("#tbl_inst").show();
    //     displayInst(inst_subset);
    //   } else if (val_ratio == "2") {
    //     $('#tbl_cbsa').hide();
    //     $('#tbl_cbsa_noshortage').hide();
    //     $("#tbl_inst").hide();
    //     $("#tbl_inst_noshortage").show();
    //     displayInst(inst_subset, showcolumns = noshortageinst, div = '#table-inst-noshortage', ol = [4, 7, 10]);
    // }
  });
  $("#navCBSA").on('click', function () {
    tab_cert = 1;
    tab_inst = 0;
    $("#about").hide();
    $("#navCBSA").attr('style', 'background-color: aquamarine');
    $("#navSearch").css('background-color', "");
    $("#navInst").css("background-color", "");
    $("#navAbt").css("background-color", "");
    $("#all-vis").show();
    getDataForUpdate();
    displayUpdatedData();
    $("#chart-col").show();
    // drawChart(chartData[1], chartData[0]);
    // $("#tbl_inst").hide();
    //     if (val_ratio != "2") {
    //       $('#tbl_cbsa_noshortage').hide();
    //       $("#tbl_inst_shortage").hide();
    //       $("#tbl_inst_noshortage").hide();
    //       $('#tbl_cbsa').show();
    //       displayCBSA(cbsa_subset);
    //     } else if (val_ratio == "2") {
    //       $('#tbl_cbsa').hide();
    //       $("#tbl_inst_shortage").hide();
    //       $("#tbl_inst_noshortage").hide();
    //       $('#tbl_cbsa_noshortage').show();
    //       displayCBSA(cbsa_subset, showcolumns = noshortageCBSA, div = '#table-cbsa-noshortage', ol = [4, 7, 10]);
    //     }
  });
  $('[data-bs-toggle="tooltip"]').each(function () {
    var tooltip = new bootstrap.Tooltip(this);

    // Attach click event to hide tooltip after a delay
    $(this).on('click', function () {
      setTimeout(function () {
        tooltip.hide();
      }, 2000); // Delay in milliseconds
    });
  });
  // var tcbsa = $('#table-cbsa').DataTable();
  // var tcbsans = $('#table-cbsa-noshortage').DataTable();
  // var tinst = $('#table-inst').DataTable();
  // var tinstns = $('#table-inst-noshortage').DataTable();
  // if (tcbsa instanceof $.fn.dataTable.Api) {
  //   console.log('Instance')
  // }
  // if (!$.fn.dataTable.isDataTable('#table-cbsa')) {
  //   // $('#table-cbsa').DataTable();
  //   console.log('Not');
  // }

  // $('#table-cbsa tbody').on('click', 'tr', function () {
  //   var rowData1 = tcbsa.rows().data();
  //   console.log(rowData1.toArray());
  // });
  // $('#table-cbsa-noshortage tbody').on('click', 'tr', function () {
  //   var rowData2 = tcbsans.row(this).data();
  //   console.log(rowData2);
  // });
  // $('#table-inst tbody').on('click', 'tr', function () {
  //   var rowData3 = tinst.row(this).data();
  //   console.log(rowData3);
  // });
  // $('#table-inst-noshortage tbody').on('click', 'tr', function () {
  //   var rowData4 = tinstns.row(this).data();
  //   console.log(rowData4);
  // });
  // $('#table-inst tbody').on('click', 'tr:not(.clicked)', function () {
  //   $(this).addClass('clicked');
  //   console.log(table.row(this));
  //   var data = table.row(this).data();
  // });
});
