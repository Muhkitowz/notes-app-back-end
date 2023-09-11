// eslint-disable-next-line max-len
// instal nodemon untuk tidak perlu menjalankan server ulang hanya dgn save maka akan menjalankan langsung servernya
// Instal eslint untuk mengevaluasi kode yang dituliskan berdasarkan aturan yang anda terapkan.
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
