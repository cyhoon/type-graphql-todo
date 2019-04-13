import Server from './server';

(async () => {
  try {
    const app = new Server();
    await app.runServer();

    console.log('Success to execute server');
  } catch (error) {
    console.log('Fail to execute server');
  }
})();
