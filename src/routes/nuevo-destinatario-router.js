import routerx from 'express-promise-router';
import DestinatarioController from '../controllers/destinatarioController.js';

const router = routerx();

router.post('/add', DestinatarioController.add);
router.get('/find-account-by-rut-or-name', DestinatarioController.findAccountByRutOrName);
router.post('/transfer-to', DestinatarioController.transferTo);
router.get('/getAllAddressee', DestinatarioController.getAllAddressee);

export default router;
