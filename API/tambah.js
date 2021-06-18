export const API_mahasiswa = async (e) => {
  let dataReturn;
  let formdata = new FormData();

  formdata.append("nobp", e.nobp)
  formdata.append("nama", e.nama)
  formdata.append("jurusan", e.jurusan)
  formdata.append("alamat", e.alamat)
  formdata.append("hp", e.hp)

  let respond = await fetch("http://192.168.43.107/APLIKASIBELAJAR/", {
    method: "POST",
    headers: { 'Content-Type': "multipart/form-data" },
    body: formdata,
  }).then(response => response.json()).then(responseJson => {
    return responseJson
  }).catch(error => {
    return error
  });
  dataReturn = respond;
  return dataReturn;
}