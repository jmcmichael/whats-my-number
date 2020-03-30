// REPORT
import 'datatables.net-bs4';
// import 'datatables.net-dt/css/jquery.dataTables.css';

function generate(data, targets) {
  if($(targets.report.validation).length) { console.log('--- found report target'); }
  else { console.error('--- could not find report target'); return; }

  var headerTarget = targets.report.datatable + ' thead tr:last';
  var bodyTarget = targets.report.datatable + ' tbody:last';

  const keys = Object.keys(data.final[0]);

  $.each(keys, (i, key) => {
    if(key !== 'reaction' && key != 'timestamp') {$(headerTarget).append('<th>' + key + '</th>');}
  });
  $.each(data.final, (i, row) => {
    $(bodyTarget).append('<tr></tr>');
    var html = '';
    keys.forEach((key) => {
      if(key !== 'reaction' && key !== 'timestamp') {
        html += '<td>' + row[key] + '</td>';
        $(bodyTarget + ' tr:last').html(html);
      }
    });
  });
}

export default {
  generate: generate
};
