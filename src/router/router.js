import express from 'express'
import contactUs from '../controller/contactUs.js'

const router = express.Router()

router.post('/contact', contactUs.contactUs)

export default router;
