export const getResultCount = (getCount)  => {
  return({
    type: 'TOPLAM_VERİ_SAYISINI_GETİR',
    payload: getCount,
  });
};
export const getCurrentPage = (getPage)=> {
  return({
    type: 'ŞİMDİKİ_SAYFAYI_GETİR',
    payload: getPage,
  });
};
export const getData = (getData)  => {
  return({
    type: 'VERİ_GETİR',
    payload: getData,
  });
};
export const getLoading = (getLoading) => {
  return({
    type: 'YÜKLEME_OLUYOR_MU',
    payload: getLoading,
  });
};
export const getError= (getError)=>{
  return({
    type:"HATA",
    payload:getError
  });
}
export const getPostId = (getPostId) => {
  return({
    type: 'POST_IMDB_ID',
    payload: getPostId,
  });
};