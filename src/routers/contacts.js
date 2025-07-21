import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  getContactController,
  patchContactController,
  upsertContactController,
} from '../controllers/controller.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middleware/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import { isValidId } from '../middleware/isValidId.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getContactController));
router.get('/contacts/:contactId',
  isValidId,
   ctrlWrapper(getContactByIdController));
router.post(
  '/contacts',
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);
router.delete('/contacts/:contactId',
  isValidId,
  ctrlWrapper(deleteContactController));
router.put(
  '/contacts/:contactId',
  isValidId,
  validateBody(createContactSchema),
  ctrlWrapper(upsertContactController),
);
router.patch(
  '/contacts/:contactId',
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);

export default router;
