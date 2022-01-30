
import routerx from 'express-promise-router';
import destinatarioRouter from './nuevo-destinatario-router';

const router = routerx();

router.use('/home', destinatarioRouter);

export default router;
