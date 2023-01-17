document.addEventListener('DOMContentLoaded', function () {
    // navabar initialization
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // datepicker init
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmm, yyyy",
        i18n: {
            done: "Select"
        }
    });

    //collapsable init
    let collapsables = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsables);


    // select init
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
});