import { Router } from 'express';
import { envs } from './config';
import { Server } from './presentation/server';
import { AppRoutes } from './presentation/routes';

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
