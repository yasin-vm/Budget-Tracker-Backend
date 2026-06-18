import express from 'express'
import { login, signup, getProfile, updateProfile } from '../controllers/userController.js'
import {
  addTransaction,
  getTransactions,
  deleteTransaction,
  updateTransaction
} from "../controllers/transactionController.js";
const router = express.Router()


router.post('/signup', signup)
router.post('/login', login)
router.get('/profile', getProfile)
router.put('/profile', updateProfile)
router.post('/transaction', addTransaction);
router.get('/transaction/:userId', getTransactions);
router.delete(
  '/transaction/:id',
  deleteTransaction
);
router.put(
  '/transaction/:id',
  updateTransaction
);
export default router;