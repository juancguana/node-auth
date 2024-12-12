import { envs } from './config';
import { Server } from './server';
import { AppRoutes } from './routes';

(() => {
  main();
})();

async function main() {
  console.log('main');
  new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  }).start();
}
