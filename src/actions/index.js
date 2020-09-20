export const getResultCount = (getCount) => (dispatch) => {
  dispatch({
    type: 'TOPLAM_VERİ_SAYISINI_GETİR',
    payload: getCount,
  });
};
export const getCurrentPage = (getPage) => (dispatch) => {
  dispatch({
    type: 'ŞİMDİKİ_SAYFAYI_GETİR',
    payload: getPage,
  });
};
export const getData = (getData) => (dispatch) => {
  dispatch({
    type: 'VERİ_GETİR',
    payload: getData,
  });
};
export const getLoading = (getLoading) => (dispatch) => {
  dispatch({
    type: 'YÜKLEME_OLUYOR_MU',
    payload: getLoading,
  });
};
export const getError= (getError)=>(dispatch)=>{
  dispatch({
    type:"HATA",
    payload:getError
  });
}
export const getPostId = (getPostId) => (dispatch) => {
  dispatch({
    type: 'POST_IMDB_ID',
    payload: getPostId,
  });
};