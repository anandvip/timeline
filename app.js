let
getEle,
query,

createDate,leDate,
datum,datumN,
footerCreated,docEdited,
effortSpan,
projectStartDate,ongoingProjDate;


//Date footer

 datum    = new Date('28 March 2021'); //The day thought was captured
datumN    = new Date('06 June 2021');//Latest Edit

getEle    = (id) => document.getElementById(id);
 query    = (selector) => document.querySelectorAll(selector);

footerCreated = () => 
{
    effortSpan              = getEle('effortSpan');
    createDate              = getEle('createDate');
    leDate                  = getEle('leDate');
    projectStartDate        = new Date('28 March 2021');
    ongoingProjDate         = new Date();
    createDate.innerHTML    = `Started on: ${datum.toDateString()}`;
    leDate.innerHTML        = `Last edit: ${datumN.toDateString()}`;
    effortSpan.innerHTML    = `Year: ${projectStartDate.getFullYear()} - ${ongoingProjDate.getFullYear()}`;
    return effortSpan, createDate, leDate, projectStartDate, ongoingProjDate;
}

//DOM load complete
if (document.readyState === 'complete') {
    document.addEventListener('DOMContentLoaded', footerCreated);
}else{
    footerCreated();
}