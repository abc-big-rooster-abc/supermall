import {request} from './request'

export function getHomeMultiData() {
  return request({
    // url:'/test/getBanners'
    url: 'home/multidata'
    // url:'/home/getBanners'

  });
}

export function getGoodsData(type, page) {
  return request({
    // url:'/test/getGoods',
    url:'/home/data',
    params:{
      type,
      page
    }
  });
}
