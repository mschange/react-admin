const menuList = [
  {
    title: '首页',
    key: '/home'
  },
  {
    title: '新闻',
    key: '/news',
    children: [
      {
          title: '列表页',
          key: '/news/list',
      }
    ]
  }
];
export default menuList;