import {Response} from 'express';
import {Request} from '../../@types';
import {ClassService} from '../../services/class.service';
import {QueryParams} from '../../@types/query-params';
import {UserRoles} from '../../utils/enums';
import {ForbiddenException} from '../../utils';

export class ClassManagementController {
  private static readonly ClassService = new ClassService();

  public static async findAll(req: Request, res: Response) {
    const data = await ClassManagementController.ClassService.findAll(
      req.query as unknown as QueryParams,
      req.user._id as any
    );
    res.json(data);
  }

  public static async findById(req: Request, res: Response) {
    const data = await ClassManagementController.ClassService.getById(
      req.params.id,
      req.user._id as any
    );
    res.json(data);
  }

  public static async updateById(req: Request, res: Response) {
    const data = await ClassManagementController.ClassService.updateById(
      req.params.id,
      req.body,
      req.user._id as any
    );
    res.json(data);
  }

  public static async create(req: Request, res: Response) {
    console.log(req.user);

    if (req.user.role !== UserRoles.ADMIN)
      throw new ForbiddenException('Resource is not accessable');
    const data = await ClassManagementController.ClassService.create(
      req.body,
      req.user._id as any
    );
    res.json(data);
  }
}
