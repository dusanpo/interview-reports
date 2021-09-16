const getDate = (date) => {
    let dat = new Date(date);
    let month = dat.getMonth() + 1;
    let fullYear = dat.getFullYear();
    let day = dat.getDate();
    return `${day}-${month}-${fullYear}`;
  }
  export default getDate;
