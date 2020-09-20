const INITIAL_STATE = {
  totalPost: 1,
  currentPage:1,
  data:[],
  loading:true,
  error:true,
  postId:1,
};
export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOPLAM_VERİ_SAYISINI_GETİR':
      return { ...state, totalPost: action.payload };
    case 'ŞİMDİKİ_SAYFAYI_GETİR':
      return { ...state, currentPage: action.payload };
    case 'VERİ_GETİR':
      return { ...state, data: action.payload };
    case 'YÜKLEME_OLUYOR_MU':
      return { ...state, loading: action.payload };
    case 'HATA':
      return { ...state, error: action.payload };
    case 'POST_IMDB_ID':
      return { ...state, postId: action.payload };
    default:
      return state;
  }
};
 
