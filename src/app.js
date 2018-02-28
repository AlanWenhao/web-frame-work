import Koa from 'koa';
import path from 'path';
import render from 'koa-swig';
import co from 'co';
import server from 'koa-static';
import router from 'koa-simple-router';

const app = new Koa();

app.context.render = co.wrap(render({
    root: path.join(__dirname, 'views'),
    autoescape: true,
    ext: 'html',
}));

app.use(server(path.join(__dirname, 'public')));

app.use(router((_) => {
    // eslint-disable-next-line no-unused-vars
    _.get('/', async (ctx, next) => {
        ctx.body = await ctx.render('index.html', {
            title: '陈旭峰牛逼',
        });
    });
    // eslint-disable-next-line no-unused-vars
    _.get('/page', async (ctx, next) => {
        ctx.body = await ctx.render('page.html', {
            title: '张文浩牛逼',
        });
    });
}));

// eslint-disable-next-line no-return-assign
// app.use(async ctx => ctx.body = await ctx.render('layout'));


app.listen(3000);
