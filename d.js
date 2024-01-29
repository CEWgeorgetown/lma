var allCBSA = [
  { "data": "cbsa_name" },
  { "data": "Occ" },
  {
    "data": "ratio",
    render: $.fn.dataTable.render.number(null, null, 2, null, null)
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
function displayCBSA(d, showcolumns = allCBSA, div = '#table-cbsa') {

  $(div).DataTable({
    // initComplete: function () {
    //   this.api().columns([2,3,4]).every( function () {
    //     var column = this;
    //     var select = $('<select><option value=""></option></select>')
    //       .appendTo( $(column.header()) )
    //       .on( 'change', function () {
    //           var val = $.fn.dataTable.util.escapeRegex(
    //             $(this).val()
    //           );
    //
    //           column
    //             .search( val ? '^'+val+'$' : '', true, false )
    //             .draw();
    //       } );
    //
    //     column.data().unique().sort().each( function ( d, j ) {
    //       select.append( '<option value="'+d+'">'+d+'</option>' )
    //     } );
    //   } );
    // },
    // initComplete: function() {
    //   var table = $("#table-rank").DataTable();
    //   $(".filterhead").each( function ( i ) {
    //       var select = $('<select><option value=""></option></select>')
    //           .appendTo( $(this).empty() )
    //           .on( 'change', function () {
    //              var term = $(this).val();
    //               table.column( i ).search(term, false, false ).draw();
    //           } );
    //       table.column( i ).data().unique().sort().each( function ( d, j ) {
    //             select.append( '<option value="'+d+'">'+d+'</option>' )
    //       } );
    //   } )
    // },
    initComplete: function () {
      this.api().columns([0, 1]).every(function () {
        var column = this;
        var select = $('<select style="width:100px;"><option value="">All</option></select><br>')
          .appendTo($(column.header()).find('span').empty())
          .on({
            'change': function () {
              var val = $.fn.dataTable.util.escapeRegex(
                $(this).val()
              );
              column
                .search(val ? '^' + val + '$' : '', true, false)
                .draw();
            },
            'click': function (e) {
              // stop click event bubbling
              e.stopPropagation();
            },
          });

        column.data().unique().sort().each(function (d, j) {
          select.append('<option value="' + d + '">' + d + '</option>')
        });
      });
    },
    // dom: 'Bfrtip',
    // buttons: ['excelHtml5', 'csv', 'pdf'],
    fixedColumns: {
      left: 2
    },
    pageLength: 10,
    destroy: true,
    order: [[0, "asc"], [1, "asc"]],
    data: d,
    "columns": showcolumns
  });
};
var allinst = [
  { "data": "cbsa_name" },
  { "data": "name" },
  { "data": "sector" },
  { "data": "Occ" },
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
    "data": "pocc",
    render: function (data, type, row) {
      return parseFloat(Math.round(data * 1000) / 10).toFixed(1) + '%';
    }
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
  },
  {
    "data": "inc2",
    render: $.fn.dataTable.render.number(',', '.', 0)
  }
]
var noshortageinst = [
  { "data": "cbsa_name" },
  { "data": "name" },
  { "data": "sector" },
  { "data": "Occ" },
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
    "data": "pocc",
    render: function (data, type, row) {
      return parseFloat(Math.round(data * 1000) / 10).toFixed(1) + '%';
    }
  },
  {
    "data": "pcbsa",
    render: function (data, type, row) {
      return parseFloat(Math.round(data * 1000) / 10).toFixed(1) + '%';
    }
  }
]
function displayInst(d, showcolumns = allinst, div = '#table-inst') {
  $(div).DataTable({
    initComplete: function () {
      this.api().columns([0, 1, 2, 3]).every(function () {
        var column = this;
        var select = $('<select style="width:100px;"><option value="">All</option></select><br>')
          .appendTo($(column.header()).find('span').empty())
          .on({
            'change': function () {
              var val = $.fn.dataTable.util.escapeRegex(
                $(this).val()
              );
              column
                .search(val ? '^' + val + '$' : '', true, false)
                .draw();
            },
            'click': function (e) {
              // stop click event bubbling
              e.stopPropagation();
            }
          });

        column.data().unique().sort().each(function (d, j) {
          select.append('<option value="' + d + '">' + d + '</option>')
        });
      });
    },
    // dom: 'Bfrtip',
    // buttons: ['excelHtml5', 'csv', 'pdf'],
    fixedColumns: {
      left: 4
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
    'Management': { name: 'Management', data: [] },
    'Blue-collar': { name: 'Blue-collar', data: [] },
    'Health': { name: 'Health', data: [] },
    'STEM': { name: 'STEM', data: [] },
    'Personal services': { name: 'Personal services', data: [] }
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
function drawChart(data = cbsa, xcat, ttl = "Alignment ratio by occupation", ttype = 1) {
  // input.sort((a, b) => parseFloat(b.ne) - parseFloat(a.ne));
  // var forChart = [];

  // var xcat = data.map(function (item) {
  //   return item.cbsa_name
  // });
  // xcat = xcat.filter((val, ind, arr) => arr.indexOf(val) === ind);

  // var mgmtObj = { name: 'Management', data: [] };
  // var blueObj = { name: 'Blue-collar', data: [] };
  // var healthObj = { name: 'Health', data: [] };
  // var stemObj = { name: 'STEM', data: [] };
  // var prsnObj = { name: 'Personal services', data: [] };
  // $.each(data, function (i, value) {
  //   if (data[i].Occ == 'Management') {
  //     mgmtObj.data.push(data[i].ratio);
  //   }
  //   else if (data[i].Occ == 'Blue-collar') {
  //     blueObj.data.push(data[i].ratio);
  //   }
  //   else if (data[i].Occ == 'Health') {
  //     healthObj.data.push(data[i].ratio);
  //   }
  //   else if (data[i].Occ == 'STEM') {
  //     stemObj.data.push(data[i].ratio);
  //   }
  //   else if (data[i].Occ == 'Personal services') {
  //     prsnObj.data.push(data[i].ratio);
  //   }
  // });
  // var forChart = [mgmtObj, blueObj, healthObj, stemObj, prsnObj];

  // var occupationCategories = {
  //   'Management': { name: 'Management', data: [] },
  //   'Blue-collar': { name: 'Blue-collar', data: [] },
  //   'Health': { name: 'Health', data: [] },
  //   'STEM': { name: 'STEM', data: [] },
  //   'Personal services': { name: 'Personal services', data: [] }
  // };
  // $.each(data, function (i, value) {
  //   var category = occupationCategories[value.Occ];
  //   if (category) {
  //     category.data.push(value.ratio);
  //   }
  // });
  // var forChart = Object.values(occupationCategories);

  // const groupby = (array, key) => {
  //  https://www.learnwithparam.com/blog/how-to-group-by-array-of-objects-using-a-key
  //   return array.reduce((result, currentValue) => {
  //     // If an array already present for key, push it to the array. Else create an array and push the object
  //     if (!result[currentValue[key]]) {
  //       result[currentValue[key]] = [];
  //     }
  //     result[currentValue[key]].push(currentValue);
  //     return result;
  //   });
  // }
  // forChart = groupby(data, 'Occ');

  // var forChart = data.reduce(function (obj, item) {
  //   for (var key in item) {
  //     if (!obj[key]) {
  //       obj[key] = [];
  //     }
  //     obj[key].push(item[key]);
  //   }
  //   return obj;
  // }, {});

  if (ttype == 1) {
    pf = '<td style="padding:0"><b>{point.y:.2f}</b></td></tr>'
  } else {
    pf = '<td style="padding:0"><b>{point.y}</b></td></tr>'
  }
  $("#chart").highcharts({
    title: {
      text: ttl
    },
    chart: {
      type: 'bar',
      scrollablePlotArea: {
        minHeight: 5000,
        scrollPositionX: 1,
      }
    },
    yAxis: {
      title: {
        text: 'Alignment ratio'
      },
      labels: {
        format: '{value: , .0f}'
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
      enabled: true
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      bar: {
        // // pointWidth: 15,
        // // pointPadding: 0,
        groupPadding: 0.1
      },
      series: {
        dataLabels: {
          enabled: true,
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
// These are the variables names for a wide format data
// var cbsa_mgmt_names = ["ratio_mgmt", "shortage_mgmt", "num_awards_mgmt", "num_openings_hp_mgmt", "num_openings_lp_mgmt", "num_openings_total_mgmt"];
// var cbsa_prsn_names = ["ratio_prsn", "shortage_prsn", "num_awards_prsn", "num_openings_hp_prsn", "num_openings_lp_prsn", "num_openings_total_prsn"];
// var cbsa_stem_names = ["ratio_stem", "shortage_stem", "num_awards_stem", "num_openings_hp_stem", "num_openings_lp_stem", "num_openings_total_stem"];
// var cbsa_blue_names = ["ratio_blue", "shortage_blue", "num_awards_blue", "num_openings_hp_blue", "num_openings_lp_blue", "num_openings_total_blue"];
// var cbsa_health_names = ["ratio_health", "shortage_health", "num_awards_health", "num_openings_hp_health", "num_openings_lp_health", "num_openings_total_health"];

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

$(document).ready(function () {
  // fetch('cbsal.json')
  //   .then(response => response.json())
  //   .then(cbsa => console.log(cbsa))
  //   .catch(error => console.error('Error fetching JSON:', error));

  var update = 0;
  var cbsa_subset;
  var inst_subset;
  var val_ratio;
  var tab_cert = 1;
  var tab_inst = 0;
  var updateChart = [];
  // Filter out institutions that do not produce awards for an occupation
  inst = inst.filter(obj => {
    return obj.pcbsa > 0
  });
  // dynamically sort and fill dropdown for CBSA
  cbsa.sort((a, b) => a.cbsa_name > b.cbsa_name);
  var cbsa_names = cbsa.map(function (obj) {
    return obj.cbsa_name
  });

  cbsa_names = ['All metro areas'].concat(Array.from(new Set(cbsa_names)));
  // var list = document.getElementById("list_cbsa");
  // $.each(cbsa_names, function (i, value) {
  //   var li = document.createElement("li");
  //   li.classList.add('list-group-item');
  //   var input = document.createElement("input");
  //   input.classList.add("form-check-input");
  //   input.classList.add("me-2");
  //   input.setAttribute("type", "checkbox");
  //   input.setAttribute("value", i);
  //   input.setAttribute("id", "chk_cbsa_" + i);
  //   var label = document.createElement("label");
  //   var text = document.createTextNode(cbsa_names[i]);
  //   label.classList.add("form-check-label");
  //   label.appendChild(text);
  //   li.appendChild(input);
  //   li.appendChild(label);
  //   list.appendChild(li);
  // });
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
  // console.log(cbsa);
  var chartData = GetChartData(cbsa, 1);
  drawChart(chartData[1], chartData[0]);
  // var table = $('#table-inst').DataTable();
  // var table1 = $('#table-cbsa').DataTable();
  displayCBSA(cbsa);
  // $(".spinner-border").hide();
  // displayInst(inst);
  // table1.on('draw', function () {
  //   $(".spinner-border").hide();
  // });

  $("#tbl_inst").hide();
  // if ($("#chk_cbsa_0").is(":checked")) {
  //   console.log($("#chk_cbsa_0").next('label').text());
  // }
  $("#radio_chart_align").on('click', function () {
    if (update == 0) {
      chartData = GetChartData(cbsa, 1);
      drawChart(chartData[1], chartData[0]);
    }
  });
  $("#radio_chart_shortage").on('click', function () {
    if (update == 0) {
      chartData = GetChartData(cbsa, 2);
      drawChart(chartData[1], chartData[0], 'Shortage by occupation', 2);
    }
  });
  $("#navInst").on('click', function () {

    tab_inst = 1;
    tab_cert = 0;
    $("#tbl_cbsa").hide();
    if (update == 0) {
      $("#tbl_inst").show();
      displayInst(inst);
    } else {
      if (val_ratio != "2") {
        $('#tbl_cbsa').hide();
        $('#tbl_cbsa_noshortage').hide();
        $("#tbl_inst_noshortage").hide();
        $("#tbl_inst").show();
        displayInst(inst_subset);
      } else if (val_ratio == "2") {
        $('#tbl_cbsa').hide();
        $('#tbl_cbsa_noshortage').hide();
        $("#tbl_inst").hide();
        $("#tbl_inst_noshortage").show();
        displayInst(inst_subset, showcolumns = noshortageinst, div = '#table-inst-noshortage');
      }
    }
  });
  $("#navCBSA").on('click', function () {
    tab_cert = 1;
    tab_inst = 0;
    $("#tbl_inst").hide();
    if (update == 0) {
      $('#tbl_cbsa').show();
      displayCBSA(cbsa);
    } else {
      if (val_ratio != "2") {
        $('#tbl_cbsa_noshortage').hide();
        $("#tbl_inst_shortage").hide();
        $("#tbl_inst_noshortage").hide();
        $('#tbl_cbsa').show();
        displayCBSA(cbsa_subset);
      } else if (val_ratio == "2") {
        $('#tbl_cbsa').hide();
        $("#tbl_inst_shortage").hide();
        $("#tbl_inst_noshortage").hide();
        $('#tbl_cbsa_noshortage').show();
        displayCBSA(cbsa_subset, showcolumns = noshortageCBSA, div = '#table-cbsa-noshortage');
      }
    }
  });

  $("#list_cbsa input:checkbox").change(function () {
    if ($(this).val() == 0) {
      // console.log('All CBSA is changed');
      if (!$(this).prop('checked')) {
        $("#list_cbsa input:checkbox").prop('checked', false);
      }
      else if ($(this).prop('checked')) {
        $("#list_cbsa input:checkbox").prop('checked', true);
      }
    } else {
      // console.log('Other CBSA is changed');
      $("#chk_cbsa_0").prop('checked', false);
    }
  });
  $("#list_occ input:checkbox").change(function () {
    if ($(this).val() == 0) {
      // console.log('All occ is changed');
      if (!$(this).prop('checked')) {
        $("#list_occ input:checkbox").prop('checked', false);
      }
      else if ($(this).prop('checked')) {
        $("#list_occ input:checkbox").prop('checked', true);
      }
    } else {
      // console.log('Other occ is changed');
      $("#chk_occ_0").prop('checked', false);
    }
  });

  // $("#chk_cbsa_0").change(function () {
  //   if (!$(this).prop('checked')) {
  //     $("#list_cbsa input:checkbox").prop('checked', false);
  //   }
  //   else if ($(this).prop('checked')) {
  //     $("#list_cbsa input:checkbox").prop('checked', true);
  //   }
  // });
  // $("#chk_occ_0").change(function () {
  //   if (!$(this).prop('checked')) {
  //     $("#list_occ input:checkbox").prop('checked', false);
  //   }
  //   else if ($(this).prop('checked')) {
  //     $("#list_occ input:checkbox").prop('checked', true);
  //   }
  // });

  $("#btn_update").on("click", function () {
    update = 1;
    // $(".spinner-border").show();
    // console.log($(this).text());
    // Check status of radio button
    $("input[type=radio]:checked").each(function () {
      // console.log($(this).val());
      val_ratio = $(this).val();
    });

    // Get occupation clusters
    var occ_values = [];
    $("#list_occ input[type=checkbox]:checked").each(function () {
      // TODO: This is temporary: until the text in the data is changed
      // var occ_text;
      // switch ($(this).val()) {
      //   case "1": occ_text = "mgmt"; break;
      //   case "2": occ_text = "stem"; break;
      //   case "3": occ_text = "prsn"; break;
      //   case "4": occ_text = "blue"; break;
      //   case "5": occ_text = "health"; break;
      // };
      // occ_values.push(occ_text);
      occ_values.push($(this).next('label').text());
    });
    // console.log(occ_values);

    // Get CBSAs
    var cbsa_values = [];
    $("#list_cbsa input[type=checkbox]:checked").each(function () {
      cbsa_values.push($(this).next('label').text());
    });
    // var cbsa_subset = cbsa.filter(function (item) {
    //   return cbsa_values.includes(item.cbsa_name) && occ_values.includes(item.Occ);
    // })
    cbsa_subset = cbsa.filter(item => cbsa_values.includes(item.cbsa_name)).filter(item => occ_values.includes(item.Occ));
    if (val_ratio == "0") {
      // console.log(cbsa_subset);
    }
    else if (val_ratio == "1") {
      cbsa_subset = cbsa_subset.filter(function (item) {
        return item.ratio < 1;
      })
    }
    else if (val_ratio == "2") {
      cbsa_subset = cbsa_subset.filter(function (item) {
        return item.ratio >= 1;
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
    // inst_subset = inst;
    // console.log(inst_subset);

    displayCBSA(cbsa_subset);
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
      displayCBSA(cbsa_subset, showcolumns = noshortageCBSA, div = '#table-cbsa-noshortage');
    } else if (val_ratio != "2" && tab_inst == 1) {
      $('#tbl_cbsa').hide();
      $('#tbl_cbsa_noshortage').hide();
      $("#tbl_inst_noshortage").hide();
      $("#tbl_inst").show();
      displayInst(inst_subset);
    } else if (val_ratio == "2" && tab_inst == 1) {
      $('#tbl_cbsa').hide();
      $('#tbl_cbsa_noshortage').hide();
      $("#tbl_inst").hide();
      $("#tbl_inst_noshortage").show();
      displayInst(inst_subset, showcolumns = noshortageinst, div = '#table-inst-noshortage');
    }
    // if (val_ratio != "2") {
    //   if (tab_cert == 1) {
    //     displayCBSA(cbsa_subset);
    //   }
    //   else if (tab_inst == 1) {
    //     displayInst(cbsa_subset);
    //   }
    // } else {
    //   if (tab_cert == 1) {
    //     $('#tbl_cbsa').hide();
    //     $('#tbl_cbsa_noshortage').show();
    //     displayCBSA(cbsa_subset, showcolumns = noshortageCBSA, div = '#table-cbsa-noshortage');
    //   }
    //   else if (tab_inst == 1) {
    //     inst_subset = inst_subset.filter(function (item) {
    //       return item.inc1 > 0 & item.inc2 > 0;
    //     });
    //     $('#tbl_inst').hide();
    //     $('#tbl_inst_noshortage').show();
    //     displayInst(inst_subset, showcolumns = noshortageInst, div = '#table-inst-noshortage');
    //   }
    // };
    // Possibly update chart
    // var chartsubData = GetChartData(cbsa_subset, 1);

    // var forChart = chartsubData[1].filter(obj => {
    //   var value = obj.data;
    //   return Array.isArray(value) && value.length > 0;
    // });
    // updateChart = [chartsubData[0], forChart];
  });
});
