import Koa from 'koa';
import router from 'koa-simple-router';
import render from 'koa-swig';
import serve from 'koa-static';
import co from 'co';
import babel_co from 'babel-core/register';
import babel_po from 'babel-polyfill';
import CONFIG from './config/config';
import initController from './controller/initController';
const app = new Koa();
initController.init(app, router);
 
app.context.render = co.wrap(render({
  root: CONFIG.get('viewDir'),
  atuoescape: true,
  cache: 'memory',
  ext: 'html'
}));
app.use(serve(CONFIG.get('staticDir'))) 

app.listen(CONFIG.get('port'));

export default app;