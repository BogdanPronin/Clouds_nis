import { Router } from 'express';
import * as tableController from './controllers/tableController';
import * as cupboardController from './controllers/cupboardController';
import * as chairController from './controllers/chairController';

const router = Router();

router.get('/tables/:id', tableController.getTableById);
router.get('/tables/', tableController.getAllTables);
router.post('/tables/', tableController.createTable);
router.put('/tables/:id', tableController.updateTable);
router.delete('/tables/:id', tableController.deleteTable);

router.get('/cupboard:id', cupboardController.getCupboardById);
router.get('/cupboard/', cupboardController.getAllCupboards);
router.post('/cupboard/', cupboardController.createCupboard);
router.put('/cupboard/:id', cupboardController.updateCupboard);
router.delete('/cupboard/:id', cupboardController.deleteCupboard);

router.get('/chairs/:id', chairController.getChairById);
router.get('/chairs/', chairController.getAllChairs);
router.post('/chairs/', chairController.createChair);
router.put('/chairs/:id', chairController.updateChair);
router.delete('/chairs/:id', chairController.deleteChair);


export default router;
