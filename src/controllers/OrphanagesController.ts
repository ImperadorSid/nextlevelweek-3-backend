import { getRepository } from 'typeorm';
import { Request, Response, Express } from 'express';
import Orphanage from '../models/Orphanage';

export default {
  async index(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanage);

    const orphanages = await orphanagesRepository.find();

    response.status(200).json(orphanages);
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = await orphanagesRepository.findOneOrFail(id);

    response.status(200).json(orphanage);
  },

  async create(request: Request, response: Response) {
    /* eslint-disable camelcase */
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      openingHours,
      openOnWeekends,
    } = request.body;
    /* eslint-enable */

    const orphanagesRepository = getRepository(Orphanage);

    const requestedImages = request.files as Express.Multer.File[];
    const images = requestedImages.map((image) => ({ path: image.filename }));

    const orphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      openingHours,
      openOnWeekends,
      images,
    });
    await orphanagesRepository.save(orphanage);

    response.status(201).json(orphanage);
  },
};
