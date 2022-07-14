import express from 'express';
import { createProduct, getProducts, getByProductId, getSearchList, createContact} from '../controllers/productList.js';
const router = express.Router();

// http://localhost:5000/posts

router.post('/', createProduct);
router.get('/',getProducts);
router.get('/:id', getByProductId);
router.get('/search', getSearchList);
router.post('/contactUs',createContact)

export default router;