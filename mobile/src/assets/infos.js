export default {
  tasks: [
    {
      id: 1,
      time: '13:00',
      titulo: 'Compras do mês',
      categoria: 'casa',
      task: [{ titulo: 'comprar arroz' }, { titulo: 'comprar feijão' }],
    },
    { id: 2, time: '14:00', titulo: 'Tarefa 1', categoria: 'trabalho' },
    { id: 3, time: '15:00', titulo: 'Tarefa 2', categoria: 'trabalho' },
    { id: 4, time: '16:00', titulo: 'Tarefa 3', categoria: 'trabalho' },
    { id: 5, time: '17:00', titulo: 'Tarefa 4', categoria: 'trabalho' },
    { id: 6, time: '18:00', titulo: 'Dormir', categoria: 'descanso' },
    { id: 7, time: '19:00', titulo: 'Aula 1', categoria: 'faculdade' },
  ],
  slide: [
    { photo: 'http://lorempixel.com/400/200/sports/1/Dummy-Text/', title: 'Netflix', value: 1500 },
    { photo: 'http://lorempixel.com/400/200/nature/1/Dummy-Text/', title: 'Amazon Prime Video', value: 750 },
    { photo: 'http://lorempixel.com/400/200/food/2/Dummy-Text/', title: 'McDonalds', value: 5000 }
  ],
  discount: [
    { card: 'https://meups.com.br/wp-content/uploads/2020/05/The-Last-of-Us-2.jpg', discount: '10% OFF' },
    { card: 'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_1280x720_V04-1280x720-31e7e0e50fda38709553f5313027ba5b76bd10b6.jpg', discount: 'FREE' },
    { card: 'https://media.playstation.com/is/image/SCEA/marvels-spider-man-screen-02-ps4-us-12jun17?$native_nt$', discount: '5% OFF' }
  ]
};
